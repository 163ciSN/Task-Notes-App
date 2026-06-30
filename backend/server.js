
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

/* Routes */
import taskRoutes from "./routes/task.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

/* DB CONNECTION */
connectDB();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* ROUTES */
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

/* HEALTH CHECK */
app.get("/", (req, res) => {
  res.send("TaskNest Backend Running 🚀");
});

/* START SERVER */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});