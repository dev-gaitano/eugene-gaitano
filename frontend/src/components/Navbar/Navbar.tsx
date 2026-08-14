import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar" aria-label="Primary">
        <Link to="/" className="nav-block nav-home" aria-label="Home"></Link>
        <Link
          to="/resume"
          className="nav-block nav-resume"
          aria-label="Resume"
        ></Link>
      </nav>
    </>
  );
}

export default Navbar;
