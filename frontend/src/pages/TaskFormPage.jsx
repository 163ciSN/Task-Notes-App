
import TaskForm from "../components/TaskForm";

function TaskFormPage() {
  return (
    <div style={styles.page}>
      <h1>Create Task</h1>
      <TaskForm />
    </div>
  );
}

const styles = {
  page: { padding: 40, textAlign: "center" }
};

export default TaskFormPage;
