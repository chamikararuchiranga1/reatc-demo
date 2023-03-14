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

function App() {
  return (
    <div className='App'>
        <NavigationBar/>
        <div>
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
  );
}

export default App;
