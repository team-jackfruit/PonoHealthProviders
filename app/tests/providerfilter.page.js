import { Selector } from 'testcafe';

class ProviderFilterPage {
  // Function to select a random service type
  async selectRandomServiceType(testController) {
    const serviceTypes = Selector('.service-type-radio-button');
    const serviceTypeCount = await serviceTypes.count;
    const randomServiceTypeIndex = Math.floor(Math.random() * serviceTypeCount);
    await testController.click(serviceTypes.nth(randomServiceTypeIndex));
  }

  // Function to select a random facility type
  async selectRandomFacilityType(testController) {
    const facilityTypes = Selector('.facility-type-radio-button');
    await testController.expect(facilityTypes.with({ visibilityCheck: true }).exists).ok({ timeout: 5000 });
    const facilityTypeCount = await facilityTypes.count;
    const randomFacilityTypeIndex = Math.floor(Math.random() * facilityTypeCount);
    await testController.click(facilityTypes.nth(randomFacilityTypeIndex));
  }

  // Function to select a random island
  async selectRandomIsland(testController) {
    const islands = Selector('.island-radio-button');
    await testController.expect(islands.with({ visibilityCheck: true }).exists).ok({ timeout: 5000 });
    const islandCount = await islands.count;
    const randomIslandIndex = Math.floor(Math.random() * islandCount);
    await testController.click(islands.nth(randomIslandIndex));
  }

  // Function to verify the result
  async verifyResult(testController) {
    const providers = Selector('#provider-is-available');
    const noResultsMessage = Selector('#no-results-message');
    await testController.expect(providers.exists || noResultsMessage.exists).ok('Providers are listed or no results message is shown');
  }

  async verifyResultForFavorite(testController) {
    const providers = Selector('#provider-is-available');
    await testController.expect(providers.exists).ok('Providers are listed');
  }

  // Function to select "Hospitals" as the service type
  async selectServiceTypeHospitals(testController) {
    const hospitalsOption = Selector('.service-type-radio-button').withText('Hospitals');
    await testController.click(hospitalsOption);
  }

  // Function to select "Provider-Based" as the facility type
  async selectFacilityTypeProviderBased(testController) {
    const providerBasedOption = Selector('.facility-type-radio-button').withText('Provider-Based');
    await testController.expect(providerBasedOption.with({ visibilityCheck: true }).exists).ok({ timeout: 5000 });
    await testController.click(providerBasedOption);
  }

  // Function to select "Oahu" as the island
  async selectIslandOahu(testController) {
    const oahuOption = Selector('.island-radio-button').withText('Oahu');
    await testController.expect(oahuOption.with({ visibilityCheck: true }).exists).ok({ timeout: 5000 });
    await testController.click(oahuOption);
  }
}

export const providerFilterPage = new ProviderFilterPage();
