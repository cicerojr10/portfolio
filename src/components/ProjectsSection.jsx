import { ArrowRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Análise de Rede de Casos Ativos de COVID-19",
        description:
            "Um projeto de visualização e análise de dados que explora a dinâmica de propagação e a relação de casos ativos de COVID-19 entre países da América do Sul, utilizando redes de dados para insights geográficos e epidemiológicos.",
        image: "/projects/Projeto1.png",
        tags: ["Data Visualization", "Network Analysis", "COVID-19", "Python", "Pandas", "Matplotlib"],
        githubUrl: "https://github.com/cicerojr10/projeto_visualizacao_informacao",
    },
    {
        id: 2,
        title: "Sistema de Banco de Dados Bancário",
        description:
            "Projeto focado na modelagem e manipulação de um banco de dados relacional para um sistema bancário, gerenciando contas, clientes e transações, com ênfase em consultas SQL.",
        image: "/projects/Projeto2.png",
        tags: ["Database", "SQL", "Relational Database", "Banking System"],
        githubUrl: "https://github.com/cicerojr10/dio_desafio_bancoDeDados",
    },
    {
        id: 3,
        title: "Sistema de Gerenciamento de Biblioteca",
        description:
            "Sistema de gerenciamento de biblioteca em Java, utilizando conceitos de Programação Orientada a Objetos (POO). Simula operações como cadastro de livros, empréstimos e devoluções no console.",
        image: "/projects/Projeto3.png",
        tags: ["System Development", "Management System", "Software Engineering", "Java", "Database"],
        githubUrl: "https://github.com/cicerojr10/LibraryManagementSystem",
    },
    {
        id: 4,
        title: "Rede Neural para Machine Learning",
        description:
            "Implementação e treinamento de uma rede neural para tarefas de Machine Learning, focando na predição e classificação de dados, demonstrando o poder do aprendizado profundo em aplicações práticas.",
        image: "/projects/Projeto4.png",
        tags: ["Machine Learning", "Neural Networks", "Deep Learning", "Python", "TensorFlow", "Keras"],
        githubUrl: "https://github.com/cicerojr10/redeNeuralML",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Principais <span className="text-primary"> Projetos </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Aqui estão alguns dos meus projetos recentes. Cada projeto foi cuidadosamente
                    desenvolvido com atenção aos detalhes, desempenho e experiência do usuário.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 flex flex-col justify-between flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center mt-auto">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/cicerojr10"
                    >
                        Verifique Meu Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
