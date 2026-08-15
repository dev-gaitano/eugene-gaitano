import { Canvas } from "@react-three/fiber";
import ProjectCard from "../ui/ProjectCard";
import { Suspense } from "react";
import "./Projects.css";
import ProjectCard01 from "../ui/ProjectCard01";
import ProjectCard02 from "../ui/ProjectCard02";

function Projects() {
  const rotationX = Math.PI / 2;

  return (
    <>
      <section id="projects" className="section projects">
        {/*<article className="project-card card-a0">
          <div className="placeholder project-thumbnail">Thumbnail</div>
          <div className="project-details">
            <h2>PROJECT NAME</h2>
            <p>Project description</p>
          </div>
        </article>*/}
        {/*<article className="project-card card-b">
          <div className="placeholder project-thumbnail">Thumbnail</div>
          <div className="project-details">
            <h2>PROJECT NAME</h2>
            <p>Project description</p>
          </div>
        </article>*/}
        {/*<article className="project-card card-c">
          <div className="placeholder project-thumbnail">Thumbnail</div>
          <div className="project-details">
            <h2>PROJECT NAME</h2>
            <p>Project description</p>
          </div>
        </article>*/}
        <article className="card-a">
          <Canvas>
            <Suspense>
              <ProjectCard
                rotationX={rotationX}
                rotationY={10 * (Math.PI / 180)}
                rotationZ={0}
                scale={0.25}
              />
            </Suspense>
          </Canvas>
        </article>
        <article className="card-b">
          <Canvas>
            <Suspense>
              <ProjectCard01
                rotationX={rotationX}
                rotationY={-12 * (Math.PI / 180)}
                rotationZ={0}
                scale={0.25}
              />
            </Suspense>
          </Canvas>
        </article>
        <article className="card-c">
          <Canvas>
            <Suspense>
              <ProjectCard02
                rotationX={rotationX}
                rotationY={2 * (Math.PI / 180)}
                rotationZ={0}
                scale={0.25}
              />
            </Suspense>
          </Canvas>
        </article>
      </section>
    </>
  );
}

export default Projects;
