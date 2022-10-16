import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import First from "./components/First.jsx";
import Second from "./components/Second";
import Third from "./components/Third";
import Login from "./components/Login/Login";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="navbar">
          <div className="navbar-components">
            <Link to="/">First</Link>
            {user && (
              <>
                <Link to="/second" className="second-link">
                  Second
                </Link>
                <Link to="/third">Third</Link>
              </>
            )}
          </div>
          <div className="navbar-login">
            {!user && <Link to="/login">Iniciar sesión</Link>}
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
    </UserContext.Provider>
  );
}

export default App;
