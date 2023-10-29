# Class: ToDoMD

[todo](../wiki/todo).ToDoMD

## Table of contents

### Constructors

- [constructor](../wiki/todo.ToDoMD#constructor)

### Properties

- [attributesList](../wiki/todo.ToDoMD#attributeslist)
- [context](../wiki/todo.ToDoMD#context)
- [description](../wiki/todo.ToDoMD#description)
- [duedate](../wiki/todo.ToDoMD#duedate)
- [importance](../wiki/todo.ToDoMD#importance)
- [keysList](../wiki/todo.ToDoMD#keyslist)
- [parent](../wiki/todo.ToDoMD#parent)
- [responsible](../wiki/todo.ToDoMD#responsible)
- [status](../wiki/todo.ToDoMD#status)
- [tag](../wiki/todo.ToDoMD#tag)
- [todoname](../wiki/todo.ToDoMD#todoname)

### Methods

- [getContext](../wiki/todo.ToDoMD#getcontext)
- [getDescription](../wiki/todo.ToDoMD#getdescription)
- [getDueDate](../wiki/todo.ToDoMD#getduedate)
- [getImportance](../wiki/todo.ToDoMD#getimportance)
- [getName](../wiki/todo.ToDoMD#getname)
- [getParent](../wiki/todo.ToDoMD#getparent)
- [getResponsible](../wiki/todo.ToDoMD#getresponsible)
- [getStatus](../wiki/todo.ToDoMD#getstatus)
- [getTag](../wiki/todo.ToDoMD#gettag)
- [isImportance](../wiki/todo.ToDoMD#isimportance)
- [missingToDoAttributes](../wiki/todo.ToDoMD#missingtodoattributes)

## Constructors

### constructor

• **new ToDoMD**(`attributes?`)

The ToDo class can be constructed either in a blank state or with a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes?` | `Record`<`string`, `string`\> |

#### Defined in

[src/todo.ts:84](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L84)

## Properties

### attributesList

• **attributesList**: `todoAttribute`[]

#### Defined in

[src/todo.ts:70](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L70)

___

### context

• `Private` **context**: `todoAttribute`

#### Defined in

[src/todo.ts:66](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L66)

___

### description

• `Private` **description**: `todoAttribute`

#### Defined in

[src/todo.ts:64](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L64)

___

### duedate

• `Private` **duedate**: `todoAttribute`

#### Defined in

[src/todo.ts:68](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L68)

___

### importance

• `Private` **importance**: `todoAttribute`

#### Defined in

[src/todo.ts:61](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L61)

___

### keysList

• `Private` **keysList**: `basenameToKey`[]

#### Defined in

[src/todo.ts:79](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L79)

___

### parent

• `Private` **parent**: `todoAttribute`

#### Defined in

[src/todo.ts:65](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L65)

___

### responsible

• `Private` **responsible**: `todoAttribute`

#### Defined in

[src/todo.ts:62](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L62)

___

### status

• `Private` **status**: `string` = `""`

#### Defined in

[src/todo.ts:60](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L60)

___

### tag

• `Private` **tag**: `todoAttribute`

#### Defined in

[src/todo.ts:67](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L67)

___

### todoname

• `Private` **todoname**: `todoAttribute`

#### Defined in

[src/todo.ts:63](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L63)

## Methods

### getContext

▸ **getContext**(): `string`

#### Returns

`string`

#### Defined in

[src/todo.ts:133](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L133)

___

### getDescription

▸ **getDescription**(): `string`

#### Returns

`string`

#### Defined in

[src/todo.ts:125](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L125)

___

### getDueDate

▸ **getDueDate**(): `string`

#### Returns

`string`

#### Defined in

[src/todo.ts:141](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L141)

___

### getImportance

▸ **getImportance**(): `string`

#### Returns

`string`

#### Defined in

[src/todo.ts:113](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L113)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Defined in

[src/todo.ts:121](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L121)

___

### getParent

▸ **getParent**(): `string`

#### Returns

`string`

#### Defined in

[src/todo.ts:129](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L129)

___

### getResponsible

▸ **getResponsible**(): `string`

#### Returns

`string`

#### Defined in

[src/todo.ts:117](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L117)

___

### getStatus

▸ **getStatus**(): `string`

#### Returns

`string`

#### Defined in

[src/todo.ts:109](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L109)

___

### getTag

▸ **getTag**(): `string`

#### Returns

`string`

#### Defined in

[src/todo.ts:137](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L137)

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

[src/todo.ts:144](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L144)

___

### missingToDoAttributes

▸ **missingToDoAttributes**(): `string`[]

Checks all of the attributes of this todo as gatherd in @this.attributesList and finds the attributes with empty values.

#### Returns

`string`[]

A list of Keys for empty ToDo attributes.

#### Defined in

[src/todo.ts:103](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/todo.ts#L103)
