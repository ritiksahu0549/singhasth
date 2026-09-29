// src/pages/TempleDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const templeInfo = {
  1: {
    title: "CHINTAMAN GANESH TEMPLE",
    content: "Chintaman Ganesh is the biggest temple of Lord Ganesha in Ujjain of Madhya Pradesh, India. This temple is built across the Kshipra river on the Fatehabad railway line, and is located about 7 km far south-westerly to the Ujjain town. The temple is located now in the middle of the town's market.The Ganesha idol enshrined in this temple is supposed to be swayamabhu (self manifested). Locally, Ganesha is also referred to as Chintaman. His consorts, Ridhhi and Siddhi, flank Chintaman, the assuager of all worriesThe temple deity Lord Ganesha is regarded as the Lord of beginnings as per the Hindu beliefs. In the traditional times, the Lord is known as Chintaharan which literally means remover of all worries and tensions. The temple is thronged by crowds of people that come to do away with all their worries at the shrine of the Lord. The term Chintamani is another name used for Lord Vishnu, who is considered as the preserver of the Universe as per Hindu Mythology. Also called Vighneshwara, the moderator of grief, Ganesha is always the first to be worshipped in the Hindu pantheon, lest he decide to sow obstacles in the devotees' path",
  },
  2: {
    title: "Harsiddhi Temple",
    content: "This temple occupies a special place in the galaxy of ancient sacred spots of Ujjain. Seated between the idols of Mahalaxmi and Mahasaraswati, the idol of Annapurna is painted in dark vermilion color. The Sri Yantra, the symbol of power or shakti, is also enshrined in the temple.According to the Shiva Purana, when Shiva carried away the burning body of Sati from the sacrificial fire, her elbow dropped at this place. There is an interesting legend in the Skanda Purana about the manner in which the Goddess Chandi acquired the epithet of Harsiddhi. Once when Shiva and Parvati were alone on Mount Kailash, two demons Chand and Prachand tried to force their way in.Shiva called upon Chandi to destroy them which she did. Pleased, Shiva bestowed upon her the epithet of ‘one who vanquishes all’. The temple was reconstructed during the Maratha period and the two pillars adorned with lamps are special features of Maratha art. These lamps lit during Navaratri, present a glorious spectacle. There is an ancient well on the premises, and an artistic pillar adorns the top of it.",
  },
  3: {
    title: "Kal Bhairav Temple",
    content: "The present-day temple structure was built over the remains of an older temple. The original temple is believed to have been built by an obscure king named Bhadrasen. It has been mentioned in the Avanti Khanda of the Skanda Purana. Images of Shiva, Parvati, Vishnu and Ganesha belonging to the Paramara period (9th-13th century CE) have been recovered from the place.The temple walls were once decorated with Malwa paintings. However, only traces of these paintings are visible now.he present-day temple structure shows Maratha influence. According to the local tradition, after the Maratha defeat in the Third Battle of Panipat (1761 CE), the Maratha general Mahadaji Shinde offered his pagri (turban) to the deity, praying for victory in his campaign to restore the Maratha rule in North India. After successfully resurrecting Maratha power, he carried out restoration of the temple.",
  },
  4: {
    title: "Gad kalika Temple",
    content:"Gadkalika Temple is an ancient Hindu shrine dedicated to Goddess Kali that dates back to the period of the Mahabharata war. However, the idol of Goddess Kalika is said to be even older than the temple as it is claimed to be of the era of Satyuga. The temple was renovated in the 7th century by King Harshvardhan. The temple has been rebuilt in modern times by the erstwhile Gwalior State. Due to its location near the village of Gad, this temple got the name of Gadkalika Mandir.Popularly called Ujjain Mahakali, the temple is one of the eighteen Shakti Peethas where the upper lip of goddess Sati fell here. The Gadkalika Temple holds tremendous religious significance, especially among students as it is believed to be the place where Kalidas worshipped Maa Gadkalika, and gained knowledge. The legend goes that the great poet Kalidasa was originally uneducated, but with his great devotion to the goddess Kalika, he acquired unparalleled literary skills. Though it is not a Shakti Peetha and due to its location in the region of Harsiddhi, it holds equal importance to that of a Shakti Peetha.The walls of the temples are carved with lovely curvatures of various gods and holy signs. Regular prayers and aartis are conducted in the evening hours. Staring into the glory of the immaculately sculpted idol of Goddess Kalika is a divine experience, just like attending the soul-cleansing morning and evening aarti. Navratri is the major festival celebrated here with much fervor that draws thousands of devotees.",

  5: {
    title: "Mangalnath Temple",
    content: "This temple is believed to be the birthplace of the planet Mars (Mangal) and holds astrological significance.",
  },
  6: {
    title: "Vikarant-bherav Tempale",
    content: "The Shri Vikrant Bhairav Temple in Ujjain is dedicated to Lord Bhairav, a fierce form of Lord Shiva. It's located on the eastern bank of the Shipra River in Bhairavgarh, near the Okhleshwar Cremation Ground. The temple is known for its association with tantra and is believed to be a powerful place for protection from negative energies, evil influences, and black magic. Devotees seek solutions to problems, fulfillment of wishes, and protection from occult practices at the temple.Ancient Times:The temple is believed to have been a place of meditation for siddha tantrics in ancient times, who sought to attain siddhis (spiritual powers).Baba Dabral:A saint named Baba Dabral is associated with the temple's rediscovery. He is said to have found the temple while meditating and received divine guidance.Skanda Purana:According to the Skanda Purana, the temple is mentioned as being a significant place in the Ujjain region, and Lord Shiva himself is said to have highlighted its importance to Mata Parvati.Key Beliefs and Practices:Protection from Negativity:Worship at the temple is believed to protect devotees from negative energies, the evil eye, and tantric or black magic practices.Solution to Problems:The temple is seen as a place where devotees can seek solutions to their personal and spiritual challenges.Fulfillment of Wishes:Worshipping Lord Bhairav at the temple is believed to bring blessings for fulfilling one's wishes. Tantra and Siddhis:The temple is particularly known for its connection to tantra and is believed to be a place where siddhis can be attained.The temple is particularly known for its connection to tantra and is believed to be a place where siddhis can be attained.Special Puja:Participating in special pujas, especially on occasions like birthdays, anniversaries, or festivals, is believed to be particularly beneficial.",
  },
}
};
const TempleDetails = () => {
  const { id } = useParams();
  const temple = templeInfo[id];

  if (!temple) {
    return <div className="container my-6">Temple not found.</div>;
  }

  return (
    <div className="container my-6">
      <h2>{temple.title}</h2>
      <p>{temple.content}</p>
    </div>
  );
};

export default TempleDetails;
