import { Selector } from 'testcafe';
import { navBar } from './navbar.component';

class SignupPage {
  constructor() {
    this.pageId = '#signup-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Signs up a new user, then checks to see that they are logged in by checking the navbar. */
  async signupUser(testController, username, password, shouldSucceed) {
    await this.isDisplayed(testController);
    await testController.typeText('input[name="email"]', username);
    await testController.typeText('input[name="password"]', password);
    await testController.click('input[type="submit"]');
    if (shouldSucceed) {
      await navBar.isLoggedIn(testController, username);
    } else {
      await testController.expect(Selector('.alert-danger').exists).ok('Error message displayed for registration failure');
    }
  }
}

export const signupPage = new SignupPage();
