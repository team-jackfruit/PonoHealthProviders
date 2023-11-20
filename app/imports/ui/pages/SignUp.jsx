import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Navigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { UsersData } from '../../api/userData/userData'; // Adjust the import path

const SignUp = ({ location }) => {
  const [error, setError] = useState('');
  const [redirectToReferer, setRedirectToRef] = useState(false);
  const bridge = new SimpleSchema2Bridge(UsersData.schema); // Use UsersData.schema

  const submit = (doc) => {
    const { email, password, firstName, lastName, phoneNumber, address } = doc;
    Accounts.createUser({ email, username: email, password, profile: { firstName, lastName, phoneNumber, address } }, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        // Insert the user data into the UsersData collection
        UsersData.collection.insert({ firstName, lastName, email, phoneNumber, address }); // Use UsersData.collection

        setError('');
        setRedirectToRef(true);
      }
    });
  };

  const { from } = location?.state || { from: { pathname: '/home' } };
  if (redirectToReferer) {
    return <Navigate to={from} />;
  }

  return (
    <Container id="signup-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Register your account</h2>
          </Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <TextField name="firstName" placeholder="First Name" />
                  </Col>
                  <Col>
                    <TextField name="lastName" placeholder="Last Name" />
                  </Col>
                </Row>
                <TextField name="address" placeholder="Address" />
                <TextField name="phoneNumber" placeholder="Phone Number" />
                <TextField name="email" placeholder="E-mail address" />
                <TextField name="password" placeholder="Password" type="password" />
                <ErrorsField />
                <SubmitField />
              </Card.Body>
            </Card>
          </AutoForm>
          <Alert variant="light">
            Already have an account? Login
            {' '}
            <Link to="/signin">here</Link>
          </Alert>
          {error === '' ? (
            ''
          ) : (
            <Alert variant="danger">
              <Alert.Heading>Registration was not successful</Alert.Heading>
              {error}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

SignUp.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
};

SignUp.defaultProps = {
  location: { state: '' },
};

export default SignUp;
