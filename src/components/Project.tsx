import Slider from "./Slider"
import { project } from "../types"
import { getTechImage } from "../utils/getTechImage"

const Project: React.FC<project> = ({name, description, techs, images, link}) => {
  return (
    <div className="flex flex-col gap-2 border-2 border-black p-4 max-w-min w-1/2 hover:bg-white/20">
      <h2 className="text-2xl font-bold">{name}</h2>
      <div className="flex gap-2">
        {techs.map(tech => (
          <img src={getTechImage(tech)} className="size-8"/>
        ))}
      </div>
      <Slider images={images} />
      <p>{description}</p>
    </div>
  )
}

export default Project