import React, { useEffect, useRef } from "react";
import "../styles/Filter.css";

export default function FilterDrawer({ open, onClose }) {
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  return (
    <>
      <div className={`filter-overlay ${open ? "show" : ""}`} />
      
      <div className="filter-container">
        <div className={`filter-wave ${open ? "show" : ""}`} />
      </div>

      <aside ref={drawerRef} className={`filter-drawer ${open ? "open" : ""}`}>
        <div className="filter-inner">
          <div className="filter-header">
            <span>Filter by</span>
            <button className="drawer-close" onClick={onClose}>✕</button>
          </div>

          <div className="filter-section">
            <h3>Singer</h3>
            <ul>
              <li>Abdullah Ismail Jat</li>
              <li>Amolak Ram</li>
              <li>Arun Goyal</li>
               <li>Abdullah Ismail Jat</li>
              <li>Amolak Ram</li>
              <li>Arun Goyal</li>
            </ul>
          </div>

          <div className="filter-section">
            <h3>Poet | Theme</h3>
            <ul>
              <li>Bulleh Shah</li>
              <li>Hams</li>
               <li>Abdullah Ismail Jat</li>
              <li>Amolak Ram</li>
              <li>Arun Goyal</li>
            </ul>
          </div>

          <button className="clear-btn">CLEAR ALL</button>
        </div>
      </aside>
    </>
  );
}
