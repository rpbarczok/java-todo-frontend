import {useEffect, useState} from "react";
import {createTodo, deleteTodo, fetchAllTodos, updateTodo} from "../api/api.ts";
import type {Todo} from "../types/Todo.ts";
import type {TodoDto} from "../types/TodoDto.ts";

export function useTodo (): [
    Todo[],
    (newTodo:TodoDto) => Promise<void>,
    (updatedTodo:Todo) => Promise<Todo>,
    (id:string) => Promise<void>
] {

    const [todos, setTodos] = useState<Todo[]>([])
    const [todosChanged, setTodosChanged] = useState<boolean>(true)

    useEffect(()=> {
        async function loadTodos () {
            setTodos(await fetchAllTodos())
            setTodosChanged(false)
        }
        if (todosChanged) {
            void loadTodos()
        }

        }, [todosChanged]
    )

    async function handleCreateTodo(newTodo: TodoDto): Promise<void> {
        void await createTodo(newTodo)
        setTodosChanged(true)
    }

    async function handleUpdateTodo(updatedTodo: Todo): Promise<Todo> {
        await updateTodo(updatedTodo)
        setTodosChanged(true)
        return updatedTodo
    }

    async function handleDeleteTodo(id: string): Promise<void> {
        await deleteTodo(id)
        setTodosChanged(true)
    }

    return [todos, handleCreateTodo, handleUpdateTodo, handleDeleteTodo]
}