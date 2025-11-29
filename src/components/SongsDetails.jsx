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

  const BASE_URL = "https://ajabshahar.com";

  useEffect(() => {
    async function loadSong() {
      const allSongs = await fetchSongs();

      const selected = allSongs.find((item) => String(item.id) === String(id));
      setSong(selected || null);

      // **4 RANDOM RELATED SONGS**
      const others = allSongs
        .filter((s) => s.id !== selected?.id && s.thumbnailURL)
        .sort(() => Math.random() - 0.5) // random shuffle
        .slice(0, 4);

      setRelated(others);
    }

    loadSong();
  }, [id]);

  if (!song) return <p style={{ textAlign: "center" }}>Loading...</p>;

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
                      src={
                        item.thumbnailURL.startsWith("/")
                          ? BASE_URL + item.thumbnailURL
                          : item.thumbnailURL
                      }
                      alt={item.metaTitle}
                      loading="lazy"
                    />
                  </div>

                  <div className="variant-body">
                    <h3 className="variant-title">{item.metaTitle}</h3>
                    <p className="variant-meta">
                      {item.singers?.[0]?.name || ""}
                    </p>
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
            {song.poets?.[0]?.name
              ? ` • ${song.poets[0].name.toUpperCase()}`
              : ""}
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

        {/* === ABOUT === */}
        <section className="about-section">
          <div
            className={"about-wrapper" + (showFullAbout ? " about-expanded" : "")}
          >
            <div
              className="song-about"
              dangerouslySetInnerHTML={{ __html: aboutHtml }}
            />
          </div>

          <button
            className="see-more-btn"
            onClick={() => setShowFullAbout((prev) => !prev)}
          >
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
              __html:
                song.songText?.[activeTab] || "<p>No text available.</p>",
            }}
          />
        </section>

        {/* === BOTTOM RELATED SECTION (NEW) === */}
        {related.length > 0 && (
<section className="related-section">


{/* === FULL RELATED SECTION (Original Style) === */}
<section className="related-section">

  <h2 className="related-title">Related</h2>

  {/* Tabs */}
  <div className="related-tabs">
    <button className="r-tab active">ALL</button>
    <button className="r-tab">SONGS</button>
    <button className="r-tab">POEMS</button>
    <button className="r-tab">REFLECTIONS</button>
    <button className="r-tab">OTHER</button>
  </div>

  {/* List Items */}
  <div className="related-list">
    {related.map((item) => (
      <Link key={item.id} to={`/song/${item.id}`} className="related-item">

        <div className="related-thumb">
          <img
            src={item.thumbnailURL.startsWith("/") ? BASE_URL + item.thumbnailURL : item.thumbnailURL}
            alt={item.metaTitle}
          />
        </div>

        <div className="related-body">
          <h3 className="related-name">
            {item.metaTitle}
            <span className="related-sub"> {item.subTitle || item.metaTitle}</span>
          </h3>

          <p className="related-desc">
            {item.metaDescription?.slice(0, 180) || "More content coming soon..."}...
          </p>
        </div>

      </Link>
    ))}
  </div>

  <button className="related-more">SEE MORE</button>

  {/* Bottom floating text */}
  <div className="related-floating-words">
    <span>Shoonya <i>Emptiness</i></span>
    <span>Ulat <i>Upside Down</i></span>
    <span>Alakh <i>Unseeable</i></span>
    <span>Darpan <i>Mirror</i></span>
    <span>Shahar <i>City</i></span>
  </div>
</section>

          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
