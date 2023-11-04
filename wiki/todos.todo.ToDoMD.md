# Class: ToDoMD

[todos/todo](../wiki/todos.todo).ToDoMD

## Table of contents

### Constructors

- [constructor](../wiki/todos.todo.ToDoMD#constructor)

### Properties

- [attributesList](../wiki/todos.todo.ToDoMD#attributeslist)
- [context](../wiki/todos.todo.ToDoMD#context)
- [description](../wiki/todos.todo.ToDoMD#description)
- [duedate](../wiki/todos.todo.ToDoMD#duedate)
- [importance](../wiki/todos.todo.ToDoMD#importance)
- [keysList](../wiki/todos.todo.ToDoMD#keyslist)
- [parent](../wiki/todos.todo.ToDoMD#parent)
- [responsible](../wiki/todos.todo.ToDoMD#responsible)
- [status](../wiki/todos.todo.ToDoMD#status)
- [tag](../wiki/todos.todo.ToDoMD#tag)
- [todoname](../wiki/todos.todo.ToDoMD#todoname)

### Methods

- [getContext](../wiki/todos.todo.ToDoMD#getcontext)
- [getDescription](../wiki/todos.todo.ToDoMD#getdescription)
- [getDueDate](../wiki/todos.todo.ToDoMD#getduedate)
- [getImportance](../wiki/todos.todo.ToDoMD#getimportance)
- [getName](../wiki/todos.todo.ToDoMD#getname)
- [getParent](../wiki/todos.todo.ToDoMD#getparent)
- [getResponsible](../wiki/todos.todo.ToDoMD#getresponsible)
- [getStatus](../wiki/todos.todo.ToDoMD#getstatus)
- [getTag](../wiki/todos.todo.ToDoMD#gettag)
- [isImportance](../wiki/todos.todo.ToDoMD#isimportance)
- [missingToDoAttributes](../wiki/todos.todo.ToDoMD#missingtodoattributes)

## Constructors

### constructor

• **new ToDoMD**(`attributes?`): [`ToDoMD`](../wiki/todos.todo.ToDoMD)

The ToDo class can be constructed either in a blank state or with a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes?` | `Record`\<`string`, `string`\> |

#### Returns

[`ToDoMD`](../wiki/todos.todo.ToDoMD)

#### Defined in

[src/todos/todo.ts:82](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L82)

## Properties

### attributesList

• **attributesList**: `todoAttribute`[]

#### Defined in

[src/todos/todo.ts:68](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L68)

___

### context

• `Private` **context**: `todoAttribute`

#### Defined in

[src/todos/todo.ts:64](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L64)

___

### description

• `Private` **description**: `todoAttribute`

#### Defined in

[src/todos/todo.ts:62](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L62)

___

### duedate

• `Private` **duedate**: `todoAttribute`

#### Defined in

[src/todos/todo.ts:66](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L66)

___

### importance

• `Private` **importance**: `todoAttribute`

#### Defined in

[src/todos/todo.ts:59](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L59)

___

### keysList

• `Private` **keysList**: `basenameToKey`[]

#### Defined in

[src/todos/todo.ts:77](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L77)

___

### parent

• `Private` **parent**: `todoAttribute`

#### Defined in

[src/todos/todo.ts:63](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L63)

___

### responsible

• `Private` **responsible**: `todoAttribute`

#### Defined in

[src/todos/todo.ts:60](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L60)

___

### status

• `Private` **status**: `string` = `""`

#### Defined in

[src/todos/todo.ts:58](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L58)

___

### tag

• `Private` **tag**: `todoAttribute`

#### Defined in

[src/todos/todo.ts:65](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L65)

___

### todoname

• `Private` **todoname**: `todoAttribute`

#### Defined in

[src/todos/todo.ts:61](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L61)

## Methods

### getContext

▸ **getContext**(): `string`

#### Returns

`string`

#### Defined in

[src/todos/todo.ts:131](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L131)

___

### getDescription

▸ **getDescription**(): `string`

#### Returns

`string`

#### Defined in

[src/todos/todo.ts:123](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L123)

___

### getDueDate

▸ **getDueDate**(): `string`

#### Returns

`string`

#### Defined in

[src/todos/todo.ts:139](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L139)

___

### getImportance

▸ **getImportance**(): `string`

#### Returns

`string`

#### Defined in

[src/todos/todo.ts:111](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L111)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Defined in

[src/todos/todo.ts:119](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L119)

___

### getParent

▸ **getParent**(): `string`

#### Returns

`string`

#### Defined in

[src/todos/todo.ts:127](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L127)

___

### getResponsible

▸ **getResponsible**(): `string`

#### Returns

`string`

#### Defined in

[src/todos/todo.ts:115](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L115)

___

### getStatus

▸ **getStatus**(): `string`

#### Returns

`string`

#### Defined in

[src/todos/todo.ts:107](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L107)

___

### getTag

▸ **getTag**(): `string`

#### Returns

`string`

#### Defined in

[src/todos/todo.ts:135](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L135)

___

### isImportance

▸ **isImportance**(`line`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | `string` |

#### Returns

`void`

#### Defined in

[src/todos/todo.ts:142](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L142)

___

### missingToDoAttributes

▸ **missingToDoAttributes**(): `string`[]

Checks all of the attributes of this todo as gatherd in @this.attributesList and finds the attributes with empty values.

#### Returns

`string`[]

A list of Keys for empty ToDo attributes.

#### Defined in

[src/todos/todo.ts:101](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/todos/todo.ts#L101)
