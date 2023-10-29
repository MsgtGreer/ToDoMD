# Module: suggestors/editor\_helpers

## Table of contents

### Classes

- [BlockType](../wiki/suggestors.editor_helpers.BlockType)

### Functions

- [editorToCodeMirrorState](../wiki/suggestors.editor_helpers#editortocodemirrorstate)
- [editorToCodeMirrorView](../wiki/suggestors.editor_helpers#editortocodemirrorview)
- [indexFromPos](../wiki/suggestors.editor_helpers#indexfrompos)
- [isInFrontMatterBlock](../wiki/suggestors.editor_helpers#isinfrontmatterblock)
- [matchWordBackwards](../wiki/suggestors.editor_helpers#matchwordbackwards)
- [maybeLowerCase](../wiki/suggestors.editor_helpers#maybelowercase)
- [posFromIndex](../wiki/suggestors.editor_helpers#posfromindex)

## Functions

### editorToCodeMirrorState

▸ **editorToCodeMirrorState**(`editor`): `EditorState`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | `Editor` |

#### Returns

`EditorState`

#### Defined in

[src/suggestors/editor_helpers.ts:16](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/editor_helpers.ts#L16)

___

### editorToCodeMirrorView

▸ **editorToCodeMirrorView**(`editor`): `EditorView`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | `Editor` |

#### Returns

`EditorView`

#### Defined in

[src/suggestors/editor_helpers.ts:20](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/editor_helpers.ts#L20)

___

### indexFromPos

▸ **indexFromPos**(`doc`, `pos`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Text` |
| `pos` | `EditorPosition` |

#### Returns

`number`

#### Defined in

[src/suggestors/editor_helpers.ts:10](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/editor_helpers.ts#L10)

___

### isInFrontMatterBlock

▸ **isInFrontMatterBlock**(`editor`, `pos`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | `Editor` |
| `pos` | `EditorPosition` |

#### Returns

`boolean`

#### Defined in

[src/suggestors/editor_helpers.ts:60](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/editor_helpers.ts#L60)

___

### matchWordBackwards

▸ **matchWordBackwards**(`editor`, `cursor`, `charPredicate`, `maxLookBackDistance?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `editor` | `Editor` | `undefined` |
| `cursor` | `EditorPosition` | `undefined` |
| `charPredicate` | (`char`: `string`) => `boolean` | `undefined` |
| `maxLookBackDistance` | `number` | `50` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `separatorChar` | `string` |

#### Defined in

[src/suggestors/editor_helpers.ts:28](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/editor_helpers.ts#L28)

___

### maybeLowerCase

▸ **maybeLowerCase**(`str`, `lowerCase`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `lowerCase` | `boolean` |

#### Returns

`string`

#### Defined in

[src/suggestors/editor_helpers.ts:24](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/editor_helpers.ts#L24)

___

### posFromIndex

▸ **posFromIndex**(`doc`, `offset`): `EditorPosition`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Text` |
| `offset` | `number` |

#### Returns

`EditorPosition`

#### Defined in

[src/suggestors/editor_helpers.ts:5](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/editor_helpers.ts#L5)
