import { App,  MarkdownRenderChild, Plugin } from 'obsidian';
import type { EventRef, MarkdownPostProcessorContext } from 'obsidian';
import obsidian_ToDo from 'src/todos/obsidian-todo';
import { State } from '../caching/Cache';
import { obsidian_ToDo_Events } from 'src/events/obsidian_ToDo_Events';



export class QueryRenderer {
    private readonly app: App;
    private readonly events: obsidian_ToDo_Events;

    constructor({ plugin, events }: { plugin: Plugin; events: obsidian_ToDo_Events }) {
        this.app = plugin.app;
        this.events = events;

        plugin.registerMarkdownCodeBlockProcessor('todos',this._addQueryRenderChild.bind(this));
    }
    public addQueryRenderChild = this._addQueryRenderChild.bind(this);

    private async _addQueryRenderChild(source: string, element: HTMLElement, context: MarkdownPostProcessorContext) {
        context.addChild(
            new QueryRenderChild({
                app: this.app,
                events: this.events,
                container: element,
                source,
                filePath: context.sourcePath,
            }),
        );
    } 
}

class QueryRenderChild extends MarkdownRenderChild {
    private readonly app: App;
    private readonly events: obsidian_ToDo_Events;
    private readonly source: string;    
    private queryType: string;
    /// The path of the file that contains the instruction block.
    private readonly filePath: string;
    private renderEventRef: EventRef | undefined;
    private queryReloadTimeout: any;
    constructor({
        app,
        events,
        container,
        source,
        filePath,
    }: {
        app: App;
        events: obsidian_ToDo_Events;
        container: HTMLElement;
        source: string;
        filePath: string;
    }) {
        super(container);

        this.app = app;
        this.events = events;
        this.source = source;
        this.filePath = filePath;

        // The engine is chosen on the basis of the code block language. Currently
        // there is only the main engine for the plugin, this allows others to be
        // added later.
        //this.query = getQueryForQueryRenderer(this.source, GlobalQuery.getInstance(), this.filePath);
        this.queryType = 'todos';
    }

    onload() {
        // Process the current cache state:
        this.events.triggerRequestCacheUpdate(this.render.bind(this));
        // Listen to future cache changes:
        this.renderEventRef = this.events.onCacheUpdate(this.render.bind(this));

        this.reloadQueryAtMidnight();
        console.log("Loaded Renderer");
    }

    onunload() {
        if (this.renderEventRef !== undefined) {
            this.events.off(this.renderEventRef);
        }

        if (this.queryReloadTimeout !== undefined) {
            clearTimeout(this.queryReloadTimeout);
        }
    }

    private async render({ todos, state }: { todos: obsidian_ToDo[]; state: State }) {
        console.log("render: ", todos)
        if (todos == undefined)
            console.error("Undefined List of ToDos: ", todos)

        const el = this.containerEl;
        const table = el.createEl("table");
        const body = table.createEl("tbody");
        for (let i=0;i<todos.length;i++){
            const row = body.createEl("tr");
            row.createEl("td", { text: todos[i].location.path });
            row.createEl("td", { text: todos[i].name });
        }

    }
    /**
     * Reloads the query after midnight to update results from relative date queries.
     *
     * For example, the query `due today` changes every day. This makes sure that all query results
     * are re-rendered after midnight every day to ensure up-to-date results without having to
     * reload obsidian. Creating a new query object from the source re-applies the relative dates
     * to "now".
     */
    private reloadQueryAtMidnight(): void {
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        const now = new Date();

        const millisecondsToMidnight = midnight.getTime() - now.getTime();

        this.queryReloadTimeout = setTimeout(() => {
            //this.query = getQueryForQueryRenderer(this.source, GlobalQuery.getInstance(), this.filePath);
            // Process the current cache state:
            this.events.triggerRequestCacheUpdate(this.render.bind(this));
            this.reloadQueryAtMidnight();
        }, millisecondsToMidnight + 1000); // Add buffer to be sure to run after midnight.
    }

}