import type {Todo} from "../../types/Todo.ts";
import {ListGroup} from "react-bootstrap";
import TodoCard from "../TodoCard.tsx";

type DoneProps = {
    todosDone: Todo[]
    handleUpdateTodo: (updatedTodo: Todo) => Promise<Todo>
    handleDeleteTodo: (id: string) => Promise<void>
}
export default function Done (props: DoneProps) {
    return (
        <ListGroup>
            {props.todosDone.map(t => <TodoCard key ={t.id} todo={t} handleUpdateTodo={props.handleUpdateTodo} handleDeleteTodo={props.handleDeleteTodo}/>)}
        </ListGroup>
    )
}