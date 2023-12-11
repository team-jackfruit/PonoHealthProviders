import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Make sure to install prop-types package if you haven't already
// eslint-disable-next-line no-unused-vars
import { Button, Card, Image } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/storage';

const ProfileImage = ({ user }) => {
  // eslint-disable-next-line no-unused-vars
  const [imageURL, setImageURL] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const handleFileUpload = (url) => {
    setImageURL(url);
  };

  // eslint-disable-next-line no-unused-vars
  const uploadImage = (file) => {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`images/${file.name}`).put(file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, {
      // Handle progress, success, and errors
    });
  };
  return (
    <Card className="align-content-center user-card" style={{ width: '300px', margin: 'auto' }}>
      <Card.Body className="text-center">
        <Card.Header className="bold-large-header">Profile Picture</Card.Header>
        <Card style={{ width: '100%' }}>
          <Image src={user.image} style={{ width: '100%', height: 'auto' }} />
        </Card>
      </Card.Body>
    </Card>

  );
};

// Define propTypes for the UserCard component
ProfileImage.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string,
  }).isRequired,
};

export default ProfileImage;
