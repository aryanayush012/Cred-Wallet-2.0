import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./styles/Navbar.style.css";

const NavBar = ({ isAuthenticated, onLogout }) => {
  let location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    if (onLogout) onLogout();
    navigate("/"); // Redirect to landing page after logout
  };
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/"></Link>
      <div className="navbar-links">
        <Link
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          aria-current="page"
          to="/"
        >
          features
        </Link>

        <Link
          className={`nav-link ${
            location.pathname === "/about" ? "active" : ""
          }`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`nav-link ${
            location.pathname === "/about" ? "active" : ""
          }`}
          to="/about"
        >
          Demo
        </Link>
      </div>
      <div className="navbar-auth" id="navbarSupportedContent">
        {!isAuthenticated ? null : (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
