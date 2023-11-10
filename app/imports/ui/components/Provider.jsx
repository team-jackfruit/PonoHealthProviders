import React from 'react';
import PropTypes from 'prop-types';
import { Card /* ,Image */ } from 'react-bootstrap';
/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Provider = ({ provider }) => (
  <Card className="card h-100">
    <Card.Header>
      {/* <Image fluid src={provider.image} className="rounded mx-auto d-block" /> */}
      <Card.Title>{provider.facility}</Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Text>{provider.address}</Card.Text>
      <Card.Text>{provider.location}</Card.Text>
    </Card.Body>
  </Card>
);
// Require a document to be passed to this component.
Provider.propTypes = {
  provider: PropTypes.shape({
    facility: PropTypes.string,
    // image: PropTypes.string,
    location: PropTypes.string,
    address: PropTypes.string,
    // services: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};
export default Provider;