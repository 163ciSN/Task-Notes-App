import "./TaskCard.css";

function TaskCard({
  title,
  description,
  status,
  priority,
  createdDate,
  dueDate,
}) {
  return (
    <div className="task-card card fade-up">

      <div className="task-card-header">

        <div>

          <h3>{title}</h3>

          <p className="task-description">
            {description}
          </p>

        </div>

        <div className="priority-wrapper">

          <span className={`badge ${priority.toLowerCase()}`}>
            {priority}
          </span>

        </div>

      </div>

      <div className="task-details">

        <div>

          <strong>Status</strong>

          <br />

          <span className={`badge ${status.toLowerCase()}`}>
            {status}
          </span>

        </div>

        <div>

          <strong>Created</strong>

          <br />

          <span>{createdDate}</span>

        </div>

        <div>

          <strong>Due Date</strong>

          <br />

          <span>{dueDate}</span>

        </div>

      </div>

      <div className="task-actions">

        <button className="btn btn-outline">
          Edit
        </button>

        <button className="btn btn-danger">
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;