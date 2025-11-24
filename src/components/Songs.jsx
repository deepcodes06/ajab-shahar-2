// src/pages/Songs.jsx
import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterDrawer from "./FilterDrawer";
import "../styles/Songs.css";
import "../styles/SongsCard.css"; 

const dummy = [
  { img: "/img1.svg", title: "Aarshi Nogor", subtitle: "City Of Mirrors" },
  { img: "/img2.svg", title: "Ab Thaara Laal", subtitle: "City Of Mirrors" },
  { img: "/img3.svg", title: "Aarshi Nogor", subtitle: "City Of Mirrors" },
  { img: "/img1.svg", title: "Aarshi Nogor", subtitle: "City Of Mirrors" },
  { img: "/img2.svg", title: "Ab Thaara Laal", subtitle: "City Of Mirrors" },
  { img: "/img3.svg", title: "Aarshi Nogor", subtitle: "City Of Mirrors" },
  { img: "/img1.svg", title: "Aarshi Nogor", subtitle: "City Of Mirrors" },
  { img: "/img2.svg", title: "Ab Thaara Laal", subtitle: "City Of Mirrors" },
  { img: "/img3.svg", title: "Aarshi Nogor", subtitle: "City Of Mirrors" },
];

export default function Songs() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="songs-page">
      <div className="songs-bg-pattern" />
      <div className="songs-top-wave" />
      <div className="songs-side left" />
      <div className="songs-side right" />
      <div className="songs-tree" />
      <FilterDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="nav-content">
        <Navbar />
      </div>
      <div className="songs-content">
        
        <div className="songs-intro">
          <p>
            The utterances of Bhakti, Sufi and Baul poets have been kept alive
            over centuries through song, and that is what you find here – live
            recordings of oral poetry all the way from Pakistan in the west to
            Bengal in the east, pulsating to rhythm and melody, sung and
            recorded in contexts as diverse as urban stages and village squares,
            on trains and road journeys, in living rooms and under the wide open
            sky.
          </p>
        </div>

        <div className="songs-header">
          <p>201 Songs</p>
          <div className="songs-divider"></div>
        </div>

        <div className="songs-meta">

          <button 
            className="open-filter-btn"
            onClick={() => setDrawerOpen(true)}
          >
            Filters+
          </button>
          <div className="songs-filters" aria-hidden>
            <span className="filter-title">Filters |</span>
            {[
              "ALL",
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I",
              "J",
              "K",
              "L",
              "M",
              "N",
              "O",
              "P",
              "Q",
              "R",
              "S",
              "T",
              "U",
              "V",
              "W",
              "X",
              "Y",
              "Z",
            ].map((ch) => (
              <button key={ch} className="alpha-btn">
                {ch}
              </button>
            ))}
          </div>
        </div>

        <div className="songs-grid" role="list">
          {dummy.map((item, i) => (
            <article className="songcard" key={i} role="listitem">
              <div className="songcard-thumb">
                <img src={item.img} alt={item.title} />
                <img src="/t.svg" alt="" className="songcard-wave-top" />
              </div>

              <div className="songcard-body">
                <h2 className="songcard-title">{item.title}</h2>
                <p className="songcard-sub">{item.subtitle}</p>

                <div className="songcard-divider" />

                <p className="songcard-meta">City Of Mirrors</p>
                <p className="songcard-meta">FARID AYAZ & ABU MOHAMMED</p>
                <p className="songcard-meta">poet AMIR KHUSRO</p>

                <button className="songcard-btn">EXPLORE SONG</button>
              </div>

              <img src="/b.svg" alt="" className="songcard-wave-bottom" />
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
