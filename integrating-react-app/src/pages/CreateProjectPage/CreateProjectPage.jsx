import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function CreateProjectPage() {

    const navigate = useNavigate()

    const [projectData, setProjectData] = useState({
        title: '',
        description: ''
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setProjectData({ ...projectData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        axios
            .post(`${API_URL}/projects`, projectData)           // Envío de el proyecto a la API
            .then(() => navigate('/projects'))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="CreateProjectPage">
                <h3>Add Project</h3>

                <form onSubmit={handleFormSubmit}>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={projectData.title}
                        onChange={handleInputChange}
                    />

                    <label>Description:</label>
                    <textarea
                        type="text"
                        name="description"
                        value={projectData.description}
                        onChange={handleInputChange}
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>

            <hr />

            <Link to="/projects">Volver a proyectos</Link>
        </>
    );
}

export default CreateProjectPage;
