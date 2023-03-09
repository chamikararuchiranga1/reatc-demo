import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from "./pages/Dashboard/Dashboard";
import Button from "./common/components/Button/Button";
import {useState} from "react";

function App() {

    const [plus, setPlus] = useState(0);

  return (
    <div className='App'>
        <Button name={'CLick +'} onClick={()=> setPlus(plus+1)}/>
        <Button name={'CLick -'} onClick={()=> setPlus(plus-1)}/>

        <div>
            <h1>Value as : {plus}</h1>
        </div>


      <Routes>
          {/*<Route path='*' element={<Navigate to={'/dashboard'}/>} key={'home'}/>*/}
          <Route path={'/home'} element={<Home/>} key={'home'}/>
          <Route path={'/dashboard'} element={<Dashboard/>} key={'home'}/>
      </Routes>
    </div>
  );
}

export default App;
