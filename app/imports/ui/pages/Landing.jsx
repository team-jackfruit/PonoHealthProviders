import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

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
    <Row className="mission-section justify-content-md-center align-items-center pb-5">
      <Col md={10} lg={8} xl={6} className="text-center">
        <p className="mission-heading">Need Medical Help?</p>
        <p className="mission-heading">Anxious because you&apos;re uninsured or under-insured?</p>
        <p className="mission-heading">Trying to find affordable healthcare?</p>
        <p className="mission-text">
          PonoHealth Providers aims to bridge the gap for the uninsured and under-insured, by enhancing healthcare
          accessibility, promoting informed decision-making, and fostering a community where quality health services are
          attainable for all, regardless of their financial circumstances.
        </p>
      </Col>
    </Row>
  </Container>
);

export default Landing;
