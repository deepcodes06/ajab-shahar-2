import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar({ menuOpen, setMenuOpen }) {
  const navLinks = ["SONGS", "POEMS", "REFLECTIONS", "PEOPLE", "FILMS"];
  const icons = ["search"];

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
          <button key={icon} className="icon-button" aria-label={icon}>
            <img src={`/${icon}.svg`} alt={icon} className="icon" />
          </button>
        ))}

        {/* Radio Icon at the end */}
        <Link to="/radio" className="radio-link" aria-label="Radio">
          <img src="/radio.svg" alt="radio" className="radio-icon" />
        </Link>
      </div>

      {/* Mobile toggle (optional hamburger or radio) */}
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
