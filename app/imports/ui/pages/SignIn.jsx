import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';

const SignIn = () => {
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const schema = new SimpleSchema({
    email: String,
    password: String,
  });
  const bridge = new SimpleSchema2Bridge(schema);

  const submit = (doc) => {
    const { email, password } = doc;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setRedirect(true);
      }
    });
  };

  if (redirect) {
    return (<Navigate to="/" />);
  }

  return (
    <Container id="signin-page" fluid className="py-3 userProfile">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow">
            <Card.Body>
              <h2 className="text-center mb-4">Login to Your Account</h2>
              <AutoForm schema={bridge} onSubmit={data => submit(data)}>
                <TextField id="signin-form-email" name="email" placeholder="E-mail Address" />
                <TextField id="signin-form-password" name="password" placeholder="Password" type="password" />
                <ErrorsField />
                <SubmitField id="signin-form-submit" className="btn btn-primary w-100 mt-3" value="Sign In" />
              </AutoForm>
              {error && (
                <Alert variant="danger" className="mt-3">
                  <Alert.Heading>Login was not successful</Alert.Heading>
                  {error}
                </Alert>
              )}
            </Card.Body>
            <Card.Footer className="text-center">
              <small>
                Don't have an account? <Link to="/signup">Register</Link>
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
