import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <Navbar className='bg-c container-fluid' bg="" expand="lg">
            <Container>
                <Navbar.Brand className='fs-1 fw-semibold'><Link className='text-decoration-none fw-bold' to='/'>QuiZero<span className='text-danger fw-bold'>!</span></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100 d-flex justify-content-end gap-lg-4">
                        <Nav.Link className='fs-5 fw-bold'><Link className='text-decoration-none hush' to='/'>Topics</Link></Nav.Link>
                        <Nav.Link className='fs-5 fw-bold'><Link className='text-decoration-none hush' to='/statistics'>Statistics</Link></Nav.Link>
                        <Nav.Link className='fs-5 fw-bold'><Link className='text-decoration-none hush' to='/blog'>Blog</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;