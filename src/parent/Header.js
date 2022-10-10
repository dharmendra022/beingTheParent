import React from 'react'
import { Button, NavDropdown, Navbar, Nav, Container } from 'react-bootstrap';
import Logo from "../media/CompanyLogo.png"

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect bg="light" expand="lg">
                <Container>
                <img src={Logo} alt="" style={{ borderRadius: "50%", width: "60px", height: "60px",  }} />
                    <Navbar.Brand href="#home"><span className='text-danger'>brand</span>labs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Brand pages</Nav.Link>
                            <Nav.Link href="#deets">Solutions</Nav.Link>
                            <Nav.Link href="#deets">Utilities</Nav.Link>
                            <Nav.Link href="#deets">Success Stories</Nav.Link>
                            <Button type="button" className="btn btn-danger">
                                Login
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
