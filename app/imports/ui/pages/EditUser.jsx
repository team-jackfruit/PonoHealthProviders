import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import swal from 'sweetalert';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Users } from '../../api/userData/userData';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Users.schema);

const EditUser = () => {
  const [imageURL, setImageURL] = useState(null);
  const [isUploading, setIsUploading] = useState(false); // State variable for upload status
  const navigate = useNavigate();
  const { _id } = useParams();
  const { doc, ready } = useTracker(() => {
    const subscription = Meteor.subscribe(Users.userPublicationName);
    const rdy = subscription.ready();
    const document = Users.collection.findOne(_id);
    return { doc: document, ready: rdy };
  }, [_id]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setIsUploading(true); // Set upload status to true
    const storage = getStorage();
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Handle progress
      },
      (error) => {
        // Handle error
        swal('Error', `Failed to upload image: ${error.message}`, 'error');
        setIsUploading(false); // Set upload status to false on error
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageURL(url); // Save the URL for later use
          swal('Success', 'Image uploaded successfully', 'success');
          setIsUploading(false); // Set upload status to false on success
        });
      },
    );
  };

  const submit = (data) => {
    const newData = { ...data, image: imageURL || data.image };
    Users.collection.update(_id, { $set: newData }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Profile Edited Successfully', 'success')));
    navigate('/'); // Redirect Landing
  };

  return ready ? (
    <Container fluid className="py-3 userProfile">
      <Row className="justify-content-center">
        <Col xs={5}>
          <h1 className="text-center">Edit User</h1>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <TextField name="firstName" />
                <TextField name="lastName" />
                <TextField name="email" />
                <TextField name="phone" />
                <TextField name="address" />
                {imageURL && (
                  <div>
                    <img src={imageURL} alt="Uploaded" style={{ width: '100%', marginBottom: '10px' }} />
                  </div>
                )}
                <div className="mb-3">
                  <label htmlFor="imageUpload" className="form-label">Upload Image</label>
                  <input type="file" className="form-control" id="imageUpload" onChange={handleImageUpload} />
                </div>
                <SelectField name="status" />
                <SubmitField value="Submit" disabled={isUploading} /> {/* Disable button during upload */}
                <ErrorsField />
                <HiddenField name="owner" />
                <HiddenField name="image" value={imageURL || doc.image} />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditUser;
