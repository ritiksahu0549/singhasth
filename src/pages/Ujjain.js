import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"



const temples = [
  {
    name: "Mahakaleshwar Jyotirlinga",
    description:
      "Mahakaleshwar Jyotirlinga is one of the 12 revered Jyotirlingas in India, dedicated to Lord Shiva and believed to be swayambhu (self-manifested). It is the only south-facing Jyotirlinga and is famous for its Bhasma Aarti.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZmMg4kK0iUrgnFo7gZCXt03NqPlFGFUNOA&s",
  },
  {
    name: "Kal Bhairav Temple",
    description:
      "Kal Bhairav Temple is a Hindu temple dedicated to the fierce form of Lord Shiva, known for its unique ritual of offering liquor as prasad.",
    image:
      "https://reservation.shreeganga.in/wp-content/uploads/2023/01/Kal-Bhairav-Temple-Ujjain-2.jpg",
  },
  {
    name: "Harsiddhi Temple",
    description:
      "Harsiddhi Temple is a revered Hindu temple dedicated to Goddess Harsiddhi, one of the 51 Shakti Peethas.",
    image:
      "https://reservation.shreeganga.in/wp-content/uploads/2023/01/harsiddhi-mata-temple.jpg",
  },
  {
    name: "Mangalnath Temple",
    description:
      "Mangalnath Temple is dedicated to Lord Shiva, believed to be the birthplace of the planet Mars (Mangal).",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRM_3HWD6WfnkAo-7Jl98afs-f13ruHNtSrA&s",
  },
  {
    name: "Chintaman Ganesh Temple",
    description:
      "One of the oldest temples in Ujjain dedicated to Lord Ganesha. Believed to remove worries and obstacles.",
    image:
      "https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fcontent%2Ftemple%2Fimages%2F35d33c3e-e154-4e68-b98a-73a75de9dd1d.png&w=1920&q=100",
  },
  {
    name: "Sandipani Ashram",
    description:
      "Where Lord Krishna is believed to have received his education from Guru Sandipani along with Balram and Sudama.",
    image:
      "https://media.gettyimages.com/id/697274584/photo/sandipani-ashram-temple-gurukul-of-shri-krishna-in-ujjain-india.jpg?s=1024x1024&w=gi&k=20&c=pGOP1TQ9awNcvh72RHGYOYnVe6lQEp2YYrlqcGaqywQ=",
  },
];

const places = [
  {
    name: "Ram Ghat",
    description:
      "Located on the banks of the Kshipra River, Ram Ghat is known for evening aartis and peaceful surroundings.",
    image: "https://thumbs.dreamstime.com/b/ram-ghat-ujjain-is-famous-its-kumbhmela-ujjain-considered-greenwich-india-due-to-fact-first-meridian-longitude-221702192.jpg?w=1400",
  },
  {
    name: "Kshipra River",
    description:
      "The sacred Kshipra River flows through Ujjain and is an integral part of the Kumbh Mela celebration.",
    image: "https://vajiram-prod.s3.ap-south-1.amazonaws.com/Key_Facts_about_Shipra_River_deedf94c49.webp",
  },
  {
    name: "Vikram Kirti Mandir",
    description:
      "A cultural museum dedicated to King Vikramaditya, housing historical artifacts and an observatory.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSR5a0YB9OkATYq16zZHPSHaMva12iroRrQ&s",
  },
  {
    name: "Kaliadeh Palace",
    description:
      "A scenic historic palace built on an island in the Kshipra River, surrounded by lush greenery.",
    image: "https://cdn.s3waas.gov.in/s3ab817c9349cf9c4f6877e1894a1faa00/uploads/bfi_thumb/2018032779-olwbgsdzz7ovhozsccj3g8k6mrv1siwlbwfnyn7xxm.jpg",
  },
  {
    name: "ISKCON Temple",
    description:
      "A modern, peaceful temple dedicated to Lord Krishna and Radha, managed by the ISKCON community.",
    image: "https://touringwithpk.com/wp-content/uploads/2025/01/IMG_2247a.jpg",
  },
  {
    name: "Bhartrihari Caves",
    description:
      "Ancient caves believed to be the meditation site of sage Bhartrihari, brother of King Vikramaditya.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/e3/50/61/caption.jpg?w=1000&h=-1&s=1",
  },
];

const Ujjain = () => {
  return (
    <>
    <Container className="my-5">
      <h1 className="text-center mb-4">Ujjain - City of Temples</h1>

      {/* About Section */}
      <section className="mb-4">
        <h2>About Ujjain</h2>
        <p>
          Ujjain is one of the oldest and most sacred cities in India, located in Madhya Pradesh. It is famous for the Mahakaleshwar Jyotirlinga, one of the 12 holy shrines of Lord Shiva. The city is also known for hosting the Kumbh Mela, a major religious event held every 12 years. Ujjain has a rich history, spiritual importance, and cultural heritage.
        </p>
      </section>

      {/* Google Map + Image */}
      <section className="mb-5">
        <h2 className="mb-4">Location of Ujjain</h2>
        <Row>
          <Col md={6} sm={12} className="mb-3">
            <div className="ratio ratio-16x9">
              <iframe
                title="Ujjain Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.7422112674374!2d75.76839567528173!3d23.072367579134312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637540327f88a5%3A0x8d6c6c3d7a8d49d5!2sMahakaleshwar%20Jyotirlinga!5e0!3m2!1sen!2sin!4v1717052112345"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
          <Col md={6} sm={12} className="d-flex align-items-center">
            <img
              src="https://ujjainkumbh.com/wp-content/uploads/2022/10/famous-temples-to-visit-in-ujjain-1.jpg"
              alt="Mahakaleshwar Temple"
              className="img-fluid rounded shadow"
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </section>

      {/* Mahakal Importance */}
      <section className="mb-5">
        <h2>Importance of Mahakaleshwar Jyotirlinga</h2>
        <p>
          Mahakaleshwar Temple ek swayambhu Jyotirlinga hai aur bharat ka ekmatra dakshin-mukhi Jyotirlinga bhi hai.
          Har din subah yahan ki <strong>Bhasma Aarti</strong> duniya bhar mein mashhoor hai jahan bhagwan Shiv ko chita ki bhasm se pooja jati hai.
          Yahan bhakti karne se logon ko <strong>moksha</strong> milta hai – janm-maran ke chakra se mukti.
        </p>
      </section>

      {/* Temples */}
      <h2 className="mb-3">Famous Temples</h2>
      <Row>
        {temples.map((temple, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card className="h-100 shadow-sm rounded">
              <Card.Img
                variant="top"
                src={temple.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{temple.name}</Card.Title>
                <Card.Text>{temple.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Places to Visit */}
      <section className="my-5">
        <h2 className="mb-4 text-center">Other Places to Visit in Ujjain</h2>
        <Row>
          {places.map((place, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card className="h-100 shadow-sm rounded">
                <Card.Img
                  variant="top"
                  src={place.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{place.name}</Card.Title>
                  <Card.Text>{place.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
        

    </>
  

  

  );
};



export default Ujjain;
