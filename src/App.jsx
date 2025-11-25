// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Songs from "./components/Songs";
import SongDetails from "./components/SongsDetails";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/song/:id" element={<SongDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
