# Class: ToDoMDSettingsTab

[settings/settings_tab](../wiki/settings.settings_tab).ToDoMDSettingsTab

## Hierarchy

- `PluginSettingTab`

  ↳ **`ToDoMDSettingsTab`**

## Table of contents

### Constructors

- [constructor](../wiki/settings.settings_tab.ToDoMDSettingsTab#constructor)

### Properties

- [isReloadingWords](../wiki/settings.settings_tab.ToDoMDSettingsTab#isreloadingwords)
- [plugin](../wiki/settings.settings_tab.ToDoMDSettingsTab#plugin)

### Methods

- [createEnabledSetting](../wiki/settings.settings_tab.ToDoMDSettingsTab#createenabledsetting)
- [display](../wiki/settings.settings_tab.ToDoMDSettingsTab#display)

## Constructors

### constructor

• **new ToDoMDSettingsTab**(`app`, `plugin`): [`ToDoMDSettingsTab`](../wiki/settings.settings_tab.ToDoMDSettingsTab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `App` |
| `plugin` | [`ToDoMDPlugin`](../wiki/main.ToDoMDPlugin) |

#### Returns

[`ToDoMDSettingsTab`](../wiki/settings.settings_tab.ToDoMDSettingsTab)

#### Overrides

PluginSettingTab.constructor

#### Defined in

[src/settings/settings_tab.ts:10](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/settings/settings_tab.ts#L10)

## Properties

### isReloadingWords

• `Private` **isReloadingWords**: `boolean`

#### Defined in

[src/settings/settings_tab.ts:8](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/settings/settings_tab.ts#L8)

___

### plugin

• `Private` **plugin**: [`ToDoMDPlugin`](../wiki/main.ToDoMDPlugin)

#### Defined in

[src/settings/settings_tab.ts:7](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/settings/settings_tab.ts#L7)

## Methods

### createEnabledSetting

▸ **createEnabledSetting**(`propertyName`, `desc`, `container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | keyof [`ToDoMDSettings`](../wiki/settings.settings.ToDoMDSettings) |
| `desc` | `string` |
| `container` | `HTMLElement` |

#### Returns

`void`

#### Defined in

[src/settings/settings_tab.ts:49](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/settings/settings_tab.ts#L49)

___

### display

▸ **display**(): `any`

#### Returns

`any`

#### Overrides

PluginSettingTab.display

#### Defined in

[src/settings/settings_tab.ts:15](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/settings/settings_tab.ts#L15)
