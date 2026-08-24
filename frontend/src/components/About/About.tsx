import { Canvas } from "@react-three/fiber";
import ContactCard from "../ui/ContactCard";
import { Suspense } from "react";
import "./About.css";

function About() {
  const rotationX = Math.PI / 2;
  const rotationY = 12.5 * (Math.PI / 180);
  const rotationZ = -8 * (Math.PI / 180);

  return (
    <>
      <section id="about" className="section about">
        <div className="contact-container">
          <Canvas>
            <Suspense>
              <ContactCard
                rotationX={rotationX}
                rotationY={rotationY}
                rotationZ={rotationZ}
                scale={0.18}
              />
            </Suspense>
          </Canvas>
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
              frontend design, I care about both how something works and how it
              feels to use. I've deployed my own projects to production and
              dealt with the mess that comes with that. I'm still learning
              constantly, picking up new tools and patterns as projects demand
              them.
            </p>
          </div>
          <div className="tech-stack">
            <div className="tech-pill">Typescript</div>
            <div className="tech-pill">Python</div>
            <div className="tech-pill">PostgreSQL</div>
            <div className="tech-pill">3D modelling</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
