import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Navbarr = () => {
  return (
    <div>

      <Navbar bg="dark" variant="dark" fixed="" id="main-nav" expand="lg" fixed="
    230">

        <Container>
          <Navbar.Brand href="home">HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="sneakers" href="Sneakers">SNEAKERS</Nav.Link>
              <Nav.Link id="quisommenous" href="App1">Qui sommes-nous</Nav.Link>
              <NavDropdown title="STREETWEAR" id="basic-nav-dropdown">


                <NavDropdown.Item href="Decouvrire"> Decouvrir </NavDropdown.Item>
                <NavDropdown.Item href="Kith"> Kith 🇫🇷 </NavDropdown.Item>
                <NavDropdown.Item href="KawsXuniqlo"> Kaws x Uniqlo </NavDropdown.Item>
                <NavDropdown.Item href="TravisScott"> Travis Scott - Cactus Jack

                </NavDropdown.Item>




              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>

    </div>


  );
};

export default Navbarr;
