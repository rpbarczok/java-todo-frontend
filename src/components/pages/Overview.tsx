import type {Todo} from "../../types/Todo.ts";
import {Col, ListGroup, Row} from "react-bootstrap";
import TodoCard from "../TodoCard.tsx";
import Add from "../buttons/Add.tsx";

type OverviewProps = {
    todos: Todo[];
    setTodosChanged: (isChanged: boolean) => void
}

export default function Overview (props: OverviewProps) {
    return (
        <>
            <Row className="flex-shrink-1">
                <Col>
                    <h3>Open</h3>
                    <ListGroup>
                        {props.todos.filter(t => t.status === "OPEN").map(t => <TodoCard todo={t} setTodosChanged={props.setTodosChanged}/>)}
                    </ListGroup>
                </Col>
                <Col>
                    <h3>In Progress</h3>
                    <ListGroup>
                        {props.todos.filter(t => t.status === "IN_PROGRESS").map(t => <TodoCard todo={t} setTodosChanged={props.setTodosChanged}/>)}
                    </ListGroup>
                </Col>
                <Col>
                    <h3>Done</h3>
                    <ListGroup>
                        {props.todos.filter(t => t.status === "DONE").map(t => <TodoCard todo={t} setTodosChanged={props.setTodosChanged}/>)}
                    </ListGroup>
                </Col>
            </Row>
            <Row>
                <Col className="align-content-start">
                    <Add setTodosChanged={props.setTodosChanged}/>
                </Col>
            </Row>
        </>
    )
}