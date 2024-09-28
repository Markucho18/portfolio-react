import jotchua from "../assets/jotchua facha.webp"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Info: React.FC = ()  => {
  return (
    <section className="responsive-padding flex gap-6 w-full bg-blue-500 py-20">
      <div className="flex flex-col gap-1">
        <div className="flex place-content-center rounded-full size-40 overflow-hidden">
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
      <div className="flex flex-col gap-2 justify-center">
        <h2 className="text-4xl">Marcos Sosa</h2>
        <h3 className="text-2xl">Frontend Developer</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae deserunt odio perferendis tempore impedit doloremque perspiciatis eaque neque! Illum, nesciunt.</p>
      </div>
    </section>
  )
}

export default Info