// src/pages/Songs.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterDrawer from "./FilterDrawer";
import { fetchSongs } from "../api/songs";
import SongCard from "../components/SongsCard";

import "../styles/Songs.css";
import "../styles/SongsCard.css";

export default function Songs() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [songs, setSongs] = useState([]);
  const [activeLetter, setActiveLetter] = useState("ALL");

  useEffect(() => {
    async function load() {
      const res = await fetchSongs();

      const mapped = res.map((item) => ({
        id: item.id,
        img: item.thumbnailURL
          ? `https://ajabshahar.com${item.thumbnailURL}`
          : "/fallback.svg",
        title: item.metaTitle || "Untitled",
        subtitle:
          item.songTitle?.english || item.metaKeywords?.split(",")[0] || "—",
        meta1: item.singers?.[0]?.name || "",
        meta2: item.poets?.[0]?.name || "",
      }));

      setSongs(mapped);
    }

    load();
  }, []);

  const filteredSongs = songs.filter((song) => {
    if (activeLetter === "ALL") return true;
    return song.title?.toUpperCase().startsWith(activeLetter);
  });

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
            {" "}
            The utterances of Bhakti, Sufi and Baul poets have been kept alive
            over centuries through song, and that is what you find here – live
            recordings of oral poetry all the way from Pakistan in the west to
            Bengal in the east, pulsating to rhythm and melody, sung and
            recorded in contexts as diverse as urban stages and village squares,
            on trains and road journeys, in living rooms and under the wide open
            sky.{" "}
          </p>
        </div>

        <div className="songs-header">
          <p>{filteredSongs.length} Songs</p>
          <div className="songs-divider"></div>
        </div>

        <div className="songs-meta">
          <button
            className="open-filter-btn"
            onClick={() => setDrawerOpen(true)}
          >
            Filters+
          </button>

          <div className="songs-filters">
            <span className="filter-title">Filters |</span>
            {["ALL", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((ch) => (
              <button
                key={ch}
                className="alpha-btn"
                onClick={() => setActiveLetter(ch)}
              >
                {ch}
              </button>
            ))}
          </div>
        </div>

        <div className="songs-grid" role="list">
          {filteredSongs.length === 0 ? (
            <p>Loading songs...</p>
          ) : (
            filteredSongs.map((song) => (
              <article className="songcard" key={song.id}>
                <SongCard song={song} />
              </article>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
