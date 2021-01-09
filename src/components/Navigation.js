import React from 'react';
 
import { NavLink } from 'react-router-dom';
// import bootstrap components here
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav'; 
import Form from 'react-bootstrap/Form'; 
import FormControl from 'react-bootstrap/FormControl';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">BuJo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
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