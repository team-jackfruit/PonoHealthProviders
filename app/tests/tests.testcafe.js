import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { providerFilterPage } from './providerfilter.page';
import { signupPage } from './signup.page';
import { createUserPage } from './createuser.page';
import { userProfilePage } from './userprofile.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const existing_credentials = { username: 'john@foo.com', password: 'changeme' };
function generateRandomWord() {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let randomWord = '';
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    randomWord += letters[randomIndex];
  }
  return randomWord;
}

const randomWord = generateRandomWord();
const email = `${randomWord}@gmail.com`;
const new_credentials = { username: email, password: 'P4s5w8x' };
const invalid_password = { username: 'abc@gmail.com', password: '123' };
const invalid_email = { username: 'abc', password: 'P4s5w8x' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that Landing Page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that Sign-in and Sign-out works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, existing_credentials.username, existing_credentials.password);
  await navBar.isLoggedIn(testController, existing_credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that Provider Filter Page works', async (testController) => {
  await navBar.gotoProviderFilterPage(testController);
  await providerFilterPage.selectRandomServiceType(testController);
  await providerFilterPage.selectRandomFacilityType(testController);
  await providerFilterPage.selectRandomIsland(testController);
  await providerFilterPage.verifyResult(testController);
});

test('Test that Sign Up works', async (testController) => {
  await navBar.gotoSignUpPage(testController);
  await signupPage.signupUser(testController, new_credentials.username, new_credentials.password, true);
  await navBar.isLoggedIn(testController, new_credentials.username);
  await navBar.logout(testController);
});

test.only('Test that Create User Page works and it shows on Profile', async (testController) => {
  await navBar.gotoSignUpPage(testController);
  await signupPage.signupUser(testController, new_credentials.username, new_credentials.password, true);
  await createUserPage.submitFormWithValidData(testController);
  await navBar.isLoggedIn(testController, new_credentials.username);
  await navBar.gotoProfilePage(testController);
  await userProfilePage.profileShowsUserDetails(testController);
});

test('Test that Sign Up with invalid email generates error', async (testController) => {
  await navBar.gotoSignUpPage(testController);
  await signupPage.signupWithInvalidInfo(testController, invalid_email.username, invalid_email.password);
});

test('Test that Sign Up with invalid password generates error', async (testController) => {
  await navBar.gotoSignUpPage(testController);
  await signupPage.signupWithInvalidInfo(testController, invalid_password.username, invalid_password.password);
});

test('Test that Sign Up with registered User generates error', async (testController) => {
  await navBar.gotoSignUpPage(testController);
  await signupPage.signupUser(testController, existing_credentials.username, existing_credentials.password, false);
  await navBar.gotoProfilePage(testController);
});
