import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import './Navbar.css';
import { useAuth } from '../AuthContext';

function MyNavbar({ backgroundColor }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth(); // ✅ Get user directly from context

  const storedUser = JSON.parse(localStorage.getItem('admin')) || {};
  const name = storedUser.name || '';

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to homepage
  };

  const getLinkStyle = (path) => ({
    color: location.pathname === path ? 'rgb(12, 92, 12)' : '#0c0c89',
    fontWeight: '600',
    borderBottom: location.pathname === path ? '2px solid rgb(12, 92, 12)' : 'none',
    fontFamily: 'sans-serif',
    fontSize: '0.8rem',
  });

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom" style={{ backgroundColor }}>
      <Container className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Navbar.Brand href="/" style={{ fontSize: '30px', fontWeight: '600', marginRight: '20px' }}>
            <img src="/assets/yect.png" alt="" width={90} height={80} /> YECT
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>

          {/* Conditionally Render Navigation Links */}
          <div className="flex-grow-1 d-flex justify-content-center">
            <Nav>
              {isAuthenticated ? (
                <>
                  <Nav.Link href="/#/admin-dashboard" style={getLinkStyle('/admin-dashboard')}>
                    Donation
                  </Nav.Link>
                  {/* <Nav.Link href="/#/add-internship" style={getLinkStyle('/add-internship')}>
                    Internships
                  </Nav.Link> */}
                </>
              ) : (
                <>
                  <Nav.Link href="/" style={getLinkStyle('/')}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="/#/about" style={getLinkStyle('/about')}>
                    About Us
                  </Nav.Link>
                 
                  <Nav.Link href="/#/donation" style={getLinkStyle('/donation')}>
                    Donation
                  </Nav.Link>
                  <Nav.Link href="/#/program" style={getLinkStyle('/program')}>
                    Program
                  </Nav.Link>
                  <Nav.Link href="/#/internship" style={getLinkStyle('/internship')}>
                    Internships
                  </Nav.Link>
                  <Nav.Link href="/#/gallery" style={getLinkStyle('/gallery')}>
                    Gallery
                  </Nav.Link>
                  {/* <Nav.Link href="/#/privacy-policy" style={getLinkStyle('/privacy-policy')}>
                    Privacy Policy
                  </Nav.Link>
                  <Nav.Link href="/#/terms-condition" style={getLinkStyle('/terms-condition')}>
                    Terms & Conditions
                  </Nav.Link> */}
                  <Nav.Link href="/#/contact" style={getLinkStyle('/contact')}>
                    Contact Us
                  </Nav.Link>
                </>
              )}
            </Nav>
          </div>

          {/* Right Section: User Dropdown or Donate Button */}
          <div className="d-flex align-items-center">
            {isAuthenticated ? (
              <Dropdown>
                <Dropdown.Toggle variant="light" style={{ fontWeight: '600', color: 'red', borderRadius: '12%' }}>
                  Hello {name} {/* ✅ Updates dynamically */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Button
                className="ml-auto"
                style={{
                  fontWeight: '600',
                  backgroundColor: 'rgb(12, 92, 12)',
                  color: '#FFF',
                  borderColor: 'rgb(12, 92, 12)',
                  borderRadius: '8%',
                }}
                onClick={() => navigate('/donation')}
              >
                Donate Now
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
