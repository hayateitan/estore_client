import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import Footericon from './Footericon'
const Streetwear = () => {

    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/login");
    }

    const [streetwear, getstreetwear] = useState();

    const getAllstreetwear = () => {
        axios.get(`http://localhost:3001/StreetwearDecouvrire`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                getstreetwear(res.data);
                console.log(res.data)
            })
    }

    useEffect(() => {
        getAllstreetwear();
    }, []);

    return (
        <div>

            {
                streetwear?.map(
                    p => (
                        <div key={p.id} className="item">
                            <Card key={p.id} style={{ width: '18rem' }}>
                                <div className="item_left">
                                    <Card.Img variant="top" src={'http://localhost:3001/uploads/' + p.img}/>
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
                    )
                )
            }
             <Footericon></Footericon>
        </div>
    )
}

export default Streetwear

