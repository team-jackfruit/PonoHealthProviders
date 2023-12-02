import React from 'react';
import PropTypes from 'prop-types'; // Make sure to install prop-types package if you haven't already
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FavoriteCard = ({ user }) => (
  <Card className="align-content-center user-card">
    <Card.Body className="text-center">
      <Card.Header className="bold-large-header">Favorite Places</Card.Header>
      <Card.Title className="pt-2"> <i className="bi bi-people-fill" /> {user.name} </Card.Title>
    </Card.Body>
  </Card>
);

// Define propTypes for the FavoriteCard component
FavoriteCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default FavoriteCard;
