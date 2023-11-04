# Class: BlockType

[suggestors/editor_helpers](../wiki/suggestors.editor_helpers).BlockType

## Table of contents

### Constructors

- [constructor](../wiki/suggestors.editor_helpers.BlockType#constructor)

### Properties

- [c](../wiki/suggestors.editor_helpers.BlockType#c)
- [isMultiLine](../wiki/suggestors.editor_helpers.BlockType#ismultiline)
- [otherType0](../wiki/suggestors.editor_helpers.BlockType#othertype0)
- [CODE\_MULTI](../wiki/suggestors.editor_helpers.BlockType#code_multi)
- [CODE\_SINGLE](../wiki/suggestors.editor_helpers.BlockType#code_single)
- [DOLLAR\_MULTI](../wiki/suggestors.editor_helpers.BlockType#dollar_multi)
- [DOLLAR\_SINGLE](../wiki/suggestors.editor_helpers.BlockType#dollar_single)
- [SINGLE\_TYPES](../wiki/suggestors.editor_helpers.BlockType#single_types)

### Accessors

- [isCodeBlock](../wiki/suggestors.editor_helpers.BlockType#iscodeblock)
- [isDollarBlock](../wiki/suggestors.editor_helpers.BlockType#isdollarblock)
- [otherType](../wiki/suggestors.editor_helpers.BlockType#othertype)

## Constructors

### constructor

• **new BlockType**(`c`, `isMultiLine`, `otherType0?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `c` | `string` | `undefined` |
| `isMultiLine` | `boolean` | `undefined` |
| `otherType0` | [`BlockType`](../wiki/suggestors.editor_helpers.BlockType) | `null` |

#### Defined in

[src/suggestors/editor_helpers.ts:110](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/editor_helpers.ts#L110)

## Properties

### c

• `Readonly` **c**: `string`

#### Defined in

[src/suggestors/editor_helpers.ts:110](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/editor_helpers.ts#L110)

___

### isMultiLine

• `Readonly` **isMultiLine**: `boolean`

#### Defined in

[src/suggestors/editor_helpers.ts:110](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/editor_helpers.ts#L110)

___

### otherType0

• `Private` **otherType0**: [`BlockType`](../wiki/suggestors.editor_helpers.BlockType) = `null`

#### Defined in

[src/suggestors/editor_helpers.ts:110](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/editor_helpers.ts#L110)

___

### CODE\_MULTI

▪ `Static` **CODE\_MULTI**: [`BlockType`](../wiki/suggestors.editor_helpers.BlockType)

#### Defined in

[src/suggestors/editor_helpers.ts:100](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/editor_helpers.ts#L100)

___

### CODE\_SINGLE

▪ `Static` **CODE\_SINGLE**: [`BlockType`](../wiki/suggestors.editor_helpers.BlockType)

#### Defined in

[src/suggestors/editor_helpers.ts:101](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/editor_helpers.ts#L101)

___

### DOLLAR\_MULTI

▪ `Static` **DOLLAR\_MULTI**: [`BlockType`](../wiki/suggestors.editor_helpers.BlockType)

#### Defined in

[src/suggestors/editor_helpers.ts:98](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/editor_helpers.ts#L98)

___

### DOLLAR\_SINGLE

▪ `Static` **DOLLAR\_SINGLE**: [`BlockType`](../wiki/suggestors.editor_helpers.BlockType)

#### Defined in

[src/suggestors/editor_helpers.ts:99](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/editor_helpers.ts#L99)

___

### SINGLE\_TYPES

▪ `Static` **SINGLE\_TYPES**: [`BlockType`](../wiki/suggestors.editor_helpers.BlockType)[]

#### Defined in

[src/suggestors/editor_helpers.ts:108](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/editor_helpers.ts#L108)

## Accessors

### isCodeBlock

• `get` **isCodeBlock**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/suggestors/editor_helpers.ts:117](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/editor_helpers.ts#L117)

___

### isDollarBlock

• `get` **isDollarBlock**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/suggestors/editor_helpers.ts:113](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/editor_helpers.ts#L113)

___

### otherType

• `get` **otherType**(): [`BlockType`](../wiki/suggestors.editor_helpers.BlockType)

#### Returns

[`BlockType`](../wiki/suggestors.editor_helpers.BlockType)

#### Defined in

[src/suggestors/editor_helpers.ts:121](https://github.com/MsgtGreer/ToDoMD/blob/5bfc938/src/suggestors/editor_helpers.ts#L121)
