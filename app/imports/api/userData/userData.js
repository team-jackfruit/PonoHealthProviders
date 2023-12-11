import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class UsersDataCollection {
  constructor() {
    /** Define a Mongo collection to hold the user data. */
    this.name = 'UsersDataCollection';
    this.collection = new Mongo.Collection(this.name);

    /** Define a schema to specify the structure of each document in the collection. */
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
      phone: {
        type: String,
        optional: true,
        label: 'Phone Number',
      },
      address: {
        type: String,
        optional: true,
        label: 'Address',
      },
      image: {
        type: String,
        optional: true,
        label: 'image',
      },
      owner: String,
      status: { type: String, allowedValues: ['Insured', 'Uninsured', 'Under-insured'] },
    });
    /** Attach the schema to the collection. */
    this.collection.attachSchema(this.schema);
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;

  } // close constructor
}

/** Make these objects available to others. */
/**
 * The singleton instance of the StuffsCollection.
 * @type {UsersDataCollection}
 */
export const Users = new UsersDataCollection();
