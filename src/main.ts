import { EditorPosition, KeymapContext, Plugin, TFile, } from "obsidian";

import { ToDoMDSettings, DEFAULT_SETTINGS } from "./settings";
import ToDoMDSettingsTab from "./settings_tab";
import { EditorView, ViewUpdate } from "@codemirror/view";
import SuggestionPopup, { SelectionDirection } from "./suggestors/popup";
//import { markerStateField } from "./suggestors/marker_state_field";
import { posFromIndex } from "./suggestors/editor_helpers";
import { ToDo } from "./suggestors/todo_provider";
import { SuggestorCommands } from "./suggestors/commands"

import { TasksEvents } from './TasksEvents';
import { Cache } from './caching/Cache';

import { QueryRenderer } from "./query/query-renderer";

export default class ToDoMDPlugin extends Plugin {    
    settings: ToDoMDSettings;
// suggestor
    public _suggestionPopup: SuggestionPopup;
//caching
    private cache: Cache | undefined;
// Rendering
    //public inlineRenderer: InlineRenderer | undefined;
    public queryRenderer: QueryRenderer | undefined;

    async onload(){

        await this.loadSettings();
// suggestor 
        this._suggestionPopup = new SuggestionPopup(this.app, this.settings);

        this.registerEditorSuggest(this._suggestionPopup);

        this.registerEvent(this.app.workspace.on('file-open', this.onFileOpened, this));

        //this.registerEditorExtension(markerStateField);
        this.registerEditorExtension(EditorView.updateListener.of(new CursorActivityListener(this._suggestionPopup).listener));

        this.addSettingTab(new ToDoMDSettingsTab(this.app, this));
        new SuggestorCommands({ plugin: this });
        
        this.setupCommands();
// Caching:
        const events = new TasksEvents({ obsidianEvents: this.app.workspace });
        this.cache = new Cache({
                    metadataCache: this.app.metadataCache,
                    vault: this.app.vault,
                    events,
                });

        if ((this.app.vault as any).config?.legacyEditor) {
            console.log("ToDoMD: Without Live Preview enabled, most features of ToDoMD will not work properly!");
        }
// Rendering
    this.queryRenderer = new QueryRenderer({ plugin: this, events });

    }

    private setupCommands() {
        // This replaces the default handler for commands. This is needed because the default handler always consumes
        // the event if the command exists.
        const app = this.app as any;
        app.scope.keys = [];

        const isHotkeyMatch = (hotkey: any, context: KeymapContext, isBypassCommand: boolean): boolean => {
            //Copied from original isMatch function, modified to not require exactly the same modifiers for
            // ToDoMD-bypass commands. This allows triggering for example Ctrl+Enter even when
            // pressing Ctrl+Shift+Enter. The additional modifier is then passed to the editor.

            /* Original isMatch function:
            var n = e.modifiers
                , i = e.key;
            return (null === n || n === t.modifiers) && (!i || (i === t.vkey || !(!t.key || i.toLowerCase() !== t.key.toLowerCase())))
            */

            const modifiers = hotkey.modifiers, key = hotkey.key;
            if (modifiers !== null && (isBypassCommand ? !context.modifiers.contains(modifiers) : modifiers !== context.modifiers))
                return false;
            return (!key || (key === context.vkey || !(!context.key || key.toLowerCase() !== context.key.toLowerCase())))
        }
        this.app.scope.register(null, null, (e: KeyboardEvent, t: KeymapContext) => {
            const hotkeyManager = app.hotkeyManager;
            hotkeyManager.bake();
            for (let bakedHotkeys = hotkeyManager.bakedHotkeys, bakedIds = hotkeyManager.bakedIds, r = 0; r < bakedHotkeys.length; r++) {
                const hotkey = bakedHotkeys[r];
                const id = bakedIds[r];
                const command = app.commands.findCommand(id);
                const isBypassCommand = command?.isBypassCommand?.();
                if (isHotkeyMatch(hotkey, t, isBypassCommand)) {
                    // Condition taken from original function
                    if (!command || (e.repeat && !command.repeatable)) {
                        continue;
                    } else if (command.isVisible && !command.isVisible()) {
                        //HACK: Hide our commands when to popup is not visible to allow the keybinds to execute their default action.
                        continue;
                    } else if (isBypassCommand) {
                        this._suggestionPopup.close();

                        const validMods = t.modifiers.replace(new RegExp(`${hotkey.modifiers},*`), "").split(",");
                        //Sends the event again, only keeping the modifiers which didn't activate this command
                        const event = new KeyboardEvent("keydown", {
                            key: hotkeyManager.defaultKeys[id][0].key,
                            ctrlKey: validMods.contains("Ctrl"),
                            shiftKey: validMods.contains("Shift"),
                            altKey: validMods.contains("Alt"),
                            metaKey: validMods.contains("Meta")
                        });
                        e.target.dispatchEvent(event);
                        return false;
                    }

                    if (app.commands.executeCommandById(id))
                        return false
                }
            }
        });

    }    

    async onunload() {
    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());  
        ToDo.loadToDoFields(this.app.vault);
    }

    get suggestionPopup() {
        return this._suggestionPopup;
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }

    private readonly onFileOpened = (file: TFile) => {
        if (!this.settings.fileScannerProviderEnabled || !this.settings.fileScannerScanCurrent || !file)
            return;
    }
}

class CursorActivityListener {

    private readonly suggestionPopup: SuggestionPopup;

    private cursorTriggeredByChange = false;
    private lastCursorLine = -1;

    constructor(suggestionPopup: SuggestionPopup) {
        this.suggestionPopup = suggestionPopup;
    }

    readonly listener = (update: ViewUpdate) => {
        if (update.docChanged) {
            this.handleDocChange();
        }

        if (update.selectionSet) {
            this.handleCursorActivity(posFromIndex(update.state.doc, update.state.selection.main.head))
        }
    };

    private readonly handleDocChange = () => {
        this.cursorTriggeredByChange = true;
    };

    private readonly handleCursorActivity = (cursor: EditorPosition) => {
        // This prevents the popup from opening when switching to the previous line
        const didChangeLine = this.lastCursorLine != cursor.line;
        if (didChangeLine)
            this.suggestionPopup.preventNextTrigger();
        this.lastCursorLine = cursor.line;

        // Prevents the suggestion popup from flickering when typing
        if (this.cursorTriggeredByChange) {
            this.cursorTriggeredByChange = false;
            if (!didChangeLine)
                return;
        }

        this.suggestionPopup.close();
    };
}
