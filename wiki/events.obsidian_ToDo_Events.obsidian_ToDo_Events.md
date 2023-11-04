# Class: obsidian\_ToDo\_Events

[events/obsidian_ToDo_Events](../wiki/events.obsidian_ToDo_Events).obsidian_ToDo_Events

## Table of contents

### Constructors

- [constructor](../wiki/events.obsidian_ToDo_Events.obsidian_ToDo_Events#constructor)

### Properties

- [obsidianEvents](../wiki/events.obsidian_ToDo_Events.obsidian_ToDo_Events#obsidianevents)

### Methods

- [off](../wiki/events.obsidian_ToDo_Events.obsidian_ToDo_Events#off)
- [onCacheUpdate](../wiki/events.obsidian_ToDo_Events.obsidian_ToDo_Events#oncacheupdate)
- [onRequestCacheUpdate](../wiki/events.obsidian_ToDo_Events.obsidian_ToDo_Events#onrequestcacheupdate)
- [triggerCacheUpdate](../wiki/events.obsidian_ToDo_Events.obsidian_ToDo_Events#triggercacheupdate)
- [triggerRequestCacheUpdate](../wiki/events.obsidian_ToDo_Events.obsidian_ToDo_Events#triggerrequestcacheupdate)

## Constructors

### constructor

• **new obsidian_ToDo_Events**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `obsidianEvents` | `Events` |

#### Defined in

src/events/obsidian_ToDo_Events.ts:22

## Properties

### obsidianEvents

• `Private` **obsidianEvents**: `Events`

#### Defined in

src/events/obsidian_ToDo_Events.ts:20

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

src/events/obsidian_ToDo_Events.ts:42

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

src/events/obsidian_ToDo_Events.ts:26

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

src/events/obsidian_ToDo_Events.ts:34

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

src/events/obsidian_ToDo_Events.ts:30

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

src/events/obsidian_ToDo_Events.ts:38
