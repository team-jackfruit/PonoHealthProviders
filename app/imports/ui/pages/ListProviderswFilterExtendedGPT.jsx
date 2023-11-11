// Import necessary modules and components
import React, { useState } from 'react';
import { Col, Container, Row, Card, FormCheck, FormGroup, FormLabel, Form, Button } from 'react-bootstrap';
import Provider from '../components/Provider';
import LoadingSpinner from '../components/LoadingSpinner';
import healthcareFacilities from '../../api/data'; // This should be the path to your data file

const ListProviders = () => {
  // State hooks for selected options and filters
  const [serviceType, setServiceType] = useState('');
  const [coverageType, setCoverageType] = useState('');
  const [island, setIsland] = useState('');
  const [facilityType, setFacilityType] = useState('');
  const [filters, setFilters] = useState({
    serviceType: '',
    coverageType: '',
    island: '',
    facilityType: '',
  });

  // Event handlers for form submission and reset
  const applyFilters = (event) => {
    event.preventDefault();
    setFilters({
      serviceType: serviceType,
      coverageType: coverageType,
      island: island,
      facilityType: facilityType,
    });
  };

  const resetFilters = () => {
    setServiceType('');
    setCoverageType('');
    setIsland('');
    setFacilityType('');
    setFilters({ serviceType: '', coverageType: '', island: '', facilityType: '' });
  };

  // Filtering logic based on selected filters
  const filteredFacilities = healthcareFacilities
    .filter((facility) => (!filters.serviceType || facility.category === filters.serviceType))
    .flatMap((facility) => facility.facilities)
    .filter((provider) => (
      (!filters.coverageType || provider.coverageType === filters.coverageType) &&
          (!filters.island || provider.location.toLowerCase() === filters.island.toLowerCase()) &&
          (filters.facilityType === 'Free-Standing' ? provider.freeStanding === 'X' : filters.facilityType === 'Provider-Based' ? provider.providerBased === 'X' : true)
    ));

  // Render the providers list or loading spinner
  return (
    <Container className="py-3 pt-5">
      <Row>
        {/* Providers list */}
        <Col md={7}>
          <h2>Providers</h2>
          <Row xs={1} md={2} lg={3} className="g-3">
            {filteredFacilities.map((provider) => (
              <Col key={provider.number}>
                <Provider provider={provider} />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Filter form */}
        <Col md={5}>
          <h2>Provider Filter</h2>
          <Card>
            <Card.Body>
              <Form onSubmit={applyFilters}>
                {/* Service Type Filter */}
                <FormGroup>
                  <FormLabel>Service Type</FormLabel>
                  <div>
                    <FormCheck
                      className="service-type-radio-button"
                      inline
                      label="Adult Day Health Centers"
                      name="serviceType"
                      type="radio"
                      onChange={(e) => setServiceType(e.target.value)}
                      value="Adult Day Health Centers"
                      checked={serviceType === 'Adult Day Health Centers'}
                      block
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="service-type-radio-button"
                      inline
                      label="Ambulatory Surgery Centers"
                      name="serviceType"
                      type="radio"
                      onChange={(e) => setServiceType(e.target.value)}
                      value="Ambulatory Surgery Centers"
                      checked={serviceType === 'Ambulatory Surgery Centers'}
                      block
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="service-type-radio-button"
                      inline
                      label="End Stage Renal Disease (ESRD) Program"
                      name="serviceType"
                      type="radio"
                      onChange={(e) => setServiceType(e.target.value)}
                      value="End Stage Renal Disease (ESRD) Program"
                      checked={serviceType === 'End Stage Renal Disease (ESRD) Program'}
                      block
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="service-type-radio-button"
                      inline
                      label="Home Health Agencies"
                      name="serviceType"
                      type="radio"
                      onChange={(e) => setServiceType(e.target.value)}
                      value="Home Health Agencies"
                      checked={serviceType === 'Home Health Agencies'}
                      block
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="service-type-radio-button"
                      inline
                      label="Hospice"
                      name="serviceType"
                      type="radio"
                      onChange={(e) => setServiceType(e.target.value)}
                      value="Hospice"
                      checked={serviceType === 'Hospice'}
                      block
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="service-type-radio-button"
                      inline
                      label="Hospitals"
                      name="serviceType"
                      type="radio"
                      onChange={(e) => setServiceType(e.target.value)}
                      value="Hospitals"
                      checked={serviceType === 'Hospitals'}
                      block
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="service-type-radio-button"
                      inline
                      label="Intermediate Care Facilities for Individuals with Intellectual Disabilities"
                      name="serviceType"
                      type="radio"
                      onChange={(e) => setServiceType(e.target.value)}
                      value="Intermediate Care Facilities for Individuals with Intellectual Disabilities"
                      checked={serviceType === 'Intermediate Care Facilities for Individuals with Intellectual Disabilities'}
                      block
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="service-type-radio-button"
                      inline
                      label="Organ Procurement Organization"
                      name="serviceType"
                      type="radio"
                      onChange={(e) => setServiceType(e.target.value)}
                      value="Organ Procurement Organization"
                      checked={serviceType === 'Organ Procurement Organization'}
                      block
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="service-type-radio-button"
                      inline
                      label="Outpatient Physical Therapy/Speech Pathology"
                      name="serviceType"
                      type="radio"
                      onChange={(e) => setServiceType(e.target.value)}
                      value="Outpatient Physical Therapy/Speech Pathology"
                      checked={serviceType === 'Outpatient Physical Therapy/Speech Pathology'}
                      block
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="service-type-radio-button"
                      inline
                      label="Rural Health Clinics"
                      name="serviceType"
                      type="radio"
                      onChange={(e) => setServiceType(e.target.value)}
                      value="Rural Health Clinics"
                      checked={serviceType === 'Rural Health Clinics'}
                      block
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="service-type-radio-button"
                      inline
                      label="Skilled Nursing/Intermediate Care Facilities"
                      name="serviceType"
                      type="radio"
                      onChange={(e) => setServiceType(e.target.value)}
                      value="Skilled Nursing/Intermediate Care Facilities"
                      checked={serviceType === 'Skilled Nursing/Intermediate Care Facilities'}
                      block
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="service-type-radio-button"
                      inline
                      label="Free-Standing X-Ray Facility"
                      name="serviceType"
                      type="radio"
                      onChange={(e) => setServiceType(e.target.value)}
                      value="Free-Standing X-Ray Facility"
                      checked={serviceType === 'Free-Standing X-Ray Facility'}
                      block
                    />
                  </div>
                </FormGroup>
                {/* Facility Type Filter */}
                <FormGroup>
                  <FormLabel>Facility Type</FormLabel>
                  <div>
                    <FormCheck
                      className="facility-type-radio-button"
                      inline
                      label="Free-Standing"
                      name="facilityType"
                      type="radio"
                      onChange={(e) => setFacilityType(e.target.value)}
                      value="Free-Standing"
                      checked={facilityType === 'Free-Standing'}
                      block
                    />
                    <FormCheck
                      className="facility-type-radio-button"
                      inline
                      label="Provider-Based"
                      name="facilityType"
                      type="radio"
                      onChange={(e) => setFacilityType(e.target.value)}
                      value="Provider-Based"
                      checked={facilityType === 'Provider-Based'}
                      block
                    />
                  </div>
                </FormGroup>
                {/* Island Filter */}
                <FormGroup>
                  <FormLabel>Island</FormLabel>
                  <div>
                    <FormCheck
                      className="island-radio-button"
                      inline
                      label="Oahu"
                      name="island" // Corrected name attribute to "island" to separate it from serviceType
                      type="radio"
                      onChange={(e) => setIsland(e.target.value)}
                      value="Oahu"
                      checked={island === 'Oahu'} // Corrected checked condition to compare with island state
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="island-radio-button"
                      inline
                      label="Maui"
                      name="island" // Corrected name attribute to "island" to separate it from serviceType
                      type="radio"
                      onChange={(e) => setIsland(e.target.value)}
                      value="Maui"
                      checked={island === 'Maui'} // Corrected checked condition to compare with island state
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="island-radio-button"
                      inline
                      label="Kauai"
                      name="island" // Corrected name attribute to "island" to separate it from serviceType
                      type="radio"
                      onChange={(e) => setIsland(e.target.value)}
                      value="Kauai"
                      checked={island === 'Kauai'} // Corrected checked condition to compare with island state
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="island-radio-button"
                      inline
                      label="Molokai"
                      name="island" // Corrected name attribute to "island" to separate it from serviceType
                      type="radio"
                      onChange={(e) => setIsland(e.target.value)}
                      value="Molokai"
                      checked={island === 'Molokai'} // Corrected checked condition to compare with island state
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="island-radio-button"
                      inline
                      label="Lihue"
                      name="island" // Corrected name attribute to "island" to separate it from serviceType
                      type="radio"
                      onChange={(e) => setIsland(e.target.value)}
                      value="Lihue"
                      checked={island === 'Lihue'} // Corrected checked condition to compare with island state
                    />
                  </div>
                  <div>
                    <FormCheck
                      className="island-radio-button"
                      inline
                      label="Hawaii"
                      name="island" // Corrected name attribute to "island" to separate it from serviceType
                      type="radio"
                      onChange={(e) => setIsland(e.target.value)}
                      value="Hawaii"
                      checked={island === 'Hawaii'} // Corrected checked condition to compare with island state
                    />
                  </div>
                </FormGroup>
                {/* Apply and Reset Filter Buttons */}
                <Button variant="primary" type="submit">Apply Filters</Button>
                <Button variant="secondary" onClick={resetFilters}>Reset Filters</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ListProviders;
