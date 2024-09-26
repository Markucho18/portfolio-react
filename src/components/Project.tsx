import { project } from "../types"

const techSrc = {
  "typescript": "../assets/typescriptLogo.png",
  "javascript": "../assets/javaScriptLogo.png",
  "react": "../assets/reactJsLogo.png",
  "css": "../assets/cssLogo.webp",
  "tailwindcss": "../assets/tailwindCssLogo.webp",
  "python": "../assets/pythonLogo.png",
  "php": "../assets/phpLogo.png",
  "sql": "../assets/sqlLogo.png",
  "nodejs": "../assets/nodeJsLogo.webp",
}

const Project: React.FC<project> = ({name, description, techs, images, link}) => {
  return (
    <div className="flex flex-col">
      <h2>{name}</h2>
      <div className="flex">
        {techs.map(tech => (
          <img src={techSrc[tech]}/>
        ))}
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Project