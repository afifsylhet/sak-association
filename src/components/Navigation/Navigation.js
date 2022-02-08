
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../utilities/useAuth';

const Navigation = () => {
    const { user, handleLogout } = useAuth();
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
                            <NavLink to="/home" style={{ textDecoration: "none", color: "white" }} className='pe-3'>
                                Home
                            </NavLink>
                            <NavLink to="/about" style={{ textDecoration: "none", color: "white" }} className='pe-3'>
                                About
                            </NavLink>
                            <NavLink to="/members" style={{ textDecoration: "none", color: "white" }} className='pe-3'>
                                All Members
                            </NavLink>
                            <NavLink to="/mission" style={{ textDecoration: "none", color: "white" }} className='pe-3'>
                                Our Mission
                            </NavLink>
                            <NavLink to="/allchart" style={{ textDecoration: "none", color: "white" }} className='pe-3'>
                                At a Glance
                            </NavLink>
                            <NavLink to="/dashboard" style={{ textDecoration: "none", color: "white" }} className='pe-3'>
                                Dashboard
                            </NavLink>
                        </Nav>
                        {user.email ?
                            <Button variant="outline-light" onClick={handleLogout} className="pe-3"> Logout</Button>
                            :
                            <Button as={NavLink} to="/login" variant="outline-light" className='pe-3' >Log In</Button>}

                        {!user.email &&
                            <Button as={NavLink} to="/register" variant="outline-light" className='ms-3' >Register</Button>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Navigation;