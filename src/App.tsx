import Header from "./components/Header"
import Info from "./components/Info"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Footer from "./components/Footer"

const App: React.FC = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen mt-16 scroll-smooth">
      <Header />
      <Info />
      <AboutMe />
      <Projects />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
