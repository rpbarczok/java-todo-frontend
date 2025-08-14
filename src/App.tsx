import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Overview from "./components/pages/Overview.tsx";
import Footer from "./components/Footer.tsx";
import Navigation from "./components/Navigation.tsx";
import InProgress from "./components/pages/InProgress.tsx";
import Done from "./components/pages/Done.tsx";
import Open from "./components/pages/Open.tsx";
import {Container, Row} from "react-bootstrap";
import {useTodo} from "./hooks/useTodo.ts";

function App() {

    const [todos, handleCreateTodo, handleUpdateTodo, handleDeleteTodo] = useTodo()

    return (
        <Container fluid className='d-flex flex-column vh-100'>
            <Row>
                <Navigation />
            </Row>
            <Row className="header">
                <Header handleCreateTodo={handleCreateTodo}/>
            </Row>
            <Row>

            </Row>
            <Row className='flex-grow-1'>
                <Routes >
                    <Route path={"/overview"} element={<Overview todos={todos} handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo}/>} />
                    <Route path={"/open"} element={<Open todosOpen={todos.filter((t) => t.status === "OPEN")} handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo}/>} />
                    <Route path={"/inprogress"} element={<InProgress todosInProgress={todos.filter(t => t.status === "IN_PROGRESS")} handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo}/>} />
                    <Route path={"/done"} element={<Done todosDone={todos.filter(t => t.status === "DONE")} handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo}/>} />
                </Routes>
            </Row>
            <Row className='bg-body-secondary'>
                <Footer />
            </Row>

        </Container>
    )
}

export default App
