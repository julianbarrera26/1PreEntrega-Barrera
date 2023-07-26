import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Cartwidget } from '../CartWidget/CartWidget';
import {NavLink, Outlet } from 'react-router-dom';

export const NavBar = () => {
    return (
      <>
      <header>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <NavLink to="/" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQkKaOdUt3wUZIX8kxO2v4Dhvc2JTg6i6syQ&usqp=CAU" /></NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Turnos</Nav.Link>
                <NavDropdown title="Shop" id="collasible-nav-dropdown">
                  <NavLink to={"categoria/Maquinas"} >Maquinas</NavLink>
                  <NavLink to={"categoria/Tijeras"} >Tijeras</NavLink>
                  <NavDropdown.Divider />
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
        </header>
      <Outlet/>
      <footer></footer>
    </>
    );
};

