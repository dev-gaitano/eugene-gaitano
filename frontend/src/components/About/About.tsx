import "./About.css";

function About() {
  return (
    <>
      <section id="about" className="section about">
        <div className="contact-container">
          <div className="contact-card">
            <div className="placeholder contact-thumbnail">Photo</div>
            <div className="placeholder contact-tag">Contact</div>
          </div>
        </div>

        <div className="about-me">
          <div className="intro">
            <div className="placeholder line-placeholder w-539">
              Intro line 1
            </div>
            <div className="placeholder line-placeholder w-650">
              Intro line 2
            </div>
          </div>
          <div className="bio">
            <div className="placeholder line-placeholder w-full">Bio line</div>
            <div className="placeholder line-placeholder w-full">Bio line</div>
            <div className="placeholder line-placeholder w-full">Bio line</div>
            <div className="placeholder line-placeholder w-full">Bio line</div>
            <div className="placeholder line-placeholder w-full">Bio line</div>
            <div className="placeholder line-placeholder w-428">Bio line</div>
          </div>
          <div className="tech-stack">
            <div className="placeholder tech-pill">Tech</div>
            <div className="placeholder tech-pill">Tech</div>
            <div className="placeholder tech-pill">Tech</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
