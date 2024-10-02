import Project from "./Project"
import { project } from "../types"
import projectsData from "../projects.json"

const Projects: React.FC = () => {

  const projects: project[] = projectsData

  return (
    <section
      id="projects"
      className="2xl:px-48 xl:px-32 custom:px-16 lg:px-48 md:px-24 sm:px-12 flex flex-col gap-10 w-full py-20"
    >
      <h2 className="text-5xl font-bold text-center">Proyectos</h2>
      <div className="grid-projects gap-6">
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