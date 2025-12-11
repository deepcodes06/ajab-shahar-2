import React, { useEffect, useRef, useMemo, useState } from "react";
import "../styles/Filter.css";

export default function FilterDrawer({ open, onClose, songs = [], onFilter }) {
  const drawerRef = useRef(null);
  const [activeType, setActiveType] = useState("singer");

  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  const singers = useMemo(() => {
    const all = songs.flatMap((s) => s.singers || []);
    return [...new Set(all.map((s) => s.name))];
  }, [songs]);

  const poets = useMemo(() => {
    const all = songs.flatMap((s) => s.poets || []);
    return [...new Set(all.map((p) => p.name))];
  }, [songs]);

  const themes = useMemo(() => {
    const all = songs.flatMap((s) => s.themes || []);
    return [...new Set(all)];
  }, [songs]);

  const activeList =
    activeType === "singer" ? singers :
    activeType === "poet" ? poets :
    themes;

  return (
    <>
      <div className={`filter-overlay ${open ? "show" : ""}`} />

      <aside ref={drawerRef} className={`filter-drawer ${open ? "open" : ""}`}>
        <div className="filter-inner">

          {/* DIVIDER ABOVE HEADER */}
          <div className="filter-divider"></div>

          {/* HEADER ROW */}
          <div className="filter-header-row">
            <span className="filter-title">Filter by</span>

            {/* Inline Tabs */}
            <div className="filter-types inline-types">
              <button
                className={activeType === "singer" ? "active" : ""}
                onClick={() => setActiveType("singer")}
              >
                Singer
              </button>
              <span className="divider-dot">|</span>

              <button
                className={activeType === "poet" ? "active" : ""}
                onClick={() => setActiveType("poet")}
              >
                Poet
              </button>
              <span className="divider-dot">|</span>

              <button
                className={activeType === "theme" ? "active" : ""}
                onClick={() => setActiveType("theme")}
              >
                Theme
              </button>
            </div>

            <button className="drawer-close" onClick={onClose}>✕</button>
          </div>

          {/* DIVIDER UNDER HEADER */}
          <div className="filter-divider"></div>

          {/* CLEAR ALL */}
          <button className="clear-btn top-clear" onClick={() => onFilter(null, null)}>
            CLEAR ALL
          </button>

          {/* DIVIDER UNDER CLEAR ALL */}
          <div className="div-3"></div>

          {/* Scrollable list */}
          <div className="filter-scroll-area">
            <ul>
              {activeList.map((name, i) => (
                <li
                  key={i}
                  onClick={() => {
                    onFilter(activeType, name);
                    onClose();
                  }}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
