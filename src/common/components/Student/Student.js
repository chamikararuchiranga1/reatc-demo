import React from "react";
import {Button, Card} from "react-bootstrap";

function Student ({data, onUpdate}) {
    return (
        <div className="m-2">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>ID : {data.id}</Card.Title>
                    <Card.Title>Name : {data.name}</Card.Title>
                    <Card.Title>Address : {data.address}</Card.Title>
                    <Card.Title>Salary : {data.salary}</Card.Title>
                    <Button variant="success" onClick={()=> onUpdate(data)}>
                        Update
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Student