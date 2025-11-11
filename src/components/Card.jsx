import "../styles/Card.css";

export default function Card({ img, title, subtitle, desc, linkText, position }) {
  return (
    <div className={`card-shell ${position === "right" ? "card-right" : "card-left"}`}>
      <div className="card-outer">
        <img src="/card.svg" alt="" aria-hidden="true" className="card-bg" />

        <div className="thumb-wrap">
          <img src={img} alt={title} className="thumb-img" />
          <img src="/t.svg" alt="" aria-hidden="true" className="wave-top" />
        </div>

        <div className="content-wrap">
          <h2 className="card-title">{title}</h2>
          <h4 className="card-subtitle">{subtitle}</h4>
          <div className="divider"></div>
          <p className="card-desc">{desc}</p>
          <button className="card-link">{linkText}</button>
        </div>

        <img src="/b.svg" alt="" aria-hidden="true" className="wave-bottom" />
      </div>
    </div>
  );
}
