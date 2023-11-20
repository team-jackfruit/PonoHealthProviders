import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The UsersDataCollection. It encapsulates state and variable values for user data.
 */
class UsersDataCollection {
  constructor() {
    // The name of this collection.
    this.name = 'UsersDataCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      firstName: {
        type: String,
        label: 'First Name',
      },
      lastName: {
        type: String,
        label: 'Last Name',
      },
      email: String,
      password: String,
      phoneNumber: {
        type: String,
        optional: true,
        label: 'Phone Number',
      },
      address: {
        type: String,
        optional: true,
        label: 'Address',
      },
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against the schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the UsersDataCollection.
 * @type {UsersDataCollection}
 */
export const UsersData = new UsersDataCollection();
