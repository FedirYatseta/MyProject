import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const NavbarComponent = () => {
   
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand ><NavLink to="/main" >Головна</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><NavLink to="/contact" >Контакти</NavLink></Nav.Link>
            <NavDropdown title="Students" id="collasible-nav-dropdown">
              <NavDropdown.Item ><NavLink to="/users" >Додати студентів</NavLink></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
    }

export default NavbarComponent
