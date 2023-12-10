import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Card, Button, Modal } from 'react-bootstrap';
import swal from 'sweetalert';
import { Favorite } from '../../api/favData/favData';
import { StarFill } from 'react-bootstrap-icons';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Provider = ({ provider }) => {
  const [modalShow, setModalShow] = React.useState(false);

  const handleCardClick = () => {
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };

  // eslint-disable-next-line no-unused-vars
  const openWebsite = () => {
    window.open('https://ponohealthproviders.com', '_blank');
  };

  const favorite = (data) => {
    // Extract the necessary information from the 'data' object
    const facilityName = data.facility;
    const facilityAddress = data.address; // Assuming 'address' is a field in the 'data' object
    const facilityLocation = data.location; // Assuming 'location' is a field in the 'data' object
    const owner = Meteor.user().username;

    // Insert the new data into the Favorite collection
    Favorite.collection.insert(
      {
        name: facilityName,
        address: facilityAddress,
        location: facilityLocation,
        owner,
      },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Provider added to Favorites', 'success');
        }
      },
    );
  };

  const handleFavoriteClick = () => {
    if (Meteor.userId()) {
      favorite(provider);
    } else {
      // Redirect to the sign-up page
      // Replace '/signup' with the actual path to your sign-up page
      window.location.href = '/signin';
    }
  };

  return (
    <>
      <Card className="card h-100" id="provider-card" onClick={handleCardClick}>
        <Card.Body className="h-100">
          {/* <Image fluid src={provider.image} className="rounded mx-auto d-block" /> */}
          <Card.Title>{provider.facility}</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Text className="card-address">{provider.address}</Card.Text>
        </Card.Body>
      </Card>

      <Modal show={modalShow} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title id="facility-name">{provider.facility}</Modal.Title>
        </Modal.Header>
<<<<<<< HEAD
        <Modal.Body>
          {provider.administrator && <p>Administrated by {provider.administrator}</p>}
=======
        <Modal.Body id="facility-information">
>>>>>>> origin/issue-48-2
          <p>Address: {provider.address}</p>
          {provider.mailingAddress && <p>Mailing Address: {provider.mailingAddress}</p>}
          <p>Island: {provider.location}</p>
          <p>Phone: {provider.phone}</p>
          {provider.fax && <p>Fax: {provider.fax}</p>}
          {provider.numberOfLicensedBeds && <p>This facility contains {provider.numberOfLicensedBeds} licensed beds available</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal} id="closeProviderCard">
            Close
          </Button>
<<<<<<< HEAD
          {/* <Button variant="primary" onClick={openWebsite}> */}
          {/*  Visit Website */}
          {/* </Button> */}
          <Button variant="warning" onClick={handleFavoriteClick}>
            <StarFill color="white" />
=======
          <Button variant="primary" onClick={handleFavoriteClick} id="favoriteButton">
            Favorite
>>>>>>> origin/issue-48-2
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// Require a document to be passed to this component.
Provider.propTypes = {
  provider: PropTypes.shape({
    facility: PropTypes.string,
    providerBased: PropTypes.string,
    location: PropTypes.string,
    address: PropTypes.string,
    mailingAddress: PropTypes.string,
    phone: PropTypes.string,
    fax: PropTypes.string,
    administrator: PropTypes.string,
    executiveDirector: PropTypes.string,
    numberOfLicensedBeds: PropTypes.string,
    // services: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default Provider;
