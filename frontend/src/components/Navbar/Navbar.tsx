import { Link } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  return (
    <>
      <nav className={`navbar ${className}`} aria-label="Primary">
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
