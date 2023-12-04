import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, FormCheck, FormGroup, FormLabel, Row } from 'react-bootstrap';

const FilterComponent = ({ onFilterChange }) => {
  console.log('Received onFilterChange:', onFilterChange);
  const [service, setService] = useState('');
  const [insuranceType, setInsuranceType] = useState('');
  const [location, setLocation] = useState('');

  const handleServiceChange = (e) => {
    const updatedService = e.target.value;
    setService(updatedService);
    onFilterChange({ service: updatedService, insuranceType, location });
    console.log('Service is now: ', updatedService);
  };

  const handleInsuranceTypeChange = (e) => {
    const updatedInsuranceType = e.target.value;
    setInsuranceType(updatedInsuranceType);
    onFilterChange({ service, insuranceType: updatedInsuranceType, location });
    console.log('InsuranceType is now: ', updatedInsuranceType);
  };

  const handleLocationChange = (e) => {
    const updatedLocation = e.target.value;
    setLocation(updatedLocation);
    onFilterChange({ service, insuranceType, location: updatedLocation });
    console.log('Location is now: ', updatedLocation);
  };

  return (
    <Row className="g-3">
      <FormGroup as={Col} sm={8}>
        <FormLabel><h5>Service Type</h5></FormLabel>
        <p>**When selecting a option, please press APPLY FILTERS after each chosen option.**</p>
        <div>
          <FormCheck
            className="service-type-radio-button"
            inline
            label="Adult Day Health Centers"
            name="service"
            type="radio"
            onChange={handleServiceChange}
            value="Adult Day Health Centers"
            checked={service === 'Adult Day Health Centers'}
            block
          />
        </div>
        <div>
          <FormCheck
            className="service-type-radio-button"
            inline
            label="Ambulatory Surgery Centers"
            name="service"
            type="radio"
            onChange={handleServiceChange}
            value="Ambulatory Surgery Centers"
            checked={service === 'Ambulatory Surgery Centers'}
            block
          />
        </div>
        <div>
          <FormCheck
            className="service-type-radio-button"
            inline
            label="End Stage Renal Disease (ESRD) Program"
            name="service"
            type="radio"
            onChange={handleServiceChange}
            value="End Stage Renal Disease (ESRD) Program"
            checked={service === 'End Stage Renal Disease (ESRD) Program'}
            block
          />
        </div>
        <div>
          <FormCheck
            className="service-type-radio-button"
            inline
            label="Home Health Agencies"
            name="service"
            type="radio"
            onChange={handleServiceChange}
            value="Home Health Agencies"
            checked={service === 'Home Health Agencies'}
            block
          />
        </div>
        <div>
          <FormCheck
            className="service-type-radio-button"
            inline
            label="Hospice"
            name="service"
            type="radio"
            onChange={handleServiceChange}
            value="Hospice"
            checked={service === 'Hospice'}
            block
          />
        </div>
        <div>
          <FormCheck
            className="service-type-radio-button"
            inline
            label="Hospitals"
            name="service"
            type="radio"
            onChange={handleServiceChange}
            value="Hospitals"
            checked={service === 'Hospitals'}
            block
          />
        </div>
        <div>
          <FormCheck
            className="service-type-radio-button"
            inline
            label="Intermediate Care Facilities for Individuals with Intellectual Disabilities"
            name="service"
            type="radio"
            onChange={handleServiceChange}
            value="Intermediate Care Facilities for Individuals with Intellectual Disabilities"
            checked={service === 'Intermediate Care Facilities for Individuals with Intellectual Disabilities'}
            block
          />
        </div>
        <div>
          <FormCheck
            className="service-type-radio-button"
            inline
            label="Organ Procurement Organization"
            name="service"
            type="radio"
            onChange={handleServiceChange}
            value="Organ Procurement Organization"
            checked={service === 'Organ Procurement Organization'}
            block
          />
        </div>
        <div>
          <FormCheck
            className="service-type-radio-button"
            inline
            label="Outpatient Physical Therapy/Speech Pathology"
            name="service"
            type="radio"
            onChange={handleServiceChange}
            value="Outpatient Physical Therapy/Speech Pathology"
            checked={service === 'Outpatient Physical Therapy/Speech Pathology'}
            block
          />
        </div>
        <div>
          <FormCheck
            className="service-type-radio-button"
            inline
            label="Rural Health Clinics"
            name="service"
            type="radio"
            onChange={handleServiceChange}
            value="Rural Health Clinics"
            checked={service === 'Rural Health Clinics'}
            block
          />
        </div>
        <div>
          <FormCheck
            className="service-type-radio-button"
            inline
            label="Skilled Nursing/Intermediate Care Facilities"
            name="service"
            type="radio"
            onChange={handleServiceChange}
            value="Skilled Nursing/Intermediate Care Facilities"
            checked={service === 'Skilled Nursing/Intermediate Care Facilities'}
            block
          />
        </div>
        <div>
          <FormCheck
            className="service-type-radio-button"
            inline
            label="Free-Standing X-Ray Facility"
            name="service"
            type="radio"
            onChange={handleServiceChange}
            value="Free-Standing X-Ray Facility"
            checked={service === 'Free-Standing X-Ray Facility'}
            block
          />
        </div>
      </FormGroup>
      {/* Insurance Filter */}
      <FormGroup as={Col} sm={4}>
        <FormLabel><h5>Facility Type</h5></FormLabel>
        <div>
          <FormCheck
            className="facility-type-radio-button"
            inline
            label="Free-Standing"
            name="insuranceType"
            type="radio"
            onChange={handleInsuranceTypeChange}
            value="Free-Standing"
            checked={insuranceType === 'Free-Standing'}
            block
          />
          <FormCheck
            className="facility-type-radio-button"
            inline
            label="Provider-Based"
            name="insuranceType"
            type="radio"
            onChange={handleInsuranceTypeChange}
            value="Provider-Based"
            checked={insuranceType === 'Provider-Based'}
            block
          />
        </div>
        {/* Location Filter */}
        <FormLabel><h5>Location</h5></FormLabel>
        <div>
          <FormCheck
            className="location-radio-button"
            inline
            label="Oahu"
            name="location" // Corrected name attribute to "location" to separate it from service
            type="radio"
            onChange={handleLocationChange}
            value="Oahu"
            checked={location === 'Oahu'} // Corrected checked condition to compare with location state
          />
        </div>
        <div>
          <FormCheck
            className="location-radio-button"
            inline
            label="Maui"
            name="location" // Corrected name attribute to "location" to separate it from service
            type="radio"
            onChange={handleLocationChange}
            value="Maui"
            checked={location === 'Maui'} // Corrected checked condition to compare with location state
          />
        </div>
        <div>
          <FormCheck
            className="location-radio-button"
            inline
            label="Kauai"
            name="location" // Corrected name attribute to "location" to separate it from service
            type="radio"
            onChange={handleLocationChange}
            value="Kauai"
            checked={location === 'Kauai'} // Corrected checked condition to compare with location state
          />
        </div>
        <div>
          <FormCheck
            className="location-radio-button"
            inline
            label="Molokai"
            name="location" // Corrected name attribute to "location" to separate it from service
            type="radio"
            onChange={handleLocationChange}
            value="Molokai"
            checked={location === 'Molokai'} // Corrected checked condition to compare with location state
          />
        </div>
        <div>
          <FormCheck
            className="location-radio-button"
            inline
            label="Lihue"
            name="location" // Corrected name attribute to "location" to separate it from service
            type="radio"
            onChange={handleLocationChange}
            value="Lihue"
            checked={location === 'Lihue'} // Corrected checked condition to compare with location state
          />
        </div>
        <div>
          <FormCheck
            className="location-radio-button"
            inline
            label="Hawaii"
            name="location" // Corrected name attribute to "location" to separate it from service
            type="radio"
            onChange={handleLocationChange}
            value="Hawaii"
            checked={location === 'Hawaii'} // Corrected checked condition to compare with location state
          />
        </div>
      </FormGroup>
    </Row>
  );
};

FilterComponent.propTypes = {
  onFilterChange: PropTypes.func.isRequired, // onFilterChange is expected to be a function
};

export default FilterComponent;
