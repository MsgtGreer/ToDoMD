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

• **new Cache**(`«destructured»`): [`Cache`](../wiki/caching.Cache.Cache)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `events` | [`obsidian_ToDo_Events`](../wiki/events.obsidian_ToDo_Events.obsidian_ToDo_Events) |
| › `metadataCache` | `MetadataCache` |
| › `vault` | `Vault` |

#### Returns

[`Cache`](../wiki/caching.Cache.Cache)

#### Defined in

[src/caching/Cache.ts:36](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L36)

## Properties

### ToDos

• `Private` **ToDos**: [`obsidian_ToDo`](../wiki/todos.obsidian-todo.obsidian_ToDo)[]

#### Defined in

[src/caching/Cache.ts:24](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L24)

___

### events

• `Private` `Readonly` **events**: [`obsidian_ToDo_Events`](../wiki/events.obsidian_ToDo_Events.obsidian_ToDo_Events)

#### Defined in

[src/caching/Cache.ts:19](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L19)

___

### eventsEventReferences

• `Private` `Readonly` **eventsEventReferences**: `EventRef`[]

#### Defined in

[src/caching/Cache.ts:20](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L20)

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

[src/caching/Cache.ts:34](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L34)

___

### metadataCache

• `Private` `Readonly` **metadataCache**: `MetadataCache`

#### Defined in

[src/caching/Cache.ts:15](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L15)

___

### metadataCacheEventReferences

• `Private` `Readonly` **metadataCacheEventReferences**: `EventRef`[]

#### Defined in

[src/caching/Cache.ts:16](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L16)

___

### state

• `Private` **state**: [`State`](../wiki/caching.Cache.State)

#### Defined in

[src/caching/Cache.ts:23](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L23)

___

### toDosMutex

• `Private` `Readonly` **toDosMutex**: `Mutex`

#### Defined in

[src/caching/Cache.ts:22](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L22)

___

### vault

• `Private` `Readonly` **vault**: `Vault`

#### Defined in

[src/caching/Cache.ts:17](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L17)

___

### vaultEventReferences

• `Private` `Readonly` **vaultEventReferences**: `EventRef`[]

#### Defined in

[src/caching/Cache.ts:18](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L18)

## Methods

### getState

▸ **getState**(): [`State`](../wiki/caching.Cache.State)

#### Returns

[`State`](../wiki/caching.Cache.State)

#### Defined in

[src/caching/Cache.ts:75](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L75)

___

### getToDos

▸ **getToDos**(): [`obsidian_ToDo`](../wiki/todos.obsidian-todo.obsidian_ToDo)[]

#### Returns

[`obsidian_ToDo`](../wiki/todos.obsidian-todo.obsidian_ToDo)[]

#### Defined in

[src/caching/Cache.ts:71](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L71)

___

### getToDosFromFileContent

▸ **getToDosFromFileContent**(`fileContent`, `listItems`, `fileCache`, `file`): [`obsidian_ToDo`](../wiki/todos.obsidian-todo.obsidian_ToDo)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileContent` | `string` |
| `listItems` | `ListItemCache`[] |
| `fileCache` | `CachedMetadata` |
| `file` | `TFile` |

#### Returns

[`obsidian_ToDo`](../wiki/todos.obsidian-todo.obsidian_ToDo)[]

#### Defined in

[src/caching/Cache.ts:216](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L216)

___

### indexFile

▸ **indexFile**(`file`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `TFile` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/caching/Cache.ts:177](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L177)

___

### loadVault

▸ **loadVault**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/caching/Cache.ts:163](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L163)

___

### notifySubscribers

▸ **notifySubscribers**(): `void`

#### Returns

`void`

#### Defined in

[src/caching/Cache.ts:79](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L79)

___

### reportToDoParsingErrorToUser

▸ **reportToDoParsingErrorToUser**(`e`, `file`, `listItem`, `line`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `unknown` |
| `file` | `TFile` |
| `listItem` | `ListItemCache` |
| `line` | `string` |

#### Returns

`void`

#### Defined in

[src/caching/Cache.ts:295](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L295)

___

### subscribeToCache

▸ **subscribeToCache**(): `void`

#### Returns

`void`

#### Defined in

[src/caching/Cache.ts:86](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L86)

___

### subscribeToEvents

▸ **subscribeToEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/caching/Cache.ts:156](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L156)

___

### subscribeToVault

▸ **subscribeToVault**(): `void`

#### Returns

`void`

#### Defined in

[src/caching/Cache.ts:106](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L106)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Defined in

[src/caching/Cache.ts:57](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L57)

___

### getPrecedingHeader

▸ **getPrecedingHeader**(`lineNumberToDo`, `headings`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineNumberToDo` | `number` |
| `headings` | `HeadingCache`[] |

#### Returns

`string`

#### Defined in

[src/caching/Cache.ts:330](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L330)

___

### getSection

▸ **getSection**(`lineNumberToDo`, `sections`): `SectionCache`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineNumberToDo` | `number` |
| `sections` | `SectionCache`[] |

#### Returns

`SectionCache`

#### Defined in

[src/caching/Cache.ts:316](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/caching/Cache.ts#L316)
