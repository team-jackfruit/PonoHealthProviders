import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Card, Button, Modal } from 'react-bootstrap';
import swal from 'sweetalert';
import { Users } from '../../api/userData/userData';
import { Favorite } from '../../api/favData/favData';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Provider = ({ provider }) => {
  const [modalShow, setModalShow] = React.useState(false);

  const handleCardClick = () => {
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };

  const openWebsite = () => {
    window.open('https://ponohealthproviders.com', '_blank');
  };

  const favorite = (data) => {
    const facilityName = data.facility;
    const owner = Meteor.user().username;

    Favorite.collection.insert(
      { name: facilityName, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
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
        <Card.Header className="h-80">
          {/* <Image fluid src={provider.image} className="rounded mx-auto d-block" /> */}
          <Card.Title>{provider.facility}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text className="card-address">{provider.address}</Card.Text>
        </Card.Body>
      </Card>

      <Modal show={modalShow} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{provider.facility}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Address: {provider.address}</p>
          <p>Island: {provider.location}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={openWebsite}>
            Visit Website
          </Button>

          <Button variant="primary" onClick={handleFavoriteClick}>
            Favorite
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
    // services: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default Provider;
