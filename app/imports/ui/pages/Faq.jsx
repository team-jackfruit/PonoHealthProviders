import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';

export const Faq = () => (
  <Container fluid id="faq-page">
    <Row className="justify-content-center">
      <Col xs={12} md={10} lg={10}>
        <h2 className="text-center my-4" style={{ color: 'white' }}>Frequently Asked Questions (FAQ)</h2>
        <Accordion className="m-4 my-5">
          <AccordionItem eventKey="0">
            <AccordionHeader><h5>What is a freestanding medical facility?</h5></AccordionHeader>
            <AccordionBody>A freestanding medical facility is an independent healthcare provider that operates separately from hospitals. They typically offer outpatient services.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="1">
            <AccordionHeader><h5>What is provider-based billing?</h5></AccordionHeader>
            <AccordionBody>Provider-based billing refers to a billing method where services delivered in hospital-affiliated facilities are billed under the hospital's outpatient department, potentially leading to higher costs.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="2">
            <AccordionHeader><h5>How does Medicare coverage differ between provider-based and freestanding facilities?</h5></AccordionHeader>
            <AccordionBody>Medicare typically pays provider-based facilities higher rates due to additional facility fees, which can affect the patient's co-payment amounts.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="3">
            <AccordionHeader><h5>Do provider-based facilities have better equipment and technology?</h5></AccordionHeader>
            <AccordionBody>Provider-based facilities often have access to the latest technology and equipment due to their affiliation with hospitals, but this can vary depending on the facility.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="4">
            <AccordionHeader><h5>Can I receive emergency services at a freestanding facility?</h5></AccordionHeader>
            <AccordionBody>Some freestanding facilities offer urgent care services, but they may not be equipped to handle major emergencies like a hospital or its provider-based facilities.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="5">
            <AccordionHeader><h5>Is the wait time different between provider-based and freestanding facilities?</h5></AccordionHeader>
            <AccordionBody>Wait times can vary, but freestanding facilities are often perceived to have shorter wait times for certain services.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="6">
            <AccordionHeader><h5>How do I know if a clinic is provider-based or freestanding?</h5></AccordionHeader>
            <AccordionBody>Facilities are usually required to notify patients of their status as provider-based. You can also ask directly or check the facility's website.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="7">
            <AccordionHeader><h5>Are the medical services different between provider-based and freestanding facilities?</h5></AccordionHeader>
            <AccordionBody> The quality of medical services is generally similar, but provider-based facilities may offer more comprehensive services due to their association with a hospital.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="8">
            <AccordionHeader><h5>Is a referral required for treatment at a provider-based facility?</h5></AccordionHeader>
            <AccordionBody>Referral requirements depend on your insurance plan and the specific facility's policies.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="9">
            <AccordionHeader><h5>Do provider-based facilities accept all types of insurance?</h5></AccordionHeader>
            <AccordionBody>Most provider-based facilities accept a variety of insurance plans, but it's important to verify coverage with both the facility and your insurance provider.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="10">
            <AccordionHeader><h5>Why are provider-based facilities often more expensive for patients?</h5></AccordionHeader>
            <AccordionBody>Provider-based facilities can be more expensive due to additional facility fees charged by these facilities, which are over and above the fees for the medical services provided.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="11">
            <AccordionHeader><h5>Can I dispute a facility fee if I was unaware of it?</h5></AccordionHeader>
            <AccordionBody>While you can inquire about facility fees and discuss concerns with the billing department, these fees are generally a standard part of billing for provider-based facilities.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="12">
            <AccordionHeader><h5>What is the definition of 'provider-based'?</h5></AccordionHeader>
            <AccordionBody>  'Provider-based' typically refers to a billing practice for services delivered in hospital outpatient departments or clinics that are owned by and integrated with a hospital.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="13">
            <AccordionHeader><h5>What is the difference between provider-based and freestanding facilities?</h5></AccordionHeader>
            <AccordionBody>Provider-based facilities are part of a hospital and can charge additional facility fees, while freestanding facilities operate independently and typically do not charge these fees.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="14">
            <AccordionHeader><h5>How does being treated at a provider-based facility affect my bill?</h5></AccordionHeader>
            <AccordionBody>At a provider-based facility, you may receive two bills: one for the physician's services and another for facility fees, which can increase your total cost.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="16">
            <AccordionHeader><h5>Are facility fees covered by insurance?</h5></AccordionHeader>
            <AccordionBody> Facility fees are often covered by insurance, but the extent of coverage varies by plan. Patients should check with their insurance for specific coverage details.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="17">
            <AccordionHeader><h5>Why do hospitals have provider-based clinics?</h5></AccordionHeader>
            <AccordionBody>Hospitals establish provider-based clinics to integrate services, improve care coordination, and benefit from higher reimbursement rates for services.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="18">
            <AccordionHeader><h5>Can I choose to be treated at a freestanding facility instead of a provider-based one?</h5></AccordionHeader>
            <AccordionBody>Yes, patients can choose to be treated at freestanding facilities, which may reduce their out-of-pocket costs compared to provider-based facilities.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="19">
            <AccordionHeader><h5>What types of services are typically offered at provider-based facilities?</h5></AccordionHeader>
            <AccordionBody> Provider-based facilities often offer a wide range of services, including specialty care, diagnostic tests, and treatments that are integrated with hospital services.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="20">
            <AccordionHeader><h5>Is there a difference in the quality of care between provider-based and freestanding facilities?</h5></AccordionHeader>
            <AccordionBody> The quality of care can vary between individual facilities, but both provider-based and freestanding facilities are held to high healthcare standards.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="21">
            <AccordionHeader><h5>Do provider-based facilities accept all types of insurance?</h5></AccordionHeader>
            <AccordionBody>Most provider-based facilities accept a variety of insurance plans, but it's important to verify coverage with both the facility and your insurance provider.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="22">
            <AccordionHeader><h5>Is a referral required for treatment at a provider-based facility?</h5></AccordionHeader>
            <AccordionBody> Referral requirements depend on your insurance plan and the specific facility's policies. It's advisable to check with both your insurance provider and the facility.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="23">
            <AccordionHeader><h5>How do I know if a clinic is provider-based or freestanding?</h5></AccordionHeader>
            <AccordionBody>Facilities are usually required to notify patients of their status as provider-based. You can also ask directly or check the facility's website for this information.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="24">
            <AccordionHeader><h5>Are the medical services different between provider-based and freestanding facilities?</h5></AccordionHeader>
            <AccordionBody> The quality of medical services is generally similar, but provider-based facilities may offer more comprehensive services due to their association with a hospital.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="25">
            <AccordionHeader><h5>Is the wait time different between provider-based and freestanding facilities?</h5></AccordionHeader>
            <AccordionBody> Wait times can vary, but freestanding facilities are often perceived to have shorter wait times for certain services compared to provider-based facilities.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="26">
            <AccordionHeader><h5>Can I receive emergency services at a freestanding facility?</h5></AccordionHeader>
            <AccordionBody>Some freestanding facilities offer urgent care services, but they may not be equipped to handle major emergencies like a hospital or its provider-based facilities.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="27">
            <AccordionHeader><h5>How does Medicare coverage differ between provider-based and freestanding facilities?</h5></AccordionHeader>
            <AccordionBody>Medicare typically pays provider-based facilities higher rates due to additional facility fees, which can affect the patient's co-payment amounts.</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="28">
            <AccordionHeader><h5>Are provider-based facilities better for complex medical conditions?</h5></AccordionHeader>
            <AccordionBody>  They can be, as they often have direct access to hospital resources and specialists, which can be beneficial for complex or chronic conditions.</AccordionBody>
          </AccordionItem>
        </Accordion>
      </Col>
    </Row>
  </Container>
);

export default Faq;
