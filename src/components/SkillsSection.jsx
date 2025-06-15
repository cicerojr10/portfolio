import { useState } from "react"
import { cn } from "../lib/utils";

const skills = [
    // Ferramentas
    { name: "Git/Github", level: 80, category: "Ferramentas" },
    { name: "Docker", level: 60, category: "Ferramentas" },
    { name: "Linux", level: 80, category: "Ferramentas" },
    { name: "MongoDB", level: 60, category: "Ferramentas" },
    { name: "Oracle SQL", level: 60, category: "Ferramentas" },
    { name: "Jupyter Notebook", level: 70, category: "Ferramentas" },
    { name: "Google Colab", level: 70, category: "Ferramentas" },
    { name: "VSCode", level: 70, category: "Ferramentas" },


    // IA e Machine Learning
    { name: "Aprendizado Supervisionado", level: 50, category: "IA & Machine Learning" },
    { name: "Aprendizado Não Supervisionado", level: 50, category: "IA & Machine Learning" },
    { name: "Deep Learning", level: 50, category: "IA & Machine Learning" },
    { name: "Visão Computacional", level: 50, category: "IA & Machine Learning" },

    // Data Science
    { name: "Python (Pandas, NumPy)", level: 60, category: "Data Science" },
    { name: "Análise de Dados", level: 60, category: "Data Science" },
    { name: "Pré-processamento de Dados", level: 60, category: "Data Science" },
    { name: "Visualização de Dados", level: 60, category: "Data Science" },
    { name: "R ", level: 55, category: "Data Science" },

    // Back-end Developer
    { name: "Java", level: 50, category: "Backend Developer" },
    { name: "Spring Boot", level: 60, category: "Backend Developer" },
    { name: "APIs RESTful", level: 55, category: "Backend Developer" },
    { name: "POO (Programação Orientada a Objetos)", level: 65, category: "Backend Developer" },
    { name: "Arquitetura Limpa", level: 55, category: "Backend Developer" },
];

const categories = ["all", "Backend Developer","IA & Machine Learning","Data Science", "Ferramentas"]



export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return (
    <section
        id="skills"
        className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5skl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                    key={key} 
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secundary/70 text-foreground hover:bd-secundary"
                    )}
                    >
                        {category}
                    </button>
                ))}

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div 
                    key={key} 
                    className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name}</h3>
                        </div>
                        <div className="w-full bg-secundary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                            style={{width: skill.level + "%"}}
                            />
                        </div>
                        <div>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                    </div>
                ))}

            </div>
        </div>

    </section>
    )
}