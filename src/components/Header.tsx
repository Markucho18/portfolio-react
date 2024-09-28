const Header: React.FC = () => {
  return (
    <header className="responsive-padding flex justify-center relative h-16 w-full bg-black text-white">
      <a
        className="group relative flex justify-center items-center align px-12 py-6 hover:bg-white/20"
        href="#aboutMe"
      >
        Sobre mi
        <div className="absolute bottom-0 left-0 scale-x-0 w-full h-1 group-hover:scale-x-100 transition-all origin-center duration-150 ease-in-out bg-white"></div>
      </a>
      <a
        className="group relative flex justify-center items-center align px-12 py-6 hover:bg-white/20"
        href="#projects"
      >
        Proyectos
        <div className="absolute bottom-0 left-0 scale-x-0 w-full h-1 group-hover:scale-x-100 transition-all origin-center duration-150 ease-in-out bg-white"></div>
      </a>
      <a
        className="group relative flex justify-center items-center align px-12 py-6 hover:bg-white/20"
        href="#experience"
      >
        Experiencia
        <div className="absolute bottom-0 left-0 scale-x-0 w-full h-1 group-hover:scale-x-100 transition-all origin-center duration-150 ease-in-out bg-white"></div>
      </a>
    </header>
  )
}

export default Header