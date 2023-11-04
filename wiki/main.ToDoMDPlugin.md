# Class: ToDoMDPlugin

[main](../wiki/main).ToDoMDPlugin

## Hierarchy

- `Plugin`

  ↳ **`ToDoMDPlugin`**

## Table of contents

### Constructors

- [constructor](../wiki/main.ToDoMDPlugin#constructor)

### Properties

- [\_suggestionPopup](../wiki/main.ToDoMDPlugin#_suggestionpopup)
- [cache](../wiki/main.ToDoMDPlugin#cache)
- [queryRenderer](../wiki/main.ToDoMDPlugin#queryrenderer)
- [settings](../wiki/main.ToDoMDPlugin#settings)

### Accessors

- [suggestionPopup](../wiki/main.ToDoMDPlugin#suggestionpopup)

### Methods

- [loadSettings](../wiki/main.ToDoMDPlugin#loadsettings)
- [onFileOpened](../wiki/main.ToDoMDPlugin#onfileopened)
- [onload](../wiki/main.ToDoMDPlugin#onload)
- [onunload](../wiki/main.ToDoMDPlugin#onunload)
- [saveSettings](../wiki/main.ToDoMDPlugin#savesettings)
- [setupCommands](../wiki/main.ToDoMDPlugin#setupcommands)

## Constructors

### constructor

• **new ToDoMDPlugin**(`app`, `manifest`): [`ToDoMDPlugin`](../wiki/main.ToDoMDPlugin)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `App` |
| `manifest` | `PluginManifest` |

#### Returns

[`ToDoMDPlugin`](../wiki/main.ToDoMDPlugin)

#### Inherited from

Plugin.constructor

#### Defined in

node_modules/obsidian/obsidian.d.ts:2890

## Properties

### \_suggestionPopup

• **\_suggestionPopup**: [`SuggestionPopup`](../wiki/suggestors.popup.SuggestionPopup)

#### Defined in

[src/main.ts:19](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/main.ts#L19)

___

### cache

• `Private` **cache**: [`Cache`](../wiki/caching.Cache.Cache)

#### Defined in

[src/main.ts:21](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/main.ts#L21)

___

### queryRenderer

• **queryRenderer**: [`QueryRenderer`](../wiki/query.query-renderer.QueryRenderer)

#### Defined in

[src/main.ts:24](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/main.ts#L24)

___

### settings

• **settings**: [`ToDoMDSettings`](../wiki/settings.settings.ToDoMDSettings)

#### Defined in

[src/main.ts:17](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/main.ts#L17)

## Accessors

### suggestionPopup

• `get` **suggestionPopup**(): [`SuggestionPopup`](../wiki/suggestors.popup.SuggestionPopup)

#### Returns

[`SuggestionPopup`](../wiki/suggestors.popup.SuggestionPopup)

#### Defined in

[src/main.ts:128](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/main.ts#L128)

## Methods

### loadSettings

▸ **loadSettings**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/main.ts:123](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/main.ts#L123)

___

### onFileOpened

▸ **onFileOpened**(`file`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `TFile` |

#### Returns

`void`

#### Defined in

[src/main.ts:136](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/main.ts#L136)

___

### onload

▸ **onload**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

Plugin.onload

#### Defined in

[src/main.ts:26](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/main.ts#L26)

___

### onunload

▸ **onunload**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

Plugin.onunload

#### Defined in

[src/main.ts:120](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/main.ts#L120)

___

### saveSettings

▸ **saveSettings**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/main.ts:132](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/main.ts#L132)

___

### setupCommands

▸ **setupCommands**(): `void`

#### Returns

`void`

#### Defined in

[src/main.ts:59](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/main.ts#L59)
