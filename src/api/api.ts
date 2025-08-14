import type {Todo} from "../types/Todo.ts";
import axios from "axios";
import type {TodoDto} from "../types/TodoDto.ts";

export async function fetchAllTodos(): Promise<Todo[]> {
    const todos: Todo[] = []
    try {
        const result = await axios.get("/api/todo")
        todos.push(...result.data)
    } catch (error) {
        console.log(error)
    }
    return todos

}

export async function createTodo(newTodo: TodoDto): Promise<void> {
    try {
        void axios.post("/api/todo", newTodo)
    } catch (error) {
        console.log(error)
    }
}

export async function updateTodo(changedTodo: Todo): Promise<Todo>{
    let todo: Todo = {id:"", description:"", status:"OPEN"}
    try {
        const result =  await axios.put("/api/todo/"+changedTodo.id, changedTodo)
        todo = result.data
    } catch (error) {
        console.log(error)
    }
    return todo
}

export async function deleteTodo(id: string) {
    try {
        await axios.delete('/api/todo/'+id)
    } catch (error) {
        console.log(error)
    }

}