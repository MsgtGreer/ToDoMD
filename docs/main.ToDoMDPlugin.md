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
- [app](../wiki/main.ToDoMDPlugin#app)
- [cache](../wiki/main.ToDoMDPlugin#cache)
- [manifest](../wiki/main.ToDoMDPlugin#manifest)
- [queryRenderer](../wiki/main.ToDoMDPlugin#queryrenderer)
- [settings](../wiki/main.ToDoMDPlugin#settings)

### Accessors

- [suggestionPopup](../wiki/main.ToDoMDPlugin#suggestionpopup)

### Methods

- [addChild](../wiki/main.ToDoMDPlugin#addchild)
- [addCommand](../wiki/main.ToDoMDPlugin#addcommand)
- [addRibbonIcon](../wiki/main.ToDoMDPlugin#addribbonicon)
- [addSettingTab](../wiki/main.ToDoMDPlugin#addsettingtab)
- [addStatusBarItem](../wiki/main.ToDoMDPlugin#addstatusbaritem)
- [load](../wiki/main.ToDoMDPlugin#load)
- [loadData](../wiki/main.ToDoMDPlugin#loaddata)
- [loadSettings](../wiki/main.ToDoMDPlugin#loadsettings)
- [onFileOpened](../wiki/main.ToDoMDPlugin#onfileopened)
- [onload](../wiki/main.ToDoMDPlugin#onload)
- [onunload](../wiki/main.ToDoMDPlugin#onunload)
- [register](../wiki/main.ToDoMDPlugin#register)
- [registerCodeMirror](../wiki/main.ToDoMDPlugin#registercodemirror)
- [registerDomEvent](../wiki/main.ToDoMDPlugin#registerdomevent)
- [registerEditorExtension](../wiki/main.ToDoMDPlugin#registereditorextension)
- [registerEditorSuggest](../wiki/main.ToDoMDPlugin#registereditorsuggest)
- [registerEvent](../wiki/main.ToDoMDPlugin#registerevent)
- [registerExtensions](../wiki/main.ToDoMDPlugin#registerextensions)
- [registerHoverLinkSource](../wiki/main.ToDoMDPlugin#registerhoverlinksource)
- [registerInterval](../wiki/main.ToDoMDPlugin#registerinterval)
- [registerMarkdownCodeBlockProcessor](../wiki/main.ToDoMDPlugin#registermarkdowncodeblockprocessor)
- [registerMarkdownPostProcessor](../wiki/main.ToDoMDPlugin#registermarkdownpostprocessor)
- [registerObsidianProtocolHandler](../wiki/main.ToDoMDPlugin#registerobsidianprotocolhandler)
- [registerView](../wiki/main.ToDoMDPlugin#registerview)
- [removeChild](../wiki/main.ToDoMDPlugin#removechild)
- [saveData](../wiki/main.ToDoMDPlugin#savedata)
- [saveSettings](../wiki/main.ToDoMDPlugin#savesettings)
- [setupCommands](../wiki/main.ToDoMDPlugin#setupcommands)
- [unload](../wiki/main.ToDoMDPlugin#unload)

## Constructors

### constructor

• **new ToDoMDPlugin**(`app`, `manifest`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `App` |
| `manifest` | `PluginManifest` |

#### Inherited from

Plugin.constructor

#### Defined in

node_modules/obsidian/obsidian.d.ts:2890

## Properties

### \_suggestionPopup

• **\_suggestionPopup**: [`SuggestionPopup`](../wiki/suggestors.popup.SuggestionPopup)

#### Defined in

[src/main.ts:20](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/main.ts#L20)

___

### app

• **app**: `App`

#### Inherited from

Plugin.app

#### Defined in

node_modules/obsidian/obsidian.d.ts:2882

___

### cache

• `Private` **cache**: [`Cache`](../wiki/caching.Cache.Cache)

#### Defined in

[src/main.ts:22](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/main.ts#L22)

___

### manifest

• **manifest**: `PluginManifest`

#### Inherited from

Plugin.manifest

#### Defined in

node_modules/obsidian/obsidian.d.ts:2886

___

### queryRenderer

• **queryRenderer**: [`QueryRenderer`](../wiki/query.query-renderer.QueryRenderer)

#### Defined in

[src/main.ts:25](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/main.ts#L25)

___

### settings

• **settings**: [`ToDoMDSettings`](../wiki/settings.ToDoMDSettings)

#### Defined in

[src/main.ts:18](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/main.ts#L18)

## Accessors

### suggestionPopup

• `get` **suggestionPopup**(): [`SuggestionPopup`](../wiki/suggestors.popup.SuggestionPopup)

#### Returns

[`SuggestionPopup`](../wiki/suggestors.popup.SuggestionPopup)

#### Defined in

[src/main.ts:129](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/main.ts#L129)

## Methods

### addChild

▸ **addChild**<`T`\>(`component`): `T`

Adds a child component, loading it if this component is loaded

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Component` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `T` |

#### Returns

`T`

#### Inherited from

Plugin.addChild

#### Defined in

node_modules/obsidian/obsidian.d.ts:716

___

### addCommand

▸ **addCommand**(`command`): `Command`

Register a command globally.
Registered commands will be available from the @{link https://help.obsidian.md/Plugins/Command+palette Command pallete}.
The command id and name will be automatically prefixed with this plugin's id and name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `Command` |

#### Returns

`Command`

#### Inherited from

Plugin.addCommand

#### Defined in

node_modules/obsidian/obsidian.d.ts:2913

___

### addRibbonIcon

▸ **addRibbonIcon**(`icon`, `title`, `callback`): `HTMLElement`

Adds a ribbon icon to the left bar.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | `string` | The icon name to be used. See addIcon |
| `title` | `string` | The title to be displayed in the tooltip. |
| `callback` | (`evt`: `MouseEvent`) => `any` | The `click` callback. |

#### Returns

`HTMLElement`

#### Inherited from

Plugin.addRibbonIcon

#### Defined in

node_modules/obsidian/obsidian.d.ts:2898

___

### addSettingTab

▸ **addSettingTab**(`settingTab`): `void`

Register a settings tab, which allows users to change settings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `settingTab` | `PluginSettingTab` |

#### Returns

`void`

**`See`**

[https://docs.obsidian.md/Plugins/User+interface/Settings#Register+a+settings+tab](https://docs.obsidian.md/Plugins/User+interface/Settings#Register+a+settings+tab)

#### Inherited from

Plugin.addSettingTab

#### Defined in

node_modules/obsidian/obsidian.d.ts:2919

___

### addStatusBarItem

▸ **addStatusBarItem**(): `HTMLElement`

Adds a status bar item to the bottom of the app.
Not available on mobile.

#### Returns

`HTMLElement`

HTMLElement - element to modify.

**`See`**

[https://docs.obsidian.md/Plugins/User+interface/Status+bar](https://docs.obsidian.md/Plugins/User+interface/Status+bar)

#### Inherited from

Plugin.addStatusBarItem

#### Defined in

node_modules/obsidian/obsidian.d.ts:2906

___

### load

▸ **load**(): `void`

Load this component and its children

#### Returns

`void`

#### Inherited from

Plugin.load

#### Defined in

node_modules/obsidian/obsidian.d.ts:694

___

### loadData

▸ **loadData**(): `Promise`<`any`\>

Load settings data from disk.
Data is stored in `data.json` in the plugin folder.

#### Returns

`Promise`<`any`\>

**`See`**

[https://docs.obsidian.md/Plugins/User+interface/Settings](https://docs.obsidian.md/Plugins/User+interface/Settings)

#### Inherited from

Plugin.loadData

#### Defined in

node_modules/obsidian/obsidian.d.ts:2982

___

### loadSettings

▸ **loadSettings**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/main.ts:124](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/main.ts#L124)

___

### onFileOpened

▸ `Private` `Readonly` **onFileOpened**(`file`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `TFile` |

#### Returns

`void`

#### Defined in

[src/main.ts:137](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/main.ts#L137)

___

### onload

▸ **onload**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

Plugin.onload

#### Defined in

[src/main.ts:27](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/main.ts#L27)

___

### onunload

▸ **onunload**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

Plugin.onunload

#### Defined in

[src/main.ts:121](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/main.ts#L121)

___

### register

▸ **register**(`cb`): `void`

Registers a callback to be called when unloading

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => `any` |

#### Returns

`void`

#### Inherited from

Plugin.register

#### Defined in

node_modules/obsidian/obsidian.d.ts:726

___

### registerCodeMirror

▸ **registerCodeMirror**(`callback`): `void`

Runs callback on all currently loaded instances of CodeMirror,
then registers the callback for all future CodeMirror instances.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`cm`: `Editor`) => `any` |

#### Returns

`void`

**`Deprecated`**

- This is only used with the legacy editor, which is no longer maintained,
and will be removed in a future update.

#### Inherited from

Plugin.registerCodeMirror

#### Defined in

node_modules/obsidian/obsidian.d.ts:2954

___

### registerDomEvent

▸ **registerDomEvent**<`K`\>(`el`, `type`, `callback`, `options?`): `void`

Registers an DOM event to be detached when unloading

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `WindowEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `Window` |
| `type` | `K` |
| `callback` | (`this`: `HTMLElement`, `ev`: `WindowEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

Plugin.registerDomEvent

#### Defined in

node_modules/obsidian/obsidian.d.ts:736

▸ **registerDomEvent**<`K`\>(`el`, `type`, `callback`, `options?`): `void`

Registers an DOM event to be detached when unloading

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `Document` |
| `type` | `K` |
| `callback` | (`this`: `HTMLElement`, `ev`: `DocumentEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

Plugin.registerDomEvent

#### Defined in

node_modules/obsidian/obsidian.d.ts:741

▸ **registerDomEvent**<`K`\>(`el`, `type`, `callback`, `options?`): `void`

Registers an DOM event to be detached when unloading

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `type` | `K` |
| `callback` | (`this`: `HTMLElement`, `ev`: `HTMLElementEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

Plugin.registerDomEvent

#### Defined in

node_modules/obsidian/obsidian.d.ts:746

___

### registerEditorExtension

▸ **registerEditorExtension**(`extension`): `void`

Registers a CodeMirror 6 extension.
To reconfigure cm6 extensions for a plugin on the fly, an array should be passed in, and modified dynamically.
Once this array is modified, calling Workspace.updateOptions will apply the changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extension` | `Extension` | must be a CodeMirror 6 `Extension`, or an array of Extensions. |

#### Returns

`void`

#### Inherited from

Plugin.registerEditorExtension

#### Defined in

node_modules/obsidian/obsidian.d.ts:2962

___

### registerEditorSuggest

▸ **registerEditorSuggest**(`editorSuggest`): `void`

Register an EditorSuggest which can provide live suggestions while the user is typing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `editorSuggest` | `EditorSuggest`<`any`\> |

#### Returns

`void`

#### Inherited from

Plugin.registerEditorSuggest

#### Defined in

node_modules/obsidian/obsidian.d.ts:2975

___

### registerEvent

▸ **registerEvent**(`eventRef`): `void`

Registers an event to be detached when unloading

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventRef` | `EventRef` |

#### Returns

`void`

#### Inherited from

Plugin.registerEvent

#### Defined in

node_modules/obsidian/obsidian.d.ts:731

___

### registerExtensions

▸ **registerExtensions**(`extensions`, `viewType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensions` | `string`[] |
| `viewType` | `string` |

#### Returns

`void`

#### Inherited from

Plugin.registerExtensions

#### Defined in

node_modules/obsidian/obsidian.d.ts:2932

___

### registerHoverLinkSource

▸ **registerHoverLinkSource**(`id`, `info`): `void`

Registers a view with the 'Page preview' core plugin as an emitter of the 'hover-link' on the event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `info` | `HoverLinkSource` |

#### Returns

`void`

#### Inherited from

Plugin.registerHoverLinkSource

#### Defined in

node_modules/obsidian/obsidian.d.ts:2928

___

### registerInterval

▸ **registerInterval**(`id`): `number`

Registers an interval (from setInterval) to be cancelled when unloading
Use window.setInterval instead of setInterval to avoid TypeScript confusing between NodeJS vs Browser API

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`number`

#### Inherited from

Plugin.registerInterval

#### Defined in

node_modules/obsidian/obsidian.d.ts:753

___

### registerMarkdownCodeBlockProcessor

▸ **registerMarkdownCodeBlockProcessor**(`language`, `handler`, `sortOrder?`): `MarkdownPostProcessor`

Register a special post processor that handles fenced code given a language and a handler.
This special post processor takes care of removing the <pre><code> and create a <div> that
will be passed to the handler, and is expected to be filled with custom elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | `string` |
| `handler` | (`source`: `string`, `el`: `HTMLElement`, `ctx`: `MarkdownPostProcessorContext`) => `void` \| `Promise`<`any`\> |
| `sortOrder?` | `number` |

#### Returns

`MarkdownPostProcessor`

**`See`**

[https://docs.obsidian.md/Plugins/Editor/Markdown+post+processing#Post-process+Markdown+code+blocks](https://docs.obsidian.md/Plugins/Editor/Markdown+post+processing#Post-process+Markdown+code+blocks)

#### Inherited from

Plugin.registerMarkdownCodeBlockProcessor

#### Defined in

node_modules/obsidian/obsidian.d.ts:2946

___

### registerMarkdownPostProcessor

▸ **registerMarkdownPostProcessor**(`postProcessor`, `sortOrder?`): `MarkdownPostProcessor`

Registers a post processor, to change how the document looks in reading mode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `postProcessor` | `MarkdownPostProcessor` |
| `sortOrder?` | `number` |

#### Returns

`MarkdownPostProcessor`

**`See`**

[https://docs.obsidian.md/Plugins/Editor/Markdown+post+processing](https://docs.obsidian.md/Plugins/Editor/Markdown+post+processing)

#### Inherited from

Plugin.registerMarkdownPostProcessor

#### Defined in

node_modules/obsidian/obsidian.d.ts:2938

___

### registerObsidianProtocolHandler

▸ **registerObsidianProtocolHandler**(`action`, `handler`): `void`

Register a handler for obsidian:// URLs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `string` | the action string. For example, "open" corresponds to `obsidian://open`. |
| `handler` | `ObsidianProtocolHandler` | the callback to trigger. A key-value pair that is decoded from the query will be passed in. For example, `obsidian://open?key=value` would generate `{"action": "open", "key": "value"}`. |

#### Returns

`void`

#### Inherited from

Plugin.registerObsidianProtocolHandler

#### Defined in

node_modules/obsidian/obsidian.d.ts:2970

___

### registerView

▸ **registerView**(`type`, `viewCreator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `viewCreator` | `ViewCreator` |

#### Returns

`void`

#### Inherited from

Plugin.registerView

#### Defined in

node_modules/obsidian/obsidian.d.ts:2923

___

### removeChild

▸ **removeChild**<`T`\>(`component`): `T`

Removes a child component, unloading it

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Component` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `T` |

#### Returns

`T`

#### Inherited from

Plugin.removeChild

#### Defined in

node_modules/obsidian/obsidian.d.ts:721

___

### saveData

▸ **saveData**(`data`): `Promise`<`void`\>

Write settings data to disk.
Data is stored in `data.json` in the plugin folder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`<`void`\>

**`See`**

[https://docs.obsidian.md/Plugins/User+interface/Settings](https://docs.obsidian.md/Plugins/User+interface/Settings)

#### Inherited from

Plugin.saveData

#### Defined in

node_modules/obsidian/obsidian.d.ts:2989

___

### saveSettings

▸ **saveSettings**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/main.ts:133](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/main.ts#L133)

___

### setupCommands

▸ `Private` **setupCommands**(): `void`

#### Returns

`void`

#### Defined in

[src/main.ts:60](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/main.ts#L60)

___

### unload

▸ **unload**(): `void`

Unload this component and its children

#### Returns

`void`

#### Inherited from

Plugin.unload

#### Defined in

node_modules/obsidian/obsidian.d.ts:705
