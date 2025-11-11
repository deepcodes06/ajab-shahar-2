import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/down.svg" alt="footer wave" className="footer-bg" />

      <div className="footer-content">
        {/* Column 1 */}
        <div className="footer-col">
          <h3 className="footer-heading">About</h3>
          <p className="footer-text">
            Ajab Shahar is a wondrous city of songs, poems and conversations
            from Bhakti, Sufi and Baul oral traditions from India and beyond.
          </p>

          <h3 className="footer-heading">Support</h3>
          <p className="footer-text">
            If you have found joy and value here, consider supporting this work.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3 className="footer-heading">Ajab News</h3>
          <p className="footer-text">
            To receive news, inspirations and more from us…
          </p>

          <div className="footer-subscribe">
            <input type="email" placeholder="Email" className="footer-input" />
            <button className="footer-button">Subscribe</button>
          </div>

          <p className="footer-text">
            Write to us at{" "}
            <a href="mailto:ajabshahar@gmail.com" className="footer-link">
              ajabshahar@gmail.com
            </a>
          </p>
          <p className="footer-text">
            Follow us on{" "}
            <a href="#" className="footer-link">
              YouTube
            </a>{" "}
            |{" "}
            <a href="#" className="footer-link">
              Instagram
            </a>
          </p>
        </div>

        {/* Column 3 */}
        <div className="footer-col footer-links">
          <ul>
            {[
              "SONGS",
              "POEMS",
              "REFLECTIONS",
              "PEOPLE",
              "FILMS",
              "RADIO",
              "GLOSSARY",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

     <div className="footer-divider">
        <hr />
     <div className="footer-logo-group">
        <img src="/logo2.svg" alt="Ajab Shahar Logo" className="footer-logo2" />
        <span className="footer-logo-text">Kabir’s Project</span>
     </div>
     </div>

      <div className="footer-bottom">
        Website Design <strong>Smr̥ti Chanchani</strong> | Created by the Kabir
        Project at <strong>Shabad Dhun Foundation</strong>
      </div>
    </footer>
  );
}
