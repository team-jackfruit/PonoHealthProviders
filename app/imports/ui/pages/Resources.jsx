import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ResourcesPage = () => (
  <Container fluid>
    <Row className="my-4">
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>QUEST HAWAI&amp;I</Card.Title>
            <Card.Text>
              Medicaid plans for low-income families, children, pregnant women, elderly adults, and individuals with disabilities.
            </Card.Text>
            <Button variant="info" href="#">visit website</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Medicare</Card.Title>
            <Card.Text>
              Primarily for people who are 65 or older, or those with certain disabilities or conditions.
            </Card.Text>
            <Button variant="info" href="#">visit website</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>HealthCare.gov</Card.Title>
            <Card.Text>
              For those with lower incomes, HealthCare.gov can help determine eligibility for subsidies that make premiums more affordable.
            </Card.Text>
            <Button variant="info" href="#">visit website</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className="my-4">
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>HPCA</Card.Title>
            <Card.Text>
              These centers receive federal funding to provide primary care services at reduced rates.
            </Card.Text>
            <Button variant="info" href="#">visit website</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>NeedyMeds</Card.Title>
            <Card.Text>
              A national non-profit, educates and empowers those seeking affordable healthcare.
            </Card.Text>
            <Button variant="info" href="#">visit website</Button>
          </Card.Body>
        </Card>
      </Col>
      {/* Add more columns/cards if needed */}
    </Row>

    {/* Add the section for "Know Health Insurance Basics" here with similar Row/Col structure */}
    <Row className="my-4">
      <Col md={12}>
        <h2>Know Health Insurance Basics</h2>
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Picking Out Health Insurance Plans</Card.Title>
            <Card.Text>
              Embarking on the journey to find the right healthcare insurance plan can often feel daunting. To streamline this process, we've curated a selection of reputable external websites that offer comprehensive guides and comparison tools.
            </Card.Text>
            <ul className="list-unstyled">
              <li><a href="#" className="text-primary">Link 1</a></li>
              <li><a href="#" className="text-primary">Link 2</a></li>
              <li><a href="#" className="text-primary">Link 3</a></li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Health Insurance Terms</Card.Title>
            <Card.Text>
              Diving into the world of healthcare insurance, you'll encounter a myriad of specialized terms that can be perplexing. We've compiled a list of authoritative external websites that provide concise definitions and breakdowns of insurance jargon.
            </Card.Text>
            <ul className="list-unstyled">
              <li><a href="#" className="text-primary">Link 1</a></li>
              <li><a href="#" className="text-primary">Link 2</a></li>
              <li><a href="#" className="text-primary">Link 3</a></li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Consumer Rights</Card.Title>
            <Card.Text>
              Understanding your rights as a healthcare consumer is crucial in safeguarding your interests. We've selected a number of external websites that thoroughly explain the policies, laws, and protections that impact your healthcare experience.
            </Card.Text>
            <ul className="list-unstyled">
              <li><a href="#" className="text-primary">Link 1</a></li>
              <li><a href="#" className="text-primary">Link 2</a></li>
              <li><a href="#" className="text-primary">Link 3</a></li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
export default ResourcesPage;
