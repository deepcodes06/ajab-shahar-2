// src/components/FilterDrawer.jsx
import React from "react";
import "../styles/Filter.css";

export default function FilterDrawer({ open, onClose }) {
  return (
    <>
      {/* OVERLAY */}
      <div className={`filter-overlay ${open ? "show" : ""}`} onClick={onClose}></div>

      {/* DRAWER */}
      <div className={`filter-drawer ${open ? "open" : ""}`}>
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
            <li>Asariya Khima Jagariya</li>
            <li>Babul Khan Bagadwa</li>
          </ul>
        </div>

        <div className="filter-section">
          <h3>Poet | Theme</h3>
          <ul>
            <li>Hams</li>
            <li>Bulleh Shah</li>
            <li>Khusro</li>
            <li>Sant</li>
          </ul>
        </div>

        <button className="clear-btn">CLEAR ALL</button>
      </div>
    </>
  );
}
