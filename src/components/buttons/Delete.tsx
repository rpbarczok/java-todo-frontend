import type {Todo} from "../../types/Todo.ts";
import {Button} from "react-bootstrap";
import axios from "axios";
import {Trash} from "react-bootstrap-icons";

type DeleteProps = {
    setTodosChanged: (isChanged: boolean) => void
    todo: Todo
}

export default function Delete(props: DeleteProps) {

    function handleDelete () {
        axios.delete('/api/todo/'+props.todo.id)
            .then(() => {
                props.setTodosChanged(true)
            }
            )
            .catch(error => console.log(error))
    }

    return (
        <Button  variant="outline-primary" size="sm" onClick={handleDelete}><Trash/></Button>
    )

}