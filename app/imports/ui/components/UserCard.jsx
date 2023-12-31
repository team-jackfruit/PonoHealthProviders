import React from 'react';
import PropTypes from 'prop-types'; // Make sure to install prop-types package if you haven't already
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => (
  <Card className="align-content-center user-card" id="userCard">
    <Card.Body className="text-center">
      <Card.Header className="bold-large-header">Your Profile</Card.Header>
      <Card.Title className="pt-2" id="userName"> <i className="bi bi-people-fill" /> {user.firstName} {user.lastName}</Card.Title>
      <Card.Subtitle className="pb-4 text-muted" id="email"> <i className="bi bi-envelope-fill" /> {user.email}</Card.Subtitle>
      <Card.Subtitle className="pb-2" id="phone"> <i className="bi bi-telephone-fill" /> {user.phone}</Card.Subtitle>
      <Card.Subtitle className="pb-2" id="address"> <i className="bi bi-house-fill" /> {user.address}</Card.Subtitle>
      <Card.Subtitle className="pb-4" id="status"> <i className="bi bi-file-medical-fill" /> {user.status}</Card.Subtitle>
      <h4>Have your details changed since your last check-in?</h4>
      <Link to={`/edit/${user._id}`} className="btn btn-primary" id="edit-Link">I Want To Update My Information</Link>
    </Card.Body>
  </Card>
);

// Define propTypes for the UserCard component
UserCard.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string.isRequired,
    _id: PropTypes.string,
  }).isRequired,
};

export default UserCard;
