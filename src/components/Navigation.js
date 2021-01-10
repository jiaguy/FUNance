import React from 'react';
import logotext from '../resources/logotext.svg';
// import bootstrap components here
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img src={logotext} width="100px" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/age10">Part 1</NavDropdown.Item>
                        <NavDropdown.Item href="/age11">Part 2</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
