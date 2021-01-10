
import logotext from '../resources/logotext.svg';
import React, {useState} from 'react';

// import bootstrap components here
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Stats from './Stats';
import CalcModal from './CalcModal';

const Navigation = () => {
    const [isShown, setIsShown] = useState(false);

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
                        <div className="Stats-dropdown-div">
                            <Dropdown>
                                <Dropdown.Toggle onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setIsShown(false)}>
                                    Stats
                                {isShown && (
                                        <Dropdown.Menu>
                                            <Dropdown.Item><Stats
                                                Name="Helen"
                                                JobDesc="Placeholder"
                                                CurrBalance="Placeholder" /></Dropdown.Item>

                                        </Dropdown.Menu>
                                    )}
                                </Dropdown.Toggle>
                            </Dropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
                <CalcModal/>
            </Navbar>
        </div>
    );
}

export default Navigation;
