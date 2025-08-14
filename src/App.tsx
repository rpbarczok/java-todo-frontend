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

    const [todos, setTodosChanged] = useTodo()


    return (
        <Container fluid className='d-flex flex-column vh-100'>
            <Row>
                <Navigation />
            </Row>
            <Row className="header">
                <Header setTodosChanged={setTodosChanged}/>
            </Row>
            <Row>

            </Row>
            <Row className='flex-grow-1'>
                <Routes >
                    <Route path={"/"} element={<Overview todos={todos} setTodosChanged={setTodosChanged}/>} />
                    <Route path={"/open"} element={<Open todosOpen={todos.filter(t => t.status === "OPEN")} setTodosChanged={setTodosChanged}/>} />
                    <Route path={"/inprogress"} element={<InProgress todosInProgress={todos.filter(t => t.status === "IN_PROGRESS")} setTodosChanged={setTodosChanged}/>} />
                    <Route path={"/done"} element={<Done todosDone={todos.filter(t => t.status === "DONE")} setTodosChanged={setTodosChanged}/>} />
                </Routes>
            </Row>
            <Row className='bg-body-secondary'>
                <Footer />
            </Row>

        </Container>
    )
}

export default App
