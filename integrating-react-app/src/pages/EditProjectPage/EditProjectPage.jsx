import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function EditProjectPage() {

    const [projectData, setProjectData] = useState({
        title: '',
        description: ''
    })

    useEffect(() => {
        loadFormData()          // 1.- Primero se rellena el form con los datos a editar
    }, [])

    const { projectId } = useParams()

    const navigate = useNavigate()

    const loadFormData = () => {
        axios
            .get(`${API_URL}/projects/${projectId}`)
            .then(({ data }) => setProjectData(data))    // 2.- Pre-rellenamos el estado (y con él, el formulario)
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        setProjectData({ ...projectData, [name]: value })
    }

    const handleFormSubmit = e => {         // 3.- En el envío se mandan los datos a editar con .put()

        e.preventDefault()

        axios
            .put(`${API_URL}/projects/${projectId}`, projectData)
            .then(() => navigate(`/projects/${projectId}`))
            .catch(err => console.log(err))
    }


    return (
        <>
            <div className="CreateProjectPage">
                <h3>Edit Project</h3>

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

                    <button type="submit">Guardar edición</button>
                </form>
            </div>

            <hr />

            <Link to="/projects">Volver a proyectos</Link>
        </>
    );
}

export default EditProjectPage;
