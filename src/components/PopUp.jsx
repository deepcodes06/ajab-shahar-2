import { Link } from "react-router-dom";
import "../styles/PopUp.css";

export default function Popup({ open, onClose, data }) {
  if (!open || !data) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">

        <div className="popup-inner-bg" />

        <button className="popup-close" onClick={onClose}>✕</button>

        <div className="popup-bird" />

        <div className="popup-content">
          <div className="popup-thumb-wrap">
            <img src={data.img} className="popup-thumb" alt="" />
          </div>

          <h2 className="popup-title">{data.title}</h2>
          <p className="popup-desc">{data.desc}</p>

          <Link to={`/song/${data.id}`} className="popup-explore">
            EXPLORE
          </Link>
        </div>

      </div>
    </div>
  );
}
