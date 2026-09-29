import React from 'react';
import { Container, Row, Col, Card, Table, InputGroup, FormControl, Button, Badge } from 'react-bootstrap';
import { FaUser, FaCalendarAlt, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const KumbhMela = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col md={8}>
          <p><FaCalendarAlt /> October 18, 2027</p>
          <h2>Dates for Shihast 2028 Ujjain</h2>
          <p><FaUser /> Admin</p>
          <p>December 30, 2027</p>

          
<img
            src="/images/Kumbh3.jpg"
            alt="Shihast 2028 Crowd"
            className="img-fluid my-3"
          />

          <p>
            The Shihast Kumbh Mela 2028 is a sacred spiritual event held in Ujjain, Madhya Pradesh. 
            This religious gathering will begin in April and continue until May, attracting millions of devotees 
            who seek blessings by bathing in the holy Shipra River.
          </p>

          <p>
            Ujjain has deep-rooted significance in Hindu mythology, known as the city of Mahakal. 
            During the Kumbh, devotees participate in ritualistic bathing (Shahi Snan), processions, spiritual 
            discourses, and cultural events.
          </p>

          <h4>Snan Schedule</h4>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>Day</th>
                <th>Occasion</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>14 April 2028</td><td>Friday</td><td>1st Shahi Snan</td></tr>
              <tr><td>18 April 2028</td><td>Tuesday</td><td>Somvati Amavasya Snan</td></tr>
              <tr><td>21 April 2028</td><td>Friday</td><td>2nd Shahi Snan</td></tr>
              <tr><td>27 April 2028</td><td>Thursday</td><td>Vaishakh Purnima Snan</td></tr>
              <tr><td>03 May 2028</td><td>Monday</td><td>3rd Shahi Snan</td></tr>
              <tr><td>09 May 2028</td><td>Sunday</td><td>Kumbh Snan</td></tr>
              <tr><td>15 May 2028</td><td>Saturday</td><td>Kumbh Snan</td></tr>
              <tr><td>22 May 2028</td><td>Thursday</td><td>Kumbh Snan</td></tr>
            </tbody>
          </Table>

          <p>The pious festival is a 50-day long celebration after 12 years.</p>
          <p><span role="img" aria-label="views">📊</span> Post Views: 746</p>

          <div className="my-3">
            <Badge bg="secondary" className="me-2">Kumbh Mela 2028</Badge>
            <Badge bg="info" className="me-2">Simhastha</Badge>
            <Badge bg="warning" text="dark">Ujjain</Badge>
          </div>
        </Col>

        <Col md={4}>
          <h5>Search</h5>
          <InputGroup className="mb-3">
            <FormControl placeholder="Search here" />
            <Button variant="primary">🔍</Button>
          </InputGroup>

          <h5>Follow Us</h5>
          <div className="d-flex gap-2 mb-3">
            <Button variant="primary"><FaFacebookF /></Button>
            <Button variant="info"><FaTwitter /></Button>
            <Button variant="danger"><FaYoutube /></Button>
          </div>

          <Card className="p-2 mb-3">
            <h6>Stays</h6>
            <FormControl placeholder="Going to" className="mb-2" />
            <FormControl type="date" className="mb-2" />
            <FormControl type="date" className="mb-2" />
            <Button variant="primary">Search</Button>
            <small className="text-muted mt-2">Powered by Expedia</small>
          </Card>

          <h5>Recent Post</h5>
          <ul className="list-unstyled">
            <li>📅 <strong>March 2, 2025</strong><br />महाकुंभ 2025 की महत्त्वपूर्ण सीखें: भविष्य के लिए</li>
            <li>📅 <strong>January 12, 2025</strong><br />महाकुंभ मेले के दौरान मुख्य स्नान पर्व</li>
            <li>📅 <strong>January 10, 2025</strong><br />महाकुंभ 2025: संगम नगरी के रेलवे स्टेशनों पर</li>
            <li>📅 <strong>January 10, 2025</strong><br />महाकुंभ 2025: हेलीकॉप्टर सेवा से करें तीर्थ यात्रा</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default KumbhMela;