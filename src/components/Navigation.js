import React from 'react';

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
                <Navbar.Brand href="/">Funance</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/age10">Age 10</NavDropdown.Item>
                            <NavDropdown.Item href="/age11">Age 11</NavDropdown.Item>
                            <NavDropdown.Item href="/age12">Age 12</NavDropdown.Item>
                            <NavDropdown.Item href="/age13">Age 13</NavDropdown.Item>
                            <NavDropdown.Item href="/age14">Age 14</NavDropdown.Item>
                            <NavDropdown.Item href="/age15">Age 15</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                        <NavDropdown title="Stats" id="basic-nav-dropdown" style={{width:'200px'}}>
                            <NavDropdown.Item>Age: Placeholder</NavDropdown.Item>
                            <NavDropdown.Item>Job: Placeholder</NavDropdown.Item>
                            <NavDropdown.Item>Balance: Placeholder</NavDropdown.Item>
                        </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
