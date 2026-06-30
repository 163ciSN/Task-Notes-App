import { Link } from "react-router-dom";
import "../index.css";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero section fade-up">
        <div className="container hero-grid">

          <div className="hero-left">
            <h1 className="hero-title">
              Organize Your Work with <span>TaskNest</span>
            </h1>

            <p className="hero-subtitle">
              A modern task management system to help you track tasks, priorities,
              deadlines, and productivity in one clean dashboard.
            </p>

            <div className="hero-buttons">
              <Link to="/dashboard" className="btn btn-primary">
                Get Started
              </Link>

              <Link to="/register" className="btn btn-outline">
                Create Account
              </Link>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card card">
              <h3>Smart Task Tracking</h3>
              <p>Manage tasks efficiently with priority, status & deadlines.</p>
            </div>

            <div className="hero-card card">
              <h3>Real-Time Organization</h3>
              <p>Stay productive with structured workflows.</p>
            </div>

            <div className="hero-card card">
              <h3>Modern UI</h3>
              <p>Clean SaaS-style dashboard experience.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
