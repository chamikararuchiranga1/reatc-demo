import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className='App'>
        <Routes>
            <Route path="*" element={<Navigate to="/dashboard"/>}/>
            <Route path={"/home"} element={<Home/>} key={'home'}/>
            <Route path={"/dashboard"} element={<Dashboard/>} key={'home'}/>
        </Routes>
    </div>
  );
}

export default App;
