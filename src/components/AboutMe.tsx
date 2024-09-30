const AboutMe: React.FC = ()  => {
  return (
    <section
      id="aboutMe"
      className="responsive-padding flex flex-col w-full h-[500px] py-20 scroll gap-4"
    > 
      <h2 className="text-5xl font-bold ">Sobre Mi</h2>
      <p className="text-lg">
        Joven de 19 años de Argentina, aficionado a la programación. Curse tres años de tecnico en programación en la secundaria donde aprendí HTML, CSS y JavaScript, asi como algo de ReactJs y Nodejs que profundizaria mas tarde por mi cuenta. Tambien curse parcialmente una carrera de Analista en Sistemas en la Universidad. Desde entonces y hasta hoy, programo pequeños proyectos y aprendo de forma autodidacta lenguajes de programación. Creo ser capaz de armar una pagina web funcional y con estilos. Tengo nociones basicas de conceptos del lado del servidor y algo de practica con SQL y HTTPRequest. Este portafolio lo programe yo mismo.
      </p>
    </section>
  )
}

export default AboutMe