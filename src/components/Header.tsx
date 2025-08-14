import Add from "./buttons/Add.tsx";
import {Col} from "react-bootstrap";

type HeaderProps = {
    setTodosChanged: (isChanged: boolean) => void
}
export default function Header (props: HeaderProps) {
    return (
        <>
            <Col className="ms-auto">
                <h1>What to do?</h1>
            </Col>
            <Col xs="auto" className="align-content-center">
                <Add setTodosChanged={props.setTodosChanged}/>
            </Col>
        </>

    )
}