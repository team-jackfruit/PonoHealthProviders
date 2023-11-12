import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

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
    <Row className="mission-section">
      <Col xs={12} md={8} className="ps-5 text-lg-start">
        <h2 className="mission-heading">NEED MEDICAL HELP?</h2>
        <h2 className="mission-heading">ANXIOUS BECAUSE YOU&apos;RE UNINSURED OR UNDER-INSURED?</h2>
        <h2 className="mission-heading">TRYING TO FIND AFFORDABLE HEALTHCARE?</h2>
        <p className="mission-text">PonoHealth Providers aims to bridge the gap for the uninsured and under-insured, by enhancing healthcare accessibility, promoting informed decision-making, and fostering a community where quality health services are attainable for all, regardless of their financial circumstances.</p>
      </Col>
      <Col xs={12} md={4}>
        <Image src="images/second_section_landing.png" />
      </Col>
    </Row>
    {/* This is the Services Provided section */}
    <Row>
      <Col>
        <h2> Our Services </h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <Image src="images/Find_A_Provider.png" />
      </Col>
      <Col>
        <h2>Find a Provider</h2>
        <p>We aid you in finding healthcare providers ready to assist you</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <Image src="images/Healthcare_Guide.png" />
      </Col>
      <Col>
        <h2>Healthcare Guide</h2>
        <p>Benefit from our collected resources aimed at providing affordable healthcare solutions.</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <Image src="images/Guidance_Support.png" />
      </Col>
      <Col>
        <h2>Guidance Support</h2>
        <p>Our team is ready to answer all your healthcare related queries on our FAQ page.</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <Image src="images/Community_Forum.png" />
      </Col>
      <Col>
        <h2>Community Forum</h2>
        <p>Join the community forum to discuss and share healthcare solutions and experiences.</p>
      </Col>
    </Row>
  </Container>
);

export default Landing;
