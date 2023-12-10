import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Users } from '../../api/userData/userData';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  firstName: {
    type: String,
    min: 1, // Ensures the name is not empty
    max: 200, // Maximum length for first name
    // eslint-disable-next-line consistent-return
    custom() {
      if (!this.value || this.value.trim().length === 0) {
        return 'First name cannot be empty- Invalid ';
      }
      if (!/^[a-zA-Z ]+$/.test(this.value)) {
        return 'First name can only contain letters - Invalid'; // Custom message for invalid characters
      }
    },
  },
  lastName: {
    type: String,
    min: 1, // Ensures the name is not empty
    max: 200, // Maximum length for last name
    // eslint-disable-next-line consistent-return
    custom() {
      if (!this.value || this.value.trim().length === 0) {
        return 'Last name cannot be empty- Invalid ';
      }
      if (!/^[a-zA-Z ]+$/.test(this.value)) {
        return 'Last name can only contain letters - Invalid '; // Custom message for invalid characters
      }
    },
  },
  email: {
    type: String,
    // eslint-disable-next-line consistent-return
    custom() {
      if (this.isSet && !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(this.value)) {
        return 'Check your email format - Invalid ';
      }
    },
  },
  phone: {
    type: String,
    // eslint-disable-next-line consistent-return
    custom() {
      if (this.isSet && !/^[2-9]\d{2}-\d{3}-\d{4}$/.test(this.value)) {
        return 'Check your phone number for e.g 808-123-4567 - Invalid ';
      }
    },
  },
  address: {
    type: String,
    min: 1, // Basic validation to ensure the address is not empty
    // eslint-disable-next-line consistent-return
    custom() {
      if (this.isSet && this.value.trim().length === 0) {
        return 'Address cannot be empty';
      }
    },
  },
  status: {
    type: String,
    allowedValues: ['Insured', 'Uninsured', 'Under-insured'],
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

const CreateUser = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = (data, formRef) => {
    setIsSubmitting(true);
    const owner = Meteor.user() ? Meteor.user().username : 'unknown';

    Users.collection.insert({ ...data, owner }, (error) => {
      setIsSubmitting(false);

      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal({
          title: 'Success',
          text: 'Profile Information Added Successfully',
          icon: 'success',
          buttons: {
            confirm: {
              text: 'OK',
              value: true,
              visible: true,
              className: 'success-ok-button', // Custom class for the OK button
              closeModal: true,
            },
          },
          className: 'success-swal', // Adding custom class to the popup
        }).then(() => {
          formRef.reset();
          navigate('/home');
        });
      }
    });
  };

  let fRef = null;
  return (
    <Container fluid className="py-3 userProfile" id="createUserContainer">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Create User</h2></Col>
          <AutoForm id="createUserForm" ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)} validation="onChange">
            <Card>
              <Card.Body>
                <TextField name="firstName" id="firstNameField" />
                <TextField name="lastName" id="lastNameField" />
                <TextField name="email" id="emailField" />
                <TextField name="phone" id="phoneField" />
                <TextField name="address" id="addressField" />
                <SelectField name="status" id="statusField" />
                <SubmitField value="Submit" id="submitButton" disabled={isSubmitting} />
                {isSubmitting && <Spinner animation="border" id="loadingSpinner" />}
                <ErrorsField id="errorsField" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateUser;
