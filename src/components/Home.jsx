import { useState } from "react";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import Card from "../components/Card";
import Footer from "../components/Footer";
import useFetchSongs from "../hooks/useSongs";
import { mapSongs } from "../utils/mapSong";

import "../styles/Home.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fetch all songs ONCE using the reusable hook
  const { data: songs } = useFetchSongs([]);

  // Reusable mapping → same output structure as your old working code
  const cards = mapSongs(songs).slice(0,4);

  return (
    <>
      <div className="home-container">
        <div className="bg-pattern"></div>
        <div className="top-wave"></div>
        <div className="side left"></div>
        <div className="side right"></div>
        <div className="tree"></div>

        <div className="home-content">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          {menuOpen && <MobileMenu />}

          <div className="cards-section">
            {cards.length > 0 ? (
              cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`card-wrapper ${
                    index % 2 === 0 ? "align-left" : "align-right"
                  }`}
                >
                  <Card {...card} />
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center" }}>Loading...</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
