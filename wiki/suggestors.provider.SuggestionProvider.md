# Interface: SuggestionProvider

[suggestors/provider](../wiki/suggestors.provider).SuggestionProvider

## Table of contents

### Properties

- [blocksAllOtherProviders](../wiki/suggestors.provider.SuggestionProvider#blocksallotherproviders)

### Methods

- [getSuggestions](../wiki/suggestors.provider.SuggestionProvider#getsuggestions)

## Properties

### blocksAllOtherProviders

• `Optional` **blocksAllOtherProviders**: `boolean`

#### Defined in

[src/suggestors/provider.ts:54](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/suggestors/provider.ts#L54)

## Methods

### getSuggestions

▸ **getSuggestions**(`context`, `settings`): [`Suggestion`](../wiki/suggestors.provider.Suggestion)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`SuggestionContext`](../wiki/suggestors.provider.SuggestionContext) |
| `settings` | [`ToDoMDSettings`](../wiki/settings.settings.ToDoMDSettings) |

#### Returns

[`Suggestion`](../wiki/suggestors.provider.Suggestion)[]

#### Defined in

[src/suggestors/provider.ts:56](https://github.com/MsgtGreer/ToDoMD/blob/c649f42/src/suggestors/provider.ts#L56)
