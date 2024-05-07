
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"


function ProjectDetailsPage() {

    const [project, setProject] = useState({})

    const { projectId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        loadProjectDetails()
    }, [])

    const loadProjectDetails = () => {
        axios
            .get(`${API_URL}/projects/${projectId}`)
            .then(({ data }) => setProject(data))
            .catch((error) => console.log(error))
    }

    const deleteProject = () => {
        axios
            .delete(`${API_URL}/projects/${projectId}`)
            .then(() => navigate('/projects'))
            .catch((error) => console.log(error))
    }


    return (
        <div className="ProjectDetailsPage">
            {
                <>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </>
            }

            <Link to="/projects">
                <button>Back to projects</button>
            </Link>

            <Link to={`/projects/edit/${projectId}`}>
                <button>Edit <em>{project.title}</em></button>
            </Link>

            <button onClick={deleteProject}>Eliminar <em>{project.title}</em></button>

        </div >
    );
}

export default ProjectDetailsPage;
