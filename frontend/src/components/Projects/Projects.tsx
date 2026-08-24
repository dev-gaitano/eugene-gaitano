import { Canvas } from "@react-three/fiber";
import ProjectCard from "../ui/ProjectCard";
import { Suspense } from "react";
import "./Projects.css";
import ProjectCard01 from "../ui/ProjectCard01";
import ProjectCard02 from "../ui/ProjectCard02";

interface ProjectsProps {
  className: string;
}

function Projects({ className }: ProjectsProps) {
  const rotationX = Math.PI / 2;

  return (
    <>
      <section id="projects" className={`section projects ${className}`}>
        <article className="project-card card-a">
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
        <article className="project-card card-b">
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
        <article className="project-card card-c">
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
