import { Editor, EditorPosition } from "obsidian";
import { EditorState, Text } from "@codemirror/state";
import { EditorView } from "@codemirror/view";

export function posFromIndex(doc: Text, offset: number): EditorPosition {
    const line = doc.lineAt(offset)
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
    maxLookBackDistance = 50
): { query: string, separatorChar: string } {

    let query = "", separatorChar = null;
    const line = editor.getLine(cursor.line);
    //console.log(line)
    const todoRegex = /^\s*-\s\[[\s*x-]\]/;
    if(todoRegex.test(line) && editor.getRange({ ...cursor, ch: cursor.ch-1 }, { ...cursor, ch: cursor.ch })===" "){
        query = line;
        separatorChar = " ";
        return { query, separatorChar};
    }    
    // Save some time for very long lines
    const lookBackEnd = Math.max(0, cursor.ch - maxLookBackDistance);
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