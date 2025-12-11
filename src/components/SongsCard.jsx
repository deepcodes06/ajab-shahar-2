// src/components/SongCard.jsx
import { Link } from "react-router-dom";
import "../styles/SongsCard.css";

export default function SongCard({ song }) {
  return (
     <Link to={`/song/${song.id}`} className="songcard-link-wrapper">
      <div className="songcard"></div>
    <div className="songcard">
      <div className="songcard-thumb">
        <img src={song.img} alt={song.title} />
        <img src="/t.svg" className="songcard-wave-top" />
      </div>

      <div className="songcard-body">
        <h2 className="songcard-title">{song.title}</h2>
        <h3 className="songcard-umbrella">{song.umbrellaTitle}</h3>
        <p className="songcard-sub">{song.subtitle}</p>
      </div>

      <img src="/b.svg" className="songcard-wave-bottom" />
    </div>
    </Link>
  );
}
