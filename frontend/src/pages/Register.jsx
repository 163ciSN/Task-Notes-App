
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="section auth-page fade-up">

      <div className="container">

        <div className="auth-card card">

          <div className="auth-header">

            <h1 className="page-title">
              Create Account
            </h1>

            <p className="page-description">
              Join TaskNest to start organizing your tasks, tracking progress,
              and boosting productivity.
            </p>

          </div>

          <form>

            <div className="form-group">

              <label className="form-label">
                Full Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                required
              />

            </div>

            <div className="form-group">

              <label className="form-label">
                Email Address
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />

            </div>

            <div className="form-group">

              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Create a password"
                required
              />

            </div>

            <div className="form-group">

              <label className="form-label">
                Confirm Password
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Confirm your password"
                required
              />

            </div>

            <button
              type="submit"
              className="btn btn-primary auth-btn"
            >
              Register
            </button>

          </form>

          <div className="auth-footer">

            <p>
              Already have an account?{" "}
              <Link to="/login">
                Login Here
              </Link>
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Register;