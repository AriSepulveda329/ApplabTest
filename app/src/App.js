import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import First from "./components/First.jsx";
import Second from "./components/Second";
import Third from "./components/Third";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div className="navbar">
        <div className="navbar-components">
          <Link to="/">First</Link>
          <Link to="/second" className="second-link">
            Second
          </Link>
          <Link to="/third">Third</Link>
        </div>
        <div className="navbar-login">
          <Link to="/login">Iniciar sesión</Link>
        </div>
      </div>

      <div className="app-layout">
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
