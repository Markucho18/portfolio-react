import Header from "./components/Header"
import Info from "./components/Info"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"

const App: React.FC = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Header />
      <Info />
      <AboutMe />
      <Projects />
    </div>
  )
}

export default App
