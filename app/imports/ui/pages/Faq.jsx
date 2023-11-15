import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Faq = () => (
  <Container>
    <Row className="justify-content-center my-5">
      <Col xs={12} md={10} lg={8}>
        <h2 className="text-center mb-4">Frequently Asked Questions (FAQ)</h2>

        {/* FAQ 1 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>What is a freestanding medical facility?</Card.Title>
            <Card.Text>
              A freestanding medical facility is an independent healthcare provider that operates separately from hospitals. They typically offer outpatient services.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 2 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>What is provider-based billing?</Card.Title>
            <Card.Text>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Provider-based billing refers to a billing method where services delivered in hospital-affiliated facilities are billed under the hospital's outpatient department, potentially leading to higher costs.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 3 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>How does Medicare coverage differ between provider-based and freestanding facilities?</Card.Title>
            <Card.Text>
              Medicare typically pays provider-based facilities higher rates due to additional facility fees, which can affect the patient's co-payment amounts.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 4 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Do provider-based facilities have better equipment and technology?</Card.Title>
            <Card.Text>
              Provider-based facilities often have access to the latest technology and equipment due to their affiliation with hospitals, but this can vary depending on the facility.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 5 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Can I receive emergency services at a freestanding facility?</Card.Title>
            <Card.Text>
              Some freestanding facilities offer urgent care services, but they may not be equipped to handle major emergencies like a hospital or its provider-based facilities.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 6 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Is the wait time different between provider-based and freestanding facilities?</Card.Title>
            <Card.Text>
              Wait times can vary, but freestanding facilities are often perceived to have shorter wait times for certain services.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 7 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>How do I know if a clinic is provider-based or freestanding?</Card.Title>
            <Card.Text>
              Facilities are usually required to notify patients of their status as provider-based. You can also ask directly or check the facility's website.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 8 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Are the medical services different between provider-based and freestanding facilities?</Card.Title>
            <Card.Text>
              The quality of medical services is generally similar, but provider-based facilities may offer more comprehensive services due to their association with a hospital.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 9 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Is a referral required for treatment at a provider-based facility?</Card.Title>
            <Card.Text>
              Referral requirements depend on your insurance plan and the specific facility's policies.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* FAQ 10 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Do provider-based facilities accept all types of insurance?</Card.Title>
            <Card.Text>
              Most provider-based facilities accept a variety of insurance plans, but it's important to verify coverage with both the facility and your insurance provider.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* FAQ 11 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Why are provider-based facilities often more expensive for patients?</Card.Title>
            <Card.Text>
              Provider-based facilities can be more expensive due to additional facility fees charged by these facilities, which are over and above the fees for the medical services provided.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 12 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Can I dispute a facility fee if I was unaware of it?</Card.Title>
            <Card.Text>
              While you can inquire about facility fees and discuss concerns with the billing department, these fees are generally a standard part of billing for provider-based facilities.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 13 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>What is the definition of 'provider-based'?</Card.Title>
            <Card.Text>
              'Provider-based' typically refers to a billing practice for services delivered in hospital outpatient departments or clinics that are owned by and integrated with a hospital.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 14 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>What is the difference between provider-based and freestanding facilities?</Card.Title>
            <Card.Text>
              Provider-based facilities are part of a hospital and can charge additional facility fees, while freestanding facilities operate independently and typically do not charge these fees.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 15 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>How does being treated at a provider-based facility affect my bill?</Card.Title>
            <Card.Text>
              At a provider-based facility, you may receive two bills: one for the physician's services and another for facility fees, which can increase your total cost.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 16 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Are facility fees covered by insurance?</Card.Title>
            <Card.Text>
              Facility fees are often covered by insurance, but the extent of coverage varies by plan. Patients should check with their insurance for specific coverage details.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 17 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Why do hospitals have provider-based clinics?</Card.Title>
            <Card.Text>
              Hospitals establish provider-based clinics to integrate services, improve care coordination, and benefit from higher reimbursement rates for services.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 18 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Can I choose to be treated at a freestanding facility instead of a provider-based one?</Card.Title>
            <Card.Text>
              Yes, patients can choose to be treated at freestanding facilities, which may reduce their out-of-pocket costs compared to provider-based facilities.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 19 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>What types of services are typically offered at provider-based facilities?</Card.Title>
            <Card.Text>
              Provider-based facilities often offer a wide range of services, including specialty care, diagnostic tests, and treatments that are integrated with hospital services.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 20 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Is there a difference in the quality of care between provider-based and freestanding facilities?</Card.Title>
            <Card.Text>
              The quality of care can vary between individual facilities, but both provider-based and freestanding facilities are held to high healthcare standards.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 21 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Do provider-based facilities accept all types of insurance?</Card.Title>
            <Card.Text>
              Most provider-based facilities accept a variety of insurance plans, but it's important to verify coverage with both the facility and your insurance provider.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 22 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Is a referral required for treatment at a provider-based facility?</Card.Title>
            <Card.Text>
              Referral requirements depend on your insurance plan and the specific facility's policies. It's advisable to check with both your insurance provider and the facility.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 23 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>How do I know if a clinic is provider-based or freestanding?</Card.Title>
            <Card.Text>
              Facilities are usually required to notify patients of their status as provider-based. You can also ask directly or check the facility's website for this information.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 24 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Are the medical services different between provider-based and freestanding facilities?</Card.Title>
            <Card.Text>
              The quality of medical services is generally similar, but provider-based facilities may offer more comprehensive services due to their association with a hospital.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 25 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Is the wait time different between provider-based and freestanding facilities?</Card.Title>
            <Card.Text>
              Wait times can vary, but freestanding facilities are often perceived to have shorter wait times for certain services compared to provider-based facilities.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 26 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Can I receive emergency services at a freestanding facility?</Card.Title>
            <Card.Text>
              Some freestanding facilities offer urgent care services, but they may not be equipped to handle major emergencies like a hospital or its provider-based facilities.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 28 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>How does Medicare coverage differ between provider-based and freestanding facilities?</Card.Title>
            <Card.Text>
              Medicare typically pays provider-based facilities higher rates due to additional facility fees, which can affect the patient's co-payment amounts.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* FAQ 29 */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Are provider-based facilities better for complex medical conditions?</Card.Title>
            <Card.Text>
              They can be, as they often have direct access to hospital resources and specialists, which can be beneficial for complex or chronic conditions.
            </Card.Text>
          </Card.Body>
        </Card>

      </Col>
    </Row>
  </Container>
);

export default Faq;
