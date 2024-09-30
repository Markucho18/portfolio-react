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
    <section id="experience" className="responsive-padding flex flex-col gap-8 py-20 w-full overflow-hidden min-h-max">
      <h2 className="text-5xl font-bold">Experiencia</h2>
      <div className="flex gap-4">
        <div className="flex w-2 bg-white rounded-lg">
        </div>
        <div className="flex flex-col gap-6 py-2">
          {experienceLog.map((log, i)=>(
            <div className="relative">
              <article
                className="size-full flex gap-2 soft-shadow hover:bg-white/10 rounded-lg py-6 px-4 transition-all duration-300 ease-in-out hover:translate-x-2 select-none divide-x-2 divide-black/30"
                key={i}
              >
                <div className="flex flex-col gap-2 ">
                  <h2 className="text-2xl">{log.company}</h2>
                  <p>{log.function}</p>
                  <p>{log.period}</p>
                  <div className="flex gap-2">
                    {log.technologies.map((tech,i)=>(
                      <p key={i}>{tech}</p>
                    ))}
                  </div>
                  <p>{log.description}</p>
                </div>
                <div className="flex p-4 max-w-96">
                  <p className="text-white/80">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nobis, ea deleniti enim sapiente inventore veniam et quas soluta, dignissimos praesentium rerum aliquam aspernatur. Reiciendis maiores sequi quia consectetur quidem sapiente rerum quaerat consequuntur iusto, nemo ex, vero dolorum quae sunt explicabo laudantium cumque provident nihil suscipit ipsam! Nesciunt, blanditiis.</p>
                </div>
              </article>
              <div className="absolute top-4 -left-5 size-2 bg-white rotate-45"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience