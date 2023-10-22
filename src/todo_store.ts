import ToDoMD from "./todo";
import { ToDoLocation } from "./todo_location";

export class ToDoStore{
    public todo;
    public location;

    constructor(todo: ToDoMD, location: ToDoLocation){
        this.todo = todo;
        this.location = location;
    }
}
