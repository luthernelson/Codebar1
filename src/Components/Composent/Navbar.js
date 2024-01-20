import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark text-light">
            <div className="container bg-dark">
                <Link className="navbar-brand text-light" href="#">
                    GEST~INSCRIP
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-light" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/Etudiant">
                                Etudiant
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/User">
                                Utilisateur
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;