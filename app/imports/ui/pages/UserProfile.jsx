import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Container, Card, ListGroup } from 'react-bootstrap';
import { UsersData } from '../../api/userData/userData';

const UserProfile = () => {
  const { user, userData, isLoading } = useTracker(() => {
    const noDataAvailable = { user: null, userData: null };
    const handler = Meteor.subscribe('userData'); // Subscription name for the user data

    if (!Meteor.user() || !handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    const user = Meteor.user();
    const userData = UsersData.collection.findOne({ email: user.emails[0].address });

    return { user, userData, isLoading: false };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in to view this page.</div>;
  }

  return (
    <Container>
      <h2>User Profile</h2>
      {userData ? (
        <Card>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>First Name: {userData.firstName}</ListGroup.Item>
              <ListGroup.Item>Last Name: {userData.lastName}</ListGroup.Item>
              <ListGroup.Item>Email: {userData.email}</ListGroup.Item>
              <ListGroup.Item>Phone Number: {userData.phoneNumber}</ListGroup.Item>
              <ListGroup.Item>Address: {userData.address}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      ) : (
        <div>No user data found.</div>
      )}
    </Container>
  );
};

export default UserProfile;
