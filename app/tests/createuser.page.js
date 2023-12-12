import { Selector } from 'testcafe';

class CreateUserPage {
// Define a test function for form submission with valid data
  async submitFormWithValidData(testController) {
    // Select form input fields
    const firstNameField = Selector('#firstNameField');
    const lastNameField = Selector('#lastNameField');
    const emailField = Selector('#emailField');
    const phoneField = Selector('#phoneField');
    const addressField = Selector('#addressField');
    const statusField = Selector('#statusField');
    // const submitButton = Selector('#submitButton');
    const successSwal = Selector('.swal-title').withText('Success');

    // Enter valid data into form fields
    await testController
      .typeText(firstNameField, 'John')
      .typeText(lastNameField, 'Doe')
      .typeText(emailField, 'johndoe@example.com')
      .typeText(phoneField, '808-123-4567')
      .typeText(addressField, '123 Main St')
      .click(statusField)
      .click(Selector('option').withText('Insured')); // Select a valid status option

    // Click the submit button
    await testController.click('input[type="submit"]');

    // Wait for the success message to appear
    await testController.expect(successSwal.exists).ok({ timeout: 5000 });
  }

  async submitFormWithInvalidData(testController) {
    // Select form input fields
    const firstNameField = Selector('#firstNameField');
    const lastNameField = Selector('#lastNameField');
    const emailField = Selector('#emailField');
    const phoneField = Selector('#phoneField');
    const addressField = Selector('#addressField');
    // eslint-disable-next-line no-unused-vars
    const statusField = Selector('#statusField');
    // eslint-disable-next-line no-unused-vars
    const submitButton = Selector('#submitButton');
    // eslint-disable-next-line no-unused-vars
    const errorField = Selector('#errorsField');

    // Test for first name validation
    await testController
      .typeText(firstNameField, '123')
      .click('input[type="submit"]')
      .expect(Selector('#errorsField').visible).ok()
      .selectText(firstNameField)
      .pressKey('delete')
      .click('input[type="submit"]')
      .expect(Selector('#errorsField').visible)
      .ok();

    // Test for last name validation
    await testController
      .typeText(lastNameField, '456')
      .click('input[type="submit"]')
      .expect(Selector('#errorsField').visible).ok()
      .selectText(lastNameField)
      .pressKey('delete')
      .click('input[type="submit"]')
      .expect(Selector('#errorsField').visible)
      .ok();

    // Test for email validation
    await testController
      .typeText(emailField, 'invalidemail')
      .click('input[type="submit"]')
      .expect(Selector('#errorsField').visible)
      .ok();

    // Test for phone validation
    await testController
      .typeText(phoneField(), '123')
      .click('input[type="submit"]')
      .expect(Selector('#errorsField').visible)
      .ok();

    // Test for address validation
    await testController
      .click(addressField)
      .pressKey('delete')
      .click('input[type="submit"]')
      .expect(Selector('#errorsField').visible)
      .ok();

    // Click the submit button
    await testController.click('input[type="submit"]');

    // Assertion for the presence of any error message
    const errorsField = Selector('#errorsField');
    await testController.expect(errorsField.innerText).ok();
  }
}

export const createUserPage = new CreateUserPage();
