import { useState, useEffect } from "react"
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

interface SliderProps {
  images: string[]
}

const Slider: React.FC<SliderProps> = ({ images }) => {

  const [imageSize, setImageSize] = useState(520)

  const [slide, setSlide] = useState(0)

  const previousSlide = () => {
    if((slide - 1) < 0) setSlide(images.length - 1)
    else setSlide(slide - 1)
  }

  const nextSlide = () => {
    if((slide + 1) > images.length - 1) setSlide(0)
    else setSlide(slide + 1)
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if(windowWidth > 1024) setImageSize(520)
    else if (windowWidth > 768 && windowWidth <= 1024) setImageSize(480)
    else if (windowWidth <= 768) setImageSize(360)
  }, [windowWidth]);

  useEffect(()=>{
    console.log("El tamaño de la imagen ha cambiado")
    console.log(imageSize)
  }, [imageSize])


  return (
    <div
      style={{width: `${imageSize}px`, height: "320px"}}
      className="relative overflow-hidden"
    >
      <div
        style={{width: `${images.length * imageSize}px`, transform: `translateX(-${slide * imageSize}px)`, height: "100%" }}
        className="flex overflow-hidden transition-transform duration-200 ease-in-out"
      >
        {images.map((image) => (
          <div
            style={{backgroundImage: `url(${image})`}}
            className="flex w-full justify-center items-center bg-center bg-cover bg-blue-300"
          >
            <p className="text-red-500 text-2xl">{slide}</p>
          </div>
        ))}
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex p-3 gap-2">
        {images.map((_, i)=>(
          <div className={`rounded-full size-4 ${slide == i ? "bg-white" : "bg-gray-300"}`}>
          </div>
        ))}
      </div>
      <button
      className="flex justify-center items-center absolute bg-black/30 hover:bg-black/50 size-10 top-1/2 translate-y-1 rounded-full"
      onClick={previousSlide}
      >
        <GrFormPrevious className="size-2/3 text-white"/>
      </button>
      <button
      className="flex justify-center items-center absolute bg-black/30 hover:bg-black/50 size-10 top-1/2 right-0 translate-y-1 rounded-full"
      onClick={nextSlide}
      >
        <MdNavigateNext className="size-2/3 text-white"/>
      </button>
    </div>
  )
}

export default Slider