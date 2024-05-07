import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ProjectListPage from "./pages/ProjectsListPage/ProjectsListPage";
import CreateProjectPage from "./pages/CreateProjectPage/CreateProjectPage";
import EditProjectPage from "./pages/EditProjectPage/EditProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage/ProjectDetailsPage";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/projects/create" element={<CreateProjectPage />} />
        <Route path="/projects/edit/:projectId" element={<EditProjectPage />} />

      </Routes>

    </div>
  );
}

export default App