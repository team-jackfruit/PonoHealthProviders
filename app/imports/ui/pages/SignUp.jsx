import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Alert, Card, Col, Container, Row, Button } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, TextField } from 'uniforms-bootstrap5';

const SignUp = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const formRef = useRef(null);

  const schema = new SimpleSchema({
    email: String,
    password: String,
  });
  const bridge = new SimpleSchema2Bridge(schema);

  const submit = (doc) => {
    const { email, password } = doc;
    Accounts.createUser({ email, username: email, password }, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setError('');
        navigate('/createuser');
      }
    });
  };

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  return (
    <Container id="signup-page" fluid className="py-3 userProfile">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow">
            <Card.Body>
              <h2 className="text-center mb-4">Register Your Account</h2>
              <AutoForm ref={formRef} schema={bridge} onSubmit={data => submit(data)}>
                <TextField name="email" placeholder="E-mail Address" />
                <TextField name="password" placeholder="Password" type="password" />
                <ErrorsField />
                <Button onClick={handleSubmit} className="btn btn-primary w-100 mt-3">Register</Button>
              </AutoForm>
              {error && (
                <Alert variant="danger" className="mt-3">
                  <Alert.Heading>Registration was not successful</Alert.Heading>
                  {error}
                </Alert>
              )}
            </Card.Body>
            <Card.Footer className="text-center">
              <small>
                Already have an account? <Link to="/signin">Login here</Link>
              </small>
            </Card.Footer>
          </Card>
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
