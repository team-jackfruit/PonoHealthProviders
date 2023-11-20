import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/** Define a Mongo collection to hold the user data. */
const UsersData = new Mongo.Collection('UsersData');

const DataValues = {
  insuranceStatus: ['Insured', 'Uninsured', 'Under-insured'],
};

/** Define a schema to specify the structure of each document in the collection. */
const UsersDataSchema = new SimpleSchema({
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
  status: { type: String, allowedValues: DataValues.insuranceStatus },
});

/** Attach the schema to the collection. */
UsersData.attachSchema(UsersDataSchema);

/** Define names for publications and subscriptions, if needed. */
const UsersDataPublicationNames = {
  userPublicationName: 'UsersData.publication.user',
  adminPublicationName: 'UsersData.publication.admin',
};

/** Make these objects available to others. */
export { UsersData, UsersDataSchema, UsersDataPublicationNames, DataValues };
