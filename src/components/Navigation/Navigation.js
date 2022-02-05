
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    const element = <FontAwesomeIcon icon={faRunning} />

    return (
        <div>
            <Navbar bg="secondary" expand="lg">
                <Container fluid>
                    <Navbar.Brand className='text-white' href="#">{element} SAK Assicoation</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to="/home" style={{ textDecoration: "none", color: "white" }} className='pe-4'>
                                Home
                            </NavLink>
                            <NavLink to="/about" style={{ textDecoration: "none", color: "white" }} className='pe-4'>
                                About
                            </NavLink>
                            <NavLink to="/mission" style={{ textDecoration: "none", color: "white" }} className='pe-4'>
                                Our Mission
                            </NavLink>
                            <NavLink to="/allchart" style={{ textDecoration: "none", color: "white" }} className='pe-4'>
                                At a Glance
                            </NavLink>
                            <NavLink to="/dashboard" style={{ textDecoration: "none", color: "white" }} className='pe-4'>
                                Dashboard
                            </NavLink>
                        </Nav>
                        <NavLink to="login" style={{ textDecoration: "none", color: "white" }} className='pe-4'>
                            <Button variant="outline-light" >Log In</Button>
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;