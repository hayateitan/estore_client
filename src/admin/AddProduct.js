import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Avatarr from "../components/Avatarr";
import { GiSonicShoes } from "@react-icons/all-files/gi/GiSonicShoes";
import { FaRegGrinTongueWink } from "@react-icons/all-files/fa/FaRegGrinTongueWink";
import { FaAngellist } from "@react-icons/all-files/fa/FaAngellist";
import server from "../Config";
import CheckAdmin from "./CheckAdmin";

const AddProduct = ({ id }) => {
  CheckAdmin();

  const [img, setimg] = useState();
  const [isChange, setIsChange] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setsubTitle] = useState("");
  const [prix, setPrix] = useState("");

  const addProducts = async () => {
    await axios.post(
      `${server}/addproduct`,
      { Title: title, SubTitle: subTitle, Prix: prix, image: img, Id: id },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    /* //setimg(null)
        setTitle('dfdsf');
        setsubTitle('dsfsdf');
        setPrix(0);*/
  };

  let history = useHistory();
  let token = sessionStorage.getItem("jwt");
  if (token === null || token === undefined) {
    history.push("/");
  }

  const handleImageChanged = (img) => {
    setimg(img);
    setIsChange(true);
  };

  return (
    <div id="container-accountadmin2">
      <Form id="formAccountadmin2">
        <Form.Label id="texteadd">Ajouter vos Sneakers </Form.Label>
        <Form.Group id="iconeadd">
          <Form.Label>
            {" "}
            <FaRegGrinTongueWink color="black" size={35} />
            <FaAngellist size={35} />
            <GiSonicShoes size={35} />
          </Form.Label>
        </Form.Group>

        <Avatarr
          id="avataraddproduct"
          onImageChange={(img) => {
            handleImageChanged(img);
          }}
          img={img}
        >
          upload your file
        </Avatarr>

        <Form.Group id="Dasboardinput" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group id="Dasboardinput" className="mb-3">
          <Form.Label>subTitle</Form.Label>
          <Form.Control
            type="subtitle"
            defaultValue={subTitle}
            onChange={(e) => setsubTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group id="Dasboardinput" className="mb-3">
          <Form.Label>prix</Form.Label>
          <Form.Control
            type="price"
            defaultValue={prix}
            onChange={(e) => setPrix(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          id="ajoutersneskers"
          type="button"
          onClick={addProducts}
        >
          Ajouter le produit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
