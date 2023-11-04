# Class: SuggestionPopup

[suggestors/popup](../wiki/suggestors.popup).SuggestionPopup

## Hierarchy

- `EditorSuggest`<[`Suggestion`](../wiki/suggestors.provider.Suggestion)\>

  ↳ **`SuggestionPopup`**

## Table of contents

### Constructors

- [constructor](../wiki/suggestors.popup.SuggestionPopup#constructor)

### Properties

- [characterRegex](../wiki/suggestors.popup.SuggestionPopup#characterregex)
- [compiledCharacterRegex](../wiki/suggestors.popup.SuggestionPopup#compiledcharacterregex)
- [focused](../wiki/suggestors.popup.SuggestionPopup#focused)
- [justClosed](../wiki/suggestors.popup.SuggestionPopup#justclosed)
- [separatorChar](../wiki/suggestors.popup.SuggestionPopup#separatorchar)
- [settings](../wiki/suggestors.popup.SuggestionPopup#settings)

### Methods

- [applySelectedItem](../wiki/suggestors.popup.SuggestionPopup#applyselecteditem)
- [close](../wiki/suggestors.popup.SuggestionPopup#close)
- [getCharacterRegex](../wiki/suggestors.popup.SuggestionPopup#getcharacterregex)
- [getSelectedItem](../wiki/suggestors.popup.SuggestionPopup#getselecteditem)
- [getSuggestions](../wiki/suggestors.popup.SuggestionPopup#getsuggestions)
- [internalOnTrigger](../wiki/suggestors.popup.SuggestionPopup#internalontrigger)
- [isFocused](../wiki/suggestors.popup.SuggestionPopup#isfocused)
- [isVisible](../wiki/suggestors.popup.SuggestionPopup#isvisible)
- [onTrigger](../wiki/suggestors.popup.SuggestionPopup#ontrigger)
- [open](../wiki/suggestors.popup.SuggestionPopup#open)
- [preventNextTrigger](../wiki/suggestors.popup.SuggestionPopup#preventnexttrigger)
- [renderSuggestion](../wiki/suggestors.popup.SuggestionPopup#rendersuggestion)
- [selectNextItem](../wiki/suggestors.popup.SuggestionPopup#selectnextitem)
- [selectSuggestion](../wiki/suggestors.popup.SuggestionPopup#selectsuggestion)

## Constructors

### constructor

• **new SuggestionPopup**(`app`, `settings`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `App` |
| `settings` | [`ToDoMDSettings`](../wiki/settings.settings.ToDoMDSettings) |

#### Overrides

EditorSuggest&lt;Suggestion\&gt;.constructor

#### Defined in

[src/suggestors/popup.ts:30](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L30)

## Properties

### characterRegex

• `Private` **characterRegex**: `string`

#### Defined in

[src/suggestors/popup.ts:24](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L24)

___

### compiledCharacterRegex

• `Private` **compiledCharacterRegex**: `RegExp`

#### Defined in

[src/suggestors/popup.ts:25](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L25)

___

### focused

• `Private` **focused**: `boolean` = `false`

#### Defined in

[src/suggestors/popup.ts:26](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L26)

___

### justClosed

• `Private` **justClosed**: `boolean`

Hacky variable to prevent the suggestion window from immediately re-opening after completing a suggestion

#### Defined in

[src/suggestors/popup.ts:21](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L21)

___

### separatorChar

• `Private` **separatorChar**: `string`

#### Defined in

[src/suggestors/popup.ts:22](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L22)

___

### settings

• `Private` `Readonly` **settings**: [`ToDoMDSettings`](../wiki/settings.settings.ToDoMDSettings)

#### Defined in

[src/suggestors/popup.ts:28](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L28)

## Methods

### applySelectedItem

▸ **applySelectedItem**(): `void`

#### Returns

`void`

#### Defined in

[src/suggestors/popup.ts:163](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L163)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Overrides

EditorSuggest.close

#### Defined in

[src/suggestors/popup.ts:51](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L51)

___

### getCharacterRegex

▸ `Private` **getCharacterRegex**(): `RegExp`

#### Returns

`RegExp`

#### Defined in

[src/suggestors/popup.ts:180](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L180)

___

### getSelectedItem

▸ **getSelectedItem**(): [`Suggestion`](../wiki/suggestors.provider.Suggestion)

#### Returns

[`Suggestion`](../wiki/suggestors.provider.Suggestion)

#### Defined in

[src/suggestors/popup.ts:158](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L158)

___

### getSuggestions

▸ **getSuggestions**(`context`): [`Suggestion`](../wiki/suggestors.provider.Suggestion)[] \| `Promise`<[`Suggestion`](../wiki/suggestors.provider.Suggestion)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `EditorSuggestContext` |

#### Returns

[`Suggestion`](../wiki/suggestors.provider.Suggestion)[] \| `Promise`<[`Suggestion`](../wiki/suggestors.provider.Suggestion)[]\>

#### Overrides

EditorSuggest.getSuggestions

#### Defined in

[src/suggestors/popup.ts:56](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L56)

___

### internalOnTrigger

▸ `Private` **internalOnTrigger**(`editor`, `cursor`, `manualTrigger`): `EditorSuggestTriggerInfo`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | `Editor` |
| `cursor` | `EditorPosition` |
| `manualTrigger` | `boolean` |

#### Returns

`EditorSuggestTriggerInfo`

#### Defined in

[src/suggestors/popup.ts:80](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L80)

___

### isFocused

▸ **isFocused**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/suggestors/popup.ts:172](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L172)

___

### isVisible

▸ **isVisible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/suggestors/popup.ts:168](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L168)

___

### onTrigger

▸ **onTrigger**(`cursor`, `editor`, `file`): `EditorSuggestTriggerInfo`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `EditorPosition` |
| `editor` | `Editor` |
| `file` | `TFile` |

#### Returns

`EditorSuggestTriggerInfo`

#### Overrides

EditorSuggest.onTrigger

#### Defined in

[src/suggestors/popup.ts:76](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L76)

___

### open

▸ **open**(): `void`

#### Returns

`void`

#### Overrides

EditorSuggest.open

#### Defined in

[src/suggestors/popup.ts:40](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L40)

___

### preventNextTrigger

▸ **preventNextTrigger**(): `void`

#### Returns

`void`

#### Defined in

[src/suggestors/popup.ts:176](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L176)

___

### renderSuggestion

▸ **renderSuggestion**(`value`, `el`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Suggestion`](../wiki/suggestors.provider.Suggestion) |
| `el` | `HTMLElement` |

#### Returns

`void`

#### Overrides

EditorSuggest.renderSuggestion

#### Defined in

[src/suggestors/popup.ts:108](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L108)

___

### selectNextItem

▸ **selectNextItem**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | [`SelectionDirection`](../wiki/suggestors.popup.SelectionDirection) |

#### Returns

`void`

#### Defined in

[src/suggestors/popup.ts:146](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L146)

___

### selectSuggestion

▸ **selectSuggestion**(`value`, `evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Suggestion`](../wiki/suggestors.provider.Suggestion) |
| `evt` | `MouseEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Overrides

EditorSuggest.selectSuggestion

#### Defined in

[src/suggestors/popup.ts:130](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/popup.ts#L130)
