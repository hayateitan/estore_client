import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, InputGroup } from 'react-bootstrap';
import Avatarr from './Avatarr';
import Footericon from './Footericon'
import server from '../Config';

const Account = () => {

    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/login");
    }

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [img, setimg] = useState();
    const [isChange, setIsChange] = useState(false)

    const getAllusers = async () => {
        const res = await axios.get(`${server}/account`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

        const user = res.data[0]

        console.log(user)

        setMail(user.email)
        setUsername(user.username)
        setimg(user.img)
    }

    useEffect(() => {
        getAllusers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleImageChanged = (img) => {
        setimg(img);
        setIsChange(true)
    }

    const updateaccount = async () => {
        const { data } = await axios.post(`${server}/updateaccount`, { Username: username, email: mail, password: password, image: img, isChange: isChange }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        if (data === 0) {
            return false
        }
    }

    const deleteaccount = async () => {

        const { data } = await axios.post(`${server}/deleteaccount`, { Username: username, email: mail, password: password }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        if (data === 0) {
            return false
        } else {
            sessionStorage.removeItem('jwt')
            history.push("/Register")
        }
    }

    if (username !== null && username !== undefined && img !== null && img !== undefined) {
        return (
            <div id='container-account'>

                <h2 id="h2-account">Bonjour bienvenue sur ton compte {username}</h2>

                <Form id="formAccount">
                    <Avatarr onImageChange={(img) => { handleImageChanged(img) }} img={img} />
                    <Form.Label htmlFor="inlineFormInputGroup" visuallyhidden="true">
                        Username
                    </Form.Label>
                    <InputGroup className="mb-3">
                       
                        <Form.Control defaultValue={username} onChange={(e) => setUsername(e.target.value)} id="inlineFormInputGroup" placeholder="Username" />
                    </InputGroup>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control defaultValue={mail} onChange={(e) => setMail(e.target.value)} type="email" placeholder="Enter email" >
                        </Form.Control>
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
                {/* <Footericon ></Footericon> */}
            </div >
        )
    } else {
        return (' no data ')
    }
}

export default Account