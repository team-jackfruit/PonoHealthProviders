import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class FavoriteUserCollection {
  constructor() {
    /** Define a Mongo collection to hold the user data. */
    this.name = 'FavoriteUserCollection';
    this.collection = new Mongo.Collection(this.name);

    /** Define a schema to specify the structure of each document in the collection. */
    this.schema = new SimpleSchema({
      name: {
        type: String,
        label: 'Favorite Name',
      },
      address: {
        type: String,
        label: 'Address',
        optional: true, // You can make this field optional if not all providers have a known address
      },
      location: {
        type: String,
        label: 'Location',
        optional: true, // Similarly, this can be optional
      },
      owner: String,
    });
    /** Attach the schema to the collection. */
    this.collection.attachSchema(this.schema);
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;

  } // close constructor

  /**
   * Removes a favorite provider for a user.
   * @param {String} userId - The ID of the user.
   * @param {String} providerId - The ID of the provider to be removed from favorites.
   */
  removeFavorite(userId, providerId) {
    // The exact implementation depends on the structure of your collection
    // This is a generic implementation
    this.collection.update(
      { userId: userId },
      { $pull: { favorites: { providerId: providerId } } },
      { multi: false },
    );
  }
}

/** Make these objects available to others. */
/**
 * The singleton instance of the favCollection.
 * @type {UsersDataCollection}
 */
export const Favorite = new FavoriteUserCollection();
