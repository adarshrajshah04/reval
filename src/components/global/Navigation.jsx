import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Button from "../Button";

const Navigation = () => {
    return (
        <div>
            <Container data-bs-theme="dark" >
                <Navbar expand="lg" className="navbar px-5 py-3 rounded-pill " >
                    <Container>
                        <Navbar.Brand href="#home"><i className="bi bi-shadows me-2"></i>Rival</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#home">About</Nav.Link>
                                <Nav.Link href="#home">Services</Nav.Link>
                                <Nav.Link href="#home">Portfolio</Nav.Link>
                                <Nav.Link href="#home">Team</Nav.Link>
                                <Nav.Link href="#home">Contact</Nav.Link>
                                

                            </Nav>
                            
                        </Navbar.Collapse>
                        <Button text='Get started'/>
                       
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Navigation;
