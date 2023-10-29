# Class: QueryRenderer

[query/query-renderer](../wiki/query.query-renderer).QueryRenderer

## Table of contents

### Constructors

- [constructor](../wiki/query.query-renderer.QueryRenderer#constructor)

### Properties

- [addQueryRenderChild](../wiki/query.query-renderer.QueryRenderer#addqueryrenderchild)
- [app](../wiki/query.query-renderer.QueryRenderer#app)
- [events](../wiki/query.query-renderer.QueryRenderer#events)

### Methods

- [\_addQueryRenderChild](../wiki/query.query-renderer.QueryRenderer#_addqueryrenderchild)

## Constructors

### constructor

• **new QueryRenderer**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `events` | [`TasksEvents`](../wiki/TasksEvents.TasksEvents) |
| › `plugin` | `Plugin` |

#### Defined in

src/query/query-renderer.ts:13

## Properties

### addQueryRenderChild

• **addQueryRenderChild**: `any`

#### Defined in

src/query/query-renderer.ts:19

___

### app

• `Private` `Readonly` **app**: `App`

#### Defined in

src/query/query-renderer.ts:10

___

### events

• `Private` `Readonly` **events**: [`TasksEvents`](../wiki/TasksEvents.TasksEvents)

#### Defined in

src/query/query-renderer.ts:11

## Methods

### \_addQueryRenderChild

▸ `Private` **_addQueryRenderChild**(`source`, `element`, `context`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `element` | `HTMLElement` |
| `context` | `MarkdownPostProcessorContext` |

#### Returns

`Promise`<`void`\>

#### Defined in

src/query/query-renderer.ts:21
