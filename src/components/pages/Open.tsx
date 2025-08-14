import type {Todo} from "../../types/Todo.ts";
import {ListGroup} from "react-bootstrap";
import TodoCard from "../TodoCard.tsx";

type OpenProps = {
    todosOpen: Todo[]
    setTodosChanged: (isChanged: boolean) => void
}
export default function Open (props: OpenProps) {
    return (
        <ListGroup>
            {props.todosOpen.map(t => <TodoCard key ={t.id} todo={t} setTodosChanged={props.setTodosChanged}/>)}
        </ListGroup>
    )
}