
import axios from 'axios';
import React, {  useState } from 'react';
import Footericon from './Footericon'
import { useHistory } from "react-router-dom";
import server from '../Config';
import { FormControl, InputGroup, Form, Button } from 'react-bootstrap';


const NousContacter = () => {

    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/login");
    }
    const [mail, setMail] = useState('');
    const [nom, setNom] = useState('');
    const [message, setMessage] = useState('');

    const doSubmitNousContacter = () => {

        
console.log(nom.value)
        axios.post(`${server}/NousContacter`, { Nom: nom, Mail: mail, Message: message }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

            .then(res => {
                console.log(res);
                if (res.data === 0) {

                    return false;

                }

            })
    }




    return (
        <div>
           
            <Form id='formulairecontacteznous'>
            <h1 id="contacteznous"> Contactez-Nous</h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"> <i id="iconformcontacteznous" className="fas fa-user"></i></InputGroup.Text>
                        <FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setNom(e.target.value)} />
                    </InputGroup>

                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"> <i id="iconformcontacteznous" className="fas fa-pencil-alt" ></i></InputGroup.Text>
                        <FormControl placeholder="Mail" aria-label="Mail" aria-describedby="basic-addon1" onChange={(e) => setMail(e.target.value)} />
                    </InputGroup>

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                    <InputGroup>
                        <InputGroup.Text> <i id="iconformcontacteznous" className="fas fa-envelope"></i></InputGroup.Text>
                        <FormControl as="textarea" aria-label="With textarea" onChange={(e) => setMessage(e.target.value)} />
                    </InputGroup>

                </Form.Group>
                <Button variant="primary" type="submit" onClick={doSubmitNousContacter}>
                    Submit
                </Button>
            </Form>

           
        </div>








    )
}

export default NousContacter
