# Class: ToDoMDSettingsTab

[settings_tab](../wiki/settings_tab).ToDoMDSettingsTab

## Hierarchy

- `PluginSettingTab`

  ↳ **`ToDoMDSettingsTab`**

## Table of contents

### Constructors

- [constructor](../wiki/settings_tab.ToDoMDSettingsTab#constructor)

### Properties

- [app](../wiki/settings_tab.ToDoMDSettingsTab#app)
- [containerEl](../wiki/settings_tab.ToDoMDSettingsTab#containerel)
- [isReloadingWords](../wiki/settings_tab.ToDoMDSettingsTab#isreloadingwords)
- [plugin](../wiki/settings_tab.ToDoMDSettingsTab#plugin)

### Methods

- [createEnabledSetting](../wiki/settings_tab.ToDoMDSettingsTab#createenabledsetting)
- [display](../wiki/settings_tab.ToDoMDSettingsTab#display)
- [hide](../wiki/settings_tab.ToDoMDSettingsTab#hide)

## Constructors

### constructor

• **new ToDoMDSettingsTab**(`app`, `plugin`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `App` |
| `plugin` | [`ToDoMDPlugin`](../wiki/main.ToDoMDPlugin) |

#### Overrides

PluginSettingTab.constructor

#### Defined in

[src/settings_tab.ts:11](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/settings_tab.ts#L11)

## Properties

### app

• **app**: `App`

Reference to the app instance.

#### Inherited from

PluginSettingTab.app

#### Defined in

node_modules/obsidian/obsidian.d.ts:3534

___

### containerEl

• **containerEl**: `HTMLElement`

Outermost HTML element on the setting tab.

#### Inherited from

PluginSettingTab.containerEl

#### Defined in

node_modules/obsidian/obsidian.d.ts:3540

___

### isReloadingWords

• `Private` **isReloadingWords**: `boolean`

#### Defined in

[src/settings_tab.ts:9](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/settings_tab.ts#L9)

___

### plugin

• `Private` **plugin**: [`ToDoMDPlugin`](../wiki/main.ToDoMDPlugin)

#### Defined in

[src/settings_tab.ts:8](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/settings_tab.ts#L8)

## Methods

### createEnabledSetting

▸ `Private` **createEnabledSetting**(`propertyName`, `desc`, `container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | keyof [`ToDoMDSettings`](../wiki/settings.ToDoMDSettings) |
| `desc` | `string` |
| `container` | `HTMLElement` |

#### Returns

`void`

#### Defined in

[src/settings_tab.ts:50](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/settings_tab.ts#L50)

___

### display

▸ **display**(): `any`

#### Returns

`any`

#### Overrides

PluginSettingTab.display

#### Defined in

[src/settings_tab.ts:16](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/settings_tab.ts#L16)

___

### hide

▸ **hide**(): `any`

Hides the contents of the setting tab.
Any registered components should be unloaded when the view is hidden.
Override this if you need to perform additional cleanup.

#### Returns

`any`

#### Inherited from

PluginSettingTab.hide

#### Defined in

node_modules/obsidian/obsidian.d.ts:3554
