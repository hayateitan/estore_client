import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { MdDashboard } from "@react-icons/all-files/md/MdDashboard";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { TiMessages } from "@react-icons/all-files/ti/TiMessages";
import { BsArrowsFullscreen } from "@react-icons/all-files/bs/BsArrowsFullscreen";
import { GiSonicShoes } from "@react-icons/all-files/gi/GiSonicShoes";
import { FaAngellist } from "@react-icons/all-files/fa/FaAngellist";
import {IoMdAddCircle} from "@react-icons/all-files/io/IoMdAddCircle";
const NavbarAdmin = () => {
    return (
        <div>
            
            <Navbar id="navbaradmin" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container id="containeradmin" className="flex-column">
                    <Navbar.Brand  id="titreadmin">The Resseler 2.0<FaAngellist id="icontitreadmin"color='white' size={25}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="flex-column">
                           

                            < Nav.Item id="userIcon">
                                <Nav.Link href="/User"><FaUserAlt color='white' size={25} /> User Profile</Nav.Link>
                            </Nav.Item >

                            <Nav.Item id="messagesIcon">

                                <Nav.Link href="/message"> <TiMessages color='white' size={25} /> Messages</Nav.Link>


                            </Nav.Item>
                            <Nav.Item id="streetwearIcon">
                                <Nav.Link href="/Streetwearadmin"> <BsArrowsFullscreen color='white' size={25} /> StreetWear</Nav.Link>
                                <Nav.Link href="/Addstreetwear">   <IoMdAddCircle  size={25} /> </Nav.Link>
                            </Nav.Item>
                            <Nav.Item id="streetwearIcon2">
                                <Nav.Link href="/StreetwearKith"> <BsArrowsFullscreen color='white' size={25} /> StreetWear(kith)</Nav.Link>
                                <Nav.Link href="/AddKith">   <IoMdAddCircle  size={25} /> </Nav.Link>
                            </Nav.Item>
                            <Nav.Item id="streetwearIcon3">
                                <Nav.Link href="/streetwearkaws"> <BsArrowsFullscreen color='white' size={25} /> StreetWear(kaws)</Nav.Link>
                                <Nav.Link href="/AddKaws">   <IoMdAddCircle  size={25} /> </Nav.Link>
                            </Nav.Item>
                            <Nav.Item id="streetwearIcon4">
                                <Nav.Link href="/StreetwearTravisscott"> <BsArrowsFullscreen color='white' size={25} /> StreetWear(Travis Scott)</Nav.Link>
                                <Nav.Link href="/Addtravisscott">   <IoMdAddCircle  size={25} /> </Nav.Link>
                            </Nav.Item>
                            <Nav.Item id="shoesIcon">
                                <Nav.Link href="/SneakersAdmin"> <GiSonicShoes color='white' size={25} /> Sneakers</Nav.Link>
                                <Nav.Link href="/AddSneakers">   <IoMdAddCircle  size={25} /> </Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarAdmin
