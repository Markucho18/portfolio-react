import { useState, useEffect } from "react"
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import defaultImage from "../assets/screenshots/defaultScreenshot.webp"

interface SliderProps {
  images: string[]
}

const Slider: React.FC<SliderProps> = ({images}) => {

  const imageSize = 320

  const [currentSlide, setCurrentSlide] = useState(1)

  useEffect(()=>{
    if(currentSlide > images.length) setCurrentSlide(1)
    else if(currentSlide <= 0) setCurrentSlide(images.length)
  },[currentSlide])

  return (
    <div
      style={{width: `${imageSize}px`, height: `${imageSize}px`}}
      className="flex relative slider overflow-hidden"
    >
      <div
        style={{transform: `translateX(${0 - (imageSize * (currentSlide - 1))}px)`}}
        className="flex h-full transition-transform duration-300 ease-in-out bg-blue-200"
      >
        {images.map((image, i) => (
          <div
            style={{/* backgroundImage: `url("${image}")`, */ width: `${imageSize}px`, height: `${imageSize}px`}}
            className="bg-center bg-cover pene"
            key={i}
          >
          </div>
        ))}
      </div>
      <button
        className="flex justify-center items-center absolute bg-black/30 hover:bg-black/50 size-10 top-1/2 translate-y-1 rounded-full"        
        onClick={() => setCurrentSlide(currentSlide - 1)}
        >
        <GrFormPrevious className="size-2/3 text-white"/>
      </button>
      <button
        className="flex justify-center items-center absolute bg-black/30 hover:bg-black/50 size-10 top-1/2 translate-y-1 right-0 rounded-full"
        onClick={() => setCurrentSlide(currentSlide + 1)}
      >
        <MdNavigateNext className="size-2/3 text-white font-bold"/>
      </button>
    </div>
  )
}

export default Slider