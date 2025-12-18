import { Link } from "react-router-dom";
import "../styles/PopUp.css";

export default function Popup({
  open,
  onClose,
  items = [],
  index = 0,
  setIndex,
}) {
  if (!open || !items.length) return null;

  const data = items[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">

        {/* Bird */}
        <div className="popup-bird" />

        {/* Close */}
        <button className="popup-close" onClick={onClose}>
          ✕
        </button>

        {/* Inner white card */}
        <div className="popup-inner-bg">
          <div className="popup-content">

            <div className="ajab-news">ajab news</div>

            {/* Thumbnail + Arrows */}
            <div className="popup-thumb-wrap" style={{ position: "relative" }}>
              <button
                className="popup-arrow left"
                onClick={handlePrev}
                aria-label="Previous"
              >
                ‹
              </button>

              <img
                src={data.img}
                className="popup-thumb"
                alt={data.title}
              />

              <button
                className="popup-arrow right"
                onClick={handleNext}
                aria-label="Next"
              >
                ›
              </button>
            </div>

            <h2 className="popup-title">{data.title}</h2>

            <p className="popup-desc">{data.desc}</p>

            <Link to={`/song/${data.id}`} className="popup-explore">
              EXPLORE
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
