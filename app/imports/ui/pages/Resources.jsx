import React from 'react';
import { Button, Card, Col, Container, Row, Accordion, Image } from 'react-bootstrap';
// import ServiceSection from '../components/ServiceSection';
// import InsuranceTerms from '../components/InsuranceTerms';

const ResourcesPage = () => (
  <Container fluid>
    <Row className="resource-header text-center">
      <h1 className="p-4">Resources</h1>
    </Row>
    <Row className="healthcare-solutions-section">
      <h2 className="text-center pt-5">Searching for Low Cost Healthcare Solutions?</h2>
    </Row>
    <Row className="p-5 healthcare-solutions-section" sm={1} md={3} lg={4}>
      <Col className="p-2">
        <Card className="resource-card h-100">
          <Card.Body>
            <Image variant="top" src="images/Medicare-Logo.png" className="img-fluid p-2" />
            <Card.Title>Medicare</Card.Title>
            <Card.Text>
              Primarily for people who are 65 or older, or those with certain disabilities or conditions.
            </Card.Text>
            <Button variant="primary" href="https://www.medicare.gov/">Visit Website</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="p-2">
        <Card className="resource-card h-100">
          <Card.Body>
            <Image variant="top" src="images/ACA_logo.png" className="img-fluid p-2" />
            <Card.Title>HealthCare.gov</Card.Title>
            <Card.Text>
              For those with lower incomes, HealthCare.gov can help determine eligibility for subsidies that make premiums more affordable.
            </Card.Text>
            <Button variant="primary" href="https://www.healthcare.gov/">Visit Website</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="p-2">
        <Card className="resource-card h-100">
          <Card.Body>
            <Image variant="top" src="images/HPCA_logo.png" className="img-fluid p-2" />
            <Card.Title>HPCA</Card.Title>
            <Card.Text>
              These centers receive federal funding to provide primary care services at reduced rates.
            </Card.Text>
            <Button variant="primary" href="https://www.hawaiipca.net/">Visit Website</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="p-2">
        <Card className="resource-card h-100">
          <Card.Body bg="info">
            <Image variant="top" src="images/NeedyMeds_Logo.png" className="img-fluid p-2" />
            <Card.Title>NeedyMeds</Card.Title>
            <Card.Text>
              A national non-profit, educates and empowers those seeking affordable healthcare.
            </Card.Text>
            <Button variant="primary" href="https://www.needymeds.org/">Visit Website</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* This is the Insurance Section */}
    <Row className="p-4 health-insurance-basics-section">
      <h2 className="text-center p-3">Know Health Insurance Basics</h2>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Picking Out Health Insurance Plans</Card.Title>
            <Card.Text>
              Choosing the right healthcare or insurance plan is a critical decision with a profound impact on your health and financial well-being. This process entails understanding different plan options, evaluating your health needs, and considering various factors. Let's delve into the key considerations and steps involved in selecting a healthcare or insurance plan that best suits your individual needs and circumstances. Here are some steps to assist you in picking out health insurance plans, ensuring comprehensive coverage for your well-being.
            </Card.Text>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Understanding Different Types of Plans</Accordion.Header>
                <Accordion.Body>
                  An HMO (Health Maintenance Organization) offers lower premiums and a primary care physician who coordinates all healthcare needs, but requires staying in-network except for emergencies. A PPO (Preferred Provider Organization) offers more flexibility in choosing providers and doesn&apos;t require referrals, but typically comes with higher out-of-pocket costs. An EPO (Exclusive Provider Organization) is similar to an HMO in its network restrictions but often doesn&apos;t require referrals. Lastly, a POS (Point of Service) plan combines elements of HMOs and PPOs, requiring referrals but offering more provider options.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Evaluating Your Healthcare Needs</Accordion.Header>
                <Accordion.Body>
                  Assessing your personal and family healthcare needs is a critical step in selecting the right plan. Consider factors such as how often you visit the doctor, any regular medications, and ongoing treatments or therapies. For those with chronic conditions, look for plans that offer extensive coverage for long-term care and medication. Anticipate future needs as well; if you plan to expand your family, explore plans that provide robust maternity and pediatric care.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Comparing Costs - Beyond Premiums</Accordion.Header>
                <Accordion.Body>
                  While premiums are an important cost factor, they are not the only one. Deductibles, the amount you pay for healthcare services before your insurance kicks in, can significantly impact your overall expenses. Lower premiums often mean higher deductibles and vice versa. Copayments and coinsurance are other costs to consider. Copayments are fixed amounts for specific services (like a doctor’s visit), whereas coinsurance is a percentage of costs you pay after meeting your deductible. Calculate potential healthcare expenses under different scenarios to understand the true cost of a plan.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Choosing a Plan Based on Your Preferred Providers</Accordion.Header>
                <Accordion.Body>
                  If you have preferred healthcare providers, it’s crucial to check whether they are in-network for the insurance plan you are considering. Out-of-network care is typically more expensive and sometimes not covered at all. If you don’t have specific providers in mind, consider the size and accessibility of the plan’s network. Larger networks offer more choices, which is particularly beneficial if you live in a rural area or have specialized healthcare needs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Maximizing Additional Benefits and Coverage</Accordion.Header>
                <Accordion.Body>
                  Many insurance plans offer additional benefits that can be decisive factors in your choice. These may include dental and vision coverage, mental health services, prescription drug coverage, and wellness programs. Also, consider the coverage for preventative care, which can include vaccinations, screenings, and annual check-ups. Evaluate these benefits in conjunction with the plan’s overall cost to determine which plan offers the best value for your specific health and wellness needs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Customer Reviews and Ratings</Accordion.Header>
                <Accordion.Body>
                  Research the reputation of insurance companies by reading customer reviews and ratings. Consider customer satisfaction and the company's track record in handling claims.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Additional Benefits</Accordion.Header>
                <Accordion.Body>
                  Some plans offer additional benefits like wellness programs, maternity care, mental health services, or telehealth. Consider these extras based on your needs.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Health Insurance Terms</Card.Title>
            <Card.Text>
              Navigating the healthcare and insurance landscape can often feel overwhelming, especially due to the specific terms and jargon used in this sector. Understanding these terms is crucial for making informed decisions about healthcare and insurance coverage. These terms encompass a range of concepts, from types of coverage and benefits to rules about patient care and billing. Let's break down these terms and jargons to help demystify the language of healthcare and insurance, providing clarity on what these terms mean and how they affect your healthcare choices and experiences.
            </Card.Text>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Plan Types and Options</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><strong>HMO Plan:</strong> Comprehensive health services within a specific area, requiring in-network providers.</li>
                    <li><strong>PPO Plan:</strong> Offers more freedom than HMOs, allowing care from both in-network and out-of-network providers.</li>
                    <li><strong>POS Plan:</strong> A managed care plan combining elements of HMO and PPO, allowing out-of-network use at a higher cost.</li>
                    <li><strong>Medicare Supplement Plans:</strong> Offered by private companies to fill gaps in Medicare coverage.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Payment and Cost Management</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><strong>Premium:</strong> The monthly amount paid for insurance coverage.</li>
                    <li><strong>Deductible:</strong> The yearly amount paid for eligible medical expenses before the insurance policy starts paying.</li>
                    <li><strong>Coinsurance:</strong> The percentage of costs paid after the deductible is met.</li>
                    <li><strong>Copayment:</strong> A flat fee for specific medical services, paid by the patient.</li>
                    <li><strong>Out-of-Pocket Maximum:</strong> The maximum amount paid in a year for coverage, excluding premiums.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Provider and Network Relations</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><strong>In-Network Provider:</strong> A healthcare professional or facility part of a plan’s network offering services at discounted rates.</li>
                    <li><strong>Out-of-Network Provider:</strong> A healthcare provider not in the plan's network, generally leading to higher costs.</li>
                    <li><strong>Network:</strong> A group of healthcare providers contracted with insurance companies to provide services at discounted rates.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Coverage Specifics and Restrictions</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><strong>Allowable Charge:</strong> The considered reasonable charge for services based on area rates.</li>
                    <li><strong>Exclusion or Limitation:</strong> Specific situations or treatments not covered by a health plan.</li>
                    <li><strong>Dependent:</strong> An individual, spouse, or child covered by the primary insured's plan.</li>
                    <li><strong>Pre-existing Condition:</strong> A health issue diagnosed or treated before buying a health insurance plan.</li>
                    <li><strong>Rider:</strong> Coverage options expanding the basic plan for an additional premium.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Deductibles</Accordion.Header>
                <Accordion.Body>
                  A deductible is what you pay annually for health services before your insurance company pays its share. For instance, if you have a deductible of $1,000, your insurance plan might not start covering its share of your bills until you’ve paid $1,000 for healthcare in a given year. However, plans often cover the cost of things like preventive care doctor’s visits even before you’ve paid your full deductible amount.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Premium</Accordion.Header>
                <Accordion.Body>
                  Your premium is what you’ll pay the insurance company for the privilege of having an active insurance plan. Most people pay theirs every month, but your payments might be due once a quarter or once a year.

                  {/* eslint-disable-next-line max-len */}
                  Fortunately, there are tax credits available to offset the costs of health insurance premiums for plans purchased on the Affordable Care Act marketplace. If you get health insurance through work, your employer probably covers a share of your monthly premium.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>FSA (Flexible Spending Account)</Accordion.Header>
                <Accordion.Body>
                  An FSA is often set up through an employer plan. It lets you set aside pre-tax money for common medical costs and dependent care. FSA funds must be used by the end of the term-year. It will be sent back to the employer if you don't use it. Check with your employer's Human Resources team. The can provide a list of FSA-qualified costs that you can purchase directly or be reimbursed for. A few common FSA-qualified costs include:
                  <ul>
                    <li>Copays for doctors’ visits, chiropractor and psychological sessions</li>
                    <li>Hospital fees, medical tests and services (like X-rays and screenings)</li>
                    <li>Physical rehabilitation</li>
                    <li>Dental and orthodontic expenses (like cleaning, fillings and braces)</li>
                    <li>Inpatient treatment for alcohol or drug addiction</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Consumer Rights</Card.Title>
            <Card.Text>
              Healthcare laws in the United States are designed to provide a variety of protections to ensure that individuals have access to necessary medical services, are treated fairly, and have their personal health information protected. These laws address various aspects of healthcare access and insurance coverage, aiming to create a more equitable and efficient healthcare system. Let&apos;s explore these protections in more detail to understand how they benefit patients and contribute to the overall healthcare landscape. Here are the key protections provided by healthcare law in the United States:
            </Card.Text>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Emergency Medical Treatment</Accordion.Header>
                <Accordion.Body>
                  Under EMTALA, everyone has the right to emergency medical treatment in life-threatening situations regardless of their ability to pay, ensuring that emergency care is provided to those in need.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Preventive Care</Accordion.Header>
                <Accordion.Body>
                  This provision mandates that health plans cover preventive services like vaccinations, screenings, and regular check-ups without any cost to the patient. This encourages individuals to seek preventative care, potentially reducing the likelihood of severe health issues later.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Ends Lifetime and Yearly Limits</Accordion.Header>
                <Accordion.Body>
                  Insurers are prohibited from setting a lifetime or annual limit on the total amount they will spend on essential health benefits for an individual. This protection ensures that patients with significant or long-term health issues don&apos;t lose coverage when they need it most.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Accountability for Insurance Companies</Accordion.Header>
                <Accordion.Body>
                  Insurance companies are required to justify any significant rate increases and are subject to government review and approval, aiming to keep insurance affordable.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Cancellation Protection</Accordion.Header>
                <Accordion.Body>
                  This protection makes it illegal for insurers to cancel someone&apos;s health insurance if they get sick, safeguarding continuous coverage during illness.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>Informed Consent</Accordion.Header>
                <Accordion.Body>
                  Informed consent requires that patients are fully informed about the treatments they undergo, including risks, benefits, and alternatives, allowing them to make educated decisions about their healthcare.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Pre-existing Health Conditions</Accordion.Header>
                <Accordion.Body>
                  Insurance companies can&apos;t refuse coverage or charge more due to pre-existing conditions. This ensures that people with health issues, such as chronic illnesses or previous diagnoses, receive the same access to insurance as those without such conditions.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
export default ResourcesPage;
