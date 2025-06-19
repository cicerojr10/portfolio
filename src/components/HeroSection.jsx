import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Cícero
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Quintino Junior
            </span>
          </h1>

          {/* NOVO BLOCO EM PIRÂMIDE */}
          <div className="space-y-2 opacity-0 animate-fade-in-delay-3 text-center">
            <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
              Apaixonado por{" "}
              <span className="text-gradient">Data Science</span> e{" "}
              <span className="text-gradient">Inteligência Artificial</span>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              com foco em{" "}
              <span className="text-primary">Desenvolvimento Back-end</span>{" "}
              usando <span className="text-gradient">Java</span> e{" "}
              <span className="text-gradient">Python</span>.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Este é meu <span className="text-primary">portfólio</span> com
              projetos e aprendizados
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              em uma jornada movida por{" "}
              <span className="text-gradient">tecnologia</span> e evolução constante.
            </p>
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Meus Projetos
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  )
}
