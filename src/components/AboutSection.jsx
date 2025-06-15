import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md_text-4xl font-bold mb-12 text-center">
                Sobre <span className="text-primary"> Mim</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Ciência de Dados | IA | Machine Learning | Back-end Developer
                    </h3>

                    <p className="text-muted-foreground">
                        Minha trajetória na tecnologia começou pela Ciência de Dados, área que me proporcionou uma base analítica. No decorrer dos estudos, descobri uma forte afinidade pelo desenvolvimento back-end, com ênfase em Java e Python. Atualmente, meu foco está na construção de APIs robustas, arquitetura de aplicações escaláveis e na busca constante por boas práticas de desenvolvimento de software.
                    </p>
                    <p className="text-muted-foreground">
                        Tenho formação em Ciência da Computação pela Universidade Positivo (em andamento), além de experiência prática em projetos próprios, com destaque para o uso de Java, Spring Boot, Python e bancos de dados relacionais e NoSQL. Minha atuação inclui desde a modelagem até a implementação de APIs RESTful, aplicação de conceitos de POO e arquitetura limpa.
                    </p>
                    <p className="text-muted-foreground">
                        Também possuo certificação em Oracle Cloud Infrastructure AI, com conhecimento em soluções de Inteligência Artificial e automação de processos em nuvem, além de estar expandindo meu aprendizado em Google Cloud Platform (GCP) e Microsoft Azure AI. Meu portfólio inclui projetos de data science, machine learning e desenvolvimento web.
                    </p>
                    <p className="text-muted-foreground">
                        Estou sempre em busca de desafios que permitam aplicar e expandir meus conhecimentos, colaborando com equipes inovadoras e contribuindo para resultados de alto impacto.
                    </p>

                    <div className="flex flex-col sm:flex-wor gap-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Entre em Contato
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-fullbg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Back-end Developer</h4>
                                <p className="text-muted-foreground">
                                    Foco em APIs escaláveis e arquitetura limpa.
                                    Trabalhando com Java, Python e boas práticas de desenvolvimento.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-fullbg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Data Science</h4>
                                <p className="text-muted-foreground">
                                    Foco em análise, visualização e insights que geram decisões melhores.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-fullbg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">IA & Machine Learning</h4>
                                <p className="text-muted-foreground">
                                    Dedicado a transformar dados em decisões e experiências inteligentes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}