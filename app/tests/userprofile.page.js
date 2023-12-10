import { Selector } from 'testcafe';

class UserProfilePage {
// Define a test function for form submission with valid data
  async profileShowsUserDetails(testController) {
    // Check for the presence of the container
    const userProfileContainer = Selector('#user-profile');
    await testController.expect(userProfileContainer.exists).ok();

    // Check for the presence of the image within the user-image column
    const userImage = Selector('#user-image').find('img');
    await testController.expect(userImage.exists).ok();

    // Check for the presence of at least one UserCard
    const userCard = Selector('#user-card');
    await testController.expect(userCard.exists).ok();
  }

  async profileShowsFavorite(testController) {
    const favoriteCard = Selector('#user-favorite');
    await testController.expect(favoriteCard.exists).ok();
  }
}

export const userProfilePage = new UserProfilePage();
