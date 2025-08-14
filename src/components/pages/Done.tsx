import type {Todo} from "../../types/Todo.ts";
import {ListGroup} from "react-bootstrap";
import TodoCard from "../TodoCard.tsx";

type DoneProps = {
    todosDone: Todo[]
    setTodosChanged: (isChanged: boolean) => void
}
export default function Done (props: DoneProps) {
    return (
        <ListGroup>
            {props.todosDone.map(t => <TodoCard key ={t.id} todo={t} setTodosChanged={props.setTodosChanged}/>)}
        </ListGroup>
    )
}