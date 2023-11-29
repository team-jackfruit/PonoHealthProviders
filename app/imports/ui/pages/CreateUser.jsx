import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Users } from '../../api/userData/userData';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
  status: {
    type: String,
    allowedValues: ['Insured', 'Uninsured', 'Under-insured'],
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the CreateUser page for adding a document. */
const CreateUser = () => {
  const navigate = useNavigate();
  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { firstName, lastName, email, phone, address, status } = data;
    const owner = Meteor.user().username;
    Users.collection.insert(
      { firstName, lastName, email, phone, address, status, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
          navigate('/'); // Redirect Landing
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Create User</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="firstName" />
                <TextField name="lastName" />
                <TextField name="email" />
                <TextField name="phone" />
                <TextField name="address" />
                <SelectField name="status" />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateUser;
