import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class ReviewsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ReviewsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);

    // Define a schema to specify the structure of each document in the collection.
    this.schema = new SimpleSchema({
      userId: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
      },
      clinicName: {
        type: String,
        max: 100,
      },
      location: {
        type: String,
        optional: true,
      },
      servicesOffered: {
        type: Array,
        label: 'Services Offered',
      },
      'servicesOffered.$': {
        type: String,
        allowedValues: [
          'Adult Day Health Centers',
          'Ambulatory Surgery Centers',
          'End Stage Renal Disease (ESRD) Program',
          'Home Health Agencies',
          'Hospice',
          'Hospitals',
          'Intermediate Care Facilities for Individuals with Intellectual Disabilities',
          'Organ Procurement Organization',
          'Outpatient Physical Therapy/Speech Pathology',
          'Rural Health Clinics',
          'Skilled Nursing/Intermediate Care Facilities',
          'Free-Standing X-Ray Facility',
        ],
      },
      userExperience: {
        type: String,
        max: 1000,
      },
      rating: {
        type: SimpleSchema.Integer,
        min: 1,
        max: 5,
      },
      createdAt: {
        type: Date,
        autoValue: function () {
          if (this.isInsert) {
            return new Date();
          } if (this.isUpsert) {
            return { $setOnInsert: new Date() };
          }
          this.unset(); // Prevent user from supplying their own value

        },
        denyUpdate: true, // Don't allow the date to be edited once set
      },
    });

    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);

    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  } // close constructor
}

/** Make these objects available to others. */
/**
 * The singleton instance of the StuffsCollection.
 * @type {ReviewsCollection}
 */
export const Reviews = new ReviewsCollection();
