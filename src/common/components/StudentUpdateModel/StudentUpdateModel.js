import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";

function StudentUpdateModel ({show, handleClose, data, updateData}) {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [salary, setSalary] = useState('');
    const [id, setId] = useState('');

    useEffect(()=> {
        if(data !== undefined){
            setSalary(data.salary);
            setName(data.name);
            setId(data.id);
            setAddress(data.address)
        }
    },[data])

    const update = () => {
        axios.put('http://54.244.163.184:8081/spring_demo/student/'+id, {
            id: id,
            name: name,
            address: address,
            salary: salary
        },{
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(function (response) {
                handleClose();
                updateData();
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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
                <Button variant="success" onClick={()=> update()}>
                    Update Student
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default StudentUpdateModel;