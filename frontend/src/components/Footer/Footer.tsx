import "./Footer.css";

interface FooterProps {
  className: string;
}

function Footer({ className }: FooterProps) {
  return (
    <>
      <footer id="footer" className={`section footer ${className}`}>
        <div className="container">
          <div className="footer-content">
            <h2 className="footer-logo">Eugene Gaitano</h2>
            <div className="footer-links">
              <a
                href="https://github.com/dev-gaitano"
                className="footer-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/eugene-gaitano"
                className="footer-link"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Eugene Gaitano. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
