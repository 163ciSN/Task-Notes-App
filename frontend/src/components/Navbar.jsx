import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}

        <Link to="/" className="logo">
          <span className="logo-icon">📝</span>
          <span className="logo-text">
            Task<span>Nest</span>
          </span>
        </Link>

        {/* Navigation */}

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/dashboard" onClick={closeMenu}>
            Dashboard
          </NavLink>

          <NavLink to="/tasks" onClick={closeMenu}>
            Tasks
          </NavLink>

          <NavLink to="/add" onClick={closeMenu}>
            Add Task
          </NavLink>

          <NavLink to="/login" onClick={closeMenu}>
            Login
          </NavLink>

          <NavLink to="/register" onClick={closeMenu}>
            Register
          </NavLink>

          <button className="logout-btn">
            Logout
          </button>

        </nav>

        {/* Mobile Menu */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>
    </header>
  );
}

export default Navbar;