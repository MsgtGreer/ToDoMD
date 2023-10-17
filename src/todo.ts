/**
 * ToDoMD is the baseclass for the JS implementation of the ToDOMD rules.
 * I will link the manifesto as soon as i have it written.
 * Every ToDo has some basic fields that ate private fields to the class at the moment.
 */
export default class ToDoMD {
    private status: string;
    private priority: string; 
    private contributor = new todoAttribute("+","","Add a responsible person to the task");
    private name = new todoAttribute("?","", "Give this ToDo a name, you can even give a link to a note.");
    private description = new todoAttribute("%","", "Give this ToDo a description.");
    private parent = new todoAttribute("^","", "Link a parent todo, that might have created this todo.")
    private context = new todoAttribute("@","", "Add a context tag.")
    private tag = new todoAttribute("#","", "Add a tag to the note, to link it  to a project.");
    private duedate = new todoAttribute(":","","Add a due date")

    attributesList = [this.contributor,
        this.name,
        this.description,
        this.parent,
        this.context,
        this.tag,
        this.duedate];
    
    private keysList = this.attributesList.map(attribute => attribute.key);
/**
 * The ToDo class can be constructed either in a blank state or with a string
 * @param toDoLine - A line that should be parsed as a todo. 
 */
    constructor(toDoLine = "") {
        if (toDoLine)
            this.parseToDo(toDoLine)

    }
    /**
     * Checks all of the attributes of this todo as gatherd in @this.attributesList and finds the attributes with empty values.
     * 
     * @returns A list of Keys for empty ToDo attributes.
     */
    missingToDoAttributeKeys(): string[]{
        const listOfEmpty =  this.attributesList.filter(attr => attr.value === "");
        const listOfEmptyKeys=listOfEmpty.map(attr => attr.key);
        return listOfEmptyKeys;
    }
    /**
     * Parses a string into this todo class
     * @param Line A string that should be parsed into a todo.
     */
    parseToDo(Line: string){
        let {status, toDoLine} = this.parseTaskPrefix(Line);
        this.status = status;       
        const attributeFields = this.splitToDoInAttributes(toDoLine, this.keysList);
        for (let i=0; i< attributeFields.length; i++){
            const key = attributeFields[i].charAt(0);
            const value = attributeFields[i].slice(1);
            //console.log("Key, Value: ",key, " ", value);
            const attribute = this.attributesList.find(attr => attr.key === key);
            if (attribute){
                attribute.value = value;
            } 
        }  
    }
    /**
     * Parses the first part of a todo line. 
     * A todoline can begin with - [*] where * denotes the todo status.
     * the function returns the todo status and the rest of the todo line.
     * @param input string containing a todo line
     * @returns status and toDoLine 
     */
    parseTaskPrefix(input: string): { status: string, toDoLine: string }{
        const regex = /^- \[([^\]])\] /;
        const result = input.replace(regex, (match, capturedChar) => capturedChar);
        let status = result.charAt(0);
        let toDoLine = result.slice(1);
        console.log("Parsed: ",toDoLine)
        return {status, toDoLine};
    }
    /**
     * Splits a provided ToDo line into its attribute substrings.
     * @param toDoLine the line to be split
     * @param attributeKeys the keys that denote the attributes
     * @returns A list of strings that consist of their key and their value joined by ''
     */
    splitToDoInAttributes(toDoLine: string, attributeKeys: string[]) {
        // Create a regular expression pattern that matches a whitespace followed by any of the key characters
        // Use the regular expression to split the input string
        if (toDoLine === "")
            return [];
        const splitLine = toDoLine.split(' ');
        //console.log("Split into: ",splitLine)
        const chunks = [];
        let protoChunk = "";
        for (let i=0;i<splitLine.length;i++){
            //console.log("Possible Key: ",splitLine[i].charAt(0),attributeKeys.includes(splitLine[i].charAt(0)))
            if (attributeKeys.includes(splitLine[i].charAt(0)) && protoChunk===""){
                //console.log("")
                protoChunk += splitLine[i]
            } else if (attributeKeys.includes(splitLine[i].charAt(0)) && !(protoChunk==="")){
                //console.log("End of chunk, start of new")
                chunks.push(protoChunk);
                protoChunk ="";
                protoChunk += splitLine[i];
            } else if (!attributeKeys.includes(splitLine[i].charAt(0)) && !(protoChunk==="")){
                protoChunk += splitLine[i];
            } else if (!attributeKeys.includes(splitLine[i].charAt(0)) && protoChunk===""){
                protoChunk += this.description.key+splitLine[i];
            }
            if (i==splitLine.length-1)
                chunks.push(protoChunk);
        }
        //console.log("ToDo Chunks: ",chunks)
        return chunks;
    }
    /**
     * An interface to get the aatributesList
     * @returns this.attributesList
     */
    getAttributesList(): todoAttribute[]{
        return this.attributesList;
    }
}

/**
 * A class for todo attributes. Each attribute has a keym a value and a description
 */
class todoAttribute{
    /**
     * Constructs a todo attribute
     * @param key 
     * @param value 
     * @param description 
     */
    constructor(public readonly key: string, public value: string | string[] , public readonly description: string) {
        this.key = key;
        this.value = value;
        this.description = description;
    }
}

const enum toDoPriority{
    VERY_HIGH = '++',
    HIGH = '+',
    NORMAL = '-',
    LOW = '-'
}

const enum toDoStatus{
    OPEN = " ",
    IN_PROCESS = "-",
    DONE = "+",
    FAILED = "x"
}