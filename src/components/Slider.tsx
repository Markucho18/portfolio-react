import useState from "react"
import defaultImage from "../assets/screenshots/defaultScreenshot.webp"

interface SliderProps {
  images: string[]
}

const Slider: React.FC<SliderProps> = ({images}) => {

  const [currentSlide, setCurrentSlide] = useState(0)

  const decrement = () => {
    if(currentSlide - 1 < 0) return 3
    else return currentSlide - 1
  }

  const increment = () => {
    if(currentSlide + 1 < 2) return 0
    else return currentSlide + 1
  }

  return (
    <div className="flex relative size-80 slider overflow-x-scroll">
      {images.map((image, i) => (
        <img
          src={image = defaultImage}
          key={i}
          className="min-w-full min-h-full"
        />
      ))}
      <a href={`#slide${increment}`}>
        left
      </a>
      <a href={`#slide${decrement}`}>
        right
      </a>
    </div>
  )
}

export default Slider