

import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Pages */
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Login from "./pages/Login";
import Register from "./pages/Register";

/* Layout */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeToggle } from "./components/ThemeSystem";

/* Optional UI */
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <ThemeToggle />

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* MAIN APP ROUTES */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/edit/:id" element={<EditTask />} />

        {/* FALLBACK ROUTE */}
        <Route path="*" element={<Error message="404 - Page Not Found" />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
