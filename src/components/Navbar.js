import React from 'react';
import config from '../../config';
import { Link } from "gatsby"
import { Container, Navbar, Nav  } from 'react-bootstrap';


export default function NavBar() {
    return (
        <header className="bg-dark">
            <Container>
            <Navbar expand="lg" variant="dark">
                <Navbar.Brand href="/">Roshan Thomas</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive" />
                <Navbar.Collapse id="navbarResponsive">
                <Nav as="ul" className="ml-auto">
                    <Nav.Item as="li">
                        <Link to="/page-2" className="nav-link" activeClassName="active">Get in Touch</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/contact-me" className="nav-link" activeClassName="active">Get in Touch</Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
            
        </header>
    );   
}