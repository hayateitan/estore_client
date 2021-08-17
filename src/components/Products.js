import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Footericon from './Footericon';
import server from '../Config';
import { BasketContext } from '../App'
import { useContext } from 'react';

const Products = ({ id }) => {
    const { dispatch } = useContext(BasketContext)

    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/login");
    }

    const [products, setProducts] = useState();

    const getAllProducts = async (id) => {
        const res = await axios.get(`${server}/Products?id=${id}`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

        setProducts(res.data)
    }

    useEffect(() => {
        getAllProducts(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAddToBasket = (p) => {
        dispatch({ type: "add", article: p })
    }

    return (
        <div id="hdbgdvg" >
            {
                products?.map(
                    p => (
                       
                            <Col id="productscol" >
                                <Card id="produitCard" key={p.id} style={{ width: '18rem' }}>
                                    <Card.Img  variant="top" src={`${server}/uploads/` + p.img} />
                                    <Card.Body>
                                        <Card.Title>{p.title}</Card.Title>
                                        <Card.Text>
                                            {p.subtitle}
                                        </Card.Text>
                                        <Card.Text >
                                            {p.prix}$
                                        </Card.Text>
                                        {/* <div id="select">
                                            <select className="custom-select ml-1" defaultValue="0">
                                                <option value="0">Size</option>
                                                <option value="1">41</option>
                                                <option value="2">42</option>
                                                <option value="3">43</option>
                                            </select>
                                        </div> */}
                                        <Button variant="primary" onClick={(e) => handleAddToBasket(p)}>Ajouter au panier</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        
                    )
                )
            }
            {/* <Footericon></Footericon> */}
        </div>
    )
}

export default Products