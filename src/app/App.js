import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Dashboard from "../pages/Dashboard/Dashboard";
import Hooks from "../pages/Hooks/Hooks";
import Todo from "../pages/Todo/Todo";
import Fetch from "../pages/Fetch/Fetch";
import Axios from "../pages/Axios/Axios";
import NavigationBar from "../common/components/Navbar/Navbar";
import './App.css'
import Sidenav from "../common/components/Sidenav/Sidenav";
import {Col, Row} from "react-bootstrap";

function App() {
  return (
    <div className='App'>
        <Row>
            <Col sm={3}>
                <Sidenav/>
            </Col>
            <Col sm={9}>
                <div className="side">
                    <div className="position-fixed w-100 nav-content">
                        <NavigationBar/>
                    </div>
                    <div className="mt-2">
                        <Routes>
                            <Route path='*' element={<Navigate to={'/home'}/>} key={'home'}/>
                            <Route path={'/home'} element={<Home/>} key={'home'}/>
                            <Route path={'/dashboard'} element={<Dashboard/>} key={'home'}/>
                            <Route path={'/hooks'} element={<Hooks/>} key={'hooks'}/>
                            <Route path={'/todo'} element={<Todo/>} key={'todo'}/>
                            <Route path={'/fetch'} element={<Fetch/>} key={'fetch'}/>
                            <Route path={'/axios'} element={<Axios/>} key={'axios'}/>
                        </Routes>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  );
}

export default App;
