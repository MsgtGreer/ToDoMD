# Class: ToDoLocation

[todo_location](../wiki/todo_location).ToDoLocation

TaskLocation is the place where all information about a task line's location
in a markdown file is stored, so that testable algorithms can then be added here.

## Table of contents

### Constructors

- [constructor](../wiki/todo_location.ToDoLocation#constructor)

### Properties

- [\_lineNumber](../wiki/todo_location.ToDoLocation#_linenumber)
- [\_path](../wiki/todo_location.ToDoLocation#_path)
- [\_precedingHeader](../wiki/todo_location.ToDoLocation#_precedingheader)
- [\_sectionIndex](../wiki/todo_location.ToDoLocation#_sectionindex)
- [\_sectionStart](../wiki/todo_location.ToDoLocation#_sectionstart)

### Accessors

- [lineNumber](../wiki/todo_location.ToDoLocation#linenumber)
- [path](../wiki/todo_location.ToDoLocation#path)
- [precedingHeader](../wiki/todo_location.ToDoLocation#precedingheader)
- [sectionIndex](../wiki/todo_location.ToDoLocation#sectionindex)
- [sectionStart](../wiki/todo_location.ToDoLocation#sectionstart)

### Methods

- [fromRenamedFile](../wiki/todo_location.ToDoLocation#fromrenamedfile)
- [fromUnknownPosition](../wiki/todo_location.ToDoLocation#fromunknownposition)

## Constructors

### constructor

• **new ToDoLocation**(`path`, `lineNumber`, `sectionStart`, `sectionIndex`, `precedingHeader`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `lineNumber` | `number` |
| `sectionStart` | `number` |
| `sectionIndex` | `number` |
| `precedingHeader` | `string` |

#### Defined in

[src/todo_location.ts:12](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo_location.ts#L12)

## Properties

### \_lineNumber

• `Private` `Readonly` **\_lineNumber**: `number`

#### Defined in

[src/todo_location.ts:7](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo_location.ts#L7)

___

### \_path

• `Private` `Readonly` **\_path**: `string`

#### Defined in

[src/todo_location.ts:6](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo_location.ts#L6)

___

### \_precedingHeader

• `Private` `Readonly` **\_precedingHeader**: `string`

#### Defined in

[src/todo_location.ts:10](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo_location.ts#L10)

___

### \_sectionIndex

• `Private` `Readonly` **\_sectionIndex**: `number`

#### Defined in

[src/todo_location.ts:9](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo_location.ts#L9)

___

### \_sectionStart

• `Private` `Readonly` **\_sectionStart**: `number`

#### Defined in

[src/todo_location.ts:8](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo_location.ts#L8)

## Accessors

### lineNumber

• `get` **lineNumber**(): `number`

#### Returns

`number`

#### Defined in

[src/todo_location.ts:46](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo_location.ts#L46)

___

### path

• `get` **path**(): `string`

#### Returns

`string`

#### Defined in

[src/todo_location.ts:42](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo_location.ts#L42)

___

### precedingHeader

• `get` **precedingHeader**(): `string`

#### Returns

`string`

#### Defined in

[src/todo_location.ts:60](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo_location.ts#L60)

___

### sectionIndex

• `get` **sectionIndex**(): `number`

The index of the nth task in its section.

#### Returns

`number`

#### Defined in

[src/todo_location.ts:56](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo_location.ts#L56)

___

### sectionStart

• `get` **sectionStart**(): `number`

Line number where the section starts that contains this task.

#### Returns

`number`

#### Defined in

[src/todo_location.ts:51](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo_location.ts#L51)

## Methods

### fromRenamedFile

▸ **fromRenamedFile**(`newPath`): [`ToDoLocation`](../wiki/todo_location.ToDoLocation)

Constructor, for when the file has been renamed, and all other data remains the same.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newPath` | `string` |

#### Returns

[`ToDoLocation`](../wiki/todo_location.ToDoLocation)

#### Defined in

[src/todo_location.ts:38](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo_location.ts#L38)

___

### fromUnknownPosition

▸ `Static` **fromUnknownPosition**(`path`): [`ToDoLocation`](../wiki/todo_location.ToDoLocation)

Constructor, for use when the Task's exact location in a file is either unknown, or not needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`ToDoLocation`](../wiki/todo_location.ToDoLocation)

#### Defined in

[src/todo_location.ts:30](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo_location.ts#L30)
