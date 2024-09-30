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
    <section id="projects" className=" responsive-padding flex flex-col gap-10 w-full py-20">
      <h2 className="text-5xl font-bold">Proyectos</h2>
      <div className="flex flex-wrap gap-4">
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