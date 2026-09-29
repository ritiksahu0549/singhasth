import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import swal from 'sweetalert';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    swal("Thank You!", "We have received your message.", "success");

    setContact({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center mb-4 fw-bold">Contact Us 📩</h2>
        <p className="text-center mb-5 text-muted">
          We'd love to hear from you! Whether you have a question, feedback, or just want to connect.
        </p>
        <Row>
          {/* Contact Info */}
          <Col md={4}>
            <Card className="p-4 mb-4 shadow-sm border-0">
              <h5 className="mb-3 fw-bold">Get in Touch</h5>
              <p><FaMapMarkerAlt className="me-2 text-danger" /> Ujjain, Madhya Pradesh, India</p>
              <p><FaEnvelope className="me-2 text-primary" /> singhasth2028@gmail.com</p>
              <p><FaPhone className="me-2 text-success" /> +91 98765 43210</p>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col md={8}>
            <Card className="p-4 shadow-sm border-0">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={contact.subject}
                    onChange={handleChange}
                    placeholder="Message subject"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={contact.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                  />
                </Form.Group>
                <div className="text-end">
                  <Button type="submit" variant="primary">
                    Send Message ✉️
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

export default Contact;
