# Class: TasksEvents

[TasksEvents](../wiki/TasksEvents).TasksEvents

## Table of contents

### Constructors

- [constructor](../wiki/TasksEvents.TasksEvents#constructor)

### Properties

- [obsidianEvents](../wiki/TasksEvents.TasksEvents#obsidianevents)

### Methods

- [off](../wiki/TasksEvents.TasksEvents#off)
- [onCacheUpdate](../wiki/TasksEvents.TasksEvents#oncacheupdate)
- [onRequestCacheUpdate](../wiki/TasksEvents.TasksEvents#onrequestcacheupdate)
- [triggerCacheUpdate](../wiki/TasksEvents.TasksEvents#triggercacheupdate)
- [triggerRequestCacheUpdate](../wiki/TasksEvents.TasksEvents#triggerrequestcacheupdate)

## Constructors

### constructor

• **new TasksEvents**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `obsidianEvents` | `Events` |

#### Defined in

[src/TasksEvents.ts:23](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/TasksEvents.ts#L23)

## Properties

### obsidianEvents

• `Private` **obsidianEvents**: `Events`

#### Defined in

[src/TasksEvents.ts:21](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/TasksEvents.ts#L21)

## Methods

### off

▸ **off**(`eventRef`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventRef` | `EventRef` |

#### Returns

`void`

#### Defined in

[src/TasksEvents.ts:43](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/TasksEvents.ts#L43)

___

### onCacheUpdate

▸ **onCacheUpdate**(`handler`): `EventRef`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`cacheData`: `CacheUpdateData`) => `void` |

#### Returns

`EventRef`

#### Defined in

[src/TasksEvents.ts:27](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/TasksEvents.ts#L27)

___

### onRequestCacheUpdate

▸ **onRequestCacheUpdate**(`handler`): `EventRef`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`fn`: (`cacheData`: `CacheUpdateData`) => `void`) => `void` |

#### Returns

`EventRef`

#### Defined in

[src/TasksEvents.ts:35](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/TasksEvents.ts#L35)

___

### triggerCacheUpdate

▸ **triggerCacheUpdate**(`cacheData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheData` | `CacheUpdateData` |

#### Returns

`void`

#### Defined in

[src/TasksEvents.ts:31](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/TasksEvents.ts#L31)

___

### triggerRequestCacheUpdate

▸ **triggerRequestCacheUpdate**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`cacheData`: `CacheUpdateData`) => `void` |

#### Returns

`void`

#### Defined in

[src/TasksEvents.ts:39](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/TasksEvents.ts#L39)
