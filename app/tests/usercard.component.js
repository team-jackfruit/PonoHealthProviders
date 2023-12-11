import { Selector } from 'testcafe';

class UserCard {

  /** If someone is logged in, then log them out, otherwise do nothing. */
  async ClickOnEditProfile(testController) {
    const editProfile = Selector('#edit-Link');
    await testController.click(editProfile);
  }
}

export const userCard = new UserCard();
