export default class ToDoMD {
    private status;
    private contributor = new todoAttribute("+","","Add a responsible person to the task");
    private name = new todoAttribute("?","", "Give this ToDo a name, you can even give a link to a note.");
    private description = new todoAttribute("%","", "Give this ToDo a name, you can even give a link to a note.");
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
// Default constructor
    constructor() {}

    missingToDoAttributeKeys(): string[]{
        let listOfEmpty =  this.attributesList.filter(attr => attr.value === "");
        let listOfEmptyKeys=listOfEmpty.map(attr => attr.key);
        return listOfEmptyKeys;
    }

    parseToDo(todoLine: string){
        todoLine = this.parseTaskPrefix(todoLine);
        this.status = todoLine.charAt(0);
        todoLine = todoLine.slice(1);        
        let attributeFields = this.splitToDoInAttributes(todoLine, this.keysList);
        for (var i=0; i< attributeFields.length; i++){
            var key = attributeFields[i].charAt(0);
            var value = attributeFields[i].slice(1);
            //console.log("Key, Value: ",key, " ", value);
            let attribute = this.attributesList.find(attr => attr.key === key);
            if (attribute){
                attribute.value = value;
            }
        }  
    }

    parseTaskPrefix(input: string){
        const regex = /^- \[([^\]])\] /;
        const result = input.replace(regex, (match, capturedChar) => capturedChar);
        return result;
    }

    splitToDoInAttributes(toDoLine: string, attributeKeys: string[]) {
        // Create a regular expression pattern that matches a whitespace followed by any of the key characters
        // Use the regular expression to split the input string
        if (toDoLine === "")
            return [];
        const splitLine = toDoLine.split(' ');
        //console.log("Split into: ",splitLine)
        let chunks = [];
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

    getAttributesList(): todoAttribute[]{
        return this.attributesList;
    }
}

class todoAttribute{
    /*
    () : Priority ++,+, ,-
    + : Add a person to the task 
    ? : ToDo Name. This creates a node link, where i can fill this todo with notes that where created in its completion. Advantage is, renaming the note will change the ToDos name.
    ^ : Link a todo, that this todo depends on. Requires a named todo.
    @ : context tag, giving short and precise context, like @research, @read or @write
    # : add a project or another other tag. Project tags are '#project/name'
    due: [[]] : add a due date, and link it to the respective daily note
    */
    constructor(public readonly key: string, public value: string | string[] , public readonly description: string) {
        this.key = key;
        this.value = value;
        this.description = description;
    }
}
