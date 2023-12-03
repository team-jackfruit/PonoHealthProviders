import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Modal } from 'react-bootstrap';
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
          {provider.administrator && <p>Administrated by {provider.administrator}</p>}
          <p>Address: {provider.address}</p>
          {provider.mailingAddress && <p>Mailing Address: {provider.mailingAddress}</p>}
          <p>Island: {provider.location}</p>
          <p>Phone: {provider.phone}</p>
          {provider.fax && <p>Fax: {provider.fax}</p>}
          {provider.numberOfLicensedBeds && <p>This facility contains {provider.numberOfLicensedBeds} licensed beds available</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={openWebsite}>
            Visit Website
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
    numberOfLicensedBeds: PropTypes.string
    // services: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};
export default Provider;
