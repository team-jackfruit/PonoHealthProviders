// Import necessary modules and components
import React, { useState } from 'react';
import { Col, Container, Row, Card, FormCheck, FormGroup, FormLabel, Form, Button } from 'react-bootstrap';
import Provider from '../components/Provider';
// import LoadingSpinner from '../components/LoadingSpinner';
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
    console.log('filters applied');
    console.log(`serviceType${setServiceType()}`);
    console.log(`coverageType${setCoverageType()}`);
    console.log(`island${setIsland()}`);
    console.log(`facilityType${setFacilityType()}`);
    console.log(`filters${setFilters()}`);
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
    <Container className="filter-page py-3">
      {/* Filter form */}
      <Row>
        <Col fluid="sm">
          <h2 id="provider-page-title">Provider Filter</h2>
          <Card>
            <Card.Body>
              <Form onSubmit={applyFilters}>
                {/* Service Type Filter */}
                <Row className="g-3">
                  <FormGroup as={Col} sm={8}>
                    <FormLabel><h5>Service Type</h5></FormLabel>
                    <p>**When selecting a option, please press APPLY FILTERS after each chosen option.**</p>
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
                  </FormGroup>
                  {/* Facility Type Filter */}
                  <FormGroup as={Col} sm={4}>
                    <FormLabel><h5>Facility Type</h5></FormLabel>
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
                    </div>
                    {/* Island Filter */}
                    <FormLabel><h5>Island</h5></FormLabel>
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
                  </FormGroup>
                  {/* Changed apply filter buttons to make it so the changes are automatic  */}
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Providers list */}
      <Row>
        <Col>
          <h2 id="provider-page-title">Providers</h2>
          <Row xs={1} md={3} lg={6} className="g-3">
            {filteredFacilities.map((provider) => (
              <Col key={provider.number}>
                <Provider provider={provider} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

    </Container>
  );
};

export default ListProviders;
