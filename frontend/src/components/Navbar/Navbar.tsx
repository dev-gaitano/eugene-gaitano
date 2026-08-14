import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar" aria-label="Primary">
        <a href="#hero" className="nav-block nav-home" aria-label="Home"></a>
        <a href="#" className="nav-block nav-resume" aria-label="Resume"></a>
      </nav>
    </>
  );
}

export default Navbar;
