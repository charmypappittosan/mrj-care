import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../image/doctor.png';
const Header = () => {
    return (
      <div>
        <Navbar id="header" collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand id="title" href="#home">
                <img src={logo} alt="" />
              MRJ-CARE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="home#services">Services</Nav.Link>
                <Nav.Link className="ml-4px" eventKey={2} href="home#feedbacks">
                  Feedbacks
                </Nav.Link>
                <Nav.Link eventKey={3} as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link eventKey={4} as={Link} to="/signup">
                  SignUp
                </Nav.Link>
                <Nav.Link eventKey={5} href="home#contactus">
                  Contact Us
                </Nav.Link>
                <Nav.Link eventKey={6} href="home#doctorprofile">
                  Doctor Profile
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;