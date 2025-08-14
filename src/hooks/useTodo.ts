import {useEffect, useState} from "react";
import {fetchAllTodos} from "../api/api.ts";
import type {Todo} from "../types/Todo.ts";

export function useTodo (): [Todo[], (isChanged: boolean) => void] {

    const [todos, setTodos] = useState<Todo[]>([])
    const [todosChanged, setTodosChanged] = useState<boolean>(true)

    useEffect(()=> {
            if (todosChanged) {
                setTodos(fetchAllTodos())
                setTodosChanged(false)
            }

        }, [todosChanged]
    )

    return [todos, setTodosChanged]
}