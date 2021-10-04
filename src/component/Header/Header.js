import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.svg'
import './Header.css'

const header = () => {
    return (
        <div>
            <div className="border-bottom bg-white shadow-sm">
                <Navbar>
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                width="150"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Nav className="justify-content-end nav-custom" activeKey="/home">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/catagory">Catagory</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                
            </div>
        </div>
    );
};

export default header;