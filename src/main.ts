import {
    EditorPosition,
    MarkdownView,
    Plugin, TFile,
} from "obsidian";
import SnippetManager from "./snippet_manager";
import SuggestionPopup from "./popup";
import {CompletrSettings, DEFAULT_SETTINGS} from "./settings";
import {WordList} from "./provider/word_list_provider";
import {FileScanner} from "./provider/scanner_provider";
import CompletrSettingsTab from "./settings_tab";
import {EditorView} from "@codemirror/view";
import {Prec} from "@codemirror/state";
import {editorToCodeMirrorState, posFromIndex} from "./editor_helpers";
import {markerStateField} from "./marker_state_field";
import {FrontMatter} from "./provider/front_matter_provider";

export default class CompletrPlugin extends Plugin {

    settings: CompletrSettings;

    private snippetManager: SnippetManager;
    private suggestionPopup: SuggestionPopup;

    private cursorTriggeredByChange = false;

    async onload() {
        await this.loadSettings();

        this.snippetManager = new SnippetManager();
        this.suggestionPopup = new SuggestionPopup(this.app, this.settings, this.snippetManager);

        this.registerEditorSuggest(this.suggestionPopup);

        this.registerEvent(this.app.workspace.on('file-open', this.onFileOpened, this));
        this.registerEvent(this.app.metadataCache.on('changed', FrontMatter.onCacheChange, FrontMatter));
        this.app.workspace.onLayoutReady(() => FrontMatter.loadGlobalTags(this.app.metadataCache, this.app.vault.getMarkdownFiles()));

        this.registerEditorExtension(markerStateField);

        this.registerEditorExtension(EditorView.updateListener.of(update => {
            if (update.docChanged) {
                this.handleDocChange();
            }

            if (update.selectionSet) {
                this.handleCursorActivity(posFromIndex(update.state.doc, update.state.selection.main.head))
            }
        }));
        this.registerEditorExtension(Prec.highest(EditorView.domEventHandlers({
            "keydown": this.handleKeydown
        })));

        this.addSettingTab(new CompletrSettingsTab(this.app, this));

        this.addCommand({
            id: 'completr-open-suggestion-popup',
            name: 'Open suggestion popup',
            hotkeys: [
                {
                    key: " ",
                    modifiers: ["Mod"]
                }
            ],
            editorCallback: (editor) => {
                //This is the same function that is called by obsidian when you type a character
                (this.suggestionPopup as any).trigger(editor, this.app.workspace.getActiveFile(), true);
            }
        });

        if ((this.app.vault as any).config?.legacyEditor) {
            console.log("Completr: Without Live Preview enabled, most features of Completr will not work properly!");
        }
    }

    async onunload() {
        this.snippetManager.onunload();
        await FileScanner.saveData(this.app.vault);
    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
        WordList.loadFromFiles(this.app.vault, this.settings);
        FileScanner.loadData(this.app.vault);
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }

    private readonly onFileOpened = (file: TFile) => {
        if (!this.settings.fileScannerScanCurrent || !file)
            return;

        FileScanner.scanFile(this.settings, file, true);
    }

    private readonly handleDocChange = () => {
        this.cursorTriggeredByChange = true;
    };

    private readonly handleCursorActivity = (cursor: EditorPosition) => {
        if (this.cursorTriggeredByChange) {
            this.cursorTriggeredByChange = false;
            return;
        }

        this.suggestionPopup.close();
        if (!this.snippetManager.placeholderAtPos(cursor)) {
            this.snippetManager.clearAllPlaceholders();
        }
    };

    private readonly handleKeydown = (event: KeyboardEvent, cm: EditorView) => {
        if (!["Enter", "Tab"].contains(event.key) || event.code === "completr")
            return;
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (!view)
            return;

        const editor = view.editor;
        const placeholder = this.snippetManager.placeholderAtPos(editor.getCursor());

        const isTabKey = event.key === "Tab";

        //Pass through enter holding shift and tab always. Allows going to the next line while the popup is open
        if (event.shiftKey || isTabKey) {
            this.suggestionPopup.close();
            if (!placeholder) {
                //Hack: Dispatch the event again to properly continue lists and other obsidian formatting features.
                let keyboardEvent = new KeyboardEvent(event.type, {
                    key: event.key,
                    altKey: event.altKey,
                    shiftKey: !isTabKey ? false : event.shiftKey,
                    keyCode: event.keyCode,
                    charCode: event.charCode,
                    //Prevents stackoverflow of keydown events
                    code: "completr"
                });
                cm.contentDOM.dispatchEvent(keyboardEvent);
                event.preventDefault();
            }
        }

        if (!placeholder)
            return;
        const placeholderEnd = posFromIndex(editorToCodeMirrorState(placeholder.editor).doc, placeholder.marker.to);

        event.preventDefault();
        if (!this.snippetManager.consumeAndGotoNextMarker(editor)) {
            editor.setSelections([{
                anchor: {
                    ...placeholderEnd,
                    ch: Math.min(editor.getLine(placeholderEnd.line).length, placeholderEnd.ch + 1)
                }
            }]);
        }
    }
}
