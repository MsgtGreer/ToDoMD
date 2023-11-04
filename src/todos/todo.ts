/**
 * ToDoMD is the baseclass for the JS implementation of the ToDOMD rules.
 * I will link the manifesto as soon as i have it written.
 * Every ToDo has some basic fields that ate private fields to the class at the moment.
 */
export enum basenameToKey{
    importance = '()',
    todoname = '?',
    responsible =  '+',
    description = '%',
    parent =  '^',
    context = '@',
    tag = '#',
    duedate = ':'
}
/*
export enum basenameToEscapedKey{
    importance = '()'.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
    name = '?'.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
    responsible =  '+'.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
    description = '%'.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
    parent =  '^'.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
    context = '@'.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
    tag = '#'.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
    duedate = ':'.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}
*/
export enum basenameToDescription{
    importance = 'How important is it, that this ToDo gets done?',
    todoname = 'How do you referr to this ToDo?',
    responsible = 'Who is responsible for this ToDO?',
    description = 'What is part of this ToDo?',
    parent = 'What has to be done first?',
    context = 'In which context would you do this ToDo?',
    tag = 'What do you want to link this ToDo to?',
    duedate = 'When has this ToDo be done?'
}
export class basenameToRegExp{
    static importance = /\((\+\+|\+| {0,1}|-)\)/;
    static todoname = /^\?/;
    static responsible = /^\+/;
    static description = /^%/;
    static parent = /^\^/;
    static context = /^@/;
    static tag = /^#/;
    static duedate = /^:/;
}
/*
export enum importance{
    VERY_HIGH = '++',
    HIGH = '+',
    NORMAL = ' ',
    NOT = '-'
}
*/

export default class ToDoMD {
    private status = "";
    private importance = new todoAttribute("importance",""); 
    private responsible = new todoAttribute("responsible","");
    private todoname = new todoAttribute("todoname","");
    private description = new todoAttribute("description","");
    private parent = new todoAttribute("parent","")
    private context = new todoAttribute("context","")
    private tag = new todoAttribute("tag","");
    private duedate = new todoAttribute("duedate","")

    public attributesList = [this.importance, 
        this.responsible,
        this.todoname,
        this.description,
        this.parent,
        this.context,
        this.tag,
        this.duedate];
    
    private keysList = this.attributesList.map(attribute => attribute.basename).map(basename => basenameToKey[basename as keyof typeof basenameToKey]);
/**
 * The ToDo class can be constructed either in a blank state or with a string
 * @param toDoLine - A line that should be parsed as a todo. 
 */
    constructor(attributes?:Record<string,string>) {
        if (attributes){
           this.status = attributes.status || "";
            this.importance.value = attributes.importance||"";
            this.responsible.value = attributes.responsible||"";
            this.todoname.value = attributes.todoname||"";
            this.description.value = attributes.description||"";
            this.parent.value = attributes.parent||"";
            this.context.value = attributes.context||"";
            this.tag.value = attributes.tag||"";                  
            this.duedate.value = attributes.duedate||"";
        }
    }

    /**
     * Checks all of the attributes of this todo as gatherd in @this.attributesList and finds the attributes with empty values.
     * 
     * @returns A list of Keys for empty ToDo attributes.
     */
    missingToDoAttributes(): string[]{
        const listOfEmpty =  this.attributesList.filter(attr => attr.value === "");
        const listOfEmptyNames = listOfEmpty.map(attribute => attribute.basename);
        return listOfEmptyNames;
    }
    //.map(basename => basenameToKey[basename as keyof typeof basenameToKey]);
    public getStatus(): string {
        return this.status;
    }

    public getImportance(): string {
        return this.importance.value;
    }

    public getResponsible(): string {
    return this.responsible.value;
    }

    public getName(): string {
    return this.todoname.value;
    }

    public getDescription(): string {
    return this.description.value;
    }

    public getParent(): string {
    return this.parent.value;
    }

    public getContext(): string {
    return this.context.value;
    }

    public getTag(): string {
    return this.tag.value;
    }

    public getDueDate(): string {
    return this.duedate.value;
    }
    public isImportance(line: string){

    }

}
/**
 * A class for todo attributes. Each attribute has a keym a value and a description
 */
class todoAttribute{
    /**
     * Constructs a todo attribute
     * @param basename 
     * @param value
     */
    constructor(public readonly basename: string, public value: string) {
        this.basename = basename;
        this.value = value;
    }
}
