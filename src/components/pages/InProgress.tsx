import type {Todo} from "../../types/Todo.ts";
import {ListGroup} from "react-bootstrap";
import TodoCard from "../TodoCard.tsx";

type InProgressProps = {
    todosInProgress: Todo[]
    handleUpdateTodo: (updatedTodo: Todo) => Promise<Todo>
    handleDeleteTodo: (id: string) => Promise<void>
}
export default function InProgress (props: InProgressProps) {
    return (
        <ListGroup>
            {props.todosInProgress.map(t => <TodoCard key ={t.id} todo={t} handleUpdateTodo={props.handleUpdateTodo} handleDeleteTodo={props.handleDeleteTodo}/>)}
        </ListGroup>
    )
}