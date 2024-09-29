const experienceLog = [
  {
    company: "Company1",
    function: "Frontend Developer",
    period: ["04/2024", "05/2025"],
    technologies: ["typescript", "python"],
    description: "Descripciond del proyecto1"
  },
  {
    company: "Company2",
    function: "Frontend Developer",
    period: ["04/2024", "05/2025"],
    technologies: ["reactjs", "sql"],
    description: "Descripciond del proyecto2"
  },
]

const Experience = ()=> {
  return (
    <section id="experience" className="responsive-padding flex gap-4 py-20 w-full bg-yellow-500 overflow-hidden min-h-max">
      <h2 className="text-4xl font-bold">Experiencia</h2>
      <div className="flex w-2 bg-white rounded-lg">
      </div>
      <div className="flex flex-col gap-6 py-2">
        {experienceLog.map((log, i)=>(
          <div className="relative">
            <article
              className="size-full flex flex-col gap-2 border-2 border-black rounded-lg py-6 px-4 transition-all duration-300 ease-in-out hover:translate-x-2 select-none"
              key={i}
            >
              <h2 className="text-2xl">{log.company}</h2>
              <p>{log.function}</p>
              <p>{log.period}</p>
              <div className="flex gap-2">
                {log.technologies.map((tech,i)=>(
                  <p key={i}>{tech}</p>
                ))}
              </div>
              <p>{log.description}</p>
            </article>
            <div className="absolute top-4 -left-5 size-2 bg-white rotate-45"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience