import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

function ProjectListPage() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        getAllProjects()
    }, [])

    const getAllProjects = () => {
        axios
            .get(`${API_URL}/projects`)
            .then(({ data }) => setProjects(data))
            .catch((error) => console.log(error))
    }

    const deleteProject = projectIdToDelete => {        // obtenemos como parámetro el ID a eliminar
        axios
            .delete(`${API_URL}/projects/${projectIdToDelete}`)
            .then(() => getAllProjects())               // "refrescamos" los proyectos cargándolos de nuevo      
            .catch((error) => console.log(error))
    }

    return (
        <div className="ProjectListPage">
            {
                projects.map((project) => {
                    return (
                        <div className="ProjectCard card" key={project.id} >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <Link to={`/projects/${project.id}`}>Ver detalles</Link> -

                            <Link to={`/projects/edit/${project.id}`}>Editar</Link> -

                            <span onClick={() => deleteProject(project.id)}>Eliminar</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProjectListPage