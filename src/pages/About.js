import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaMapMarkerAlt, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';
import swal from 'sweetalert';

const About = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    swal("Thank You!", "Your feedback has been submitted successfully.", "success");

    setFeedback({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      {/* Hero Section */}
      {/* Hero Section */}
<div style={{
  background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(/images/images.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '80px 0',
  color: 'white',
  textAlign: 'center'
}}>
  <Container>
    <h1 className="display-5 fw-bold">About Singhasth Kumbh Portal</h1>
    <p className="lead">A digital initiative to guide your spiritual journey to Ujjain in 2028.</p>
    <Button variant="light" href="/contact">Contact Us</Button>
  </Container>
</div>


      {/* About Content */}
      <Container className="my-5">
        <Row className="mb-4">
          <Col md={12}>
            <h2 className="text-center mb-4">Who We Are</h2>
            <p className="text-muted text-center">
              We're a passionate team aiming to connect millions of devotees to the sacred Kumbh Mela 2028 with real-time info, events, booking, and cultural details.
            </p>
          </Col>
        </Row>

        {/* Highlight Section */}
        <Row className="text-center mb-5">
          <Col md={3}>
            <FaMapMarkerAlt size={40} className="mb-2 text-primary" />
            <h5>Ujjain Focused</h5>
            <p>All essential info about Ujjain & Mahakal during the Kumbh Mela.</p>
          </Col>
          <Col md={3}>
            <FaUsers size={40} className="mb-2 text-success" />
            <h5>For Devotees</h5>
            <p>We guide pilgrims, tourists, and spiritual seekers alike.</p>
          </Col>
          <Col md={3}>
            <FaLightbulb size={40} className="mb-2 text-warning" />
            <h5>Smart Navigation</h5>
            <p>Easy-to-use design, live info & bookings – just a click away.</p>
          </Col>
          <Col md={3}>
            <FaHandshake size={40} className="mb-2 text-danger" />
            <h5>Trustworthy</h5>
            <p>Backed by local insights & verified sources.</p>
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="p-4 shadow-sm border-0 mb-5">
              <Card.Body>
                <h4 className="mb-3">Our Mission</h4>
                <p>
                  We aim to bridge tradition and technology by offering a spiritual platform where every devotee can explore and prepare for the grand Simhastha Kumbh in Ujjain.
                </p>
                <p>
                  From Shahi Snan dates to temple history, and accommodations to safety tips – this platform is your one-stop guide.
                </p>
                <p>
                  Join us in celebrating India’s spiritual glory. Connect with the divine – digitally.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Feedback Form */}
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 shadow-sm border-0">
              <h4 className="mb-3 text-center">We’d Love Your Feedback 💬</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={feedback.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={feedback.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={feedback.message}
                    onChange={handleChange}
                    placeholder="Your valuable feedback..."
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Submit Feedback
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
