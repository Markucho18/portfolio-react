import Slider from "./Slider"
import { project } from "../types"
import { getTechImage } from "../utils/getTechImage"
import { TbWorld } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import projectsData from "../projects.json"

const Project: React.FC<project> = ({name, description, techs, images, link}) => {

  return (
    <div className="flex flex-col gap-4 p-4 min-w-max max-w-min w-1/2 hover:bg-white/10 hover:-translate-y-2  soft-shadow rounded-lg transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-bold">{name}</h2>
      <div className="flex gap-2">
        {techs.map(tech => (
          <img src={getTechImage(tech)} title={tech} className="size-8"/>
        ))}
      </div>
      <Slider
        images={images}
      />
      <div className="flex gap-2 px-2">
        <a href="#" className="flex flex-1 justify-center gap-2 items-center rounded-3xl px-4 py-2 text-lg bg-black/30 hover:bg-black/60 transition-colors duration-200 ease-in-out">
          <TbWorld />
          <span>Pagina</span> 
        </a>
        <a href="#" className="flex flex-1 justify-center gap-2 items-center rounded-3xl px-4 py-2 text-lg bg-black/30 hover:bg-black/60 transition-colors duration-200 ease-in-out">
          <FaCode />
          <span>Codigo</span> 
        </a>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Project