import { Suggestion, SuggestionContext, SuggestionProvider } from "./provider";
import { ToDoMDSettings, intoToDoMDPath } from "../settings/settings";
import { Notice, Vault } from "obsidian";
import ToDoMD, { basenameToKey, basenameToDescription } from "../todos/todo"
import obsidian_ToDo from "../todos/obsidian-todo"


const TODO_ATTRIBUTES_PATH = "todo_attributes.json";
class ToDoSuggestionProvider implements SuggestionProvider {

    private loadedCommands: Suggestion[] = [];
    // this one provides suggestion and applies context filters. It serves as the interface.
    getSuggestions(context: SuggestionContext, settings: ToDoMDSettings): Suggestion[] {
        if (!settings.ToDoProviderEnabled || !context.query)
            return [];
        if (!(context.editor.getRange({ ...context.start, ch: context.end.ch-1 }, { ...context.start, ch: context.end.ch })===" ")){
            return [];
        }
        const editor = context.editor;
        const cursor = context.start;
        
        const line = editor.getLine(cursor.line);

        const isquery = obsidian_ToDo.isToDo(line) ;
        if (!isquery)
            return [];
        
        const todoInstance = obsidian_ToDo.fromLine(line, undefined);
        const missingToDoAttributeKeys = todoInstance.missingToDoAttributeKeys();
        const retval = this.loadedCommands.filter(s => missingToDoAttributeKeys.some(key => key === s.replacement))
                        .map(obj => new Suggestion(obj.displayName, obj.replacement,editor.getCursor()));
        return retval;
    }
    //this one loads the commands that are applicable in context
    async loadToDoFields(vault: Vault) {
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
    const retval = aToDo.attributesList.map(attr => {
        const basename = attr.basename as keyof typeof basenameToKey;
        console.log("BaseName: ",basename)
        return new Suggestion(basenameToKey[basename]+" - "+basenameToDescription[basename],basenameToKey[basename])
    }); 
    console.log("Default Suggestions: ", retval);
    return retval;
}
