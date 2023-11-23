import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
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
    <>
      <Container id="signin-page" className=" py-4 signin-form">
        <Row className="justify-content-center">
          <Col md={6} className="position-relative w-50 h-100 flex flex-column">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-100 " alt="Login" />
          </Col>
          <Col md={6} className="p-0">
            <div className="text-center">
              <h2>Login to your account</h2>
            </div>
            <AutoForm schema={bridge} onSubmit={data => submit(data)}>
              <Card>
                <Card.Body>
                  <TextField id="signin-form-email" name="email" placeholder="E-mail address" />
                  <TextField id="signin-form-password" name="password" placeholder="Password" type="password" />
                  <ErrorsField />
                  <SubmitField id="signin-form-submit" />
                </Card.Body>
              </Card>
            </AutoForm>
            <Alert variant="light">
              <h4>Don't have an account? </h4>
              <Link to="/signup">Click here to Register</Link>
            </Alert>
            {error === '' ? (
              ''
            ) : (
              <Alert variant="danger">
                <Alert.Heading>Login was not successful</Alert.Heading>
                {error}
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
      <Container>
        <p>Hey</p>
      </Container>
    </>
  );
};

export default SignIn;
