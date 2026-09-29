import React from 'react';
import {
  Container,
  Row,
  Col,
  Carousel
} from 'react-bootstrap';
import './Mahakaleshwar.css';

const Mahakaleshwar = () => {
  return (
    <>
      <div className="header">
        <i className="fa-solid fa-gopuram"></i>
        <h1 className="text-center text-purple mt-2 me-3">
          Shree Mahakaleshwar Temple, Ujjain
        </h1>
        <a
          href="https://shrimahakaleshwar.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            cursor: 'pointer',
            color: '#fff',
            backgroundColor: '#333',
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            textDecoration: 'none',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#3a2c69'}
          onMouseOut={e => e.target.style.backgroundColor = '#333'}
        >
          Book Ticket
        </a>
      </div>

      <Container className="mahakal-container py-5">
        {/* Temple History Banner */}
        <section className="temple-banner text-white text-center d-flex align-items-center">
          <div className="container py-5">
            <h2 className="display-5 fw-bold text-white mb-4">Temple History</h2>
            <p className="lead mb-3">
              🕉 Mahakaleshwar Temple – Historical Summary

              The exact origin of the Mahakaleshwar Temple is unknown but is believed to date back to prehistoric times. According to the Puranas, it was first established by Lord Brahma. In the 6th century BCE, King Chanda Pradyota appointed Prince Kumarasena to oversee the temple's law and order.

              Coins from the 4th–3rd century BCE feature images of Lord Shiva, indicating the temple’s prominence even then...
            </p>
            <p className="lead">
              The temple’s spiritual legacy, historical architecture, and the unique Bhasma Aarti draw devotees from across the world.
            </p>
          </div>
        </section>

        {/* Temple Timings */}
        <Col md={9} sm={12} className="my-5 ">
          <div className="timings-card p-5 shadow-lg rounded">
            <h2 className="text-purple mb-4 fw-bold">Temple Timings</h2>
            <ul className="list-unstyled timings-list">
              <li><strong>Bhasma Aarti:</strong> <span className="time-slot">4:00 AM - 5:00 AM</span></li>
              <li><strong>Morning Pooja:</strong> <span className="time-slot">7:00 AM - 7:30 AM</span></li>
              <li><strong>Mid-Day Pooja:</strong> <span className="time-slot">10:00 AM - 10:30 AM</span></li>
              <li><strong>Evening Pooja:</strong> <span className="time-slot">5:00 PM - 5:30 PM</span></li>
              <li><strong>Aarti:</strong> <span className="time-slot">7:00 PM - 7:30 PM</span></li>
              <li><strong>Closing Time:</strong> <span className="time-slot">11:00 PM</span></li>
            </ul>
          </div>
        </Col>

        {/* Bhasma Aarti Detail Section */}
        <section className="my-5">
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src="/images/bhasmarti_mahakal_ujjain.jpg"
                alt="Bhasma Aarti"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={6}>
              <h3 className="text-purple mb-3">About Bhasma Aarti</h3>
              <p>
                The <strong>Bhasma Aarti</strong> is a unique and sacred ritual performed only at Mahakaleshwar Temple. It takes place daily at <strong>4:00 AM</strong>, right after the Jalabhishek and decoration of the Shivling.
              </p>
              <p>
                Ash (Bhasma) from a fresh funeral pyre is used to offer this Aarti, signifying the victory of divine over death. Only <strong>men are allowed</strong> to witness it live in the inner sanctum, and strict dress codes are followed. Prior booking is required through the official portal.
              </p>
              <a
                href="https://shrimahakaleshwar.com/bhasmarti"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary mt-3"
              >
                BHASMA AARTI BOOKING
              </a>
            </Col>
          </Row>
        </section>

        {/* Gallery */}
        <Row className="mt-5 justify-content-center">
          <Col md={10} sm={12}>
            <h3 className="text-purple mb-4 text-center">Temple Gallery</h3>
            <Carousel fade interval={3500} pause="hover" controls indicators>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-80 rounded gallery-img"
                  src="/images/m1.jpg"
                  alt="Mahakaleshwar Temple Front View"
                />
                <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                  <h5>Main Temple View</h5>
                  <p>The majestic front view of Mahakaleshwar Temple in Ujjain.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-80 rounded gallery-img"
                  src="/images/m2.jpg"
                  alt="Temple Courtyard"
                />
                <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                  <h5>Temple Courtyard</h5>
                  <p>Peaceful surroundings and traditional architecture.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-80 rounded gallery-img"
                  src="/images/m3.webp"
                  alt="Temple Interior"
                />
                <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                  <h5>Temple Interior</h5>
                  <p>The inner sanctum beautifully decorated.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-80 rounded gallery-img"
                  src="/images/m4.jpg"
                  alt="Devotees Performing Aarti"
                />
                <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                  <h5>Devotees Performing Aarti</h5>
                  <p>A vibrant spiritual ceremony inside the temple.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-80 rounded gallery-img"
                  src="/images/m5.webp"
                  alt="Temple at Night"
                />
                <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                  <h5>Temple at Night</h5>
                  <p>Enchanting view with lights illuminating the temple.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Mahakaleshwar;
