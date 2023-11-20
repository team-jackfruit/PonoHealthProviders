import React, { useState } from 'react';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AutoForm, TextField, SelectField, SubmitField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { UserFormSchema } from '../forms/UserFormInfo';
import { UsersData } from '../../api/userData/userData';

const bridge = new SimpleSchema2Bridge(UserFormSchema);

const CreateUser = () => {
  const [emailState, setEmailState] = useState('');
  const navigate = useNavigate();
  let fRef = null;

  const submit = (data) => {
    const { firstName, lastName, email, phone, address, status } = data;
    UsersData.insert({ firstName, lastName, email, phone, address, status }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'The user record was created.', 'success').then(() => {
          setEmailState(email);
          if (fRef) fRef.reset();
          navigate('/home'); // Redirect after the alert
        });
      }
    });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h2 className="text-center">Create User</h2>
          <AutoForm ref={(ref) => { fRef = ref; }} schema={bridge} onSubmit={(data) => submit(data)}>
            <Card className="p-2">
              <Row>
                <Col>
                  <TextField name="firstName" />
                </Col>
                <Col>
                  <TextField name="lastName" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextField name="email" />
                </Col>
                <Col>
                  <TextField name="phone" optional />
                </Col>
              </Row>
              <TextField name="address" optional />
              <SelectField name="status" placeholder="Insurance Status" />
              <SubmitField value="Submit" />
            </Card>
          </AutoForm>
          {emailState ? (
            <Alert className="py-2">
              <a href={`/user/${emailState}`}>Edit this data</a>
            </Alert>
          ) : ''}
        </Col>
      </Row>
    </Container>
  );
};

export default CreateUser;
