import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";

function StudentAddModel ({show, handleClose}) {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [salary, setSalary] = useState('');
    const [id, setId] = useState('');

    const addStudent = async () => {
        alert("add student");
        // axios.post('http://54.244.163.184:8081/spring_demo-0.0.1/student', {
        //     id:3,
        //     name:"Chamikara",
        //     address:"Panadura",
        //     salary:50000.00
        // },{headers: {
        //         'Content-Type': 'application/json'
        //     }})
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Student ADD</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>ID</Form.Label>
                <Form.Control type="ID" value={id} placeholder="ID" onChange={(v)=> setId(v.target.value)}/>
                <Form.Label>Name</Form.Label>
                <Form.Control  value={name} type="name" placeholder="Name" onChange={(v)=> setName(v.target.value)}/>
                <Form.Label>Address</Form.Label>
                <Form.Control type="address" value={address} placeholder="Address" onChange={(v)=> setAddress(v.target.value)}/>
                <Form.Label>Salary</Form.Label>
                <Form.Control  value={salary} type="salary" placeholder="Salary" onChange={(v)=> setSalary(v.target.value)}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=> addStudent()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default StudentAddModel