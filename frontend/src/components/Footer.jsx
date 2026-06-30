import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* Left */}

        <div className="footer-column">

          <h2 className="footer-logo">
            Task<span>Nest</span>
          </h2>

          <p className="footer-text">
            Organize your work, manage priorities, track progress,
            and accomplish your goals with a beautiful and modern
            task management system.
          </p>

        </div>

        {/* Center */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/dashboard">Dashboard</Link></li>

            <li><Link to="/tasks">Tasks</Link></li>

            <li><Link to="/add">Add Task</Link></li>

          </ul>

        </div>

        {/* Right */}

        <div className="footer-column">

          <h3>Account</h3>

          <ul>

            <li><Link to="/login">Login</Link></li>

            <li><Link to="/register">Register</Link></li>

          </ul>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 TaskNest | Web-Based Task Management System |
          Designed & Developed by SRv
        </p>

      </div>

    </footer>
  );
}

export default Footer;