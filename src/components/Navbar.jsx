import { Link, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import useFetchSongs from "../hooks/useSongs"; // ✅ fetch here directly
import "../styles/Navbar.css";

export default function Navbar({ menuOpen, setMenuOpen }) {
  const navLinks = ["SONGS", "POEMS", "REFLECTIONS", "PEOPLE", "FILMS"];
  const icons = ["search"];
  const navigate = useNavigate();

  // ✅ FETCH SONGS FOR SEARCH (NO APP.JSX CHANGE)
  const { data: songs } = useFetchSongs([]);

  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  // ✅ BUILD SEARCH INDEX (SONG + SINGER)
  const searchIndex = useMemo(() => {
    return songs.flatMap((song) => {
      const songTitle = song.metaTitle
        ? [{ label: song.metaTitle }]
        : [];

      const singerNames =
        song.singers?.map((s) => ({
          label: s.name,
        })) || [];

      return [...songTitle, ...singerNames];
    });
  }, [songs]);

  // ✅ LIVE SUGGESTIONS
  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    return searchIndex
      .filter((item) => item.label.toLowerCase().includes(q))
      .slice(0, 10);
  }, [query, searchIndex]);

  const handleSelect = (value) => {
    setQuery("");
    setShowSearch(false);
    navigate(`/songs?q=${encodeURIComponent(value)}`);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-link">
          <img src="/logo.svg" alt="logo" className="logo" />
        </Link>

        <nav className="nav-links">
          {navLinks.map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="nav-item">
              {item}
            </Link>
          ))}
        </nav>
      </div>

      <div className="navbar-right">
        <Link to="/about" className="nav-item about">
          ABOUT
        </Link>

        {icons.map((icon) => (
          <button
            key={icon}
            className="icon-button"
            aria-label={icon}
            onClick={() => setShowSearch((s) => !s)}
          >
            <img src={`/${icon}.svg`} alt={icon} className="icon" />
          </button>
        ))}

        {/* ✅ SEARCH LOGIC (UI STRUCTURE UNCHANGED) */}
        {showSearch && (
          <div className="navbar-search-wrapper">
            <input
              autoFocus
              type="text"
              className="navbar-search-input"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {suggestions.length > 0 && (
              <ul className="navbar-search-results">
                {suggestions.map((item, i) => (
                  <li key={i} onClick={() => handleSelect(item.label)}>
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <Link to="/radio" className="radio-link" aria-label="Radio">
          <img src="/radio.svg" alt="radio" className="radio-icon" />
        </Link>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <img src="/radio.svg" alt="radio" className="radio-icon" />
      </button>
    </header>
  );
}
