import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../pages/img/logo.png'
const CustomNavbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img src={logo}  className="img-fluid rounded-circle" // Makes it circular
    style={{ width: '50px', height: '50px', objectFit: 'cover' }} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={isActive('/')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={isActive('/about')}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/skills" 
              className={isActive('/skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={isActive('/contact')}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;