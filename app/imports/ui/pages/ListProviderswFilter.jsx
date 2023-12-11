// Import necessary modules and components
import React, { useState } from 'react';
import { Col, Container, Row, Card, FormCheck, FormGroup, FormLabel, Form, Button } from 'react-bootstrap';
import Provider from '../components/Provider';
import healthcareFacilities from '../../api/data'; // Path to your data file

const ListProviders = () => {
  // State hooks for enabling sequential filters
  const [isFacilityTypeEnabled, setIsFacilityTypeEnabled] = useState(false);
  const [isIslandEnabled, setIsIslandEnabled] = useState(false);

  // State hooks for selected options and filters
  const [serviceType, setServiceType] = useState('');
  const [facilityType, setFacilityType] = useState('');
  const [island, setIsland] = useState('');

  // Reset filters and refresh the page
  const resetFilters = () => {
    window.location.reload();
  };

  // Filtering logic based on selected filters
  const filteredFacilities = healthcareFacilities
    .filter(category => serviceType === '' || category.category.toLowerCase() === serviceType.toLowerCase())
    .flatMap(category => category.facilities)
    .filter(facility => (facilityType === '' ||
        (facilityType === 'Free-Standing' && facility.freeStanding.toLowerCase() === 'x') ||
        (facilityType === 'Provider-Based' && facility.providerBased.toLowerCase() === 'x')) &&
      (island === '' || facility.location.toLowerCase() === island.toLowerCase()));

  // Render the providers list
  return (
    <div id="filter-page">
      <Container className="filter-page py-4">
        {/* Filter form */}
        <Row>
          <Col fluid="sm">
            <h1 id="provider-page-title" className="py-4 text-center">List of Providers in the State of Hawai&apos;i</h1>
            <Card>
              <Card.Body>
                <Form>
                  {/* Service Type Filter */}
                  <Row className="g-3">
                    <FormGroup as={Col} sm={4} className="p-3 pb-4">
                      <FormLabel><h5>Service Type</h5></FormLabel>
                      {/* ... Service Type FormCheck components ... */}
                      <FormCheck
                        className="service-type-radio-button"
                        label="Adult Day Health Centers"
                        name="serviceType"
                        type="radio"
                        onChange={(e) => {
                          setServiceType(e.target.value);
                          setIsFacilityTypeEnabled(e.target.value !== '');
                        }}
                        value="Adult Day Health Centers"
                        checked={serviceType === 'Adult Day Health Centers'}
                      />
                      <FormCheck
                        className="service-type-radio-button"
                        label="Ambulatory Surgery Centers"
                        name="serviceType"
                        type="radio"
                        onChange={(e) => {
                          setServiceType(e.target.value);
                          setIsFacilityTypeEnabled(e.target.value !== '');
                        }}
                        value="Ambulatory Surgery Centers"
                        checked={serviceType === 'Ambulatory Surgery Centers'}
                      />
                      <FormCheck
                        className="service-type-radio-button"
                        label="End Stage Renal Disease (ESRD) Program"
                        name="serviceType"
                        type="radio"
                        onChange={(e) => {
                          setServiceType(e.target.value);
                          setIsFacilityTypeEnabled(e.target.value !== '');
                        }}
                        value="End Stage Renal Disease (ESRD) Program"
                        checked={serviceType === 'End Stage Renal Disease (ESRD) Program'}
                      />
                      <FormCheck
                        className="service-type-radio-button"
                        label="Home Health Agencies"
                        name="serviceType"
                        type="radio"
                        onChange={(e) => {
                          setServiceType(e.target.value);
                          setIsFacilityTypeEnabled(e.target.value !== '');
                        }}
                        value="Home Health Agencies"
                        checked={serviceType === 'Home Health Agencies'}
                      />
                      <FormCheck
                        className="service-type-radio-button"
                        label="Hospice"
                        name="serviceType"
                        type="radio"
                        onChange={(e) => {
                          setServiceType(e.target.value);
                          setIsFacilityTypeEnabled(e.target.value !== '');
                        }}
                        value="Hospice"
                        checked={serviceType === 'Hospice'}
                      />
                      <FormCheck
                        className="service-type-radio-button"
                        label="Hospitals"
                        name="serviceType"
                        type="radio"
                        onChange={(e) => {
                          setServiceType(e.target.value);
                          setIsFacilityTypeEnabled(e.target.value !== '');
                        }}
                        value="Hospitals"
                        checked={serviceType === 'Hospitals'}
                      />
                      <FormCheck
                        className="service-type-radio-button"
                        label="Intermediate Care Facilities for Individuals with Intellectual Disabilities"
                        name="serviceType"
                        type="radio"
                        onChange={(e) => {
                          setServiceType(e.target.value);
                          setIsFacilityTypeEnabled(e.target.value !== '');
                        }}
                        value="Intermediate Care Facilities for Individuals with Intellectual Disabilities"
                        checked={serviceType === 'Intermediate Care Facilities for Individuals with Intellectual Disabilities'}
                      />
                      <FormCheck
                        className="service-type-radio-button"
                        label="Organ Procurement Organization"
                        name="serviceType"
                        type="radio"
                        onChange={(e) => {
                          setServiceType(e.target.value);
                          setIsFacilityTypeEnabled(e.target.value !== '');
                        }}
                        value="Organ Procurement Organization"
                        checked={serviceType === 'Organ Procurement Organization'}
                      />
                      <FormCheck
                        className="service-type-radio-button"
                        label="Outpatient Physical Therapy/Speech Pathology"
                        name="serviceType"
                        type="radio"
                        onChange={(e) => {
                          setServiceType(e.target.value);
                          setIsFacilityTypeEnabled(e.target.value !== '');
                        }}
                        value="Outpatient Physical Therapy/Speech Pathology"
                        checked={serviceType === 'Outpatient Physical Therapy/Speech Pathology'}
                      />
                      <FormCheck
                        className="service-type-radio-button"
                        label="Rural Health Clinics"
                        name="serviceType"
                        type="radio"
                        onChange={(e) => {
                          setServiceType(e.target.value);
                          setIsFacilityTypeEnabled(e.target.value !== '');
                        }}
                        value="Rural Health Clinics"
                        checked={serviceType === 'Rural Health Clinics'}
                      />
                      <FormCheck
                        className="service-type-radio-button"
                        label="Skilled Nursing/Intermediate Care Facilities"
                        name="serviceType"
                        type="radio"
                        onChange={(e) => {
                          setServiceType(e.target.value);
                          setIsFacilityTypeEnabled(e.target.value !== '');
                        }}
                        value="Skilled Nursing/Intermediate Care Facilities"
                        checked={serviceType === 'Skilled Nursing/Intermediate Care Facilities'}
                      />
                      <FormCheck
                        className="service-type-radio-button"
                        label="Free-Standing X-Ray Facility"
                        name="serviceType"
                        type="radio"
                        onChange={(e) => {
                          setServiceType(e.target.value);
                          setIsFacilityTypeEnabled(e.target.value !== '');
                        }}
                        value="Free-Standing X-Ray Facility"
                        checked={serviceType === 'Free-Standing X-Ray Facility'}
                      />

                    </FormGroup>

                    {/* Facility Type Filter */}
                    <FormGroup as={Col} sm={4} disabled={!isFacilityTypeEnabled} className="p-3">
                      <FormLabel><h5>Facility Type</h5></FormLabel>
                      {/* ... Facility Type FormCheck components ... */}
                      <FormCheck
                        className="facility-type-radio-button"
                        label="Free-Standing"
                        name="facilityType"
                        type="radio"
                        onChange={(e) => {
                          setFacilityType(e.target.value);
                          setIsIslandEnabled(e.target.value !== '');
                        }}
                        value="Free-Standing"
                        checked={facilityType === 'Free-Standing'}
                        disabled={!isFacilityTypeEnabled}
                      />
                      <FormCheck
                        className="facility-type-radio-button"
                        label="Provider-Based"
                        name="providerBased"
                        type="radio"
                        onChange={(e) => {
                          setFacilityType(e.target.value);
                          setIsIslandEnabled(e.target.value !== '');
                        }}
                        value="Provider-Based"
                        checked={facilityType === 'Provider-Based'}
                        disabled={!isFacilityTypeEnabled}
                      />
                    </FormGroup>

                    {/* Island Filter */}
                    <FormGroup as={Col} sm={4} disabled={!isIslandEnabled} className="p-3">
                      <FormLabel><h5>Island</h5></FormLabel>
                      {/* ... Island FormCheck components ... */}
                      <FormCheck
                        className="island-radio-button"
                        label="Oahu"
                        name="island"
                        type="radio"
                        onChange={(e) => setIsland(e.target.value)}
                        value="Oahu"
                        checked={island === 'Oahu'}
                        disabled={!isIslandEnabled}
                      />
                      <FormCheck
                        className="island-radio-button"
                        label="Hawaii"
                        name="island"
                        type="radio"
                        onChange={(e) => setIsland(e.target.value)}
                        value="Hawaii"
                        checked={island === 'Hawaii'}
                        disabled={!isIslandEnabled}
                      />
                      <FormCheck
                        className="island-radio-button"
                        label="Maui"
                        name="island"
                        type="radio"
                        onChange={(e) => setIsland(e.target.value)}
                        value="Maui"
                        checked={island === 'Maui'}
                        disabled={!isIslandEnabled}
                      />
                      <FormCheck
                        className="island-radio-button"
                        label="Kauai"
                        name="island"
                        type="radio"
                        onChange={(e) => setIsland(e.target.value)}
                        value="Kauai"
                        checked={island === 'Kauai'}
                        disabled={!isIslandEnabled}
                      />
                      <FormCheck
                        className="island-radio-button"
                        label="Molokai"
                        name="island"
                        type="radio"
                        onChange={(e) => setIsland(e.target.value)}
                        value="Molokai"
                        checked={island === 'Molokai'}
                        disabled={!isIslandEnabled}
                      />
                      <FormCheck
                        className="island-radio-button"
                        label="Lihue"
                        name="island"
                        type="radio"
                        onChange={(e) => setIsland(e.target.value)}
                        value="Lihue"
                        checked={island === 'Lihue'}
                        disabled={!isIslandEnabled}
                      />
                    </FormGroup>
                  </Row>
                  <Button variant="secondary" onClick={resetFilters} id="filter-button">Reset Filters</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Providers list */}
        <Row>
          <Col>
            <h2 className="p-2"></h2>
            <Row xs={1} md={3} lg={6} className="g-3">
              {filteredFacilities.length > 0 ? (
                filteredFacilities.map((provider, index) => (
                  <Col id="provider-is-available" key={index}>
                    <Provider provider={provider} />
                  </Col>
                ))
              ) : (
                <Col className="text-white" id="no-results-message">
                  <h2>No providers available.</h2>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListProviders;
