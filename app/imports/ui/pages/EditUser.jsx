import React from 'react';
import { useParams } from 'react-router';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, TextField, SubmitField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import swal from 'sweetalert';
import { _ } from 'meteor/underscore';
import { UsersDataSchema, userData } from '../../api/userData/userData';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(UsersDataSchema);

const EditUser = () => {
  const { userId } = useParams();
  const { ready, userDoc } = useTracker(() => {
    const userDataSubscription = Meteor.subscribe('UserData');
    return {
      userDoc: userData.findOne({ _id: userId }),
      ready: userDataSubscription.ready(),
    };
  }, []);

  const submit = (data) => {
    const { firstName, lastName, email, phoneNumber, address } = data;
    userData.update(userDoc._id, { $set: { firstName, lastName, email, phoneNumber, address } }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'User data updated successfully', 'success');
      }
    });
  };

  return (ready) ? (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h2 className="text-center">Edit User</h2>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={userDoc}>
            <Card className="p-2">
              <Container>
                <TextField name="firstName" showInlineError placeholder="First Name" />
                <TextField name="lastName" showInlineError placeholder="Last Name" />
                <TextField name="email" showInlineError placeholder="Email" disabled />
                <TextField name="phoneNumber" showInlineError placeholder="Phone Number" />
                <TextField name="address" showInlineError placeholder="Address" />
                <SubmitField value="Update" />
              </Container>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditUser;
