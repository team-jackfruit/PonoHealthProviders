import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Card, FormCheck, FormGroup, FormLabel, Form, Button } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Stuffs } from '../../api/stuff/Stuff';
import Provider from '../components/Provider';
import LoadingSpinner from '../components/LoadingSpinner';
import healthcareFacilities from '../../api/data';

const ListProviders = () => {
  const [serviceType, setServiceType] = useState('');
  const [coverageType, setCoverageType] = useState('');
  const [island, setIsland] = useState('');
  const [filters, setFilters] = useState({ serviceType: '', coverageType: '', island: '' });

  const { ready } = useTracker(() => {
    const subscription = Meteor.subscribe(Stuffs.userPublicationName);
    const rdy = subscription.ready();
    const providerItems = Stuffs.collection.find({}).fetch();
    return {
      healthcareFacilities: providerItems,
      ready: rdy,
    };
  }, []);

  const applyFilters = (event) => {
    event.preventDefault();
    console.log('Applying filters:', { serviceType, coverageType, island }); // Test log for applied filters
    setFilters({
      serviceType: serviceType,
      coverageType: coverageType,
      island: island,
    });
  };

  const resetFilters = () => {
    setServiceType('');
    setCoverageType('');
    setIsland('');
    setFilters({ serviceType: '', coverageType: '', island: '' });
  };

  // Test function to log the filtered facilities
  const testFilteredFacilities = () => {
    console.log('Current filters:', filters);
    const testFilters = healthcareFacilities.filter((facility) => (!filters.serviceType || facility.serviceType === filters.serviceType) &&
        (!filters.coverageType || facility.coverageType === filters.coverageType) &&
        (!filters.island || facility.island === filters.island));
    console.log('Filtered results:', testFilters);
    return testFilters;
  };

  // Call the test function to filter facilities
  const filteredFacilities = ready ? testFilteredFacilities() : [];

  return (ready ? (
    <Container className="py-3 pt-5">
      <Row>
        <Col md={7}>
          <Col>
            <h2>Providers</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-3">
            {filteredFacilities.map((healthcareFacility) => (
              healthcareFacility.facilities.map((provider) => (
                <Col key={provider._id}>
                  <Provider provider={provider} />
                </Col>
              ))
            ))}
          </Row>
        </Col>
        <Col>
          <h1>Provider Filter</h1>
          <Card className="text-left">
            <Card.Body>
              <Form onSubmit={applyFilters}>
                <FormGroup>
                  <FormLabel>SERVICE TYPE</FormLabel><br />
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
                <Button variant="primary" type="submit">Apply Filters</Button>
                <Button variant="secondary" onClick={resetFilters}>Reset</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListProviders;
