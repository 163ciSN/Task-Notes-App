
import { useState } from "react";
import TaskCard from "../components/TaskCard";
import SearchBar from "../components/SearchBar";

function Tasks() {
  const [search, setSearch] = useState("");

  const tasks = [
    {
      title: "Write Report",
      description: "Complete academic report draft",
      status: "Pending",
      priority: "High",
      createdDate: "2026-06-25",
      dueDate: "2026-07-01",
    },
    {
      title: "Fix Bugs",
      description: "Resolve UI issues",
      status: "Completed",
      priority: "Medium",
      createdDate: "2026-06-20",
      dueDate: "2026-06-22",
    },
  ];

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="tasks-page section">

      <div className="container">

        <h2 className="section-title">Tasks</h2>

        <SearchBar onSearch={setSearch} />

        <div className="grid grid-2 mt-30">

          {filtered.map((task, i) => (
            <TaskCard key={i} {...task} />
          ))}

        </div>

      </div>
    </div>
  );
}

export default Tasks;

