import Add from "./buttons/Add.tsx";
import {Col} from "react-bootstrap";
import type {TodoDto} from "../types/TodoDto.ts";

type HeaderProps = {
    handleCreateTodo: (newTodo: TodoDto) => Promise<void>
}
export default function Header (props: HeaderProps) {
    return (
        <>
            <Col className="ms-auto">
                <h1>What to do?</h1>
            </Col>
            <Col xs="auto" className="align-content-center">
                <Add handleCreateTodo={props.handleCreateTodo}/>
            </Col>
        </>

    )
}