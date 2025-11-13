// src/pages/Home.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "../styles/Home.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cards = [
    {
      id: 1,
      img: "/img1.svg",
      title: "Main Nijaam Se Naina",
      subtitle:
        "I Lost My Heart To Nizam’s Glance\nsing FARID AYAZ & ABU MOHAMMED\npoet AMIR KHUSRO",
      desc: "The delicacy of locking eyes with the beloved and losing one’s heart to him combines in this song with a delightful disregard for social convention, represented by the gossiping neighbourhood women",
      linkText: "EXPLORE SONG",
    },
    {
      id: 2,
      img: "/img2.svg",
      title: "‘Shoonya’ is not ’nothingness’",
      subtitle: "says KRISHNA NATH",
      desc: `"Nothing has its own intrinsic character. Everything exists in relation to something else. The name of this realization is ‘shoonya’."`,
      linkText: "EXPLORE REFLECTION",
    },
    {
      id: 3,
      img: "/img3.svg",
      title: "Maukhik Parampara",
      subtitle: "Oral Traditions\nIntro by VIPUL RIKHI",
      desc: "While there are many kinds of oral traditions – those which transmit mythology, sacred texts and folklore – our focus here are the oral traditions of Kabir or other mystic poets – the Bhaktas, Sufis and Bauls.",
      linkText: "EXPLORE REFLECTION",
    },
    {
      id: 4,
      img: "/img4.svg",
      title: "Had Anhad",
      subtitle: "Journeys with Ram & Kabir\nA film by SHABNAM VIRMANI",
      desc: "Kabir was a 15th century mystic poet of north India who defied the boundaries between Hindu and Muslim. He had a Muslim name and upbringing, but his poetry repeatedly invokes the widely revered Hindu name for God – Ram.",
      linkText: "EXPLORE FILM",
    },
  ];

  return (
    <>
      <div className="home-container">
        {/* Background and decorative layers */}
        <div className="bg-pattern"></div>
        <div className="top-wave"></div>
        <div className="side left"></div>
        <div className="side right"></div>
        <div className="tree"></div>

        <div className="home-content">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          {menuOpen && <MobileMenu />}

          <div className="cards-section">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`card-wrapper ${
                  index % 2 === 0 ? "align-left" : "align-right"
                }`}
              >
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
