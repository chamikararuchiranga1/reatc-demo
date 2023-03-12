import React, {useEffect, useState} from "react";
import Student from "../../common/components/Student/Student";
import axios from "axios";
import {Button} from "react-bootstrap";
import StudentAddModel from "../../common/components/StudentAddModel/StudentAddModel";

function Axios () {

    const [student, setStudent] = useState([]);
    const [addModel, setAddModel] = useState(false);

    useEffect(()=> {
        getStudent();
    },[])

    // Axios Get API
    const getStudent = () => {
        axios({
            method: 'get',
            url: 'http://54.244.163.184:8081/spring_demo-0.0.1/student',
        })
            .then(function (response) {
                setStudent(response.data);
            });
    }

    // Add Student
    return (
        <div className="w-100">
            <h1>Student Managment</h1>
            <Button variant="primary" onClick={()=> setAddModel(true)}>Add Student</Button>{' '}
            <div className="d-flex flex-wrap">
                {student.map((value)=> (
                    <Student data={value}/>
                ))}
            </div>

            <StudentAddModel show={addModel} handleClose={()=>setAddModel(false)}/>
        </div>
    )
}

export default Axios