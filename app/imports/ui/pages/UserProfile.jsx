import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Users } from '../../api/userData/userData';
import UserItem from '../components/UserItem';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the User documents. Use <UserItem> to render each row. */
const UserProfile = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, users } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to User documents.
    const subscription = Meteor.subscribe(Users.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the User documents
    const userItems = Users.collection.find({}).fetch();
    return {
      users: userItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>User Profile</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>firstName</th>
                <th>lastName</th>
                <th>email</th>
                <th>phone</th>
                <th>address</th>
                <th>status</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => <UserItem key={user._id} user={user} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default UserProfile;
