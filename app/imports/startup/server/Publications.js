import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Stuffs } from '../../api/stuff/Stuff';
import { Users } from '../../api/userData/userData';
import { Favorite } from '../../api/favData/favData';

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Stuffs.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Favorite.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Favorite.collection.find({ owner: username });
  }
  return this.ready();
});

// Returns User collection
Meteor.publish(Users.userPublicationName, function () {
  if (this.userId) {
    const user = Meteor.users.findOne(this.userId);
    console.log('Fetched user:', user);
    if (user && user.username) {
      console.log('Querying with username:', user.username);
      return Users.collection.find({ owner: user.username });
    }
    console.log('User has no username or user not found');

  } else {
    console.log('No user ID found, not publishing data');
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Stuffs.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.collection.find();
  }
  return this.ready();
});

Meteor.publish(Users.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Users.collection.find();
  }
  return this.ready();
});

Meteor.publish(Favorite.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Users.collection.find();
  }
  return this.ready();
});

// roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
