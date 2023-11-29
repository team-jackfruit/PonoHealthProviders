import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Alert, Col, Container, Row, CardGroup, Card, Button } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';

/**
 * Signin page overrides the form’s submit event and call Meteor’s loginWithPassword().
 * Authentication errors modify the component’s state to be displayed
 */
const SignIn = () => {
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const schema = new SimpleSchema({
    email: String,
    password: String,
  });
  const bridge = new SimpleSchema2Bridge(schema);

  // Handle Signin submission using Meteor's account mechanism.
  const submit = (doc) => {
    // console.log('submit', doc, redirect);
    const { email, password } = doc;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setRedirect(true);
      }
    });
    // console.log('submit2', email, password, error, redirect);
  };

  // Render the signin form.
  // console.log('render', error, redirect);
  // if correct authentication, redirect to page instead of login screen
  if (redirect) {
    return (<Navigate to="/" />);
  }
  // Otherwise return the Login form.
  return (
    <Container fluid id="signin-page">
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="py-4">
          <AutoForm schema={bridge} onSubmit={data => submit(data)}>
            <CardGroup>
              <Card bg="light">
                <Card.Img src="images/login_card.jpeg" alt="Card image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                <Card.ImgOverlay>
                  <Card.Body>
                    <Card.Title as="h2" className="text-center">Login To Your Account</Card.Title>
                    <TextField id="signin-form-email" name="email" placeholder="E-mail address" />
                    <TextField id="signin-form-password" name="password" placeholder="Password" type="password" />
                    <ErrorsField />
                    <div className="text-center py-4">
                      <SubmitField id="signin-form-submit" value="Sign-in" />
                    </div>
                    {error === '' ? (
                      ''
                    ) : (
                      <Alert variant="danger" className="py-4">
                        <Alert.Heading>Login was not successful</Alert.Heading>
                        {error}
                      </Alert>
                    )}
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
              <Card bg="light">
                <Card.Img src="images/login_card2.jpeg" alt="Card image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                <Card.ImgOverlay>
                  <Card.Body>
                    <h2 className="text-center"> New Here? </h2>
                    <p>Discover a world of wellness at your fingertips! Sign up today and connect with top healthcare providers who are ready to prioritize your health and well-being. Join our community and take the first step towards a healthier you!</p>
                    <div className="text-center py-4">
                      <Button variant="primary" as={Link} to="/signup">Sign Up</Button>
                    </div>
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
            </CardGroup>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
