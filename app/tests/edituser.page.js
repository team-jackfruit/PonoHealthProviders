import { Selector } from 'testcafe';

class EditUserPage {
  async validUserEditSubmission(testController) {
    // Selectors
    const firstNameInput = Selector('[name="firstName"]');
    const lastNameInput = Selector('[name="lastName"]');
    const emailInput = Selector('[name="email"]');
    const phoneInput = Selector('[name="phone"]');
    const addressInput = Selector('[name="address"]');
    const statusSelect = Selector('select[name="status"]');
    const uninsuredOption = statusSelect.find('option').withText('Uninsured');
    const fileInput = Selector('#image-upload');
    const imagePreview = Selector('#image-preview');
    const swalTitle = Selector('.swal-title');
    const swalText = Selector('.swal-text');
    const swalButton = Selector('.swal-button--confirm');

    // File to upload (path relative to root of your project)
    const fileToUpload = './UserAccount.png';

    // Clearing the form fields
    await testController
      .selectText(firstNameInput).pressKey('delete')
      .selectText(lastNameInput).pressKey('delete')
      .selectText(emailInput)
      .pressKey('delete')
      .selectText(phoneInput)
      .pressKey('delete')
      .selectText(addressInput)
      .pressKey('delete');

    // Test actions
    await testController
      .typeText(firstNameInput, 'Jennifer')
      .typeText(lastNameInput, 'Anistor')
      .typeText(emailInput, 'jennifer.anniston@example.com')
      .typeText(phoneInput, '808-789-1011')
      .typeText(addressInput, '456 Small St')
      .click(statusSelect)
      .click(uninsuredOption)
      .setFilesToUpload(fileInput, [fileToUpload]);

    // Wait for image upload to complete and preview to appear
    await testController.expect(imagePreview.exists).ok({ timeout: 10000 });

    // Wait for swal to appear and check its contents
    await testController
      .expect(swalTitle.exists).ok()
      .expect(swalTitle.innerText).eql('Success') // Modify as per your swal title
      .expect(swalText.innerText)
      .contains('Image uploaded successfully'); // Modify as per your swal text

    // Click the swal confirm button
    await testController.click(swalButton);

    // Click the submit button
    await testController.click('input[type="submit"]');

    // Wait for swal to appear and check its contents
    await testController
      .expect(swalTitle.exists).ok()
      .expect(swalTitle.innerText).eql('Success') // Modify as per your swal title
      .expect(swalText.innerText)
      .contains('Profile Edited Successfully'); // Modify as per your swal text
  }
}

export const editUserPage = new EditUserPage();
