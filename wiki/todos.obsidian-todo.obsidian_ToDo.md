# Class: obsidian\_ToDo

[todos/obsidian-todo](../wiki/todos.obsidian-todo).obsidian_ToDo

implements a todo as used by obsidian for the various operations.
 It provides interfaces for caching, suggestions etc.

## Table of contents

### Constructors

- [constructor](../wiki/todos.obsidian-todo.obsidian_ToDo#constructor)

### Properties

- [location](../wiki/todos.obsidian-todo.obsidian_ToDo#location)
- [toDo](../wiki/todos.obsidian-todo.obsidian_ToDo#todo)

### Accessors

- [name](../wiki/todos.obsidian-todo.obsidian_ToDo#name)
- [path](../wiki/todos.obsidian-todo.obsidian_ToDo#path)

### Methods

- [identicalTo](../wiki/todos.obsidian-todo.obsidian_ToDo#identicalto)
- [missingToDoAttributeKeys](../wiki/todos.obsidian-todo.obsidian_ToDo#missingtodoattributekeys)
- [missingToDoAttributes](../wiki/todos.obsidian-todo.obsidian_ToDo#missingtodoattributes)
- [fromLine](../wiki/todos.obsidian-todo.obsidian_ToDo#fromline)
- [getStatus](../wiki/todos.obsidian-todo.obsidian_ToDo#getstatus)
- [isToDo](../wiki/todos.obsidian-todo.obsidian_ToDo#istodo)
- [splitIntoAttributes](../wiki/todos.obsidian-todo.obsidian_ToDo#splitintoattributes)
- [toDoListsIdentical](../wiki/todos.obsidian-todo.obsidian_ToDo#todolistsidentical)

## Constructors

### constructor

• **new obsidian_ToDo**(`toDo`, `location?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `toDo` | [`ToDoMD`](../wiki/todos.todo.ToDoMD) |
| `location?` | [`ToDoLocation`](../wiki/todos.todo_location.ToDoLocation) |

#### Defined in

src/todos/obsidian-todo.ts:11

## Properties

### location

• **location**: [`ToDoLocation`](../wiki/todos.todo_location.ToDoLocation)

#### Defined in

src/todos/obsidian-todo.ts:9

___

### toDo

• **toDo**: [`ToDoMD`](../wiki/todos.todo.ToDoMD)

#### Defined in

src/todos/obsidian-todo.ts:8

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

src/todos/obsidian-todo.ts:155

___

### path

• `get` **path**(): `string`

#### Returns

`string`

#### Defined in

src/todos/obsidian-todo.ts:152

## Methods

### identicalTo

▸ **identicalTo**(`other`): `boolean`

tests if this is same to other.
For now it only tests name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`obsidian_ToDo`](../wiki/todos.obsidian-todo.obsidian_ToDo) |

#### Returns

`boolean`

boolean indicating sameness

#### Defined in

src/todos/obsidian-todo.ts:149

___

### missingToDoAttributeKeys

▸ **missingToDoAttributeKeys**(): `string`[]

Calls

#### Returns

`string`[]

a list of keys for missing todos

**`Function`**

missingToDoAttributes and maps its output to the corresponding keys.

#### Defined in

src/todos/obsidian-todo.ts:126

___

### missingToDoAttributes

▸ `Private` **missingToDoAttributes**(): `string`[]

Interface to call the

#### Returns

`string`[]

a list of missing todo attribute basenames.

**`Function`**

missingToDoAttributes function of 
the ToDoMD property of this class.

#### Defined in

src/todos/obsidian-todo.ts:118

___

### fromLine

▸ `Static` **fromLine**(`line`, `location?`): [`obsidian_ToDo`](../wiki/todos.obsidian-todo.obsidian_ToDo)

Takes a line of code and creates a

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `line` | `string` | The line to parse |
| `location?` | [`ToDoLocation`](../wiki/todos.todo_location.ToDoLocation) | Where to find this line in obsidian |

#### Returns

[`obsidian_ToDo`](../wiki/todos.obsidian-todo.obsidian_ToDo)

#### Defined in

src/todos/obsidian-todo.ts:21

___

### getStatus

▸ `Static` **getStatus**(`input`): `string`

Matches the '- [ ]' in a todoline and returns the character within the square brackets, which is the todos status

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

status

#### Defined in

src/todos/obsidian-todo.ts:45

___

### isToDo

▸ `Static` **isToDo**(`line`): `boolean`

Matches the '- [ ]' that precedes any todo and returns a boolea, whether the line is a todo.

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | `string` |

#### Returns

`boolean`

is

#### Defined in

src/todos/obsidian-todo.ts:37

___

### splitIntoAttributes

▸ `Static` **splitIntoAttributes**(`line`): `Record`<`string`, `string`\>

Takes the line of a todo, thats everything after the - [ ] and splits it up into the fields of a

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | `string` |

#### Returns

`Record`<`string`, `string`\>

Dictionary of attributes and values.

#### Defined in

src/todos/obsidian-todo.ts:56

___

### toDoListsIdentical

▸ `Static` **toDoListsIdentical**(`oldToDos`, `newToDos`): `boolean`

Matches two lists of todos by comparing the todos using

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldToDos` | [`obsidian_ToDo`](../wiki/todos.obsidian-todo.obsidian_ToDo)[] |
| `newToDos` | [`obsidian_ToDo`](../wiki/todos.obsidian-todo.obsidian_ToDo)[] |

#### Returns

`boolean`

**`Function`**

identicalTo

#### Defined in

src/todos/obsidian-todo.ts:137
