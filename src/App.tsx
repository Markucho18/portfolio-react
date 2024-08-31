import Info from "./components/Info"
import Projects from "./components/Projects"

const App: React.FC = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Info />
      <Projects />
    </div>
  )
}

export default App
