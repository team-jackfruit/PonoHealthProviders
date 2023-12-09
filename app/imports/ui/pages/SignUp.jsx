import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Alert, Card, Col, Container, Row, CardGroup, Button } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';

/**
 * SignUp component is similar to signin component, but we create a new user instead.
 */
const SignUp = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Added useNavigate

  const schema = new SimpleSchema({
    email: String,
    password: String,
  });
  const bridge = new SimpleSchema2Bridge(schema);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|edu)$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^[a-zA-Z0-9]{7}$/;
    return re.test(password);
  };

  const submit = (doc) => {
    const { email, password } = doc;
    if (!validateEmail(email)) {
      setError('Invalid email format. Email must have an @ and end with .com or .edu');
      return;
    }

    if (!validatePassword(password)) {
      setError('Invalid password. Password must be 7 characters long and alphanumeric');
      return;
    }
    Accounts.createUser({ email, username: email, password }, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setError('');
        navigate('/createuser'); // Redirect to Create User page
      }
    });
  };

  return (
    <Container fluid id="signup-page">
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="py-4">
          <AutoForm schema={bridge} onSubmit={data => submit(data)}>
            <CardGroup>
              <Card bg="light">
                <Card.Img src="images/login_card2.jpeg" alt="Card image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                <Card.ImgOverlay>
                  <Card.Body>
                    <h2 className="text-center"> I'm a Member! </h2>
                    <p>If you already have an account with us and are trying to log back in, no worries! Just click on below to head on over to the login page. We're happy to have you back!</p>
                    <div className="text-center py-4">
                      <Button variant="primary" as={Link} to="/signin">Sign In</Button>
                    </div>
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
              <Card bg="light">
                <Card.Img src="images/login_card.jpeg" alt="Card image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                <Card.ImgOverlay>
                  <Card.Body>
                    <Card.Title as="h2" className="text-center">Register Your New Account</Card.Title>
                    <TextField name="email" placeholder="E-mail address" />
                    <TextField name="password" placeholder="Password" type="password" />
                    <ErrorsField />
                    <div className="text-center py-4">
                      <SubmitField value="Sign-Up" />
                    </div>
                    {error === '' ? (
                      ''
                    ) : (
                      <Alert id="reg-error" variant="danger">
                        <Alert.Heading>Registration was not successful</Alert.Heading>
                        {error}
                      </Alert>
                    )}
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

/* Ensure that the React Router location object is available in case we need to redirect. */
SignUp.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
};

SignUp.defaultProps = {
  location: { state: '' },
};

export default SignUp;
