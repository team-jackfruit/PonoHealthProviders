import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { UsersData } from '../../api/userData/userData';

/* eslint-disable no-console */

// Initialize the database with a default data document for Stuffs.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data for Stuffs.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

// Define a Meteor method for inserting data into UsersData collection
Meteor.methods({
  'UsersData.insert'(userData) {
    console.log('Inserting user data:', userData);
    UsersData.insert(userData);
  },
});
