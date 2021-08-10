import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Form, Button, InputGroup } from 'react-bootstrap';

const User = (props) => {

    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/");
    }
    const [mail, setMail] = useState('');
    //const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [User, getUser] = useState();
    //const [img, setimg] = useState();

    const getAllUser = () => {
        axios.get(`http://localhost:3001/Useradmin`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                getUser(res.data);
                console.log(res.data)
            })
    }

    useEffect(() => {
        getAllUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateaccount = (id) => {
        axios.post(`http://localhost:3001/updateaccount`, { Username: username, email: mail, updateaccountId: id }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => {

            history.go(0)

        })
    }

    const deleteaccount = (id) => {

        console.log(id + 'salut')
        axios.post(`http://localhost:3001/deleteaccount`, { accountId: id }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {

                history.go(0)

            })
    }

    return (
        <Container >
            {
                User?.map(
                    p => (
                        <Row className="justify-content-md-center" key={p.id}>
                            <Col md={{ span: 6, offset: 6 }} >
                                <div id='iduser:' className="item">
                                    <Card style={{ width: '18rem' }}>
                                        <div className="item_left">
                                            <Card.Img variant="top" src={'http://localhost:3001/uploads/' + p.img} />
                                        </div>
                                        <div className="item_right">
                                            <Card.Body>
                                                <Card.Title><InputGroup id='inputadmin' className="mb-3">
                                                    <InputGroup.Text >@</InputGroup.Text>
                                                    <Form.Control onChange={(e) => setUsername(e.target.value)} defaultValue={p.username} id="inlineFormInputGroup" placeholder="Username" />
                                                </InputGroup></Card.Title>
                                                <Card.Text>
                                                    <Form.Group id='inputadmin2' className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Email address</Form.Label>
                                                        <Form.Control defaultValue={p.email} onChange={(e) => setMail(e.target.value)} type="email" placeholder="Enter email" />
                                                    </Form.Group>
                                                </Card.Text>
                                                <Button variant="primary" id={p.id + 'updateaccountId'} onClick={() =>updateaccount(p.id)} type="submit">
                                                    Modifier
                                                </Button>
                                                <Button variant="btn btn-danger" className="deleteaacount" id={p.id + 'accountId'} onClick={() => deleteaccount(p.id)}  >
                                                    Suprime le compte
                                                </Button>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                </div>
                            </Col>
                        </Row >
                    )
                )
            }
        </Container >
    )
}

export default User