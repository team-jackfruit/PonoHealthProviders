import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Alert, Col, Container, Row } from 'react-bootstrap';
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
      <Col md={6}>
        <div className="text-center">
          <h2>Login to your account</h2>
        </div>
        <AutoForm schema={bridge} onSubmit={data => submit(data)}>
          <TextField id="signin-form-email" name="email" placeholder="E-mail address" />
          <TextField id="signin-form-password" name="password" placeholder="Password" type="password" />
          <ErrorsField />
          <SubmitField id="signin-form-submit" />
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
    </Container>
  );
};

export default SignIn;
