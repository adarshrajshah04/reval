import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Button from "../Button";
import { Link } from "react-router-dom";
import classes from '../../assets/css/Naveigation.module.css'


const Navigation = () => {
    return (
        <div >
            <Container data-bs-theme="dark" >
                <Navbar expand="lg" className={`navbar px-5 py-3 rounded-pill `} >
                    <Container>
                        <Navbar.Brand href="#home"><i className="bi bi-shadows me-2"></i>Rival</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className={`m-auto ${classes.nav}`}>
                                <Link className={classes.Link} to='/Home'>Home</Link>
                                <Link className={classes.Link} to='/About'>About</Link>
                                <Link className={classes.Link} to='/Services'>Services</Link>
                                <Link className={classes.Link} to='/Portfolio'>Portfolio</Link>
                                <Link className={classes.Link} to='/Team'>Team</Link>
                                <Link  className={classes.Link} to='/Contact'>Contact</Link>
                                

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
