import type {Todo} from "../../types/Todo.ts";
import {ListGroup} from "react-bootstrap";
import TodoCard from "../TodoCard.tsx";

type InProgressProps = {
    todosInProgress: Todo[]
    setTodosChanged: (isChanged: boolean) => void
}
export default function InProgress (props: InProgressProps) {
    return (
        <ListGroup>
            {props.todosInProgress.map(t => <TodoCard todo={t} setTodosChanged={props.setTodosChanged}/>)}
        </ListGroup>
    )
}