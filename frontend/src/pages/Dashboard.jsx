import TaskCard from "../components/TaskCard";
import SearchBar from "../components/SearchBar";

function Dashboard() {
  const stats = [
    { label: "Total Tasks", value: 24 },
    { label: "Completed", value: 12 },
    { label: "Pending", value: 10 },
    { label: "Overdue", value: 2 },
  ];

  return (
    <div className="dashboard section">

      <div className="container">

        <h2 className="section-title">Dashboard</h2>
        <p className="section-subtitle">
          Overview of your productivity and task progress
        </p>

        {/* STATS */}
        <div className="grid grid-4 dashboard-stats">
          {stats.map((s, i) => (
            <div className="card stat-card fade-up" key={i}>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>

        {/* SEARCH */}
        <SearchBar />

        {/* SAMPLE TASKS */}
        <div className="grid grid-2 mt-30">
          <TaskCard
            title="Design UI"
            description="Create modern dashboard UI"
            status="Pending"
            priority="High"
            createdDate="2026-06-28"
            dueDate="2026-07-02"
          />

          <TaskCard
            title="API Integration"
            description="Connect backend with frontend"
            status="Completed"
            priority="Medium"
            createdDate="2026-06-20"
            dueDate="2026-06-25"
          />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
