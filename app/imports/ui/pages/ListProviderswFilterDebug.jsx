// Import necessary modules and components
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Provider from '../components/Provider';
import FilterComponent from './FilterComponent';
// import LoadingSpinner from '../components/LoadingSpinner';
import healthcareFacilities from '../../api/data'; // This should be the path to your data file

const ListProviders = () => {

  const [filteredData, setFilteredData] = useState(healthcareFacilities);

  const handleFilterChange = (filters) => {
    let filtered = healthcareFacilities;

    // Filter by service
    if (filters.service) {
      filtered = filtered.filter(item => item.service === filters.service);
    }

    // Filter by insurance type
    if (filters.insuranceType) {
      filtered = filtered.filter(item => item.insuranceType === filters.insuranceType);
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(item => item.location === filters.location);
    }

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
            {filteredData.map(item => (
              <div key={item.id}>{/* Display item details */}</div>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ListProviders;
