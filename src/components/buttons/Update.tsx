import {Button, Form, InputGroup, Modal} from "react-bootstrap";
import {useState} from "react";

import status from "../../data/status.ts";
import type {Status} from "../../types/Status.ts";
import type {Todo} from "../../types/Todo.ts";
import {Pen} from "react-bootstrap-icons";

type UpdateProps = {
    handleUpdateTodo: (updatedTodo: Todo) => Promise<Todo>
    originalTodo: Todo
}

export default function Update (props: UpdateProps) {

    const [show, setShow] = useState<boolean>(false)
    const [updatedTodo, setUpdatedTodo] = useState<Todo>(props.originalTodo)

    function handleShow () {
        setShow(true)
    }
    function handleClose () {
        setShow(false)
    }

    function handleChangeDescription(value: string) {
        setUpdatedTodo(
            {
                ...updatedTodo,
                description: value
            }
        )
    }

    function handleChangeStatus(value: string) {
        setUpdatedTodo(
            {
                ...updatedTodo,
                status: value as Status
            }
        )
    }

    async function submit() {
        setUpdatedTodo(await props.handleUpdateTodo(updatedTodo))
        setShow(false)

    }

    return (
        <>
            <Button  variant="outline-primary" size="sm" onClick={handleShow}><Pen/></Button>
            <Modal show = {show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup>
                        <InputGroup.Text > Description</InputGroup.Text>
                        <Form.Control value={updatedTodo.description} onChange={(e) =>handleChangeDescription(e.target.value)}/>
                    </InputGroup>
                    <Form.Select defaultValue={updatedTodo.status} onChange={(e) => handleChangeStatus(e.target.value)}>
                        {status.map(s => <option key={s} value={s}>{s}</option>)}
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