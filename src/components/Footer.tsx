import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="responsive-padding flex flex-col gap-2 bg-black text-white w-full py-10">
        <p className="flex gap-2 items-center text-lg">
          <FaPhone />
          <span>2901550611(Deberia tener uno solo de contacto xdd)</span>
        </p>
        <p className="flex gap-2 items-center text-lg">
          <IoIosMail className="size-6"/>
          <span>marcoslaburo21418@gmail.com</span>
        </p>
    </footer>
  )
}

export default Footer