import "../styles//MobileMenu.css";

export default function MobileMenu() {
  return (
    <div className="mobile-menu">
      <div className="menu-links">
        {["SONGS", "POEMS", "REFLECTIONS", "PEOPLE", "FILMS", "ABOUT"].map(
          (item) => (
            <a key={item} href="#" className="menu-link">
              {item}
            </a>
          )
        )}
      </div>

      <div className="menu-icons">
        {["search", "radio"].map((icon) => (
          <button key={icon} className="menu-icon-btn" aria-label={icon}>
            <img src={`/${icon}.svg`} alt={icon} className="menu-icon" />
          </button>
        ))}
      </div>
    </div>
  );
}
