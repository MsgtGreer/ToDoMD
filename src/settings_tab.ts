import { App, ButtonComponent, Modal, PluginSettingTab, Setting } from "obsidian";
import ToDoMDPlugin from "./main";
import { ToDo } from "./provider/todo_provider";
import { CalloutProviderSource, ToDoMDSettings} from "./settings";

export default class ToDoMDSettingsTab extends PluginSettingTab {

    private plugin: ToDoMDPlugin;
    private isReloadingWords: boolean;

    constructor(app: App, plugin: ToDoMDPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): any {
        const { containerEl } = this;

        containerEl.empty();

        new Setting(containerEl)
            .setName("Auto focus")
            .setDesc("Whether the popup is automatically focused once it opens.")
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.autoFocus)
                .onChange(async val => {
                    this.plugin.settings.autoFocus = val;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName("Auto trigger")
            .setDesc("Whether the popup opens automatically when typing.")
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.autoTrigger)
                .onChange(async val => {
                    this.plugin.settings.autoTrigger = val;
                    await this.plugin.saveSettings();
                }));

            
        new Setting(containerEl)
        .setName("ToDo provider")
        .setHeading();

        this.createEnabledSetting("ToDoProviderEnabled", "Whether or not the ToDo provider is enabled", containerEl);

    }

    private createEnabledSetting(propertyName: keyof ToDoMDSettings, desc: string, container: HTMLElement) {
        new Setting(container)
            .setName("Enabled")
            .setDesc(desc)
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings[propertyName] as boolean)
                //@ts-ignore
                .onChange(async (val) => {
                    // @ts-ignore
                    this.plugin.settings[propertyName] = val;
                    await this.plugin.saveSettings();
                }));
    }
}

class ConfirmationModal extends Modal {

    constructor(app: App, title: string, body: string, buttonCallback: (button: ButtonComponent) => void, clickCallback: () => Promise<void>) {
        super(app);
        this.titleEl.setText(title);
        this.contentEl.setText(body);
        new Setting(this.modalEl)
            .addButton(button => {
                buttonCallback(button);
                button.onClick(async () => {
                    await clickCallback();
                    this.close();
                })
            })
            .addButton(button => button
                .setButtonText("Cancel")
                .onClick(() => this.close())).settingEl.addClass("ToDoMD-settings-no-border");
    }
}
