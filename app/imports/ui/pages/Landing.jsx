import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="home-page" fluid>
    {/* This is the Page Banner */}
    <Row className="hero-banner">
      <Col className="text-center">
        <h1>Welcome to PonoHealth Providers</h1>
        <h2>Where everyone gets equal access</h2>
        <Button size="lg" className="m-4" variant="outline-light" href="\list">Find a Provider</Button>
      </Col>
    </Row>
    {/* This is the Mission section */}
    <Row className="mission-section align-content-center">
      <Col className="col-6 p-5">
        <h2 className="mission-heading"><strong>NEED MEDICAL HELP?</strong></h2>
        <h2 className="mission-heading"><strong>ANXIOUS BECAUSE YOU&apos;RE UNINSURED OR UNDER-INSURED?</strong></h2>
        <h2 className="mission-heading"><strong>TRYING TO FIND AFFORDABLE HEALTHCARE?</strong></h2>
        <p className="mission-text">PonoHealth Providers aims to bridge the gap for the uninsured and under-insured, by enhancing healthcare accessibility, promoting informed decision-making, and fostering a community where quality health services are attainable for all, regardless of their financial circumstances.</p>
      </Col>
      <Col className="col-4 ms-5 p-5 pt-6 text-center">
        <Image fluid src="images/PonoHealthLogoColor.png" />
      </Col>
    </Row>
    {/* This is the Services Provided section */}
    <Row className="justify-content-center services-section p-4">
      <Col className="text-center services-section">
        <h1>Our Services</h1>
      </Col>
    </Row>
    <Row className="align-items-center services-section">
      <Col className="text-center services-section p-3">
        <Image src="images/TargetIcon.png" width="150" height="150" />
      </Col>
      <Col className="services-section">
        <h2>Find a Provider</h2>
        <p>We aid you in finding healthcare providers ready to assist you</p>
      </Col>
    </Row>
    <Row className="align-items-center services-section p-3">
      <Col className="text-center services-section">
        <Image src="images/DocIcon.png" width="150" height="150" />
      </Col>
      <Col className="services-section">
        <h2>Healthcare Guide</h2>
        <p>Benefit from our collected resources aimed at providing affordable healthcare solutions.</p>
      </Col>
    </Row>
    <Row className="align-items-center services-section p-3">
      <Col className="text-center services-section">
        <Image src="images/SupportIcon.png" width="150" height="150" />
      </Col>
      <Col className="services-section">
        <h2>Guidance Support</h2>
        <p>Our team is ready to answer all your healthcare related queries on our FAQ page.</p>
      </Col>
    </Row>
    <Row className="align-items-center services-section p-3 pb-4">
      <Col className="text-center services-section">
        <Image src="images/StarIcon.png" width="150" height="150" />
      </Col>
      <Col className="services-section">
        <h2>Create Favorite Providers</h2>
        <p>Streamline your healthcare experience by favoriting your preferred clinics and providers, ensuring easy access and personalized care at your fingertips.</p>
      </Col>
    </Row>
  </Container>
);

export default Landing;
