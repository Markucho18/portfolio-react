import Project from "./Project"
import { project } from "../types"
import projectsData from "../projects.json"

const Projects: React.FC = () => {

  const projects: project[] = projectsData

  return (
    <section id="projects" className=" responsive-padding flex flex-col gap-10 w-full py-20">
      <h2 className="text-5xl font-bold">Proyectos</h2>
      <div className="grid-projects gap-4">
        {projects.map((project, i) => (
          <Project
            key={i}
            name={project.name}
            description={project.description}
            techs={project.techs}
            images={project.images}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects 