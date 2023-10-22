import type { ToDoLocation } from './todo_location';
import ToDoMD, { basenameToKey, basenameToRegExp } from './todo'
/**
 * implements a todo as used by obsidian for the various operations.
 *  It provides interfaces for caching, suggestions etc.
 */
export default class obsidian_ToDo{
    public toDo: ToDoMD;
    public location: ToDoLocation | null;

    constructor(toDo: ToDoMD, location?: ToDoLocation){
        this.toDo = toDo;
        this.location = location||null;
    }
    /**
     * Takes a line of code and creates a @class obsidian_ToDo from it.
     * @param line The line to parse
     * @param location Where to find this line in obsidian
     * @returns @class obsidain_ToDoMD
     */
    public static fromLine(line: string, location?: ToDoLocation): obsidian_ToDo | null{
        if(!obsidian_ToDo.isToDo(line)){
            return new obsidian_ToDo(new ToDoMD);
        }
        const status = obsidian_ToDo.getStatus(line)
        const strippedLine = line.replace(obsidian_ToDoRegexes.matchToDoStart,"");
        const attributes = obsidian_ToDo.splitIntoAttributes(strippedLine);
        attributes["status"] = status;
        const returnToDo = new obsidian_ToDo(new ToDoMD(attributes), location);
        return returnToDo;        
    }
    /**
     * Matches the '- [ ]' that precedes any todo and returns a boolea, whether the line is a todo.
     * @param line 
     * @returns is @param line is a todo
     */
    public static isToDo(line: string){
        return obsidian_ToDoRegexes.matchToDoStart.test(line);
    }
    /**
     * Matches the '- [ ]' in a todoline and returns the character within the square brackets, which is the todos status
     * @param input 
     * @returns status 
     */
    public static getStatus(input: string): string{
        const regex =obsidian_ToDoRegexes.matchToDoStatus;
        const result = input.replace(regex, (match, capturedChar) => capturedChar);
        const status = result.charAt(0);
        return status;
    }
    /**
     * Takes the line of a todo, thats everything after the - [ ] and splits it up into the fields of a @class ToDoMD
     * @param line 
     * @returns Dictionary of attributes and values.
     */
    public static splitIntoAttributes(line: string): Record<string,string> {
        // Create a regular expression pattern that matches a whitespace followed by any of the key characters
        // Use the regular expression to split the input string
        const attributes: Record<string,string> = {};
        if (line === ""){
            console.log("Empty")
            return attributes;
        }
        if (basenameToRegExp["importance"].test(line)){
            const match = line.match(basenameToRegExp["importance"]);
            attributes["importance"] = match[0].charAt(1);
            // for some reason the .replace adds a bunch of spaces. I added a trim to remove them 
            line = line.replace(basenameToRegExp["importance"],"").trim();
            //console.log("removed importance flag: ", line)
        }

        const splitLine = line.split(' ');
        let lastAttr = "";
        //console.log("Split into: ",splitLine)
        for (let i=0;i<splitLine.length;i++){         
            if (basenameToRegExp["todoname"].test(splitLine[i])){
                attributes["todoname"] = splitLine[i].slice(1);
                lastAttr = "todoname";
                continue;
            }
            if (basenameToRegExp["responsible"].test(splitLine[i])){
                attributes["responsible"] = splitLine[i].slice(1);
                lastAttr = "responsible";
                continue;
            }
            if (basenameToRegExp["description"].test(splitLine[i])){
                attributes["description"] = splitLine[i].slice(1);
                lastAttr = "description";
                continue;
            }
            if (basenameToRegExp["parent"].test(splitLine[i])){
                attributes["parent"] = splitLine[i].slice(1);
                lastAttr = "parent"
                continue;
            }
            if (basenameToRegExp["context"].test(splitLine[i])){
                attributes["context"] = splitLine[i].slice(1);
                lastAttr = "context";
                continue;
            }
            if (basenameToRegExp["tag"].test(splitLine[i])){
                attributes["tag"] = splitLine[i].slice(1);
                lastAttr = "tag";
                continue;
            }
            if (basenameToRegExp["duedate"].test(splitLine[i])){
                attributes["duedate"] = splitLine[i].slice(1);
                lastAttr = "duedate";
                continue;
            }
            attributes[lastAttr] += " " + splitLine[i];
        }
        //console.log("Got Attributes: ", attributes);
        return attributes;
    }
    /**
     * Interface to call the @function missingToDoAttributes function of 
     * the ToDoMD property of this class.
     * @returns a list of missing todo attribute basenames.
     */
    private missingToDoAttributes(): string[]{
        const missing = this.toDo.missingToDoAttributes()
        return missing;
    }
    /**
     * Calls @function missingToDoAttributes and maps its output to the corresponding keys.
     * @returns a list of keys for missing todos
     */
    public missingToDoAttributeKeys():string[]{
        const missing: string[] = this.missingToDoAttributes();
        const missingKeys = missing.map(basename => basenameToKey[basename as keyof typeof basenameToKey]);
        return missingKeys;
    }
    /**
     * Matches two lists of todos by comparing the todos using @function identicalTo
     * @param oldToDos 
     * @param newToDos 
     * @returns 
     */
    public static toDoListsIdentical(oldToDos: obsidian_ToDo[], newToDos: obsidian_ToDo[]): boolean {
        if (oldToDos.length !== newToDos.length) {
            return false;
        }
        return oldToDos.every((oldToDos, index) => oldToDos.identicalTo(newToDos[index]));
    }
    /**
     * tests if this is same to other.
     * For now it only tests name.
     * @param other 
     * @returns boolean indicating sameness
     */
    identicalTo(other: obsidian_ToDo) {
            return this.name === other.name;
    }
    public get path(): string {
        return this.location.path;
    }
    public get name(): string {
        return this.toDo.getName();
    }
}

export class obsidian_ToDoRegexes{
    public static matchToDoStart = /^\s*- \[([^\]])\] /;
    public static matchToDoAttributes = / /;
    public static matchToDoStatus = /^- \[([^\]])\] /;
    public static toDoKeys = / ([${Object.values(basenameToKey)}]) /;

}