import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table, Dropdown, Card } from 'react-bootstrap';
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
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>Providers</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {healthcareFacilities.map((each) => (each.facilities.map((provider) => (<Col key={provider._id}><Provider provider={provider} /></Col>))))}
          </Row>
        </Col>
        <Col className="square border-start text-center">
          <h1>Provider Filter</h1>
          <Card className="text-center">
            <Table>
              <tr>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      Service Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      Island
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListProviders;
