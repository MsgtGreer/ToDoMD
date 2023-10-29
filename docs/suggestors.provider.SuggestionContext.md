# Interface: SuggestionContext

[suggestors/provider](../wiki/suggestors.provider).SuggestionContext

## Hierarchy

- `EditorSuggestContext`

  ↳ **`SuggestionContext`**

## Table of contents

### Properties

- [editor](../wiki/suggestors.provider.SuggestionContext#editor)
- [end](../wiki/suggestors.provider.SuggestionContext#end)
- [file](../wiki/suggestors.provider.SuggestionContext#file)
- [query](../wiki/suggestors.provider.SuggestionContext#query)
- [separatorChar](../wiki/suggestors.provider.SuggestionContext#separatorchar)
- [start](../wiki/suggestors.provider.SuggestionContext#start)

## Properties

### editor

• **editor**: `Editor`

#### Inherited from

EditorSuggestContext.editor

#### Defined in

node_modules/obsidian/obsidian.d.ts:1198

___

### end

• **end**: `EditorPosition`

The end position of the triggering text. This is used to position the popover.

#### Inherited from

EditorSuggestContext.end

#### Defined in

node_modules/obsidian/obsidian.d.ts:1214

___

### file

• **file**: `TFile`

#### Inherited from

EditorSuggestContext.file

#### Defined in

node_modules/obsidian/obsidian.d.ts:1200

___

### query

• **query**: `string`

They query string (usually the text between start and end) that will be used to generate the suggestion content.

#### Inherited from

EditorSuggestContext.query

#### Defined in

node_modules/obsidian/obsidian.d.ts:1219

___

### separatorChar

• **separatorChar**: `string`

#### Defined in

[src/suggestors/provider.ts:50](https://github.com/MsgtGreer/ToDoMD/blob/2a10aef/src/suggestors/provider.ts#L50)

___

### start

• **start**: `EditorPosition`

The start position of the triggering text. This is used to position the popover.

#### Inherited from

EditorSuggestContext.start

#### Defined in

node_modules/obsidian/obsidian.d.ts:1209
