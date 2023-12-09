import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
// import { Roles } from 'meteor/alanning:roles';
import { Nav, Navbar, Container, NavDropdown, Image } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBarPono = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg">
      <Container>
        <Image
          alt="Logo"
          src="images/PonoHealthLogo.png"
          width="60"
          className="d-inline-block align-top"
        />
        <Navbar.Brand className="p-3" href="/home">PONOHEALTH PROVIDERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link href="/list">FIND A PROVIDER</Nav.Link>
            <Nav.Link href="/resources">RESOURCES</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="LOGIN">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  <PersonFill className="me-2" />
                  Sign In
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                  <PersonPlusFill className="me-2" />
                  Sign Up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link href="/userprofile">PROFILE</Nav.Link>
                <NavDropdown id="navbar-current-user" title={currentUser}>
                  <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                    <BoxArrowRight />
                    {' '}
                    Sign
                    out
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

/*
const NavBarPono = () => (
  <Navbar className="custom-navbar" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">PONOHEALTH PROVIDERS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/list">FIND A PROVIDER</Nav.Link>
          <Nav.Link href="/home">HOME</Nav.Link>
          <Nav.Link href="/resources">RESOURCES</Nav.Link>
          <Nav.Link href="/faq">FAQ</Nav.Link>
          <Nav.Link href="/blog">BLOG</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
 */

export default NavBarPono;
