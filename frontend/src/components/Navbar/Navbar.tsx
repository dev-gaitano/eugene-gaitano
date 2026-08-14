import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar" aria-label="Primary">
        <Link to="/" className="nav-link nav-home" aria-label="Home">
          HOME
        </Link>
        <Link to="/resume" className="nav-link nav-resume" aria-label="Resume">
          RESUME
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
