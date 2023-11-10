import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container fluid>
    {/* This is the Page Banner */}
    <Row className="justify-content-md-center align-items-center hero-banner">
      <Col xs={12} className="text-center">
        <h1 className="header-title">Welcome to PonoHealth Providers</h1>
        <h2 className="header-subtitle">Where everyone gets equal access</h2>
      </Col>
    </Row>
    {/* This is the Mission section */}
    <Row>
      <Col xs={12} md={8} className="text-center text-md-left">
        <h1>NEED MEDICAL HELP?</h1>
        <h2>ANXIOUS BECAUSE YOU&apos;RE UNINSURED OR UNDER-INSURED?</h2>
        <h3>TRYING TO FIND AFFORDABLE HEALTHCARE?</h3>
        <p>PonoHealth Providers aims to bridge the gap for the uninsured and under-insured, by enhancing healthcare accessibility, promoting informed decision-making, and fostering a community where quality health services are attainable for all, regardless of their financial circumstances.</p>
      </Col>
      <Col xs={12} md={4} className="text-center">
        {/* Your image/icon here */}
      </Col>
    </Row>
  </Container>
);

export default Landing;
