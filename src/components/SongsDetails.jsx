import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { fetchSongs } from "../api/songs";
import "../styles/SongsDetails.css";

export default function SongDetails() {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [related, setRelated] = useState([]);
  const [showFullAbout, setShowFullAbout] = useState(false);
  const [activeTab, setActiveTab] = useState("original");

  const BASE_URL = "https://ajabshahar.com"; // Fix thumbnail path

  useEffect(() => {
    async function loadSong() {
      const allSongs = await fetchSongs();

      const selected = allSongs.find((item) => String(item.id) === String(id));
      setSong(selected || null);

      const others = allSongs
        .filter((s) => s.id !== selected?.id && s.thumbnailURL)
        .slice(0, 4);

      setRelated(others);
    }

    loadSong();
  }, [id]);

  if (!song) return <p style={{ textAlign: "center" }}>Loading...</p>;

  // Fix Youtube and about
  const youtubeSrc = song.youtubeVideoId
    ? `https://www.youtube.com/embed/${song.youtubeVideoId}`
    : "";

  const aboutHtml =
    song.about || `<p>${song.metaDescription || "No description available."}</p>`;

  return (
    <div className="song-details-page">
      <div className="songs-top-wave" />
      <div className="nav-content">
        <Navbar />
      </div>

      <div className="song-details-bg" />

      <main className="song-details-main">

        {/* === TOP RELATED SECTION === */}
        {related.length > 0 && (
          <section className="song-variants">
            <h2 className="section-heading">4 Song Versions</h2>
            <div className="variants-grid">
              {related.map((item) => (
                <Link key={item.id} to={`/song/${item.id}`} className="variant-card">
                  <div className="variant-thumb">
                    <img
                      src={item.thumbnailURL.startsWith("/") ? BASE_URL + item.thumbnailURL : item.thumbnailURL}
                      alt={item.metaTitle}
                      loading="lazy"
                    />
                  </div>

                  <div className="variant-body">
                    <h3 className="variant-title">{item.metaTitle}</h3>
                    <p className="variant-meta">{item.singers?.[0]?.name || ""}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* === TITLE SECTION === */}
        <section className="song-header-block">
          <h1 className="song-title">{song.metaTitle}</h1>
          <p className="song-meta-line">
            {(song.singers?.[0]?.name || "").toUpperCase()}
            {song.poets?.[0]?.name ? ` • ${song.poets[0].name.toUpperCase()}` : ""}
          </p>
        </section>

        {/* === VIDEO === */}
        <section className="video-section">
          <div className="video-wrapper">
            <div className="video-inner">
              <iframe
                src={youtubeSrc}
                title={song.metaTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* === ABOUT (Expandable) === */}
        <section className="about-section">
          <div className={"about-wrapper" + (showFullAbout ? " about-expanded" : "")}>
            <div className="song-about" dangerouslySetInnerHTML={{ __html: aboutHtml }} />
          </div>

          <button className="see-more-btn" onClick={() => setShowFullAbout((prev) => !prev)}>
            {showFullAbout ? "See less ▲" : "See more ▼"}
          </button>
        </section>

        {/* === SONG TEXT TABS === */}
        <section className="song-text-section">
          <div className="text-tabs">
            {["original", "translation", "transliteration"].map((tab) => (
              <button
                key={tab}
                type="button"
                className={activeTab === tab ? "tab active" : "tab"}
                onClick={() => setActiveTab(tab)}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          <div
            className="song-text"
            dangerouslySetInnerHTML={{
              __html: song.songText?.[activeTab] || "<p>No text available.</p>",
            }}
          />
        </section>

        {/* === RELATED BOTTOM SECTION === */}
        <section className="related-bottom">
          <h2 className="section-heading">Related Songs</h2>
          <p className="related-note">More detailed related-content section can go here later.</p>
        </section>
      </main>

      {/* === FOOTER === */}
      <Footer />
    </div>
  );
}
