import type {Todo} from "../../types/Todo.ts";
import {ListGroup} from "react-bootstrap";
import TodoCard from "../TodoCard.tsx";
import Add from "../buttons/Add.tsx";

type OpenProps = {
    todosOpen: Todo[]
    setTodosChanged: (isChanged: boolean) => void
}
export default function Open (props: OpenProps) {
    return (
        <ListGroup>
            {props.todosOpen.map(t => <TodoCard todo={t} setTodosChanged={props.setTodosChanged}/>)}
            <ListGroup.Item><Add setTodosChanged={props.setTodosChanged}/></ListGroup.Item>
        </ListGroup>
    )
}