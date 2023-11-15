import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const ProviderPopup = ({ provider }) => (
  <Modal
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <ProviderPopup.Header closeButton>
      <ProviderPopup.Title id="contained-modal-title-vcenter">
        Modal heading
      </ProviderPopup.Title>
    </ProviderPopup.Header>
    <ProviderPopup.Body>
      <h4>Centered Modal</h4>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
    </ProviderPopup.Body>
    <ProviderPopup.Footer>
      {/* eslint-disable-next-line react/prop-types */}
      <Button onClick={provider.onHide}>Close</Button>
    </ProviderPopup.Footer>
  </Modal>
);

ProviderPopup.propTypes = {
  provider: PropTypes.shape({
    facility: PropTypes.string,
    // image: PropTypes.string,
    location: PropTypes.string,
    address: PropTypes.string,
    // services: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default ProviderPopup;
