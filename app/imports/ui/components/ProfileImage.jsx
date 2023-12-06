import React from 'react';
import PropTypes from 'prop-types'; // Make sure to install prop-types package if you haven't already
import { Card, Image } from 'react-bootstrap';
import { CardImage } from 'react-bootstrap-icons';

const ProfileImage = ({ user }) => (
  <Card className="align-content-center user-card">
    <Card.Body className="text-center">
      <Card.Header className="bold-large-header">Your Profile</Card.Header>
      <Card className="pb-2"> <CardImage src={user.image} /></Card>
      <CardImage><Image src={user.image} /> </CardImage>
    </Card.Body>
  </Card>
);

// Define propTypes for the UserCard component
ProfileImage.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string,
  }).isRequired,
};

export default ProfileImage;
