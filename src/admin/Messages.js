
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import server from '../Config';
import { FormControl, InputGroup, Form, Container } from 'react-bootstrap';

const Messages = () => {
    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/login");
    }

    const [messages, getMessages] = useState();
    // const Question = question.split(',');

    const getAllMessages = () => {
        axios.get(`${server}/messageadmin`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                getMessages(res.data);
                console.log(res.data)
            })
    }

    useEffect(() => {
        getAllMessages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (

        <div >

            {
                messages?.map(
                    q => (
                        <Container id='container-account'>
                            <Form key={q.id} id='formulairecontacteznousadmin'>
                                <h3>message de {q.Nom}</h3>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1admin"> <i id="iconformcontacteznous" className="fas fa-user"></i></InputGroup.Text>
                                        <FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" defaultValue={q.Nom} />
                                    </InputGroup>

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1admin"> <i id="iconformcontacteznous" className="fas fa-pencil-alt" ></i></InputGroup.Text>
                                        <FormControl placeholder="Mail" aria-label="Mail" aria-describedby="basic-addon1" defaultValue={q.Mail} />
                                    </InputGroup>

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1admin">

                                    <InputGroup>
                                        <InputGroup.Text> <i id="iconformcontacteznous" className="fas fa-envelope"></i></InputGroup.Text>
                                        <FormControl as="textarea" aria-label="With textarea" defaultValue={q.Message} />
                                    </InputGroup>

                                </Form.Group>

                            </Form>
                        </Container>
                    )
                )
            }
        </div >


    )
}

export default Messages
