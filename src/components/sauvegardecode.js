import React, { useContext } from 'react'
import { BasketContext } from '../App'
//import Footericon from './Footericon'
import { Card, Row, Container, Col, CloseButton, Button } from 'react-bootstrap'
import server from '../Config';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const Panier = () => {
    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/login");
    }

    const { basket, dispatch } = useContext(BasketContext)

    const removeItem = (id) => {
        dispatch({ type: 'del', id: id })
    }

    const addQte = (article) => {
        dispatch({ type: "add", article: article })
    }

    const removeQte = (article) => {
        dispatch({ type: "remove", article: article })
    }

    return (
        <div>
            <Container >
                {
                    basket?.map(
                        p => (
                            <Row key={p.id} className="justify-content-md-center">
                                <Col sm={{ span: 8, offset: 8 }} md={{ span: 6, offset: 6 }} lg={{ span: 4, offset: 4 }} >
                                    <Card id="produitCardpanier" key={p.id} >
                                        <CloseButton id="closebuttonpanier" onClick={() => removeItem(p.id)} />
                                        <Card.Img id="imgpanier" variant="top" src={`${server}/uploads/` + p.img} />
                                        <Card.Body>
                                            <Card.Title>{p.title}</Card.Title>
                                            <Card.Text id="subtitlepanier">
                                                {p.subtitle}
                                            </Card.Text>
                                            <Card.Text id="prixpanier">
                                                {p.prix * p.qte}$
                                            </Card.Text>
                                            <Card.Text>
                                                {p.qte}
                                            </Card.Text>
                                            <Button id="buttonpanier"><i className="fa fa-plus-circle" aria-hidden="true" onClick={() => addQte(p)} /></Button>
                                            <Button id="buttonpanierminus"> <i className="fa fa-minus-circle" aria-hidden="true" onClick={() => removeQte(p)} /></Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        )
                    )
                }
            </Container>
            <Button id='comfirme la commande' > <Link to="/Commandevalidegotopayement">comfirmer la commande </Link></Button>

        </div>
    )
}

export default Panier
v