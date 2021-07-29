
import '../index.css';
import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

function CardList() {

    const [testEvents, setTestEvents] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/events`)
            .then(res => res.json())
            .then(data => {
                return setTestEvents(data)
            });
    })

    return (
        Object.keys(testEvents).map((testEvent) => {
            return (
                <div id="ListUser" className="d-flex justify-content-center" key={testEvents[testEvent].id} >
                    <Card className="text-center">
                        <Card.Img
                            className="Avatar"
                            src={testEvents[testEvent].actor.avatar_url} />
                        <Card.Header>{testEvents[testEvent].actor.login}</Card.Header>
                        <Card.Body>
                            <Card.Title>{testEvents[testEvent].type}</Card.Title>
                            <Card.Text>
                                {testEvents[testEvent].repo.name}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">{testEvents[testEvent].created_at}</Card.Footer>
                    </Card>
                </div >
            )
        })

    )
}

export default CardList;