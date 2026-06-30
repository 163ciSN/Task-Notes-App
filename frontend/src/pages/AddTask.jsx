
import TaskForm from "../components/TaskForm";

function AddTask() {
  return (
    <section className="section add-task-page fade-up">

      <div className="container">

        <div className="page-header">

          <h1 className="page-title">
            Add New Task
          </h1>

          <p className="page-description">
            Create a new task, assign its priority, set deadlines,
            and organize your work efficiently.
          </p>

        </div>

        <TaskForm />

      </div>

    </section>
  );
}

export default AddTask;