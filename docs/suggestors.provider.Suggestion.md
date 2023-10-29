# Class: Suggestion

[suggestors/provider](../wiki/suggestors.provider).Suggestion

## Table of contents

### Constructors

- [constructor](../wiki/suggestors.provider.Suggestion#constructor)

### Properties

- [color](../wiki/suggestors.provider.Suggestion#color)
- [displayName](../wiki/suggestors.provider.Suggestion#displayname)
- [icon](../wiki/suggestors.provider.Suggestion#icon)
- [overrideEnd](../wiki/suggestors.provider.Suggestion#overrideend)
- [overrideStart](../wiki/suggestors.provider.Suggestion#overridestart)
- [replacement](../wiki/suggestors.provider.Suggestion#replacement)

### Methods

- [derive](../wiki/suggestors.provider.Suggestion#derive)
- [getDisplayNameLowerCase](../wiki/suggestors.provider.Suggestion#getdisplaynamelowercase)
- [fromString](../wiki/suggestors.provider.Suggestion#fromstring)

## Constructors

### constructor

• **new Suggestion**(`displayName`, `replacement`, `overrideStart?`, `overrideEnd?`, `opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |
| `replacement` | `string` |
| `overrideStart?` | `EditorPosition` |
| `overrideEnd?` | `EditorPosition` |
| `opts?` | `Object` |
| `opts.color?` | `string` |
| `opts.icon?` | `string` |

#### Defined in

[src/suggestors/provider.ts:13](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/provider.ts#L13)

## Properties

### color

• `Optional` **color**: `string`

#### Defined in

[src/suggestors/provider.ts:11](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/provider.ts#L11)

___

### displayName

• **displayName**: `string`

#### Defined in

[src/suggestors/provider.ts:6](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/provider.ts#L6)

___

### icon

• `Optional` **icon**: `string`

#### Defined in

[src/suggestors/provider.ts:10](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/provider.ts#L10)

___

### overrideEnd

• `Optional` **overrideEnd**: `EditorPosition`

#### Defined in

[src/suggestors/provider.ts:9](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/provider.ts#L9)

___

### overrideStart

• `Optional` **overrideStart**: `EditorPosition`

#### Defined in

[src/suggestors/provider.ts:8](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/provider.ts#L8)

___

### replacement

• **replacement**: `string`

#### Defined in

[src/suggestors/provider.ts:7](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/provider.ts#L7)

## Methods

### derive

▸ **derive**(`options`): [`Suggestion`](../wiki/suggestors.provider.Suggestion)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`Suggestion`](../wiki/suggestors.provider.Suggestion)\> |

#### Returns

[`Suggestion`](../wiki/suggestors.provider.Suggestion)

#### Defined in

[src/suggestors/provider.ts:33](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/provider.ts#L33)

___

### getDisplayNameLowerCase

▸ **getDisplayNameLowerCase**(`lowerCase`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lowerCase` | `boolean` |

#### Returns

`string`

#### Defined in

[src/suggestors/provider.ts:29](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/provider.ts#L29)

___

### fromString

▸ `Static` **fromString**(`suggestion`, `overrideStart?`): [`Suggestion`](../wiki/suggestors.provider.Suggestion)

#### Parameters

| Name | Type |
| :------ | :------ |
| `suggestion` | `string` |
| `overrideStart?` | `EditorPosition` |

#### Returns

[`Suggestion`](../wiki/suggestors.provider.Suggestion)

#### Defined in

[src/suggestors/provider.ts:25](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/provider.ts#L25)
