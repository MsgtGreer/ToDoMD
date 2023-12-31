import { MetadataCache, Notice, TAbstractFile, TFile, Vault } from 'obsidian';
import type { CachedMetadata, EventRef } from 'obsidian';
import type { HeadingCache, ListItemCache, SectionCache } from 'obsidian';
import { Mutex } from 'async-mutex';
import obsidian_ToDo from "../todos/obsidian-todo"
import type { obsidian_ToDo_Events } from '../events/obsidian_ToDo_Events';
import { ToDoLocation } from 'src/todos/todo_location';

export enum State {
    Cold = 'Cold',
    Initializing = 'Initializing',
    Warm = 'Warm',
}
export class Cache {
    private readonly metadataCache: MetadataCache;
    private readonly metadataCacheEventReferences: EventRef[];
    private readonly vault: Vault;
    private readonly vaultEventReferences: EventRef[];
    private readonly events: obsidian_ToDo_Events;
    private readonly eventsEventReferences: EventRef[];

    private readonly toDosMutex: Mutex;
    private state: State;
    private ToDos: obsidian_ToDo[];

    /**
     * We cannot know if this class will be instantiated because obsidian started
     * or because the plugin was activated later. This means we have to load the
     * whole vault once after the first metadata cache resolve to ensure that we
     * load the entire vault in case obsidian is starting up. In the case of
     * obsidian starting, the todo cache's initial load would end up with 0 todos,
     * as the metadata cache would still be empty.
     */
    private loadedAfterFirstResolve: boolean;

    constructor({ metadataCache, vault, events }: { metadataCache: MetadataCache; vault: Vault; events: obsidian_ToDo_Events }) {
        this.metadataCache = metadataCache;
        this.metadataCacheEventReferences = [];
        this.vault = vault;
        this.vaultEventReferences = [];
        this.events = events;
        this.eventsEventReferences = [];

        this.toDosMutex = new Mutex();
        this.state = State.Cold;
        this.ToDos = [];

        this.loadedAfterFirstResolve = false;

        this.subscribeToCache();
        this.subscribeToVault();
        this.subscribeToEvents();

        this.loadVault();
    }

    public unload(): void {
        for (const eventReference of this.metadataCacheEventReferences) {
            this.metadataCache.offref(eventReference);
        }

        for (const eventReference of this.vaultEventReferences) {
            this.vault.offref(eventReference);
        }

        for (const eventReference of this.eventsEventReferences) {
            this.events.off(eventReference);
        }
    }

    public getToDos(): obsidian_ToDo[] {
        return this.ToDos;
    }

    public getState(): State {
        return this.state;
    }

    private notifySubscribers(): void {
        this.events.triggerCacheUpdate({
            toDos: this.ToDos,
            state: this.state,
        });
    }

    private subscribeToCache(): void {
        const resolvedEventeReference = this.metadataCache.on('resolved', async () => {
            // Resolved fires on every change.
            // We only want to initialize if we haven't already.
            if (!this.loadedAfterFirstResolve) {
                this.loadedAfterFirstResolve = true;
                this.loadVault();
            }
        });
        this.metadataCacheEventReferences.push(resolvedEventeReference);

        // Does not fire when starting up obsidian and only works for changes.
        const changedEventReference = this.metadataCache.on('changed', (file: TFile) => {
            this.toDosMutex.runExclusive(() => {
                this.indexFile(file);
            });
        });
        this.metadataCacheEventReferences.push(changedEventReference);
    }

    private subscribeToVault(): void {
        const createdEventReference = this.vault.on('create', (file: TAbstractFile) => {
            if (!(file instanceof TFile)) {
                return;
            }

            this.toDosMutex.runExclusive(() => {
                this.indexFile(file);
            });
        });
        this.vaultEventReferences.push(createdEventReference);

        const deletedEventReference = this.vault.on('delete', (file: TAbstractFile) => {
            if (!(file instanceof TFile)) {
                return;
            }

            this.toDosMutex.runExclusive(() => {
                this.ToDos = this.ToDos.filter((todo: obsidian_ToDo) => {
                    return todo.path !== file.path;
                });

                this.notifySubscribers();
            });
        });
        this.vaultEventReferences.push(deletedEventReference);

        const renamedEventReference = this.vault.on('rename', (file: TAbstractFile, oldPath: string) => {
            if (!(file instanceof TFile)) {
                return;
            }

            this.toDosMutex.runExclusive(() => {
                this.ToDos = this.ToDos.map((toDo: obsidian_ToDo): obsidian_ToDo => {
                    if (toDo.path === oldPath) {
                        return new obsidian_ToDo(
                            toDo.toDo,
                            toDo.location.fromRenamedFile(file.path)
                        );
                    } else {
                        return toDo;
                    }
                });

                this.notifySubscribers();
            });
        });
        this.vaultEventReferences.push(renamedEventReference);
    }

    private subscribeToEvents(): void {
        const requestReference = this.events.onRequestCacheUpdate((handler) => {
            handler({toDos: this.ToDos, state: this.state });
        });
        this.eventsEventReferences.push(requestReference);
    }

    private loadVault(): Promise<void> {
        return this.toDosMutex.runExclusive(async () => {
            this.state = State.Initializing;
            await Promise.all(
                this.vault.getMarkdownFiles().map((file: TFile) => {
                    return this.indexFile(file);
                }),
            );
            this.state = State.Warm;
            // Notify that the cache is now warm:
            this.notifySubscribers();
        });
    }

    private async indexFile(file: TFile): Promise<void> {
        const fileCache = this.metadataCache.getFileCache(file);
        if (fileCache === null || fileCache === undefined) {
            return;
        }

        const oldToDos = this.ToDos.filter((toDo: obsidian_ToDo) => {
            return toDo.path === file.path;
        });

        const listItems = fileCache.listItems;
        // When there is no list items cache, there are no todos.
        // Still continue to notify watchers of removal.

        let newToDos: obsidian_ToDo[] = [];
        if (listItems !== undefined) {
            // Only read the file and process for todos if there are list items.
            const fileContent = await this.vault.cachedRead(file);
            newToDos = this.getToDosFromFileContent(fileContent, listItems, fileCache, file);
        }

        // If there are no changes in any of the todos, there's nothing to do, so just return.
        if (obsidian_ToDo.toDoListsIdentical(oldToDos, newToDos)) {
            return;
        }
        // Remove all todos from this file from the cache before
        // adding the ones that are currently in the file.
        // The filter keeps only taks that are not from this file
        //console.log("Updating Cache: ", this.ToDos);
        this.ToDos = this.ToDos.filter((toDo: obsidian_ToDo) => {
            return toDo.path !== file.path;
        });

        this.ToDos.push(...newToDos);

        // All updated, inform our subscribers.
        this.notifySubscribers();
    }

    private getToDosFromFileContent(
        fileContent: string,
        listItems: ListItemCache[],
        fileCache: CachedMetadata,
        file: TFile,
    ): obsidian_ToDo[] {
        const toDos: obsidian_ToDo[] = [];
        const fileLines = fileContent.split('\n');
        const linesInFile = fileLines.length;

        // We want to store section information with every todo so
        // that we can use that when we post process the markdown
        // rendered lists.
        let currentSection: SectionCache | null = null;
        let sectionIndex = 0;
        for (const listItem of listItems) {
            if (listItem.task !== undefined) {
                const lineNumber = listItem.position.start.line;
                if (lineNumber >= linesInFile) {
                    /*
                        Obsidian CachedMetadata has told us that there is a todo on lineNumber, but there are
                        not that many lines in the file.

                        This was the underlying cause of all the 'Stuck on "Loading Tasks..."' messages,
                        as it resulted in the line 'undefined' being parsed.

                        Somehow the file had been shortened whilst Obsidian was closed, meaning that
                        when Obsidian started up, it got the new file content, but still had the old cached
                        data about locations of list items in the file.
                     */
                    console.log(
                        `${file.path} Obsidian gave us a line number ${lineNumber} past the end of the file. ${linesInFile}.`,
                    );
                    return toDos;
                }
                if (currentSection === null || currentSection.position.end.line < lineNumber) {
                    // We went past the current section (or this is the first todo).
                    // Find the section that is relevant for this todo and the following of the same section.
                    currentSection = Cache.getSection(lineNumber, fileCache.sections);
                    sectionIndex = 0;
                }

                if (currentSection === null) {
                    // Cannot process a todo without a section.
                    continue;
                }

                const line = fileLines[lineNumber];
                if (line === undefined) {
                    console.log(`${file.path}: line ${lineNumber} - ignoring 'undefined' line.`);
                    continue;
                }

                let toDo;
                try {
                    toDo = obsidian_ToDo.fromLine(
                        line,
                        new ToDoLocation(
                            file.path,
                            lineNumber,
                            currentSection.position.start.line,
                            sectionIndex,
                            Cache.getPrecedingHeader(lineNumber, fileCache.headings),
                        ));
                } catch (e) {
                    this.reportToDoParsingErrorToUser(e, file, listItem, line);
                    continue;
                }
                //console.log("just parsed: ", toDo, "with path ", toDo.path)
                if (toDo !== null) {
                    sectionIndex++;
                    toDos.push(toDo);
                }
            }
        }

        return toDos;
    }

    private reportToDoParsingErrorToUser(e: unknown, file: TFile, listItem: ListItemCache, line: string) {
        const msg = `There was an error reading one of the todos in this vault.
The following todo has been ignored, to prevent obsidian-ToDo queries getting stuck with 'Loading Tasks ...'
Error: ${e}
File: ${file.path}
Line number: ${listItem.position.start.line}
ToDo line: ${line}

The error popup will only be shown when obsidian-ToDo is starting up, but if the error persists,
it will be shown in the console every time this file is edited during the Obsidian
session.
`;
        console.error(msg);
        if (e instanceof Error) {
            console.error(e.stack);
        }
        if (this.state === State.Initializing) {
            new Notice(msg, 10000);
        }
    }

    private static getSection(lineNumberToDo: number, sections: SectionCache[] | undefined): SectionCache | null {
        if (sections === undefined) {
            return null;
        }

        for (const section of sections) {
            if (section.position.start.line <= lineNumberToDo && section.position.end.line >= lineNumberToDo) {
                return section;
            }
        }

        return null;
    }

    private static getPrecedingHeader(lineNumberToDo: number, headings: HeadingCache[] | undefined): string | null {
        if (headings === undefined) {
            return null;
        }

        let precedingHeader: string | null = null;

        for (const heading of headings) {
            if (heading.position.start.line > lineNumberToDo) {
                return precedingHeader;
            }
            precedingHeader = heading.heading;
        }
        return precedingHeader;
    }
}
