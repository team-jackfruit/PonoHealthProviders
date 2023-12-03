import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Carousel, Image } from 'react-bootstrap';

/* After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => {
  Meteor.logout();
  return (
    <Container fluid id="signout-page">
      <Col md={{ span: 8, offset: 2 }}>
        <Carousel data-bs-theme="dark">
          <Carousel.Item interval={5000}>
            <Image src="images/GoodBye.png" className="w-100" />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Image src="images/SignedOut.png" className="w-100" />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Image src="images/Enjoyed.png" className="w-100" />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Container>
  );
};

export default SignOut;
