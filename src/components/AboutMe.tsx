import TechIcon from "./TechIcon";
import { SiTypescript } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaCss3 } from "react-icons/fa";

const AboutMe: React.FC = ()  => {
  return (
    <section
      id="aboutMe"
      className="responsive-padding flex flex-col w-full py-20 scroll gap-8"
    > 
      <h2 className="text-5xl font-bold ">Sobre Mi</h2>
      <p className="text-lg indent-2">
        Joven de 19 años de Argentina, aficionado a la programación. Puedo hablar y entender inglés de manera fluida (certificado B1). Cursé tres años de técnico en programación en la secundaria, donde aprendí HTML, CSS y JavaScript, así como algo de ReactJs y Nodejs, que profundizaría más tarde por mi cuenta. También cursé parcialmente una carrera de Analista en Sistemas en la universidad. Desde entonces y hasta hoy, programo pequeños proyectos y aprendo de forma autodidacta lenguajes de programación mediante videos y documentación. Creo ser capaz de armar una página web funcional y con estilos. Tengo nociones básicas de conceptos del lado del servidor y algo de práctica con SQL y HTTPRequest. Este portafolio lo programé yo mismo.
      </p>
      <div className="flex items-center gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Tecnologias Fuertes:</h2>
          <div className="w-full h-2 bg-gray-400 rounded-md overflow-hidden">
              <div className="w-[80%] h-full bg-white"></div>
          </div>
        </div>
        <TechIcon 
          icon={<RiReactjsFill  className=" text-blue-400 hover:text-blue-300 rounded-md size-20 transition duration-150"/>} 
          name="Reactjs"       
        />
        <TechIcon 
          icon={<SiJavascript  className=" text-yellow-300 hover:text-yellow-200 bg-black rounded-md size-20 transition duration-150"/>} 
          name="Javascript"       
        />
        <TechIcon 
          icon={<SiTypescript  className="bg-white text-blue-400 hover:text-blue-300 rounded-md size-20 transition duration-150"/>} 
          name="Typescript"       
        />
        <TechIcon 
          icon={<FaCss3  className=" text-blue-400 hover:text-blue-300 rounded-md size-20 transition duration-150"/>} 
          name="CSS"       
        />
        <TechIcon 
          icon={<RiTailwindCssFill  className=" text-blue-400 hover:text-blue-300 rounded-md size-20 transition duration-150"/>} 
          name="TailwindCSS"       
        />
      </div>
      <div className="flex items-center gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Tecnologias Debiles:</h2>
          <div className="w-full h-2 bg-gray-400 rounded-md overflow-hidden">
              <div className="w-[25%] h-full bg-white"></div>
          </div>
        </div>
        <TechIcon 
          icon={<DiMysql  className=" text-blue-400 hover:text-blue-300 bg-white rounded-full size-20 transition duration-150"/>} 
          name="MySQL"       
        />
        <TechIcon 
          icon={<SiPython  className=" text-blue-500 hover:text-blue-400 size-20 transition duration-150"/>} 
          name="Python"       
        />
        <TechIcon 
          icon={<FaPhp  className=" text-purple-400 hover:text-purple-300 rounded-md size-24 transition duration-150"/>} 
          name="PHP"       
        />
        <TechIcon 
          icon={<SiExpress  className="text-black bg-yellow-300 hover:bg-yellow-200 rounded-md size-20 transition duration-150"/>} 
          name="Expressjs"       
        />
      </div>
    </section>
  )
}

export default AboutMe