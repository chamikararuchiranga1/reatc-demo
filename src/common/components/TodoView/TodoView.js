import React from "react";
import {Card} from 'react-bootstrap'

function TodoView ({first, last}) {
    return (
        <div className="w-25 mt-5">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{first}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{last}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>

    )
};

export default  TodoView;