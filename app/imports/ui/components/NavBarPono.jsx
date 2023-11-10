import React from 'react';
// import { Meteor } from 'meteor/meteor';
// import { useTracker } from 'meteor/react-meteor-data';
// import { NavLink } from 'react-router-dom';
// import { Roles } from 'meteor/alanning:roles';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavBarPono = () => (
  <Navbar className="custom-navbar fixed-top" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">PONOHEALTH PROVIDERS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/list">FIND A PROVIDER</Nav.Link>
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#resources">RESOURCES</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
          <Nav.Link href="#blog">BLOG</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBarPono;
