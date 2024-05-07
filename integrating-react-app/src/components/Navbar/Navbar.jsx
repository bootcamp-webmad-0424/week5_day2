import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="Navbar">

            <nav>
                <Link to="/">
                    <button>Home</button>
                </Link>

                <Link to="/projects">
                    <button>Projects</button>
                </Link>

                <Link to="/projects/create">
                    <button>Nuevo proyecto</button>
                </Link>
            </nav>
        </div>

    );
}

export default Navbar;
