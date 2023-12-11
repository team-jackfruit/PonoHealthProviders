import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Users } from '../../api/userData/userData';
import UserCard from '../components/UserCard';
import FavoriteCard from '../components/FavoriteCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { Favorite } from '../../api/favData/favData';
import ProfileImage from '../components/ProfileImage';
import userItem from '../components/UserItem';

/* Renders a table containing all of the User documents. Use <UserItem> to render each row. */
const UserProfile = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, users, users2, ready2 } = useTracker(() => {
    const subscription = Meteor.subscribe(Users.userPublicationName);
    const subscription2 = Meteor.subscribe(Favorite.userPublicationName);
    const rdy = subscription.ready();
    const rdy2 = subscription2.ready();
    const userItems = Users.collection.find({}).fetch();
    const favItems = Favorite.collection.find({}).fetch();

    // Logging statements
    // console.log('Subscription ready:', rdy);
    // console.log('Fetched users:', userItems);
    return {
      users: userItems,
      users2: favItems,
      ready: rdy,
      ready2: rdy2,
    };
  }, []);
  const handleRemoveFavorite = (favoriteId) => {
    // Call the method to remove the favorite from the database
    // This might involve calling a Meteor method or directly manipulating the collection
    Favorite.collection.remove(favoriteId);

    // Optionally, refetch the data or update the state to reflect the removal
    // This could be a re-run of the useTracker, a setState, or another appropriate action
  };

  return (ready || ready2) ? (
    <Container fluid className="py-3 userProfile" id="user-profile">
      <Row className="justify-content-center">
        <Col md={4} id="user-image">
          <Image src="/images/UserAccount.png" fluid />
        </Col>
        {users.map((user) => (
          <Col md={4} key={user._id} className="mb-4" id="user-card">
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
      <Row>
        {users2.map((user) => (
          <Col xs={12} md={6} lg={4} key={user._id} className="mb-4" id="user-favorite"> {/* Adjust column sizes as needed */}
            <FavoriteCard user={user} onRemove={handleRemoveFavorite} />
          </Col>
        ))}
      </Row>
    </Container>
  ) : (
    <LoadingSpinner />
  );
};

export default UserProfile;
