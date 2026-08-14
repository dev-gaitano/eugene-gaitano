import "./Projects.css";

function Projects() {
  return (
    <>
      <section id="projects" className="section projects">
        <article className="project-card card-a">
          <div className="placeholder project-thumbnail">Thumbnail</div>
          <div className="project-details">
            <h2>PROJECT NAME</h2>
            <p>Project description</p>
          </div>
        </article>
        <article className="project-card card-b">
          <div className="placeholder project-thumbnail">Thumbnail</div>
          <div className="project-details">
            <h2>PROJECT NAME</h2>
            <p>Project description</p>
          </div>
        </article>
        <article className="project-card card-c">
          <div className="placeholder project-thumbnail">Thumbnail</div>
          <div className="project-details">
            <h2>PROJECT NAME</h2>
            <p>Project description</p>
          </div>
        </article>
      </section>
    </>
  );
}

export default Projects;
