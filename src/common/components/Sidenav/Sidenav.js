import React from "react";
import "./style.css"
import {Link} from "react-router-dom";

function Sidenav () {
    return (
        <div className='w-100 bg-opacity-25 bg-danger sidenav'>
            <h1 className="text-center p-4 fw-bold">Side Nav</h1>
            <div className="m-4">
                <Link className='link btn btn-primary w-100 mt-4' to='/home'>Home</Link>
                <Link  className='link btn btn-primary w-100 mt-4' to='/dashboard'>Dashboard</Link>
                <Link  className='link btn btn-primary w-100 mt-4' to='/hooks'>Hooks</Link>
                <Link  className='link btn btn-primary w-100 mt-4' to='/fetch'>Fetch</Link>
                <Link  className='link btn btn-primary w-100 mt-4' to='/todo'>Todo</Link>
                <Link  className='link btn btn-primary w-100 mt-4' to='/axios'>Axios</Link>
            </div>
        </div>
    )
}

export default Sidenav;