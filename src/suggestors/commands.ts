import type { App, Editor, MarkdownFileInfo, MarkdownView, Plugin, View } from 'obsidian';
import SuggestionPopup, { SelectionDirection } from "./popup";

export class Commands {
    private readonly plugin: Plugin;

    private get app(): App {
        return this.plugin.app;
    }

    constructor({ plugin }: { plugin: Plugin }) {
        this.plugin = plugin;
        /**
         * Open the suggestion popup
         */
        plugin.addCommand({
            id: 'ToDoMD-open-suggestion-popup',
            name: 'Open suggestion popup',
            hotkeys: [
                {
                    key: " ",
                    modifiers: ["Mod"]
                }
            ],
            editorCallback: (editor) => {
                // This is the same function that is called by obsidian when you type a character
                (plugin._suggestionPopup as any).trigger(editor, /* Passing null here is a signal that this was triggered manually by the user */ null, true);
            },
            // @ts-ignore
            isVisible: () => !plugin._suggestionPopup.isVisible()
        });
        /**
         * With arrow down you can navigate through the suggestions
         */
        plugin.addCommand({
            id: 'ToDoMD-select-next-suggestion',
            name: 'Select next suggestion',
            hotkeys: [
                {
                    key: "ArrowDown",
                    modifiers: []
                }
            ],
            repeatable: true,
            editorCallback: (_) => {
                plugin.suggestionPopup.selectNextItem(SelectionDirection.NEXT);
            },
            // @ts-ignore
            isVisible: () => plugin._suggestionPopup.isVisible(),
        });
        /**
         * With arrow up you can navigate through the suggestions
         */
        plugin.addCommand({
            id: 'ToDoMD-select-previous-suggestion',
            name: 'Select previous suggestion',
            hotkeys: [
                {
                    key: "ArrowUp",
                    modifiers: []
                }
            ],
            repeatable: true,
            editorCallback: (_) => {
                plugin.suggestionPopup.selectNextItem(SelectionDirection.PREVIOUS);
            },
            // @ts-ignore
            isVisible: () => plugin._suggestionPopup.isVisible(),
        });
        plugin.addCommand({
            id: 'ToDoMD-insert-selected-suggestion',
            name: 'Insert selected suggestion',
            hotkeys: [
                {
                    key: "Enter",
                    modifiers: []
                }
            ],
            editorCallback: (_) => plugin.suggestionPopup.applySelectedItem(),
            // @ts-ignore
            isBypassCommand: () => !plugin._suggestionPopup.isFocused(),
            isVisible: () => plugin._suggestionPopup.isVisible(),
        });
        plugin.addCommand({
            id: 'ToDoMD-bypass-enter-key',
            name: 'Bypass the popup and press Enter',
            hotkeys: [
                {
                    key: "Enter",
                    modifiers: ["Ctrl"]
                }
            ],
            editorCallback: (_) => {
            },
            // @ts-ignore
            isBypassCommand: () => true,
            isVisible: () => plugin._suggestionPopup.isVisible(),
        });
        plugin.addCommand({
            id: 'ToDoMD-bypass-tab-key',
            name: 'Bypass the popup and press Tab',
            hotkeys: [
                {
                    key: "Tab",
                    modifiers: ["Ctrl"]
                }
            ],
            editorCallback: (_) => {
            },
            // @ts-ignore
            isBypassCommand: () => true,
            isVisible: () => plugin._suggestionPopup.isVisible(),
        });
        plugin.addCommand({
            id: 'ToDoMD-close-suggestion-popup',
            name: 'Close suggestion popup',
            hotkeys: [
                {
                    key: "Escape",
                    modifiers: []
                }
            ],
            editorCallback: (_) => plugin.suggestionPopup.close(),
            // @ts-ignore
            isVisible: () => plugin._suggestionPopup.isVisible(),
        });


        // Here are some notes about this command and the isBypassCommand function:
        // - This command is registered last so that other hotkeys can be bound to tab without being overridden
        // - The isBypassCommand function exists, because obsidian has editor suggest related event handlers for Enter,
        //   Tab, ArrowUp and ArrowDown which completely prevent those keys from getting to the editor while an editor
        //   suggest is open. This function bypasses that using the custom hotkey hook above which will dispatch an
        //   event to the editor if the isBypassCommand function returns true.
        // - All of this restores the default behavior for all keys while the suggestion popup is open, but not focused.
        plugin.addCommand({
            id: 'ToDoMD-fake-tab',
            name: '(internal)',
            hotkeys: [
                {
                    key: "Tab",
                    modifiers: []
                }
            ],
            editorCallback: (_) => {
            },
            // @ts-ignore
            isBypassCommand: () => true,
            isVisible: () => plugin._suggestionPopup.isVisible(),
        });
        plugin.addCommand({
            id: 'ToDoMD-fake-enter',
            name: '(internal)',
            hotkeys: [
                {
                    key: "Enter",
                    modifiers: []
                }
            ],
            editorCallback: (_) => {
            },
            // @ts-ignore
            isBypassCommand: () => true,
            isVisible: () => plugin._suggestionPopup.isVisible(),
        });
        plugin.addCommand({
            id: 'ToDoMD-fake-arrow-up',
            name: '(internal)',
            hotkeys: [
                {
                    key: "ArrowUp",
                    modifiers: []
                }
            ],
            editorCallback: (_) => {
            },
            // @ts-ignore
            isBypassCommand: () => true,
            isVisible: () => plugin._suggestionPopup.isVisible(),
        });
        plugin.addCommand({
            id: 'ToDoMD-fake-arrow-down',
            name: '(internal)',
            hotkeys: [
                {
                    key: "ArrowDown",
                    modifiers: []
                }
            ],
            editorCallback: (_) => {
            },
            // @ts-ignore
            isBypassCommand: () => true,
            isVisible: () => plugin._suggestionPopup.isVisible(),
        });
    }

}