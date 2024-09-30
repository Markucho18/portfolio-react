import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaCode } from "react-icons/fa6";

const coolText = "text-white/90 hover:translate-x-2 hover:text-white transition-all duration-200 ease-in-out"

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="responsive-padding flex flex-col gap-2 bg-black text-white w-full py-10 ">
        <p className={"flex gap-2 items-center text-lg " + coolText}>
          <FaPhone />
          <span>2901550611(Deberia tener uno solo de contacto xdd)</span>
        </p>
        <p className={"flex gap-2 items-center text-lg " + coolText}>
          <IoIosMail className="size-6"/>
          <span>marcoslaburo21418@gmail.com</span>
        </p>
        <a href="#" className={"flex gap-2 items-center text-lg" + coolText}>
          <FaCode className="size-6"/>
          <span className="text-lg">Codigo del portfolio</span>
        </a>
    </footer>
  )
}

export default Footer