import Add from "./buttons/Add.tsx";
import {Col, Row} from "react-bootstrap";

type HeaderProps = {
    setTodosChanged: (isChanged: boolean) => void
}
export default function Header (props: HeaderProps) {
    return (
        <Row className="header">
            <Col>
                <h1>What to do?</h1>
            </Col>
            <Col className="align-content-center">
                <Add setTodosChanged={props.setTodosChanged}/>
            </Col>
        </Row>

    )
}