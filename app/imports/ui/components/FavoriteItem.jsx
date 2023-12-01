import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FavoriteItem = ({ user }) => (
  <tr>
    <td>{user.name}</td>
  </tr>
);

// Require a document to be passed to this component.
FavoriteItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default FavoriteItem
