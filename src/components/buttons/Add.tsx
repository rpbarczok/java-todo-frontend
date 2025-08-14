import {Button, Form, InputGroup, Modal} from "react-bootstrap";
import {useState} from "react";

import type {TodoDto} from "../../types/TodoDto.ts";
import status from "../../data/status.ts";
import type {Status} from "../../types/Status.ts";
import {Plus} from "react-bootstrap-icons";
import {createTodo} from "../../api/api.ts";


type AddProps = {
    setTodosChanged: (isChanged: boolean) => void
}

export default function Add (props: AddProps) {

    const [show, setShow] = useState<boolean>(false)
    const [newTodo, setNewTodo] = useState<TodoDto>({description: "", status: "OPEN"})

    function handleShow () {
        setShow(true)
    }
    function handleClose () {
        setShow(false)
    }

    function handleChangeDescription(value: string) {
        setNewTodo(
            {
                ...newTodo,
                description: value
            }
        )
    }

    function handleChangeStatus(value: string) {
        setNewTodo(
            {
                ...newTodo,
                status: value as Status
            }
        )
    }

    function submit() {
            createTodo(newTodo)
            props.setTodosChanged(true)
            setNewTodo({description: "", status: "OPEN"})
            setShow(false)
    }

    return (
        <>
            <Button  variant="outline-primary" size="sm" onClick={handleShow}><Plus/></Button>
            <Modal show = {show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup>
                        <InputGroup.Text > Description</InputGroup.Text>
                        <Form.Control value={newTodo.description} onChange={(e) =>handleChangeDescription(e.target.value)}/>
                    </InputGroup>
                    <Form.Select onChange={(e) => handleChangeStatus(e.target.value)}>
                        {status.map(s => s === newTodo.status ? <option selected value={s}>{s}</option> : <option value={s}>{s}</option>)}
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={submit}>Save</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>

        )

}