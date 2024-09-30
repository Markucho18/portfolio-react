import { Link } from "react-scroll"

const Header: React.FC = () => {



  return (
    <header className="responsive-padding fixed inset-0 flex justify-center h-16 w-full bg-black font-semibold tracking-wide select-none cursor-pointer z-20">
      <Link
        className="group relative flex justify-center items-center align px-12 py-6 hover:bg-white/20"
        to="aboutMe"
        smooth={true}
        offset={-64}
        duration={300}
      >
        Sobre mi
        <div className="absolute bottom-0 left-0 scale-x-0 w-full h-1 group-hover:scale-x-100 transition-all origin-center duration-150 ease-in-out bg-white"></div>
      </Link>
      <Link
        className="group relative flex justify-center items-center align px-12 py-6 hover:bg-white/20"
        to="projects"
        smooth={true}
        offset={-64}
        duration={300}
      >
        Proyectos
        <div className="absolute bottom-0 left-0 scale-x-0 w-full h-1 group-hover:scale-x-100 transition-all origin-center duration-150 ease-in-out bg-white"></div>
      </Link>
      <Link
        className="group relative flex justify-center items-center align px-12 py-6 hover:bg-white/20"
        to="experience"
        smooth={true}
        offset={-64}
        duration={300}
      >
        Experiencia
        <div className="absolute bottom-0 left-0 scale-x-0 w-full h-1 group-hover:scale-x-100 transition-all origin-center duration-150 ease-in-out bg-white"></div>
      </Link>
      <Link
        className="group relative flex justify-center items-center align px-12 py-6 hover:bg-white/20"
        to="contact"
        smooth={true}
        offset={-64}
        duration={300}
      >
        Contacto
        <div className="absolute bottom-0 left-0 scale-x-0 w-full h-1 group-hover:scale-x-100 transition-all origin-center duration-150 ease-in-out bg-white"></div>
      </Link>
    </header>
  )
}

export default Header