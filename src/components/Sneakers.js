import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Card, Button ,Container,Row} from 'react-bootstrap';
import Footericon from './Footericon'

const Sneakers = () => {

    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/login");
    }

    const [sneakers, getSneakers] = useState();

    const getAllsneakers = () => {
        axios.get(`http://localhost:3001/Sneakers`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                getSneakers(res.data);
                console.log(res.data)
            })
    }

    useEffect(() => {
        getAllsneakers();
    }, []);

    return (
        <Container>

            {
                sneakers?.map(
                    p => (
                        <Row className="justify-content-md-center">
                        <div key={p.id} className="item">
                            <Card key={p.id} style={{ width: '18rem' }}>
                                <div className="item_left">
                                    <Card.Img variant="top" src={'http://localhost:3001/uploads/' + p.img} />
                                </div>
                                <div className="item_right">
                                    <Card.Body>
                                        <Card.Title>{p.title}</Card.Title>
                                        <Card.Text>
                                            {p.subtitle}
                                        </Card.Text>
                                        <Card.Text>
                                            {p.prix}$
                                        </Card.Text>

                                        <Button variant="primary">Ajouter au panier</Button>
                                    </Card.Body>
                                </div>
                            </Card>
                        </div>
                        </Row>
                    )
                )
            }

            <Footericon></Footericon>
       </Container>
    )
}

export default Sneakers