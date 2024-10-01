const AboutMe: React.FC = ()  => {
  return (
    <section
      id="aboutMe"
      className="responsive-padding flex flex-col w-full h-[500px] py-20 scroll gap-4"
    > 
      <h2 className="text-5xl font-bold ">Sobre Mi</h2>
      <p className="text-lg">
        Joven de 19 años de Argentina, aficionado a la programación. Puedo hablar y entender inglés de manera fluida (certificado B1). Cursé tres años de técnico en programación en la secundaria, donde aprendí HTML, CSS y JavaScript, así como algo de ReactJs y Nodejs, que profundizaría más tarde por mi cuenta. También cursé parcialmente una carrera de Analista en Sistemas en la universidad. Desde entonces y hasta hoy, programo pequeños proyectos y aprendo de forma autodidacta lenguajes de programación. Creo ser capaz de armar una página web funcional y con estilos. Tengo nociones básicas de conceptos del lado del servidor y algo de práctica con SQL y HTTPRequest. Este portafolio lo programé yo mismo.
      </p>
    </section>
  )
}

export default AboutMe