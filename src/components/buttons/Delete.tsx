import type {Todo} from "../../types/Todo.ts";
import {Button} from "react-bootstrap";
import {Trash} from "react-bootstrap-icons";

type DeleteProps = {
    handleDeleteTodo: (id: string) => Promise<void>
    todo: Todo
}

export default function Delete(props: DeleteProps) {

    return (
        <Button  variant="outline-primary" size="sm" onClick={() => void props.handleDeleteTodo(props.todo.id)}><Trash/></Button>
    )

}