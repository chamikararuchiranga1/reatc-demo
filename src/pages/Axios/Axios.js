import React, {useEffect, useState} from "react";
import Student from "../../common/components/Student/Student";
import axios from "axios";
import {Button} from "react-bootstrap";
import StudentAddModel from "../../common/components/StudentAddModel/StudentAddModel";
import StudentUpdateModel from "../../common/components/StudentUpdateModel/StudentUpdateModel";
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

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

    // delete methode
    const deleteData = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://54.244.163.184:8081/spring_demo/student/'+id )
                    .then(function (response) {
                        getStudent();
                        Toast.fire({
                            icon: 'success',
                            title: 'Student deleted successfully!'
                        })
                    })
                    .catch(function (error) {
                        Toast.fire({
                            icon: 'error',
                            title: 'Student deleted fail!'
                        })
                    });
            }
        })
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

            {/*student add model*/}
            <StudentAddModel
                show={addModel}
                handleClose={()=>setAddModel(false)}
                updateData={()=> {getStudent()}}
            />

            {/*student update model*/}
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