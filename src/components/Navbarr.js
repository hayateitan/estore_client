import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import {BasketContext} from '../App'
import Badge from '@material-ui/core/Badge';

const Navbarr = () => {
  const {basket} = useContext(BasketContext)

  let history = useHistory();

  const Logout = () => {
    sessionStorage.removeItem('jwt')
    history.push("/")
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="" id="main-nav"   >
        <Container>
          <Navbar.Brand href="home">HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="STREETWEAR" id="basic-nav-dropdown">
                <NavDropdown.Item href="Decouvrire"> Decouvrir </NavDropdown.Item>
                <NavDropdown.Item href="Kith"> Kith 🇫🇷 </NavDropdown.Item>
                <NavDropdown.Item href="KawsXuniqlo"> Kaws x Uniqlo </NavDropdown.Item>
                <NavDropdown.Item href="TravisScott"> Travis Scott - Cactus Jack
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link id="sneakers" href="Sneakers">SNEAKERS</Nav.Link>
              <Nav.Link id="quisommenous" href="QuisommeNous">Qui sommes-nous</Nav.Link>
              <Nav.Link id="Contacter" href="Contacter">Nous Contacter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
      
        < Nav.Item >
          <Nav.Link href="/Account"><FontAwesomeIcon icon={faUser} color='white' size="1x" /></Nav.Link>
        </Nav.Item >
        <Nav.Item>
          <Nav.Link href="link-1"> <FontAwesomeIcon icon={faSearch} color='white' size="1x" /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Badge badgeContent={basket.reduce((total, value) => total + value.qte, 0)} color="primary">
            <Nav.Link href="/Panier"> <FontAwesomeIcon icon={faShoppingCart} color='white' size="1x" /></Nav.Link>
          </Badge>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link > <FontAwesomeIcon onClick={Logout} icon={faPowerOff} color='white' size="1x" /></Nav.Link>
        </Nav.Item>
      
      </Navbar>
    </div>
  );
};

export default Navbarr;