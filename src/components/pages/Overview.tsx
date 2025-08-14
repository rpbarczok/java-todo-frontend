import type {Todo} from "../../types/Todo.ts";
import {Col, ListGroup, Row} from "react-bootstrap";
import TodoCard from "../TodoCard.tsx";

type OverviewProps = {
    todos: Todo[];
    handleUpdateTodo: (updatedTodo: Todo) => Promise<Todo>
    handleDeleteTodo: (id: string) => Promise<void>
}

export default function Overview (props: OverviewProps) {
    return (
        <>
            <Row>
                <Col>
                    <h3>Open</h3>
                    <ListGroup>
                        {props.todos.filter(t => t.status === "OPEN").map(t => <TodoCard key ={t.id} todo={t} handleUpdateTodo={props.handleUpdateTodo} handleDeleteTodo={props.handleDeleteTodo}/>)}
                    </ListGroup>
                </Col>
                <Col>
                    <h3>In Progress</h3>
                    <ListGroup>
                        {props.todos.filter(t => t.status === "IN_PROGRESS").map(t => <TodoCard key ={t.id} todo={t} handleUpdateTodo={props.handleUpdateTodo} handleDeleteTodo={props.handleDeleteTodo}/>)}
                    </ListGroup>
                </Col>
                <Col>
                    <h3>Done</h3>
                    <ListGroup>
                        {props.todos.filter(t => t.status === "DONE").map(t => <TodoCard key ={t.id} todo={t} handleUpdateTodo={props.handleUpdateTodo} handleDeleteTodo={props.handleDeleteTodo}/>)}
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}