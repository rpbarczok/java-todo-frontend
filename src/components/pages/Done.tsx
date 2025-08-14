import type {Todo} from "../../types/Todo.ts";
import {ListGroup} from "react-bootstrap";
import TodoCard from "../TodoCard.tsx";
import Add from "../buttons/Add.tsx";

type DoneProps = {
    todosDone: Todo[]
    setTodosChanged: (isChanged: boolean) => void
}
export default function Done (props: DoneProps) {
    return (
        <ListGroup>
            {props.todosDone.map(t => <TodoCard todo={t} setTodosChanged={props.setTodosChanged}/>)}
            <ListGroup.Item><Add setTodosChanged={props.setTodosChanged}/></ListGroup.Item>
        </ListGroup>
    )
}