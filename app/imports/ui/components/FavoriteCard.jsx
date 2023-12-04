import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Make sure to install prop-types package if you haven't already
import { Card, Button } from 'react-bootstrap';

const FavoriteCard = ({ user, onRemove, userCoordinates }) => {
  const handleFindDirections = () => {
    const address = encodeURIComponent(user.address);
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
    window.open(googleMapsUrl, '_blank');
  };

  async function getCoordinates(address) {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
      const data = await response.json();

      if (data.length === 0) {
        throw new Error('No results found');
      }

      const { lat, lon } = data[0];
      return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
    } catch (error) {
      console.error('Geocoding error:', error);
      return null;
    }
  }

  const [distance, setDistance] = useState('');

  useEffect(() => {
    const fetchDistance = async () => {
      // Assuming `getCoordinates` is a function to convert an address to coordinates
      const providerCoordinates = await getCoordinates(user.address);

      // Fetching distance from OSRM API
      const response = await fetch(`http://router.project-osrm.org/route/v1/driving/${userCoordinates.longitude},${userCoordinates.latitude};${providerCoordinates.longitude},${providerCoordinates.latitude}`);
      const data = await response.json();
      const distanceInKm = data.routes[0].distance / 1000;

      setDistance(`${distanceInKm.toFixed(2)} km`);
    };

    fetchDistance();
  }, [user, userCoordinates]);

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
        <Card.Text>Distance: {distance || 'Calculating...'}</Card.Text>
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
