import React from 'react';
import PropTypes from 'prop-types'; // Make sure to install prop-types package if you haven't already
import { Card, Button } from 'react-bootstrap';

const FavoriteCard = ({ user, onRemove }) => {
  const handleFindDirections = () => {
    const address = encodeURIComponent(user.address);
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
    window.open(googleMapsUrl, '_blank');
  };
  return (
    <Card className="align-content-center user-card">
      <Card.Body className="text-center">
        <Card.Header className="bold-large-header">Favorite Provider</Card.Header>
        <Card.Title className="pt-2"> <i className="bi bi-people-fill" /> {user.name} </Card.Title>
        <Card.Text>
          Address: {user.address || 'Not Available'}
        </Card.Text>
        <Card.Text>
          Location: {user.location || 'Not Available'}
        </Card.Text>
        <Button variant="danger" onClick={() => onRemove(user._id)}>Remove</Button>
        <Button variant="primary" onClick={handleFindDirections}>Find Directions</Button>
      </Card.Body>
    </Card>
  );
};

// Define propTypes for the FavoriteCard component
FavoriteCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    location: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  userCoordinates: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
};

export default FavoriteCard;
