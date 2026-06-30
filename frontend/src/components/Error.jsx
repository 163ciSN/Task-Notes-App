

import "../index.css";

function Error({ message = "Something went wrong!" }) {
  if (!message) return null;

  return (
    <div className="alert alert-error fade-up">
      <span className="alert-icon">❌</span>
      <span className="alert-text">{message}</span>
    </div>
  );
}

export default Error;