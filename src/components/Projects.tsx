import Project from "./Project"
import { project } from "../types"

const projects: project[] = [
  {
    name: "Pomodoro Timer",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, nisi!",
    techs: ["typescript", "react", "tailwind"],
    images: ["fdfdf", "faffd"],
    link: "https:/github.io/Markucho18"
  },
  {
    name: "Minesweeper",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, nisi!",
    techs: ["typescript", "react", "tailwind"],
    images: ["fdfdf", "faffd"],
    link: "https:/github.io/Markucho18"
  },
]

const Projects: React.FC = () => {
  return (
    <section className="w-full bg-red-500">
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
    </section>
  )
}

export default Projects 