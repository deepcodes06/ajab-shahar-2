import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import Card from "../components/Card";
import Footer from "../components/Footer";
import useFetchSongs from "../hooks/useSongs";
import { mapSongs } from "../utils/mapSong";
import Popup from "./PopUp";
import "../styles/Home.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(true);
  const [popupData, setPopupData] = useState(null)

  // Fetch all songs ONCE using the reusable hook
  const { data: songs } = useFetchSongs([]);


    const mappedSongs = mapSongs(songs);
  useEffect(() => {
    if (mappedSongs.length > 0) {
      setPopupData(mappedSongs[0]);
    }
  }, [songs]);

  const cards = mapSongs(songs).slice(0,4);

  return (
    <>
      <Popup open={popupOpen} data={popupData} onClose={() => setPopupOpen(false)} />

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
