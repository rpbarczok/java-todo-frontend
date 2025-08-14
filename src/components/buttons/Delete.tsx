import type {Todo} from "../../types/Todo.ts";
import {Button} from "react-bootstrap";
import {Trash} from "react-bootstrap-icons";
import {deleteTodo} from "../../api/api.ts";

type DeleteProps = {
    setTodosChanged: (isChanged: boolean) => void
    todo: Todo
}

export default function Delete(props: DeleteProps) {

    function handleDelete () {
        deleteTodo(props.todo.id)
        props.setTodosChanged(true)
    }

    return (
        <Button  variant="outline-primary" size="sm" onClick={handleDelete}><Trash/></Button>
    )

}