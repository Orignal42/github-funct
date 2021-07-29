import React from 'react';
import '../index.css';
import { Button, Form } from 'react-bootstrap';


function Formulaire(props) {


    return (
        <div className="w-100 d-flex justify-content-center" >
            <Form onSubmit={props.submit} className="w-50 d-flex flex-column justify-content-center">
                <h1 className="Profil text-center">Profil github</h1>
                <Form.Group>
                    <Form.Control
                        value={props.userInput}
                        type="text"
                        placeholder="Rechercher un utilisateur"
                        onChange={props.search}
                    />
                </Form.Group>
                <Button
                    variant="success"
                    onClick={props.submit}>Rechercher
                </Button>
            </Form >
        </div>
    )
}


export default Formulaire;
