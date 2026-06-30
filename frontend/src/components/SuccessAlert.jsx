
import "../index.css";

function SuccessAlert({ message = "Operation successful!" }) {
  if (!message) return null;

  return (
    <div className="alert alert-success fade-up">
      <span className="alert-icon">✅</span>
      <span className="alert-text">{message}</span>
    </div>
  );
}

export default SuccessAlert;