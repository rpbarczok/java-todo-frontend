import Nav from "react-bootstrap/Nav";
import {useNavigate} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation () {

    const nav = useNavigate()

    return (
            <Navbar className='bg-body-secondary'>
                <Nav>
                    <Nav.Link onClick={() => nav("/")}>Overview</Nav.Link>
                    <Nav.Link onClick={() => nav("/open")}>Open</Nav.Link>
                    <Nav.Link onClick={() => nav("/inprogress")}>In Progress</Nav.Link>
                    <Nav.Link onClick={() => nav("/done")}>Done</Nav.Link>
                </Nav>
            </Navbar>

        )
}