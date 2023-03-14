import React, {useEffect, useState} from "react";
import Student from "../../common/components/Student/Student";
import axios from "axios";
import {Button} from "react-bootstrap";
import StudentAddModel from "../../common/components/StudentAddModel/StudentAddModel";
import StudentUpdateModel from "../../common/components/StudentUpdateModel/StudentUpdateModel";

function Axios () {

    const [student, setStudent] = useState([]);
    const [addModel, setAddModel] = useState(false);
    const [updateModel, setUpdateModel] = useState(false);
    const [selectValue, setSelectValue] = useState();

    useEffect(()=> {
        getStudent();
    },[])

    // Axios Get API
    const getStudent = () => {
        axios({
            method: 'get',
            url: 'http://54.244.163.184:8081/spring_demo/student/',
        })
            .then(function (response) {
                setStudent(response.data);
            });
    }

    const deleteData = (id) => {
        axios.delete('http://54.244.163.184:8081/spring_demo/student/'+id )
            .then(function (response) {
                getStudent();
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="w-100">
            <h1>Student Managment</h1>
            <Button variant="primary" onClick={()=> setAddModel(true)}>Add Student</Button>{' '}
            <div className="d-flex flex-wrap">
                {student.map((value, index)=> (
                    <Student
                        key={index}
                        data={value}
                        onUpdate={(val)=> {setSelectValue(val); setUpdateModel(true)}}
                        onDelete={(val)=> {deleteData(val.id)}}
                    />
                ))}
            </div>

            <StudentAddModel
                show={addModel}
                handleClose={()=>setAddModel(false)}
                updateData={()=> {getStudent()}}
            />

            <StudentUpdateModel
                show={updateModel}
                handleClose={()=> {setUpdateModel(false)}}
                data={selectValue}
                updateData={()=> {getStudent()}}
            />
        </div>
    )
}

export default Axios