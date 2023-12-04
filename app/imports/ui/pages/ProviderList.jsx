// Import necessary modules and components
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Provider from '../components/Provider';
import FilterComponent from '../components/FilterComponent';
// import LoadingSpinner from '../components/LoadingSpinner';
import healthcareFacilities from '../../api/data'; // This should be the path to your data file

const ListProviderswFilterDebug = () => {

  const [filteredData, setFilteredData] = useState(healthcareFacilities);

  const handleFilterChange = (filters) => {
    console.log('handleFilterChange called with:', filters);
    let filtered = healthcareFacilities.flatMap(category => category.facilities.map(facility => ({ ...facility, category: category.category })));

    // Filter by service type
    if (filters.service) {
      filtered = filtered.filter(facility => facility.service === filters.service);
    }

    // Filter by insurance type
    if (filters.insuranceType) {
      filtered = filtered.filter(facility => facility.insuranceType === filters.insuranceType);
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(facility => facility.location === filters.location);
    }

    // Add more filters as needed...
    console.log('Filtered Data:', filtered);
    console.log('handleFilterChange function:', handleFilterChange);
    setFilteredData(filtered);
  };

  return (
    <Container className="filter-page py-3">
      {/* Filter form */}
      <FilterComponent onFilterChange={handleFilterChange} />
      {/* Providers list */}
      <Row>
        <Col>
          <h2 id="provider-page-title">Providers</h2>
          <Row xs={1} md={3} lg={6} className="g-3">
            {filteredData.map((facility) => (
              <Col key={facility.number}>
                <Provider provider={facility} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ListProviderswFilterDebug;
