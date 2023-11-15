import React from 'react';
// import { Meteor } from 'meteor/meteor';
// import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
// import { Roles } from 'meteor/alanning:roles';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavBarPono = () => (
  <Navbar className="custom-navbar" variant="dark" expand="lg">
    <Container>
      <img
        alt="Logo"
        src="images/PonoHealthProvidersLogo.png"
        width="60"
        height="60"
        className="d-inline-block align-top"
      />
      <Navbar.Brand href="#home" className="p-3">PONOHEALTH PROVIDERS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <Nav.Link id="find-provider-nav" as={NavLink} to="/add" key="find">FIND A PROVIDER</Nav.Link>
          <Nav.Link id="home-nav" as={NavLink} to="/add" key="home">HOME</Nav.Link>
          <Nav.Link id="resources-nav" as={NavLink} to="/resources" key="resource">RESOURCES</Nav.Link>
          <Nav.Link id="faq-nav" as={NavLink} to="/add" key="faq">FAQ</Nav.Link>
          <Nav.Link id="blog-nav" as={NavLink} to="/add" key="blog">BLOG</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBarPono;
