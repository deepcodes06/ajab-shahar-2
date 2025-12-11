import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterDrawer from "./FilterDrawer";
import SongCard from "../components/SongsCard";
import useFetchSongs from "../hooks/useSongs";
import { mapSongs } from "../utils/mapSong";
import "../styles/Songs.css";
import "../styles/SongsCard.css";

export default function Songs() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLetter, setActiveLetter] = useState("ALL");
  const [activeFilter, setActiveFilter] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const { data: songs } = useFetchSongs([]);
  const mappedSongs = mapSongs(songs);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q")?.toLocaleLowerCase() || "";

  // ✅ MAIN FILTER LOGIC (ALPHABET + SINGER/POET + SEARCH)
  const filteredSongs = mappedSongs.filter((song, index) => {
    const originalSong = songs[index];

    // 🚨 Ignore alphabet filter when searching
    const alphaMatch = searchQuery
      ? true
      : activeLetter === "ALL" ||
        song.title?.toUpperCase().startsWith(activeLetter);

    // Singer / Poet filter
    let typeMatch = true;
    if (activeFilter) {
      if (activeFilter.type === "singer") {
        typeMatch = originalSong?.singers?.some(
          (s) => s.name === activeFilter.value
        );
      }
      if (activeFilter.type === "poet") {
        typeMatch = originalSong?.poets?.some(
          (p) => p.name === activeFilter.value
        );
      }
    }

    // SEARCH FILTER
    const searchMatch =
      !searchQuery ||
      song.title?.toLowerCase().includes(searchQuery) ||
      originalSong?.singers?.some((s) =>
        s.name.toLowerCase().includes(searchQuery)
      );

    return alphaMatch && typeMatch && searchMatch;
  });

  // ✅ Reset pagination on filter change
  useEffect(() => {
    setVisibleCount(9);
  }, [activeLetter, activeFilter]);

  // ✅ Visible cards only
  const visibleSongs = filteredSongs.slice(0, visibleCount);

  return (
    <div className="songs-page">
      <div className="songs-bg-pattern" />
      <div className="songs-top-wave" />
      <div className="songs-side left" />
      <div className="songs-side right" />

      {/* ✅ FILTER DRAWER CONNECTED PROPERLY */}
      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        songs={songs}
        onFilter={(type, value) => {
          setSearchParams({});
          if (!type) {
            setActiveFilter(null);
          } else {
            setActiveFilter({ type, value });
          }
        }}
      />

      <div className="nav-content">
        <Navbar />
      </div>

      <div className="songs-content">
        <div className="songs-intro">
          <p>
            The utterances of Bhakti, Sufi and Baul poets have been kept alive
            over centuries through song, and that is what you find here - live
            recordings of oral poetry all the way from Pakistan in the west to
            Bengal in the east, pulsating to rhythm and melody, sung and
            recorded in contexts as diverse as urban stages and village squares,
            on trains and road journeys, in living rooms and under the wide open
            sky.
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
                onClick={() => {
                  setActiveLetter(ch);
                  setSearchParams({});
                }}
              >
                {ch}
              </button>
            ))}
          </div>
        </div>

        {/* ✅ GRID */}
        <div className="songs-grid" role="list">
          {visibleSongs.length === 0 ? (
            <p>No songs found...</p>
          ) : (
            visibleSongs.map((song) => (
              <article className="songcard" key={song.id}>
                <SongCard song={song} />
              </article>
            ))
          )}
        </div>

        {/* ✅ SEE MORE BUTTON */}
        {visibleCount < filteredSongs.length && (
          <div className="see-more-wrapper">
            <button
              className="see-more"
              onClick={() => setVisibleCount((prev) => prev + 9)}
            >
              SEE MORE
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
