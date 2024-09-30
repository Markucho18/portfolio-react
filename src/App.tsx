import Header from "./components/Header"
import Info from "./components/Info"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import { Link } from "react-scroll"
import { BiSolidUpArrow } from "react-icons/bi";
import { useState } from "react"

const App: React.FC = () => {

  const [topIsVisible, setTopIsVisible] = useState(false)

  return (
    <div className="relative flex flex-col w-screen min-h-screen mt-16 scroll-smooth epic-gradient manrope-font text-white divide-y-2 divide-black">
      <Header />
      <Info setTopIsVisible={setTopIsVisible}/>
      <AboutMe />
      <Projects />
      <Experience />
      <Footer />
      {!topIsVisible && (
        <Link
        className="fixed group top-24 right-10 rounded-full size-12 bg-zinc-700 hover:bg-zinc-800 cursor-pointer select-none p-3"
        to="info"
        smooth={true}
        offset={-64}
        duration={300}
      >
        <BiSolidUpArrow className="text-slate-200 group-hover:text-white size-full"/>
      </Link>
      )}
    </div>
  )
}

export default App
