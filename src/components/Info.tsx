import jotchua from "../assets/jotchua facha.webp"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Info: React.FC = ()  => {
  return (
    <section className="flex w-full bg-blue-500">
      <div className="flex flex-col">
        <div className="flex place-content-center rounded-full size-40 overflow-hidden">
          <img src={jotchua}/>
        </div>
        <div className="flex">
          <a
            className="decoration-none"
            href="https://github.com"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="decoration-none"
            href="https://linkedin.com"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-4xl">Marcos Sosa</h2>
        <h3 className="text-2xl">Frontend Developer</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae deserunt odio perferendis tempore impedit doloremque perspiciatis eaque neque! Illum, nesciunt.</p>
      </div>
    </section>
  )
}

export default Info