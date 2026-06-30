import "./TaskForm.css";

function TaskForm({
  isEdit = false
}) {
  return (
    <div className="task-form-container">

      <form className="task-form card">

        <div className="task-form-header">

          <h2>
            {isEdit ? "Update Task" : "Create New Task"}
          </h2>

          <p>
            {isEdit
              ? "Modify your task information and save the latest changes."
              : "Fill in the details below to organize and manage your tasks efficiently."}
          </p>

        </div>

        <div className="form-group">

          <label className="form-label">
            Task Title
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter task title"
          />

        </div>

        <div className="form-group">

          <label className="form-label">
            Description
          </label>

          <textarea
            rows="5"
            className="form-control"
            placeholder="Enter task description"
          ></textarea>

        </div>

        <div className="grid grid-2">

          <div className="form-group">

            <label className="form-label">
              Priority
            </label>

            <select className="form-control">

              <option>Low</option>

              <option>Medium</option>

              <option>High</option>

            </select>

          </div>

          <div className="form-group">

            <label className="form-label">
              Status
            </label>

            <select className="form-control">

              <option>Pending</option>

              <option>Completed</option>

            </select>

          </div>

        </div>

        <div className="grid grid-2">

          <div className="form-group">

            <label className="form-label">
              Created Date
            </label>

            <input
              type="date"
              className="form-control"
            />

          </div>

          <div className="form-group">

            <label className="form-label">
              Due Date
            </label>

            <input
              type="date"
              className="form-control"
            />

          </div>

        </div>

        <div className="task-form-buttons">

          <button
            type="submit"
            className="btn btn-primary"
          >
            {isEdit ? "Update Task" : "Save Task"}
          </button>

          <button
            type="reset"
            className="btn btn-outline"
          >
            Reset
          </button>

        </div>

      </form>

    </div>
  );
}

export default TaskForm;