import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Dashboard from "../pages/Dashboard/Dashboard";
import Hooks from "../pages/Hooks/Hooks";
import Todo from "../pages/Todo/Todo";

function App() {
  return (
    <div className='App'>
      <Routes>
          {/*<Route path='*' element={<Navigate to={'/dashboard'}/>} key={'home'}/>*/}
          <Route path={'/home'} element={<Home/>} key={'home'}/>
          <Route path={'/dashboard'} element={<Dashboard/>} key={'home'}/>
          <Route path={'/hooks'} element={<Hooks/>} key={'hooks'}/>
          <Route path={'/todo'} element={<Todo/>} key={'todo'}/>
      </Routes>
    </div>
  );
}

export default App;
