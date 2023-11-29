// Import necessary modules and components
import React, { useState } from 'react';
import { Col, Container, Row, Card, FormCheck, FormGroup, FormLabel, Form, Button } from 'react-bootstrap';
import Provider from '../components/Provider';
// import LoadingSpinner from '../components/LoadingSpinner';
import healthcareFacilities from '../../api/data'; // This should be the path to your data file

const ListProviders = () => {
  const [service, setService] = useState([]);
  const [insuranceType, setInsuranceType] = useState([]);
  const [island, setIsland] = useState([]);
};

export default ListProviders;
