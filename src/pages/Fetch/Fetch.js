import React from "react";
import {Button} from "react-bootstrap";

function Fetch () {

    // Get API
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => console.log(json))
    }

    // Post API
    const postData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'Fetch API',
                body: 'sample',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    // Update API
    const updateData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/100', {
            method: 'PUT',
            body: JSON.stringify({
                id: 100,
                title: 'Fetch API',
                body: 'sample',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    // Delete Data
    const deleteData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div>
            <h1>Fetch API</h1>
            <Button variant="primary" onClick={()=> getData()}>Get Data</Button>{' '}
            <Button variant="success" onClick={()=> postData()}>Post Data</Button>{' '}
            <Button variant="dark" onClick={()=> updateData()}>Update Data</Button>{' '}
            <Button variant="danger" onClick={()=> deleteData()}>Delete Data</Button>{' '}
        </div>
    )
}

export default Fetch;