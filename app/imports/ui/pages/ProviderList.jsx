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
    const filtered = healthcareFacilities
      .filter(category => !filters.category || category.category === filters.category)
      .flatMap(category => category.facilities
        .filter(facility => (!filters.providerBased || facility.providerBased === 'X') &&
                (!filters.freeStanding || facility.freeStanding === 'X') &&
                (!filters.medicare || facility.medicare === 'X') &&
                (!filters.location || facility.location === filters.location))
        .map(facility => ({ ...facility, category: category.category })));

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
            {filteredData.map((facility, index) => (
              // Use a combination of category, number, and index for a unique key
              <Col key={`${facility.category}-${facility.number}-${index}`}>
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
