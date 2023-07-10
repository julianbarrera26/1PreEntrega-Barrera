import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Cartwidget } from '../CartWidget/CartWidget';


export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Eshop Barber</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Turnos</Nav.Link>
                <NavDropdown title="Shop" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Maquinas/Equipamientos</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Tijeras
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Colorimetria</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Insumos
                  </NavDropdown.Item> 
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Sobre Nosotros</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Contactos
                </Nav.Link>
                <Cartwidget/>
              </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
      );
};

