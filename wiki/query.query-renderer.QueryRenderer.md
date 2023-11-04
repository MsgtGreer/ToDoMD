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

• **new QueryRenderer**(`«destructured»`): [`QueryRenderer`](../wiki/query.query-renderer.QueryRenderer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `events` | [`obsidian_ToDo_Events`](../wiki/events.obsidian_ToDo_Events.obsidian_ToDo_Events) |
| › `plugin` | `Plugin` |

#### Returns

[`QueryRenderer`](../wiki/query.query-renderer.QueryRenderer)

#### Defined in

[src/query/query-renderer.ts:13](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/query/query-renderer.ts#L13)

## Properties

### addQueryRenderChild

• **addQueryRenderChild**: `any`

#### Defined in

[src/query/query-renderer.ts:19](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/query/query-renderer.ts#L19)

___

### app

• `Private` `Readonly` **app**: `App`

#### Defined in

[src/query/query-renderer.ts:10](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/query/query-renderer.ts#L10)

___

### events

• `Private` `Readonly` **events**: [`obsidian_ToDo_Events`](../wiki/events.obsidian_ToDo_Events.obsidian_ToDo_Events)

#### Defined in

[src/query/query-renderer.ts:11](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/query/query-renderer.ts#L11)

## Methods

### \_addQueryRenderChild

▸ **_addQueryRenderChild**(`source`, `element`, `context`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `element` | `HTMLElement` |
| `context` | `MarkdownPostProcessorContext` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/query/query-renderer.ts:21](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/query/query-renderer.ts#L21)
