import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Technology</Nav.Link>
                    <Nav.Link href="#link">Business</Nav.Link>
                    <Nav.Link href="#link">Sports</Nav.Link>
                    <Nav.Link href="#link">Entertainments</Nav.Link>
                    <Nav.Link href="#link">Photo</Nav.Link>
                    <Nav.Link href="#link">Video</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;