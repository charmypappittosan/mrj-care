import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../image/doctor.png';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
const Header = () => {
  const [user]=useAuthState(auth);
  const handleSignOut=()=>{
    signOut(auth);
  }
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

                <Nav.Link eventKey={4} href="/checkout">
                  Checkout
                </Nav.Link>
                <Nav.Link eventKey={7} href="/blogs">
                  Blogs
                </Nav.Link>
                <Nav.Link eventKey={3} href="home#doctorprofile">
                  Doctor Profile
                </Nav.Link>
                <Nav.Link eventKey={5} as={Link} to="/signup">
                  SignUp
                </Nav.Link>
                {user ? (
                  <Button style={{width:"90px",height:"35px",backgroundColor:"grey",border:"none",marginLeft:"5px",borderRadius:"20px"}}  onClick={handleSignOut}>Logout</Button>
                ) : (
                  <Nav.Link eventKey={6} as={Link} to="/login">
                    Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;