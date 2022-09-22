import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

const NavbarComp = () => {
    return (
        <Navbar bg="light" expand="lg" >
            <Container>
                <Navbar.Brand href="#home"><b><u>Imdadu Rohman</u></b> </Navbar.Brand>
                <Navbar.Toggle style={{background: 'white'}} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav className="ml-auto" >
                    <Nav.Link href="#home">home</Nav.Link>
                    <Nav.Link href="#aboutme">about me</Nav.Link>
                    <Nav.Link href="#services">services</Nav.Link>
                    <Nav.Link href="#howwork">how work</Nav.Link>
                    <Nav.Link href="#portofolio">portofolio</Nav.Link>
                    <Nav.Link href="#contacts">contacts</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp
