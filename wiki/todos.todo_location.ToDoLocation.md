# Class: ToDoLocation

[todos/todo_location](../wiki/todos.todo_location).ToDoLocation

ToDoLocation is the place where all information about a todo line's location
in a markdown file is stored, so that testable algorithms can then be added here.

## Table of contents

### Constructors

- [constructor](../wiki/todos.todo_location.ToDoLocation#constructor)

### Properties

- [\_lineNumber](../wiki/todos.todo_location.ToDoLocation#_linenumber)
- [\_path](../wiki/todos.todo_location.ToDoLocation#_path)
- [\_precedingHeader](../wiki/todos.todo_location.ToDoLocation#_precedingheader)
- [\_sectionIndex](../wiki/todos.todo_location.ToDoLocation#_sectionindex)
- [\_sectionStart](../wiki/todos.todo_location.ToDoLocation#_sectionstart)

### Accessors

- [lineNumber](../wiki/todos.todo_location.ToDoLocation#linenumber)
- [path](../wiki/todos.todo_location.ToDoLocation#path)
- [precedingHeader](../wiki/todos.todo_location.ToDoLocation#precedingheader)
- [sectionIndex](../wiki/todos.todo_location.ToDoLocation#sectionindex)
- [sectionStart](../wiki/todos.todo_location.ToDoLocation#sectionstart)

### Methods

- [fromRenamedFile](../wiki/todos.todo_location.ToDoLocation#fromrenamedfile)
- [fromUnknownPosition](../wiki/todos.todo_location.ToDoLocation#fromunknownposition)

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

src/todos/todo_location.ts:12

## Properties

### \_lineNumber

• `Private` `Readonly` **\_lineNumber**: `number`

#### Defined in

src/todos/todo_location.ts:7

___

### \_path

• `Private` `Readonly` **\_path**: `string`

#### Defined in

src/todos/todo_location.ts:6

___

### \_precedingHeader

• `Private` `Readonly` **\_precedingHeader**: `string`

#### Defined in

src/todos/todo_location.ts:10

___

### \_sectionIndex

• `Private` `Readonly` **\_sectionIndex**: `number`

#### Defined in

src/todos/todo_location.ts:9

___

### \_sectionStart

• `Private` `Readonly` **\_sectionStart**: `number`

#### Defined in

src/todos/todo_location.ts:8

## Accessors

### lineNumber

• `get` **lineNumber**(): `number`

#### Returns

`number`

#### Defined in

src/todos/todo_location.ts:46

___

### path

• `get` **path**(): `string`

#### Returns

`string`

#### Defined in

src/todos/todo_location.ts:42

___

### precedingHeader

• `get` **precedingHeader**(): `string`

#### Returns

`string`

#### Defined in

src/todos/todo_location.ts:60

___

### sectionIndex

• `get` **sectionIndex**(): `number`

The index of the nth ToDo in its section.

#### Returns

`number`

#### Defined in

src/todos/todo_location.ts:56

___

### sectionStart

• `get` **sectionStart**(): `number`

Line number where the section starts that contains this todo.

#### Returns

`number`

#### Defined in

src/todos/todo_location.ts:51

## Methods

### fromRenamedFile

▸ **fromRenamedFile**(`newPath`): [`ToDoLocation`](../wiki/todos.todo_location.ToDoLocation)

Constructor, for when the file has been renamed, and all other data remains the same.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newPath` | `string` |

#### Returns

[`ToDoLocation`](../wiki/todos.todo_location.ToDoLocation)

#### Defined in

src/todos/todo_location.ts:38

___

### fromUnknownPosition

▸ `Static` **fromUnknownPosition**(`path`): [`ToDoLocation`](../wiki/todos.todo_location.ToDoLocation)

Constructor, for use when the ToDos's exact location in a file is either unknown, or not needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`ToDoLocation`](../wiki/todos.todo_location.ToDoLocation)

#### Defined in

src/todos/todo_location.ts:30
