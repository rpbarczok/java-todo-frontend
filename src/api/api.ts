import type {Todo} from "../types/Todo.ts";
import axios from "axios";
import type {TodoDto} from "../types/TodoDto.ts";

export function fetchAllTodos(): Todo[] {
    const todos: Todo[] = []
    axios.get("/api/todo")
        .then(result => todos.push(...result.data))
        .catch(error => console.log(error))
    return todos
}

export function createTodo(newTodo: TodoDto) {
    axios.post(
        "/api/todo",
        newTodo
        )
        .catch(error => console.log(error))
}

export function updateTodo(changedTodo: Todo): Todo{
    let updatedTodo: Todo = {id: "", description: "", status: "OPEN"}
    axios.put(
        "/api/todo/"+changedTodo.id,
        changedTodo
        )
        .then(result => updatedTodo = result.data )
        .catch(error => console.log(error))
    return updatedTodo
}

export function deleteTodo(id: string) {
    axios.delete('/api/todo/'+id)
    .catch(error => console.log(error))
}