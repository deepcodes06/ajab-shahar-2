// src/components/SongCard.jsx
import { Link } from "react-router-dom";
import "../styles/SongsCard.css";

export default function SongCard({ song }) {
  return (
    <div className="songcard">
      <div className="songcard-thumb">
        <img src={song.img} alt={song.title} />
        <img src="/t.svg" className="songcard-wave-top" />
      </div>

      <div className="songcard-body">
        <h2 className="songcard-title">{song.title}</h2>
        <p className="songcard-sub">{song.subtitle}</p>

        <div className="songcard-divider"></div>

        <p className="songcard-meta">{song.meta1}</p>
        <p className="songcard-meta">{song.meta2}</p>

        <Link to={`/song/${song.id}`} className="songcard-btn">
          EXPLORE SONG
        </Link>
      </div>

      <img src="/b.svg" className="songcard-wave-bottom" />
    </div>
  );
}
