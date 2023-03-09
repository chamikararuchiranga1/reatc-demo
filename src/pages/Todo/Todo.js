import React, {useState} from "react";
import Button from "../../common/components/Button/Button";
import {Form} from 'react-bootstrap';
import TodoView from "../../common/components/TodoView/TodoView";

function Todo () {

    const [first, setFirst] = useState('');
    const [last,  setLast] = useState('');
    const [data, setData] = useState([])

    function calTodo () {
        const ob = {
            firstName: first,
            lastName: last,
        }

        const ob1 = [...data];
        ob1.push(ob);
        setData(ob1);
        clear();
    }

    function clear () {
        setLast("");
        setFirst("");
    }

    return (
        <div>
            <h1>Todo App</h1>

            <div className={'w-25 p-3 border rounded'}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="First Name" value={first} placeholder="First Name" onChange={(v)=> setFirst(v.target.value)}/>
                <Form.Label>Last Name</Form.Label>
                <Form.Control  value={last} type="lastName" placeholder="Last Name" onChange={(v)=> setLast(v.target.value)}/>

                <Button name={'Add Todo'} onClick={() => {calTodo();}}/>
            </div>
            <div>
                {data.map((val)=> (
                    <TodoView first={val.firstName} last={val.lastName}/>
                ))}
            </div>
        </div>
    )
}

export default Todo;