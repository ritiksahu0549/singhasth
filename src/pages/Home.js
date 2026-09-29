import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TempleCard from "../components/TempleCard";
import { Link } from "react-router-dom";

const templeData = [
  {
    id: 1,
    title: "Chintaman-Ganesh",
    description:
      "Chitamani Ganpati is considered a Jagrut Devsthan, which means he is a powerful deity that blesses his devotees and fulfills his wishes",
    image: "/images/Chintaman-ganesh.jpg",
  },
  {
    id: 2,
    title: "Harsiddhi Temple",
    description: "A Shaktipeeth with deep mythological significance...",
    image: "/images/Harsiddhi-mata.jpg",
  },
  {
    id: 3,
    title: "Kal Bhairav Temple",
    description: "Famous for its ritual of liquor offering...",
    image: "/images/Kal-bherav.jpg",
  },
  {
    id: 4,
    title: "Gad kalika Temple",
    description:
      "When Lord Shiva carried the body of his consort Sati, her upper lip fell at the site of the Mahakali Temple",
    image: "/images/Gad-kalika.jpg",
  },
  {
    id: 5,
    title: "Mangalnath Temple",
    description: "Astrological significance, birth place of Mars...",
    image: "/images/Mangal-nath.jpg",
  },
  {
    id: 6,
    title: "Vikarant-bherav Tempale",
    description:
      "He is also known as the God of Time and he defeated the evil forces and restored the people's peace...",
    image: "/images/Vikarant-bherav.jpg",
  },
];

const Home = () => {
  return (
    <div className="container mt-4">
      {/* Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={800}
      >
        <div>
          <img src="/images/kumbh1.jpg" alt="Kumbh Mela 1" />
        </div>
        <div>
          <img src="/images/kumbh2.jpg" alt="Kumbh Mela 2" />
        </div>
        <div>
          <img src="/images/kumbh3.jpg" alt="Kumbh Mela 3" />
        </div>
      </Carousel>

      {/* Temple Cards */}
      <h2 className="text-center mt-5 mb-4">Explore Temples</h2>
      <div className="row">
        {templeData.map((temple) => (
          <TempleCard key={temple.id} {...temple} />
        ))}
      </div>
      {/* Major Temples to Visit Ujjain Section */}
      <div className="text-center my-5">
        <h2 className="mb-3">Major Temples to Visit Ujjain</h2>
        <p className="mb-3">
          Discover the most spiritual and historical temples of Ujjain that
          attract millions of devotees every year.
        </p>
        <Link to="/ujjain" className="btn btn-success px-4 py-2">
          Explore Ujjain
        </Link>
      </div>
      {/* Mahakal Sawari Video */}
      <div className="container my-5">
        <h1 className="text-center mb-4">MAHAKAL SAWARI</h1>

        <div className="text-center">
          <video
            width="80%"
            height="auto"
            controls
            autoPlay
            muted
            loop
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            <source src="/videos/mahakal-sawari.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="mt-4 text-center" style={{ fontSize: "18px" }}>
          The Mahakal Sawari in Ujjain is a significant religious procession
          symbolizing Lord Shiva's visit to his devotees, held every Monday
          during the Sawan and Bhadrapada months. It's a vibrant spectacle with
          the idol of Lord Shiva placed on a palanquin and taken through the
          city streets, accompanied by music, dance, and chanting. The
          procession signifies Lord Mahakal's sacred journey to oversee his
          devotees' well-being. Key aspects of the Mahakal Sawari's importance:
          Religious Significance: The Sawari is a sacred event where devotees
          can witness the deity and seek blessings. Community Engagement: The
          procession brings the community together, fostering a sense of unity
          and shared devotion. Symbolism: The procession symbolizes Lord Shiva's
          visit and his connection with his devotees. Cultural Tradition: The
          Sawari is a deeply rooted cultural tradition in Ujjain, with a history
          dating back centuries. Festive Atmosphere: The Sawari creates a
          festive and joyous atmosphere, with the streets filled with music,
          dance, and chanting. Divine Presence: The Sawari provides a chance for
          devotees to connect with the divine presence of Lord Mahakal.
        </p>
        <div className="text-center">
          <br></br>
          <h1>Mahakaleshwar Bhasam Aarti</h1>
          <br></br>
          <video
            width="80%"
            height="auto"
            controls
            autoPlay
            muted
            loop
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            <source src="/videos/Basam-aarti.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="mt-4 text-center" style={{ fontSize: "18px" }}>
          The Bhasma Aarti has profound spiritual meaning, and its symbolism deeply resonates with Shiva devotees:

The Cycle of Life and Death: Shiva, the god of destruction, represents the end of the physical world, but also the beginning of spiritual awakening. The Bhasma Aarti encapsulates this dual nature, teaching devotees that while the physical body may perish, the soul remains eternal. Ash, derived from cremation, emphasizes this idea of mortality and the ultimate return to dust.
Purification and Detachment: The use of ash during the ritual reminds devotees of the importance of renunciation and detachment from worldly desires. By acknowledging the temporary nature of life, devotees can focus on purifying their thoughts and actions, leading to a higher spiritual consciousness.
Connection to Shiva’s Cosmic Role: Through this ritual, devotees feel a deep connection to Shiva as Mahakal, the god who transcends time. The rhythmic chanting of mantras during the aarti enhances this connection, creating an atmosphere of divine energy and meditation.
Fulfillment of Desires and Liberation: Many devotees believe that attending the Bhasma Aarti can help fulfill their worldly desires while also guiding them on the path to Moksha (liberation). By witnessing this sacred event, they feel blessed by Lord Shiva’s power and protection.
        </p>
      </div>
    </div>
  );
};

export default Home;
