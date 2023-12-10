import { Selector } from 'testcafe';

class ProviderCard {

  /** If someone is logged in, then log them out, otherwise do nothing. */
  async ClickOnProviderCard(testController) {
    const providerCard = Selector('#provider-card');
    await testController.click(providerCard);
  }

  async ClickOnFavoriteButton(testController) {
    const favoriteButton = Selector('#favoriteButton');
    const swalButton = Selector('button').withText('OK'); // Adjust the selector as needed

    await testController
      .click(favoriteButton)
      .expect(swalButton.exists).ok({ timeout: 5000 }) // Wait for the SweetAlert modal to appear
      .click(swalButton); // Click the "OK" button on the modal
  }

  async ClickOutOfProviderCard(testController) {
    const providerCard = Selector('#closeProviderCard');
    await testController.click(providerCard);
  }

  async ProviderInformationShows(testController) {
    const modalTitle = Selector('#facility-name');
    const modalBody = Selector('#facility-information');
    await testController.expect(modalTitle.exists).ok();
    await testController.expect(modalBody.exists).ok();
  }
}

export const providerCard = new ProviderCard();
