import jotchua from "../assets/jotchua facha.webp"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter"

const Info: React.FC = ()  => {


  return (
    <section className="responsive-padding flex justify-center gap-6 w-full bg-blue-500 py-20">
      <div className="flex flex-col gap-1">
        <div className="flex place-content-center rounded-full size-48 overflow-hidden">
          <img src={jotchua}/>
        </div>
        <div className="flex justify-center gap-2">
          <a
            className="group size-8 decoration-none"
            href="https://github.com"
            target="_blank"
          >
            <FaGithub className="group-hover:text-white size-full"/>
          </a>
          <a
            className="group size-8 decoration-none"
            href="https://linkedin.com"
            target="_blank"
          >
            <FaLinkedin className="group-hover:text-white size-full"/>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center bg-blue-300 w-[350px] sm:w-[400px] md:w-[500px]">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl">
          <Typewriter
            words={["Marcos Sosa"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={70}
            delaySpeed={1500}
          />
        </h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl text-blue-500">
          <Typewriter
            words={["Frontend", "Developer"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={70}
          />
        </h3>
      </div>
    </section>
  )
}

export default Info