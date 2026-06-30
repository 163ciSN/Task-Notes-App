
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="section auth-page fade-up">

      <div className="container">

        <div className="auth-card card">

          <div className="auth-header">

            <h1 className="page-title">
              Welcome Back
            </h1>

            <p className="page-description">
              Sign in to access your dashboard and manage your tasks efficiently.
            </p>

          </div>

          <form>

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
                placeholder="Enter your password"
                required
              />

            </div>

            <button
              type="submit"
              className="btn btn-primary auth-btn"
            >
              Login
            </button>

          </form>

          <div className="auth-footer">

            <p>
              Don't have an account?{" "}
              <Link to="/register">
                Register Here
              </Link>
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Login;