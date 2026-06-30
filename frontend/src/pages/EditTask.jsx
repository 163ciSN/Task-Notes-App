
import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";

function EditTask() {
  const { id } = useParams();

  return (
    <section className="section edit-task-page fade-up">

      <div className="container">

        <div className="page-header">

          <h1 className="page-title">
            Edit Task
          </h1>

          <p className="page-description">
            Update your task details, modify its priority or status,
            and keep your task list up to date.
          </p>

          <div className="task-id-badge">
            Task ID: {id || "Demo Task"}
          </div>

        </div>

        <TaskForm isEdit={true} />

      </div>

    </section>
  );
}

export default EditTask;
