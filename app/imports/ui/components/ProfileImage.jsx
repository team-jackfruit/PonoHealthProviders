import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Make sure to install prop-types package if you haven't already
import { Button, Card, Image } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/storage';

const ProfileImage = ({ user }) => {
  const [imageURL, setImageURL] = useState(null);

  const handleFileUpload = (url) => {
    setImageURL(url);
  };

  const uploadImage = (file) => {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`images/${file.name}`).put(file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, {
      // Handle progress, success, and errors
    });
  };
  return (
    <Card className="align-content-center user-card">
      <Card.Body className="text-center">
        <Card.Header className="bold-large-header">Your Profile</Card.Header>
        <Card className="pb-2"><Image src={user.image} /> </Card>
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
