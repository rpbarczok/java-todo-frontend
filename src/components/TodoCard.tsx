import {ButtonGroup, Col, ListGroup, Row} from "react-bootstrap";
import type {Todo} from "../types/Todo.ts";
import Update from "./buttons/Update.tsx";
import Delete from "./buttons/Delete.tsx";

type TodoCardProps = {
    todo: Todo
    handleUpdateTodo: (updatedTodo: Todo) => Promise<Todo>
    handleDeleteTodo: (id: string) => Promise<void>
}

export default function TodoCard (props: TodoCardProps) {
    return (
        <ListGroup.Item draggable>
            <Row>
                <Col>
                    {props.todo.description}
                </Col>
                <Col xs={"auto"}>
                    <ButtonGroup>
                        <Update handleUpdateTodo={props.handleUpdateTodo} originalTodo={props.todo}/>
                        <Delete handleDeleteTodo={props.handleDeleteTodo} todo={props.todo}/>
                    </ButtonGroup>
                </Col>
            </Row>
        </ListGroup.Item>)
}