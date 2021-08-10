import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Form, Button, InputGroup } from 'react-bootstrap';
import {IoMdAddCircle} from "@react-icons/all-files/io/IoMdAddCircle";
import { GiSonicShoes } from "@react-icons/all-files/gi/GiSonicShoes";
import {FaRegGrinTongueWink} from "@react-icons/all-files/fa/FaRegGrinTongueWink"
import  {FaAngellist} from "@react-icons/all-files/fa/FaAngellist"
const AddProduct = () => {

    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/");
    }

     

    return (
        <Container  >
      <Form.Label id="texteadd">Ajouter vos Sneakers </Form.Label>
            
                        <Row className="justify-content-md-center">
                            <Col md={{ span: 1, offset: 6 }} >


                                <div id="addSneakers" className="itemdashboard">
                                    <Card style={{ width: '30rem', }}>
                                      
                                          <Form.Group id="iconeadd"  >
                                    <Form.Label> <FaRegGrinTongueWink color='black'  size={35} /><FaAngellist  size={35} /><GiSonicShoes  size={35} /></Form.Label>
                             
                                </Form.Group>
                                    
                                          <Form.Group id="filedashboard" controlId="formFile" >
                                    <Form.Label>Default file input example</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                                                                    
                                        <div className="item_right">
                                            <Card.Body>
                                                <Card.Text>
                                                    <Form.Group id='Dasboardinput' className="mb-3" >
                                                        <Form.Label>Title</Form.Label>
                                                        <Form.Control   type="title" />
                                                    </Form.Group>
                                                </Card.Text>
                                                <Card.Text>
                                                    <Form.Group id='Dasboardinput' className="mb-3" >
                                                        <Form.Label>subTitle</Form.Label>
                                                        <Form.Control   type="subtitle" />
                                                    </Form.Group>
                                                </Card.Text>
                                                <Card.Text>
                                                    <Form.Group id='Dasboardinput' className="mb-3" >
                                                        <Form.Label>prix</Form.Label>
                                                        <Form.Control  type="price" />
                                                    </Form.Group>
                                                </Card.Text>


                                                <Button variant="primary"  id="ajoutersneskers" type="button">
                                                   Ajouter le produit 
                                                </Button>
                                                
                                            </Card.Body>
                                        </div>
                                    </Card>
                                </div>

                            </Col>
                        </Row>









              


        </Container >
    )
}

export default AddProduct

