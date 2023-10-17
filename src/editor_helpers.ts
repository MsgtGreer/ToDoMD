import { Editor, EditorPosition } from "obsidian";
import { EditorState, Text } from "@codemirror/state";
import { EditorView } from "@codemirror/view";

export function posFromIndex(doc: Text, offset: number): EditorPosition {
    let line = doc.lineAt(offset)
    return { line: line.number - 1, ch: offset - line.from }
}

export function indexFromPos(doc: Text, pos: EditorPosition): number {
    const ch = pos.ch;
    const line = doc.line(pos.line + 1);
    return Math.min(line.from + Math.max(0, ch), line.to)
}

export function editorToCodeMirrorState(editor: Editor): EditorState {
    return (editor as any).cm.state;
}

export function editorToCodeMirrorView(editor: Editor): EditorView {
    return (editor as any).cm;
}

export function maybeLowerCase(str: string, lowerCase: boolean): string {
    return lowerCase ? str.toLowerCase() : str;
}

export function matchWordBackwards(
    editor: Editor,
    cursor: EditorPosition,
    charPredicate: (char: string) => boolean,
    maxLookBackDistance: number = 50
): { query: string, separatorChar: string } {

    let query = "", separatorChar = null;
    const line = editor.getLine(cursor.line);
    //console.log(line)
    const taskRegex = /^\s*-\s\[[\s*x-]\]/;
    if(taskRegex.test(line) && editor.getRange({ ...cursor, ch: cursor.ch-1 }, { ...cursor, ch: cursor.ch })===" "){
        //new Notice('Found a task');
        //console.log("Task Line found, current line: ",cursor.line," current cursorpos: ",cursor.ch, "Last sign was: ",editor.getRange({ ...cursor, ch: cursor.ch-1 }, { ...cursor, ch: cursor.ch }))
        query = line;
        separatorChar = " ";
        return { query, separatorChar};
    }    
    // Save some time for very long lines
    let lookBackEnd = Math.max(0, cursor.ch - maxLookBackDistance);
    // Find word in front of cursor
    for (let i = cursor.ch - 1; i >= lookBackEnd; i--) {
        const prevChar = editor.getRange({ ...cursor, ch: i }, { ...cursor, ch: i + 1 });
        if (!charPredicate(prevChar)) {
            separatorChar = prevChar;
            break;
        }
        query = prevChar + query;
    }
    return { query, separatorChar };
}

export function isInFrontMatterBlock(editor: Editor, pos: EditorPosition): boolean {
    if (pos.line === 0)
        return false;

    const bounds = getFrontMatterBounds(editor);
    if (!bounds)
        return false;

    return pos.line > bounds.startLine && pos.line < bounds.endLine;
}

function getFrontMatterBounds(editor: Editor): { startLine: number, endLine: number } {
    let startLine = -1;
    // Find start within first 5 lines
    for (let i = 0; i < Math.min(5, editor.lastLine()); i++) {
        if (editor.getLine(i) !== "---")
            continue;
        startLine = i;
        break;
    }

    if (startLine === -1)
        return null;

    let endLine = -1;
    // Find end within next 50 lines
    for (let i = startLine + 1; i <= Math.min(50, editor.lastLine()); i++) {
        if (editor.getLine(i) !== "---")
            continue;
        endLine = i;
        break;
    }

    if (endLine === -1)
        return null;

    return { startLine, endLine };
}

export class BlockType {
    public static DOLLAR_MULTI = new BlockType("$$", true);
    public static DOLLAR_SINGLE = new BlockType("$", false, BlockType.DOLLAR_MULTI);
    public static CODE_MULTI = new BlockType("```", true);
    public static CODE_SINGLE = new BlockType("`", false, BlockType.CODE_MULTI);

    static {
        BlockType.DOLLAR_MULTI.otherType0 = BlockType.DOLLAR_SINGLE;
        BlockType.CODE_MULTI.otherType0 = BlockType.CODE_SINGLE;
    }

    public static SINGLE_TYPES = [BlockType.DOLLAR_SINGLE, BlockType.CODE_SINGLE];

    constructor(public readonly c: string, public readonly isMultiLine: boolean, private otherType0: BlockType = null) {
    }

    public get isDollarBlock(): boolean {
        return this === BlockType.DOLLAR_SINGLE || this === BlockType.DOLLAR_MULTI;
    }

    public get isCodeBlock(): boolean {
        return !this.isDollarBlock;
    }

    public get otherType(): BlockType {
        return this.otherType0;
    }
}

export function getLatexBlockType(editor: Editor, cursorPos: EditorPosition, triggerInCodeBlocks: boolean): BlockType | null {
    // get bounds of the yaml frontmatter.
    const frontMatterBounds = getFrontMatterBounds(editor) ?? { startLine: -1, endLine: -1 };
    // for ? 
    const blockTypeStack: { type: BlockType, line: number }[] = [];
    // from 0 or 5000 lines ago, until the current cursor position loop over the lines
    for (let lineIndex = Math.max(0, cursorPos.line - 5000); lineIndex <= cursorPos.line; lineIndex++) {
        // if the line is part of the front-matter, ignore it.
        if (lineIndex >= frontMatterBounds.startLine && lineIndex <= frontMatterBounds.endLine)
            continue;
        // if it is part of the body, get the actual line.
        const line = editor.getLine(lineIndex);
        // loop over all the character in the line.
        for (let j = cursorPos.line == lineIndex ? cursorPos.ch - 1 : line.length - 1; j >= 0; j--) {
            //get the current character
            const currentChar = line.charAt(j);
            // it think this next part should check if we are in a single line block.
            //? BlockType.SINGLE_TYPES is a list of BlockTypes, consisting of single code and single latex block.
            // .fing looks for a blocktype where the constructor argument c (c is the block delimiter, eihter '`' or '$') is equal to the currentChar
            let matchingBlockType = BlockType.SINGLE_TYPES.find((b) => b.c.charAt(0) === currentChar);
            //if no single block is found, or the line is a comment, continue
            if (!matchingBlockType || line.charAt(Math.max(0, j - 1)) === '\\')
                continue;
            // get the corresponding multi line name to the block type specifier found.
            const multiTypeLength = matchingBlockType.otherType.c.length;
            // figure if we actually have a multiline type
            const isDouble = j + 1 >= multiTypeLength && substringMatches(line, matchingBlockType.otherType.c, j - multiTypeLength + 1);
            if (isDouble) {
                j -= multiTypeLength - 1;
                matchingBlockType = matchingBlockType.otherType;
            }
            // now push the current block type on a stack of blocks found.
            blockTypeStack.push({ type: matchingBlockType, line: lineIndex });
        }
    }
    //if no blocks found, return null
    if (blockTypeStack.length < 1)
        return null;
    // now loop over all blocks found.
    let currentIndex = 0;
    while (true) {
        // out of the block stack? retunr null
        if (currentIndex >= blockTypeStack.length)
            return null;
        // find the corresponding end of the block delimiter
        const currentBlock = blockTypeStack[currentIndex];
        const otherBlockIndex = indexOf(blockTypeStack, ({ type }) => type === currentBlock.type, currentIndex + 1);
        // if none can be found, this is the block we are currently in.
        if (otherBlockIndex === -1) {
            if (!triggerInCodeBlocks && currentBlock.type.isCodeBlock)
                return null;
            if (currentBlock.type.isCodeBlock || (currentBlock.type === BlockType.DOLLAR_SINGLE && currentBlock.line !== cursorPos.line)) {
                currentIndex++;
                continue;
            }

            return currentBlock.type;
        } else {
            currentIndex = otherBlockIndex + 1;
        }
    }
}

function indexOf<T>(arr: T[], predicate: (element: T) => boolean, fromIndex: number = 0): number {
    for (let i = fromIndex; i < arr.length; i++) {
        if (predicate(arr[i]))
            return i;
    }

    return -1;
}

function substringMatches(str: string, toMatch: string, from: number): boolean {
    const bound = from + toMatch.length - 1;
    for (let i = from; i < bound; i++) {
        if (str.charAt(i) !== toMatch.charAt(i - from))
            return false;
    }

    return true;
}
