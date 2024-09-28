import Project from "./Project"
import { project } from "../types"

const projects: project[] = [
  {
    name: "Pomodoro Timer",
    description: "Esta es la descripcion del projecto blablablabla",
    techs: ["typescript", "react", "tailwindcss"],
    images: ["../assets/screenshots/defaultScreenshot.webp", "../assets/screenshots/defaultScreenshot.webp"],
    link: "https:/github.io/Markucho18"
  },
  {
    name: "Minesweeper",
    description: "Esta es la descripcion del projecto blablablabla",
    techs: ["typescript", "react", "tailwindcss"],
    images: ["../assets/screenshots/defaultScreenshot.webp", "../assets/screenshots/defaultScreenshot.webp"],
    link: "https:/github.io/Markucho18"
  },
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className=" responsive-padding flex gap-10 w-full bg-zinc-600">
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