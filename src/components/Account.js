import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, InputGroup } from 'react-bootstrap';
import Avatarr from './Avatarr';
import Footericon from './Footericon'
const Account = () => {

    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/login");
    }

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [account, getAccount] = useState();

    const getAllusers = () => {
        axios.get(`http://localhost:3001/account`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                getAccount(res.data);
                console.log(res.data)
            })



    }

    useEffect(() => {
        getAllusers();
    }, []);


    const updateaccount = () => {

    

        axios.post(`http://localhost:3001/updateaccount`, { Username: username, email: mail, password: password }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                if (res.data === 0) {
                    return false
                } 
            })
    }


    const deleteaccount = () => {
        


        axios.post(`http://localhost:3001/deleteaccount`, { Username: username, email: mail, password: password }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                if (res.data === 0) {
                    return false
                } else {
                    sessionStorage.removeItem('jwt')
                    history.push("/Register")
                }
            })
    }


    if (account != null) {

        return (
            <div id='container-account'>

                <h2 id="h2-account">Bonjour bienvenue sur ton compte {account[0].username}</h2>

                <Form id="formAccount"  >
                    <Avatarr />
                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                        Username
                    </Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text >@</InputGroup.Text>
                        <Form.Control defaultValue={account[0].username} onChange={(e) => setUsername(e.target.value)} id="inlineFormInputGroup" placeholder="Username" />
                    </InputGroup>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control defaultValue={account[0].email} onChange={(e) => setMail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>



                    <Button variant="primary" id='UpdateAccountButton' onClick={updateaccount} type="button">
                        Modifier
                    </Button>
                    <Button variant="btn btn-danger" onClick={deleteaccount} type="button">
                        Suprime Mon compte
                    </Button>
                </Form>
                <Footericon ></Footericon>
            </div >


        )
    } else {
        return (' no data ')
    }

}

export default Account
