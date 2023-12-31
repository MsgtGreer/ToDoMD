import { Suggestion} from "./provider";
import { ToDo } from "./todo_provider";
import {
    App,
    Editor,
    EditorPosition,
    EditorSuggest,
    EditorSuggestContext,
    EditorSuggestTriggerInfo,
    getIcon,
    TFile
} from "obsidian";
import { ToDoMDSettings } from "../settings/settings";
import { matchWordBackwards } from "./editor_helpers";


export default class SuggestionPopup extends EditorSuggest<Suggestion> {
    /**
     * Hacky variable to prevent the suggestion window from immediately re-opening after completing a suggestion
     */
    private justClosed: boolean;
    private separatorChar: string;

    private characterRegex: string;
    private compiledCharacterRegex: RegExp;
    private focused = false;

    private readonly settings: ToDoMDSettings;

    constructor(app: App, settings: ToDoMDSettings) {
        super(app);
        
        this.settings = settings;

        //Remove default key registrations
        const self = this as any;
        self.scope.keys = [];
    }

    open() {
        console.log("Opening")
        super.open();
        this.focused = this.settings.autoFocus;

        if (!this.focused) {
            for (const c of (this as any).suggestions.containerEl.children)
                c.removeClass("is-selected");
        }
    }

    close() {
        super.close();
        this.focused = false;
    }

    getSuggestions(
        context: EditorSuggestContext
    ): Suggestion[] | Promise<Suggestion[]> {
        //console.log("Get suggestions")
        let suggestions: Suggestion[] = [];

        suggestions = ToDo.getSuggestions({...context, separatorChar: this.separatorChar}, this.settings);
        //console.log(suggestions)
        const seen = new Set<string>();
        suggestions = suggestions.filter((suggestion) => {
            if (seen.has(suggestion.displayName))
                return false;

            seen.add(suggestion.displayName);
            return true;
        });
        
        return suggestions.length === 0 ? null : suggestions;
    }

    onTrigger(cursor: EditorPosition, editor: Editor, file: TFile): EditorSuggestTriggerInfo | null {
        return this.internalOnTrigger(editor, cursor, !file);
    }

    private internalOnTrigger(editor: Editor, cursor: EditorPosition, manualTrigger: boolean): EditorSuggestTriggerInfo | null {
        if (this.justClosed) {
            this.justClosed = false;
            return null;
        }

        if (!this.settings.autoTrigger && !manualTrigger) {
            this.close();
            return null;
        }
        // if this line is a todo, return the trigger info:
         
        const {
            query,
            separatorChar
        } = matchWordBackwards(editor, cursor, (char) => this.getCharacterRegex().test(char), this.settings.maxLookBackDistance);
        this.separatorChar = separatorChar;
        //console.log("Ran matchWordBackwords, got: ", query);
        return {
            start: {
                ...cursor,
                ch: cursor.ch - query.length,
            },
            end: cursor,
            query: query,
        };
    }

    renderSuggestion(value: Suggestion, el: HTMLElement): void {
        el.addClass("ToDoMD-suggestion-item");
        if (value.color != null) {
            el.style.setProperty("--ToDoMD-suggestion-color", value.color);
        }

        // Add the icon.
        if (value.icon != null) {
            const icon = getIcon(value.icon);
            if (icon != null) {
                icon.addClass("ToDoMD-suggestion-icon");
                el.appendChild(icon);
            }
        }

        // Add the text.
        const text = el.doc.createElement("div");
        text.addClass("ToDoMD-suggestion-text");
        text.setText(value.displayName);
        el.appendChild(text);
    }

    selectSuggestion(value: Suggestion, evt: MouseEvent | KeyboardEvent): void {
        const replacement = value.replacement;
        //console.log(value.overrideStart)
        const start = typeof value !== "string" && value.overrideStart ? value.overrideStart : this.context.start;
        
        const endPos = value.overrideEnd ?? this.context.end;
        this.context.editor.replaceRange(replacement, start, {
            ...endPos,
            ch: Math.min(endPos.ch, this.context.editor.getLine(endPos.line).length)
        });
        this.context.editor.setCursor({ ...start, ch: start.ch + replacement.length });

        this.close();
        this.justClosed = true;
    }

    selectNextItem(dir: SelectionDirection) {
        if (!this.focused) {
            this.focused = true;
            dir = dir === SelectionDirection.PREVIOUS ? dir : SelectionDirection.NONE;
        }

        const self = this as any;
        // HACK: The second parameter has to be an instance of KeyboardEvent to force scrolling the selected item into
        // view
        self.suggestions.setSelectedItem(self.suggestions.selectedItem + dir, new KeyboardEvent("keydown"));
    }

    getSelectedItem(): Suggestion {
        const self = this as any;
        return self.suggestions.values[self.suggestions.selectedItem];
    }

    applySelectedItem() {
        const self = this as any;
        self.suggestions.useSelectedItem();
    }

    isVisible(): boolean {
        return (this as any).isOpen;
    }

    isFocused(): boolean {
        return this.focused;
    }

    preventNextTrigger() {
        this.justClosed = true;
    }

    private getCharacterRegex(): RegExp {
        if (this.characterRegex !== this.settings.characterRegex)
            this.compiledCharacterRegex = new RegExp("[" + this.settings.characterRegex + "]", "u");

        return this.compiledCharacterRegex;
    }

}

export enum SelectionDirection {
    NEXT = 1,
    PREVIOUS = -1,
    NONE = 0,
}
