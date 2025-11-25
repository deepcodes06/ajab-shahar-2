import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { fetchSongs } from "../api/songs";
import "../styles/Home.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cards, setCards] = useState([]); 

  useEffect(() => {
    async function loadSongs() {
      const songs = await fetchSongs();

      // Only pick songs that should appear on home landing page
      const filtered = songs.filter(song => song.showOnLandingPage);

      // Limit to first 4 (or random 4)
      const selected = filtered.slice(0, 4);

      // Convert API format → your UI format
      const mapped = selected.map(song => ({
        id: song.id,
         img: song.thumbnailURL 
      ? `https://ajabshahar.com${song.thumbnailURL}` 
      : "/img1.svg",
        title: song.metaTitle || "Untitled Song",
        subtitle: `${song.singers?.[0]?.name || ""} • ${song.poets?.[0]?.name || ""}`,
        desc: song.metaDescription?.substring(0, 160) + "...", 
        linkText: "EXPLORE SONG",
      }));

      setCards(mapped);
    }

    loadSongs();
  }, []);

  return (
    <>
      <div className="home-container">
        {/* Background layers */}
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
