import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table, Dropdown, Card, FormCheck, FormGroup, FormLabel } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Stuffs } from '../../api/stuff/Stuff';
// import StuffItem from '../components/StuffItem';
import Provider from '../components/Provider';
import LoadingSpinner from '../components/LoadingSpinner';
import healthcareFacilities from '../../api/data';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListProviders = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Stuffs.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const providerItems = Stuffs.collection.find({}).fetch();
    return {
      healthcareFacilities: providerItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container className="py-3 pt-5">
      <Row>
        <Col md={7}>
          <Col>
            <h2>Providers</h2>
          </Col>
          <div className="provider-card">
            <Row xs={1} md={2} lg={3} className="g-3">
              {healthcareFacilities.map((each) => (each.facilities.map((provider) => (<Col key={provider._id}><Provider provider={provider} /></Col>))))}
            </Row>
          </div>
        </Col>
        <Col className="square border-start">
          <h1>Provider Filter</h1>
          <Card className="text-left">
            <FormGroup>
              <FormLabel>SERVICE TYPE</FormLabel><br />
              <div>
                <FormCheck
                  className="service-type-radio-button"
                  inline
                  label="Adult Day Health Centers"
                  name="service"
                  type="radio"
                  id="radio-adult-day-health-centers"
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
                  id="radio-adult-day-health-centers"
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
                  id="radio-adult-day-health-centers"
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
                  id="radio-adult-day-health-centers"
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
                  id="radio-adult-day-health-centers"
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
                  id="radio-adult-day-health-centers"
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
                  id="radio-adult-day-health-centers"
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
                  id="radio-adult-day-health-centers"
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
                  id="radio-adult-day-health-centers"
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
                  id="radio-adult-day-health-centers"
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
                  id="radio-adult-day-health-centers"
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
                  id="radio-adult-day-health-centers"
                  block
                />
              </div>
              <FormLabel>COVERAGE TYPE</FormLabel>
              <div>
                <FormCheck
                  className="coverage-type-radio-button"
                  inline
                  label="Free-Standing"
                  name="service"
                  type="radio"
                  id="radio-adult-day-health-centers"
                  block
                />
              </div>
              <div>
                <FormCheck
                  className="coverage-type-radio-button"
                  inline
                  label="Provider-Based"
                  name="service"
                  type="radio"
                  id="radio-adult-day-health-centers"
                  block
                />
              </div>
              <FormLabel>ISLAND</FormLabel>
              <div>
                <FormCheck
                  className="island-radio-button"
                  inline
                  label="Oahu"
                  name="service"
                  type="radio"
                  id="radio-adult-day-health-centers"
                  block
                />
              </div>
              <div>
                <FormCheck
                  className="island-radio-button"
                  inline
                  label="Maui"
                  name="service"
                  type="radio"
                  id="radio-adult-day-health-centers"
                  block
                />
              </div>
              <div>
                <FormCheck
                  className="island-radio-button"
                  inline
                  label="Kauai"
                  name="service"
                  type="radio"
                  id="radio-adult-day-health-centers"
                  block
                />
              </div>
              <div>
                <FormCheck
                  className="island-radio-button"
                  inline
                  label="Hawaii (Big Island)"
                  name="service"
                  type="radio"
                  id="radio-adult-day-health-centers"
                  block
                />
              </div>
              <div>
                <FormCheck
                  className="island-radio-button"
                  inline
                  label="Molokai"
                  name="service"
                  type="radio"
                  id="radio-adult-day-health-centers"
                  block
                />
              </div>
              <div>
                <FormCheck
                  className="island-radio-button"
                  inline
                  label="Lanai"
                  name="service"
                  type="radio"
                  id="radio-adult-day-health-centers"
                  block
                />
              </div>
            </FormGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListProviders;
