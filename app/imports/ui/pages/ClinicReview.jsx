import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import ClinicReviews from '../../api/clinicReviews/ClinicReviews';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  clinicName: String,
  location: String,
  servicesOffered: {
    type: Array,
    label: 'Services Offered',
  },
  'servicesOffered.$': {
    type: String,
    allowedValues: [
      'Adult Day Health Centers',
      'Ambulatory Surgery Centers',
      'End Stage Renal Disease (ESRD) Program',
      'Home Health Agencies',
      'Hospice',
      'Hospitals',
      'Intermediate Care Facilities for Individuals with Intellectual Disabilities',
      'Organ Procurement Organization',
      'Outpatient Physical Therapy/Speech Pathology',
      'Rural Health Clinics',
      'Skilled Nursing/Intermediate Care Facilities',
      'Free-Standing X-Ray Facility',
    ],
  },
  userExperience: String,
  rating: {
    type: SimpleSchema.Integer,
    min: 1,
    max: 5,
    label: 'Rating (1-5)',
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      }
      this.unset(); // Prevent user from supplying their own value

    },
    denyUpdate: true, // Don't allow the date to be edited once set
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const ClinicReview = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { clinicName, location, servicesOffered, userExperience, rating } = data;
    const owner = Meteor.user().username; // or userId, depending on what you need

    ClinicReviews.collection.insert(
      { clinicName, location, servicesOffered, userExperience, rating, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Review added successfully', 'success');
          formRef.reset();
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
          <Col className="text-center"><h2>Comment About A Clinics Service!</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="clinicName" />
                <TextField name="location" />
                <SelectField name="servicesOffered" multiple />
                <TextField name="userExperience" />
                <NumField name="rating" decimal={null} />
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

export default ClinicReview;
