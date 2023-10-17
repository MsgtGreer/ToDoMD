import { Suggestion, SuggestionContext, SuggestionProvider } from "./provider";
import { ToDoMDSettings, intoToDoMDPath } from "../settings";
import { Notice, Vault } from "obsidian";
import ToDoMD from "../todo"


const TODO_ATTRIBUTES_PATH = "todo_attributes.json";
class ToDoSuggestionProvider implements SuggestionProvider {

    private loadedCommands: Suggestion[] = [];
    // this one provides suggestion and applies context filters. It serves as the interface.
    getSuggestions(context: SuggestionContext, settings: ToDoMDSettings): Suggestion[] {
        //console.log("Requesting ToDo Suggestions")
        if (!settings.ToDoProviderEnabled || !context.query)
            return [];
        if (!(context.editor.getRange({ ...context.start, ch: context.end.ch-1 }, { ...context.start, ch: context.end.ch })===" ")){
            return [];
        }
        const editor = context.editor;
        const cursor = context.start;
        
        const line = editor.getLine(cursor.line);

        const isquery = verifyIfLineIsTaks(line) ;
        if (!isquery)
            return [];
        
        const todoInstance = new ToDoMD();
        todoInstance.parseToDo(line);
        const missingToDoAttributeKeys = todoInstance.missingToDoAttributeKeys();
        //console.log("ToDo is missing: ",missingToDoAttributeKeys);
        //console.log("Nown Suggestions: ", this.loadedCommands.map(s => s.replacement));
        const retval = this.loadedCommands.filter(s => missingToDoAttributeKeys.some(key => key === s.replacement))
                        .map(obj => new Suggestion(obj.displayName, obj.replacement,editor.getCursor()));
        //console.log("Hence I suggest: ",retval);
        //console.log(retval);
        return retval;
    }
    //this one loads the commands that are applicable in context
    async loadToDoFields(vault: Vault) {
        //console.log("Loading ToDoFiels...")
        const path = intoToDoMDPath(vault, TODO_ATTRIBUTES_PATH);
        if (!(await vault.adapter.exists(path))) {
            const defaultCommands = generateDefaultToDoSuggestions();
            await vault.adapter.write(path, JSON.stringify(defaultCommands, null, 2));
            this.loadedCommands = defaultCommands;
        } else {
            const data = await vault.adapter.read(path);
            try {
                const commands: Suggestion[] = (JSON.parse(data) as any[])
                    .map(obj => typeof obj === "string" ?
                        Suggestion.fromString(obj) :
                        new Suggestion(obj.displayName, obj.replacement)
                    );
                const invalidCommand = commands.find(c => c.displayName.includes("\n"));
                if (invalidCommand)
                    throw new Error("Display name cannot contain a newline: " + invalidCommand.displayName);

                this.loadedCommands = commands;
            } catch (e) {
                console.log("ToDo attributes can't parse error:", e.message);
                new Notice("Failed to parse ToDo attributes file " + path + ". Using default commands.", 3000);
                this.loadedCommands = generateDefaultToDoSuggestions();
            }
        }
    }
}

export const ToDo = new ToDoSuggestionProvider();


/*
 * Generates the default todo suggestions. This is a method to avoid any unnecessary initialization
 */
function generateDefaultToDoSuggestions(): Suggestion[] {
    const aToDo = new ToDoMD();
    return aToDo.attributesList.map(attr => new Suggestion(attr.key+" - "+attr.description,attr.key));
}

function verifyIfLineIsTaks(line: string): boolean{
    const taskRegex = /^\s*-\s\[[\s*x-]\]/;
    return taskRegex.test(line);     
} 

