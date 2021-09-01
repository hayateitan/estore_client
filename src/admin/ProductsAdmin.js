import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import server from '../Config'
import produce from "immer"
import CheckAdmin from './CheckAdmin';

const ProductsAdmin = ({id}) => {
    CheckAdmin();
    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/");
    }

    const [products, setProducts] = useState();
    const [title, setTitle] = useState('');
    const [subtitlee, setSubtitlee] = useState('');
    const [prix, setPrix] = useState(0);
    //const [img, setimg] = useState();

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

    const deleteproduct = async (id) => {
        const index = products.findIndex(i => i.id === id)
        setProducts([...products.slice(0, index), ...products.slice(index+1)])

        await axios.post(`${server}/deleteproduct`, { productId: id }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
           
    }

    const updateproduct = async (id) => {
        const newProducts = produce(products, draft => {
            let i = draft.find(i => i.id === id)
            if (subtitlee !== '')
            {
                i.subtitle = subtitlee
            }
            if (prix > 0) {
                i.prix = prix
            }
            if (title !== '') {
                i.title = title
            }
        })

        setProducts(newProducts)

        const p = newProducts.find(i => i.id === id)

        await axios.post(`${server}/updateproduct`, { Title: p.title, Subtitle: p.subtitle, Prix: p.prix, updateproductId: p.id }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    return (
        <Container id="admincontainer" >
            {
                products?.map(
                    p => (
                        <Row key={p.id} className="justify-content-md-center">
                            <Col md={{ span: 1, offset: 6 }} >
                                <div id='iduser' className="item">
                                    <Card style={{ width: '18rem' }}>
                                         
                                        <div className="item_left">
                                            <Card.Img variant="top" src={`${server}/uploads/` + p.img} />
                                        </div>
                                        <div className="item_right">
                                            <Card.Body>
                                                <Card.Text>
                                                    <Form.Group id='inputadmin1' className="mb-3" >
                                                        <Form.Label>Title</Form.Label>
                                                        <Form.Control defaultValue={p.title} onChange={(e) => setTitle(e.target.value)} type="title" />
                                                    </Form.Group>
                                                </Card.Text>
                                                <Card.Text>
                                                    <Form.Group id='inputadmin2' className="mb-3" >
                                                        <Form.Label>subTitle</Form.Label>
                                                        <Form.Control defaultValue={p.subtitle} onChange={(e) => setSubtitlee(e.target.value)} type="subtitle" />
                                                    </Form.Group>
                                                </Card.Text>
                                                <Card.Text>
                                                    <Form.Group id='inputadmin3' className="mb-3" >
                                                        <Form.Label>prix</Form.Label>
                                                        <Form.Control defaultValue={p.prix} onChange={(e) => setPrix(e.target.value)} type="price" />
                                                    </Form.Group>
                                                </Card.Text>

                                                <Button variant="primary" id={p.id + 'updateproductId'} onClick={() => updateproduct(p.id)}>
                                                    Modifier
                                                </Button>
                                                <Button  variant="btn btn-danger" id={p.id + 'productId'} onClick={() => deleteproduct(p.id)}>
                                                    Suprime le produit
                                                </Button>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                </div>

                            </Col>
                        </Row>
                    )
                )
            }
        </Container >
    )
}

export default ProductsAdmin