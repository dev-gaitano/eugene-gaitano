import "./About.css";

function About() {
  return (
    <>
      <section id="about" className="section about">
        <div className="contact-container">
          <div className="contact-card">
            <div className="placeholder contact-thumbnail">Photo</div>
            <h2>CONTACT ME</h2>
          </div>
        </div>

        <div className="about-me">
          <div className="bio">
            <p>
              I'm Eugene Gaitano, a software developer based in Nairobi, Kenya.
              I build products end to end, from the backend logic to the
              interface people actually use.
            </p>
            <p>
              I've spent the last while building real projects rather than just
              studying theory, and it shows in how I work. I like taking a rough
              idea and getting it into something people can actually use. Most
              of my work sits at the intersection of backend systems and
              frontend design, so I care about both how something works and how
              it feels to use. I've deployed my own projects to production and
              dealt with the mess that comes with that. I'm still learning
              constantly, picking up new tools and patterns as projects demand
              them. Outside of work, you'll usually find me gaming or spending
              time with my dog.
            </p>
          </div>
          <div className="tech-stack">
            <div className="placeholder tech-pill">Typescript</div>
            <div className="placeholder tech-pill">Python</div>
            <div className="placeholder tech-pill">PostgreSQL</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
