import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The FacilitiesCollection. It encapsulates state and variable values for healthcare facilities.
 */
class FacilitiesCollection {
  constructor() {
    // The name of this collection.
    this.name = 'HealthcareFacilitiesCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);

    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      category: String,
      facilities: Array,
      'facilities.$': Object,
      'facilities.$.number': Number,
      'facilities.$.facility': String,
      'facilities.$.providerBased': {
        type: String,
        allowedValues: ['X', ''],
        optional: true,
      },
      'facilities.$.freeStanding': {
        type: String,
        allowedValues: ['X', ''],
        optional: true,
      },
      'facilities.$.location': String,
      'facilities.$.address': String,
      'facilities.$.phone': String,
      'facilities.$.fax': {
        type: String,
        optional: true,
      },
    });

    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the HealthcareFacilitiesCollection.
 * @type {FacilitiesCollection}
 */
export const HealthcareFacilities = new FacilitiesCollection();
