import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container fluid>
    {/* This is the Page Banner */}
    <Row className="justify-content-md-center align-items-center hero-banner">
      <Col className="text-center">
        <h1>Welcome to PonoHealth Providers</h1>
        <h2>Where everyone gets equal access</h2>
      </Col>
    </Row>
    {/* This is the Mission section */}
    <Row className="mission-section">
      <Col className="ps-5 text-lg-start">
        <h2 className="mission-heading">NEED MEDICAL HELP?</h2>
        <h2 className="mission-heading">ANXIOUS BECAUSE YOU&apos;RE UNINSURED OR UNDER-INSURED?</h2>
        <h2 className="mission-heading">TRYING TO FIND AFFORDABLE HEALTHCARE?</h2>
        <p className="mission-text">PonoHealth Providers aims to bridge the gap for the uninsured and under-insured, by enhancing healthcare accessibility, promoting informed decision-making, and fostering a community where quality health services are attainable for all, regardless of their financial circumstances.</p>
      </Col>
      <Col>
        <Image src="images/second_section_landing.png" />
      </Col>
    </Row>
    {/* This is the Services Provided section */}
    <Row className="justify-content-center services-section">
      <Col className="text-center services-section">
        <h1> Our Services </h1>
      </Col>
    </Row>
    <Row className="mb-3 align-items-center services-section">
      <Col className="text-center services-section">
        <Image src="images/Find_A_Provider.png" width="150" height="150" />
      </Col>
      <Col className="services-section">
        <h2>Find a Provider</h2>
        <p>We aid you in finding healthcare providers ready to assist you</p>
      </Col>
    </Row>
    <Row className="mb-3 align-items-center services-section">
      <Col className="text-center services-section">
        <Image src="images/Healthcare_Guide.png" width="150" height="150" />
      </Col>
      <Col className="services-section">
        <h2>Healthcare Guide</h2>
        <p>Benefit from our collected resources aimed at providing affordable healthcare solutions.</p>
      </Col>
    </Row>
    <Row className="mb-3 align-items-center services-section">
      <Col className="text-center services-section">
        <Image src="images/Guidance_Support.png" width="150" height="150" />
      </Col>
      <Col className="services-section">
        <h2>Guidance Support</h2>
        <p>Our team is ready to answer all your healthcare related queries on our FAQ page.</p>
      </Col>
    </Row>
    <Row className="mb-3 align-items-center services-section">
      <Col className="text-center services-section">
        <Image src="images/Community_Forum.png" width="150" height="150" />
      </Col>
      <Col className="services-section">
        <h2>Community Forum</h2>
        <p>Join the community forum to discuss and share healthcare solutions and experiences.</p>
      </Col>
    </Row>
  </Container>
);

export default Landing;
