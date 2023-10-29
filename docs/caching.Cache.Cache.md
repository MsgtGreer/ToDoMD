# Class: Cache

[caching/Cache](../wiki/caching.Cache).Cache

## Table of contents

### Constructors

- [constructor](../wiki/caching.Cache.Cache#constructor)

### Properties

- [ToDos](../wiki/caching.Cache.Cache#todos)
- [events](../wiki/caching.Cache.Cache#events)
- [eventsEventReferences](../wiki/caching.Cache.Cache#eventseventreferences)
- [loadedAfterFirstResolve](../wiki/caching.Cache.Cache#loadedafterfirstresolve)
- [metadataCache](../wiki/caching.Cache.Cache#metadatacache)
- [metadataCacheEventReferences](../wiki/caching.Cache.Cache#metadatacacheeventreferences)
- [state](../wiki/caching.Cache.Cache#state)
- [toDosMutex](../wiki/caching.Cache.Cache#todosmutex)
- [vault](../wiki/caching.Cache.Cache#vault)
- [vaultEventReferences](../wiki/caching.Cache.Cache#vaulteventreferences)

### Methods

- [getState](../wiki/caching.Cache.Cache#getstate)
- [getToDos](../wiki/caching.Cache.Cache#gettodos)
- [getToDosFromFileContent](../wiki/caching.Cache.Cache#gettodosfromfilecontent)
- [indexFile](../wiki/caching.Cache.Cache#indexfile)
- [loadVault](../wiki/caching.Cache.Cache#loadvault)
- [notifySubscribers](../wiki/caching.Cache.Cache#notifysubscribers)
- [reportToDoParsingErrorToUser](../wiki/caching.Cache.Cache#reporttodoparsingerrortouser)
- [subscribeToCache](../wiki/caching.Cache.Cache#subscribetocache)
- [subscribeToEvents](../wiki/caching.Cache.Cache#subscribetoevents)
- [subscribeToVault](../wiki/caching.Cache.Cache#subscribetovault)
- [unload](../wiki/caching.Cache.Cache#unload)
- [getPrecedingHeader](../wiki/caching.Cache.Cache#getprecedingheader)
- [getSection](../wiki/caching.Cache.Cache#getsection)

## Constructors

### constructor

• **new Cache**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `events` | [`TasksEvents`](../wiki/TasksEvents.TasksEvents) |
| › `metadataCache` | `MetadataCache` |
| › `vault` | `Vault` |

#### Defined in

[src/caching/Cache.ts:40](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L40)

## Properties

### ToDos

• `Private` **ToDos**: [`obsidian_ToDo`](../wiki/obsidian-todo.obsidian_ToDo)[]

#### Defined in

[src/caching/Cache.ts:28](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L28)

___

### events

• `Private` `Readonly` **events**: [`TasksEvents`](../wiki/TasksEvents.TasksEvents)

#### Defined in

[src/caching/Cache.ts:23](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L23)

___

### eventsEventReferences

• `Private` `Readonly` **eventsEventReferences**: `EventRef`[]

#### Defined in

[src/caching/Cache.ts:24](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L24)

___

### loadedAfterFirstResolve

• `Private` **loadedAfterFirstResolve**: `boolean`

We cannot know if this class will be instantiated because obsidian started
or because the plugin was activated later. This means we have to load the
whole vault once after the first metadata cache resolve to ensure that we
load the entire vault in case obsidian is starting up. In the case of
obsidian starting, the todo cache's initial load would end up with 0 todos,
as the metadata cache would still be empty.

#### Defined in

[src/caching/Cache.ts:38](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L38)

___

### metadataCache

• `Private` `Readonly` **metadataCache**: `MetadataCache`

#### Defined in

[src/caching/Cache.ts:19](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L19)

___

### metadataCacheEventReferences

• `Private` `Readonly` **metadataCacheEventReferences**: `EventRef`[]

#### Defined in

[src/caching/Cache.ts:20](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L20)

___

### state

• `Private` **state**: [`State`](../wiki/caching.Cache.State)

#### Defined in

[src/caching/Cache.ts:27](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L27)

___

### toDosMutex

• `Private` `Readonly` **toDosMutex**: `Mutex`

#### Defined in

[src/caching/Cache.ts:26](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L26)

___

### vault

• `Private` `Readonly` **vault**: `Vault`

#### Defined in

[src/caching/Cache.ts:21](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L21)

___

### vaultEventReferences

• `Private` `Readonly` **vaultEventReferences**: `EventRef`[]

#### Defined in

[src/caching/Cache.ts:22](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L22)

## Methods

### getState

▸ **getState**(): [`State`](../wiki/caching.Cache.State)

#### Returns

[`State`](../wiki/caching.Cache.State)

#### Defined in

[src/caching/Cache.ts:79](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L79)

___

### getToDos

▸ **getToDos**(): [`obsidian_ToDo`](../wiki/obsidian-todo.obsidian_ToDo)[]

#### Returns

[`obsidian_ToDo`](../wiki/obsidian-todo.obsidian_ToDo)[]

#### Defined in

[src/caching/Cache.ts:75](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L75)

___

### getToDosFromFileContent

▸ `Private` **getToDosFromFileContent**(`fileContent`, `listItems`, `fileCache`, `file`): [`obsidian_ToDo`](../wiki/obsidian-todo.obsidian_ToDo)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileContent` | `string` |
| `listItems` | `ListItemCache`[] |
| `fileCache` | `CachedMetadata` |
| `file` | `TFile` |

#### Returns

[`obsidian_ToDo`](../wiki/obsidian-todo.obsidian_ToDo)[]

#### Defined in

[src/caching/Cache.ts:239](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L239)

___

### indexFile

▸ `Private` **indexFile**(`file`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `TFile` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/caching/Cache.ts:181](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L181)

___

### loadVault

▸ `Private` **loadVault**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/caching/Cache.ts:167](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L167)

___

### notifySubscribers

▸ `Private` **notifySubscribers**(): `void`

#### Returns

`void`

#### Defined in

[src/caching/Cache.ts:83](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L83)

___

### reportToDoParsingErrorToUser

▸ `Private` **reportToDoParsingErrorToUser**(`e`, `file`, `listItem`, `line`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |
| `file` | `TFile` |
| `listItem` | `ListItemCache` |
| `line` | `string` |

#### Returns

`void`

#### Defined in

[src/caching/Cache.ts:318](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L318)

___

### subscribeToCache

▸ `Private` **subscribeToCache**(): `void`

#### Returns

`void`

#### Defined in

[src/caching/Cache.ts:90](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L90)

___

### subscribeToEvents

▸ `Private` **subscribeToEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/caching/Cache.ts:160](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L160)

___

### subscribeToVault

▸ `Private` **subscribeToVault**(): `void`

#### Returns

`void`

#### Defined in

[src/caching/Cache.ts:110](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L110)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Defined in

[src/caching/Cache.ts:61](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L61)

___

### getPrecedingHeader

▸ `Static` `Private` **getPrecedingHeader**(`lineNumberTask`, `headings`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineNumberTask` | `number` |
| `headings` | `HeadingCache`[] |

#### Returns

`string`

#### Defined in

[src/caching/Cache.ts:361](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L361)

___

### getSection

▸ `Static` `Private` **getSection**(`lineNumberTask`, `sections`): `SectionCache`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineNumberTask` | `number` |
| `sections` | `SectionCache`[] |

#### Returns

`SectionCache`

#### Defined in

[src/caching/Cache.ts:347](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/caching/Cache.ts#L347)
