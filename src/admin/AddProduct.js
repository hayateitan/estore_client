import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import Avatarr from '../components/Avatarr';
import { GiSonicShoes } from "@react-icons/all-files/gi/GiSonicShoes";
import { FaRegGrinTongueWink } from "@react-icons/all-files/fa/FaRegGrinTongueWink"
import { FaAngellist } from "@react-icons/all-files/fa/FaAngellist"
const AddProduct = () => {
    const [img, setimg] = useState();
    const [isChange, setIsChange] = useState(false)

    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/");
    }


    const handleImageChanged = (img) => {
        setimg(img);
        setIsChange(true)
    }


    return (
        <div id='container-accountadmin2'>
            < Form id="formAccountadmin2" >
                <Form.Label id="texteadd">Ajouter vos Sneakers </Form.Label>
                <Form.Group id="iconeadd"  >
                    <Form.Label> <FaRegGrinTongueWink color='black' size={35} /><FaAngellist size={35} /><GiSonicShoes size={35} /></Form.Label>

                </Form.Group>
                <Avatarr id="avataraddproduct" onImageChange={(img) => { handleImageChanged(img) }} img={img} >
                    upload your file
                </Avatarr>
                
                <Form.Group id='Dasboardinput' className="mb-3" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="title" />
                </Form.Group>

                <Form.Group id='Dasboardinput' className="mb-3" >
                    <Form.Label>subTitle</Form.Label>
                    <Form.Control type="subtitle" />
                </Form.Group>

                <Form.Group id='Dasboardinput' className="mb-3" >
                    <Form.Label>prix</Form.Label>
                    <Form.Control type="price" />
                </Form.Group>

                <Button variant="primary" id="ajoutersneskers" type="button">
                    Ajouter le produit
                </Button>

            </Form >
        </div>
    )
}

export default AddProduct
