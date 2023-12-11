import React from 'react';
import { Row, Col, Nav, Image } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const FooterPono = () => (
  <footer className="custom-footer" style={{ color: 'white' }}>
    <Row className="p-4">
      <Col md={4} className="text-center">
        <div>Liam (Kula) Van Asperen</div>
        <div>Jakapop Khongnawang</div>
        <div>Chad Maeshiro</div>
        <div>Taitusi Vadei</div>
        <div>University of Hawaii at Manoa - ICS 314 F23</div>
      </Col>
      <Col md={4} className="text-center">
        <Image
          alt="Logo"
          src="images/JackFruitLogo.png"
          width="300px"
          className="d-inline-block align-top me-5"
        />
      </Col>
      <Col md={4} className="text-center">
        <Nav className="justify-content-center d-flex align-items-center">
          <Nav.Item>
            <Nav.Link href="/" style={{ color: 'white' }}>HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/list" style={{ color: 'white' }}>FIND A PROVIDER</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/resources" style={{ color: 'white' }}>RESOURCES</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/faq" style={{ color: 'white' }}>FAQ</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  </footer>
);

export default FooterPono;
