import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => (
  <tr>
    <td>{user.firstName}</td>
    <td>{user.lastName}</td>
    <td>{user.email}</td>
    <td>{user.phone}</td>
    <td>{user.address}</td>
    <td>{user.status}</td>
    <td>
      <Link to={`/edit/${user._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
UserItem.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.number,
    phone: PropTypes.string,
    address: PropTypes.string,
    status: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default UserItem;
