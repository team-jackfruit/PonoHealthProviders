import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const FooterPono = () => (
  <footer className="custom-navbar" style={{ color: 'white' }}>
    <Container>
      <Row className="py-3">
        <Col md={6} className="text-center text-md-left mb-3 mb-md-0">
          <div>Liam (Kula) Van Asperen</div>
          <div>Jakapop Khongnawang</div>
          <div>Chad Maeshiro</div>
          <div>Taitusi Vadei</div>
          <div>University of Hawaii at Manoa - ICS 314 F23</div>
        </Col>
        <Col md={6} className="text-center text-md-right">
          <Nav className="justify-content-center justify-content-md-end">
            <Nav.Item>
              <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/find-provider" style={{ color: 'white' }}>Find a Provider</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/resources" style={{ color: 'white' }}>Resources</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/faq" style={{ color: 'white' }}>FAQ</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/blog" style={{ color: 'white' }}>Blog</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col className="text-center py-3">
          © 2023 Team Jackfruit. All Rights Reserved.
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterPono;
