import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";
import { useIsMobile } from "../hooks/useIsMobile";
import "./Resume.css";

gsap.registerPlugin(ScrollTrigger);

function Resume() {
  const isMobile = useIsMobile();

  useEffect(() => {
    const markerProp = isMobile ? "left" : "top";

    const ctx = gsap.context(() => {
      gsap.to(".scroll-marker", {
        [markerProp]: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".resume-page",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [isMobile]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Navbar />

      <main className="resume-page">
        <div className="resume-container">
          {/* Top Header */}
          <header className="resume-top-bar">
            <div className="resume-title-box">
              <h1>Eugene Gaitano</h1>
              <div className="resume-subtitle">
                Full Stack Software Engineer
              </div>
            </div>
            <div className="resume-actions">
              <button
                onClick={handlePrint}
                className="btn-print"
                aria-label="Print or Save Resume as PDF"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 -960 960 960"
                  width="18px"
                  fill="currentColor"
                >
                  <path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-33 23.5-56.5T160-600h640q33 0 56.5 23.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-520H200q-17 0-28.5 11.5T160-480v160h80v-80h480v80h80Z" />
                </svg>
                Print / Download PDF
              </button>
            </div>
          </header>

          {/* Contact Bar */}
          <section
            className="resume-contact-grid"
            aria-label="Contact Information"
          >
            <div className="contact-item">
              <span className="label">Location:</span>
              <span>Nairobi, Kenya</span>
            </div>
            <div className="contact-item">
              <span className="label">Phone:</span>
              <a href="tel:+254712743234" target="_blank" rel="noreferrer">
                +254712743234
              </a>
            </div>
            <div className="contact-item">
              <span className="label">Email:</span>
              <a
                href="mailto:eugenecampbellgaitano@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                eugenecampbellgaitano@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="label">GitHub:</span>
              <a
                href="https://github.com/dev-gaitano"
                target="_blank"
                rel="noreferrer"
              >
                github.com/dev-gaitano
              </a>
            </div>
            <div className="contact-item">
              <span className="label">LinkedIn:</span>
              <a
                href="https://linkedin.com/in/eugene-gaitano"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/eugene-gaitano
              </a>
            </div>
            <div className="contact-item">
              <span className="label">LinkTree:</span>
              <a
                href="https://linktr.ee/eugenegaitano"
                target="_blank"
                rel="noreferrer"
              >
                linktr.ee/eugenegaitano
              </a>
            </div>
          </section>

          {/* Grid Layout: Main Left, Sidebar Right */}
          <div className="resume-content-grid">
            {/* Main Column */}
            <div className="resume-main-col">
              {/* Summary */}
              <section className="resume-section">
                <h2 className="section-title">Summary</h2>
                <p className="summary-text">
                  Versatile Full-Stack Software Engineer based in Nairobi,
                  Kenya. Experienced in building end-to-end applications,
                  combining robust backend architecture with interactive,
                  3D-enhanced frontend interfaces. Skilled in taking complex
                  projects from initial concept to production deployment with a
                  focus on code quality, scalability, and user experience.
                </p>
              </section>

              {/* Technical Experience & Projects */}
              <section className="resume-section">
                <h2 className="section-title">Technical Experience</h2>

                <article className="experience-item">
                  <div className="experience-header">
                    <span className="job-title">Full-Stack Developer</span>
                    <span className="job-duration">Feb 2026 – present</span>
                  </div>
                  <div className="job-company">TopBox AI Studios</div>
                  <ul className="job-details">
                    <li>
                      Architected and deployed full-stack web applications using
                      TypeScript, React and Python.
                    </li>
                    <li>
                      Integrated generative AI model APIs and media pipelines
                      with asynchronous task queues and streaming response
                      handlers.
                    </li>
                    <li>
                      Built high-performance interactive interfaces with
                      responsive modern design systems and real-time state
                      management.
                    </li>
                    <li>
                      Designed scalable PostgreSQL schemas and optimized media
                      delivery pipelines for low-latency asset generation.
                    </li>
                  </ul>
                </article>

                <article className="experience-item">
                  <div className="experience-header">
                    <span className="job-title">Full-Stack Developer</span>
                    <span className="job-duration">Feb 2025 – Apr 2025</span>
                  </div>
                  <div className="job-company">Buzz Labs</div>
                  <ul className="job-details">
                    <li>
                      Engineered full-stack e-commerce platform using React and
                      TypeScript with dynamic product catalogs and global cart
                      state.
                    </li>
                    <li>
                      Integrated secure checkout flows and payment gateway APIs
                      with automated order confirmation and inventory sync.
                    </li>
                    <li>
                      Implemented client-side search, category filtering, and
                      responsive mobile UI for friction-free purchase
                      experience.
                    </li>
                  </ul>
                </article>

                <article className="experience-item">
                  <div className="experience-header">
                    <span className="job-title">Intern</span>
                    <span className="job-duration">Sep 2024 – Dec 2024</span>
                  </div>
                  <div className="job-company">Fixentra Tech Solutions</div>
                  <ul className="job-details">
                    <li>
                      Built automated business workflows using Microsoft Power
                      Automate, eliminating manual data entry across internal
                      services and cloud storage.
                    </li>
                    <li>
                      Integrated third-party APIs, email notifications, and
                      database tables using low-code connectors and automated
                      webhooks.
                    </li>
                    <li>
                      Designed lightweight internal forms and operational
                      dashboards to streamline team reporting and status
                      tracking.
                    </li>
                    <li>
                      Monitored flow executions, debugged run failures, and
                      maintained process documentation for team handoff.
                    </li>
                  </ul>
                </article>

                <article className="experience-item">
                  <div className="experience-header">
                    <span className="job-title">Featured Projects</span>
                  </div>
                  <div className="job-company">
                    Portfolios & Individual Applications
                  </div>
                  <ul className="job-details">
                    <li>
                      <strong>Jasmijn Schrofer's Personal Portfolio:</strong>{" "}
                      Designed and developed a responsive web portfolio for
                      acclaimed filmmaker Jasmijn Schrofer, featuring optimized
                      video showcases, editorial typography, and smooth
                      cross-device navigation.
                    </li>
                    <li>
                      <strong>3D Interactive Personal Portfolio:</strong> Built
                      high-performance responsive portfolio featuring custom
                      WebGL 3D canvas card objects, GSAP scroll triggers, and
                      mobile touch interactions.
                    </li>
                    <li>
                      <strong>WayaLink:</strong> Built a dual-interface - Web UI
                      and USSD interface - logistics tracking system designed to
                      improve end-to-end product visibility in fragmented supply
                      chains. Built specifically for regions with low technology
                      adoption.
                    </li>
                  </ul>
                </article>
              </section>
            </div>

            {/* Sidebar Column */}
            <div className="resume-side-col">
              {/* Tech Skills */}
              <section className="resume-section">
                <h2 className="section-title">Skills</h2>

                <div className="skill-group">
                  <div className="skill-group-title">Languages</div>
                  <div className="skill-tags">
                    <span className="skill-tag highlight">TypeScript</span>
                    <span className="skill-tag highlight">Python</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">SQL</span>
                    <span className="skill-tag">HTML/CSS</span>
                  </div>
                </div>

                <div className="skill-group">
                  <div className="skill-group-title">Frontend & 3D</div>
                  <div className="skill-tags">
                    <span className="skill-tag highlight">React</span>
                    <span className="skill-tag highlight">Three.js</span>
                    <span className="skill-tag">React Three Fiber</span>
                    <span className="skill-tag">GSAP</span>
                    <span className="skill-tag">Vite</span>
                  </div>
                </div>

                <div className="skill-group">
                  <div className="skill-group-title">Backend & Databases</div>
                  <div className="skill-tags">
                    <span className="skill-tag highlight">PostgreSQL</span>
                    <span className="skill-tag">Node.js / Express</span>
                    <span className="skill-tag">REST APIs</span>
                  </div>
                </div>

                <div className="skill-group">
                  <div className="skill-group-title">Tools & Design</div>
                  <div className="skill-tags">
                    <span className="skill-tag">Git / GitHub</span>
                    <span className="skill-tag">3D Modeling</span>
                    <span className="skill-tag">Docker</span>
                    <span className="skill-tag">Vercel</span>
                    <span className="skill-tag">Linux</span>
                    <span className="skill-tag">Power Automate</span>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="resume-section">
                <h2 className="section-title">Education</h2>
                <div className="edu-item">
                  <div className="edu-title">
                    Full Stack Software Engineering Bootcamp
                  </div>
                  <div className="edu-sub">Moringa School</div>
                </div>
                <div className="edu-item">
                  <div className="edu-title">
                    Foundations of Software Engineering
                  </div>
                  <div className="edu-sub">Moringa School</div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer className="footer-section" />

      <ScrollIndicator className="scroll-indicator">
        <svg
          className="scroll-marker"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="var(--black)"
        >
          <path d="M400-280v-400l200 200-200 200Z" />
        </svg>
      </ScrollIndicator>
    </>
  );
}

export default Resume;
