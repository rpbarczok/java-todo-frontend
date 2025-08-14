import {ButtonGroup, Col, ListGroup, Row} from "react-bootstrap";
import type {Todo} from "../types/Todo.ts";
import Update from "./buttons/Update.tsx";
import Delete from "./buttons/Delete.tsx";

type TodoCardProps = {
    todo: Todo
    setTodosChanged: (isChanged: boolean) => void
}

export default function TodoCard (props: TodoCardProps) {
    return (
        <ListGroup.Item>
            <Row>
                <Col>
                    {props.todo.description}
                </Col>
                <Col xs={"auto"}>
                    <ButtonGroup>
                        <Update setTodosChanged={props.setTodosChanged} originalTodo={props.todo}/>
                        <Delete setTodosChanged={props.setTodosChanged} todo={props.todo}/>
                    </ButtonGroup>
                </Col>
            </Row>
        </ListGroup.Item>)
}