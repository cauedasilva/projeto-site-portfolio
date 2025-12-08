import { useState } from "react"
import { cn } from "../lib/utils"
import { FaJsSquare, FaReact, FaNodeJs, FaCss3, FaHtml5, FaGitSquare, FaJava, FaBootstrap, FaAngular } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiTypescript, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";

const skills = [
    { name: 'JavaScript', level: 'Advanced', category: 'Frontend', icon: FaJsSquare },
    { name: 'React', level: 'Advanced', category: 'Frontend', icon: FaReact },
    { name: 'Node.js', level: 'Intermediate', category: 'Backend', icon: FaNodeJs },
    { name: 'CSS', level: 'Advanced', category: 'Frontend', icon: FaCss3 },
    { name: 'HTML', level: 'Advanced', category: 'Frontend', icon: FaHtml5 },
    { name: 'Git', level: 'Intermediate', category: 'Tools', icon: FaGitSquare },
    { name: 'Java', level: 'Beginner', category: 'Backend', icon: FaJava },
    { name: 'SQL', level: 'Intermediate', category: 'Backend', icon: DiMysql },
    { name: 'TypeScript', level: 'Intermediate', category: 'Frontend', icon: SiTypescript },
    { name: 'Express.js', level: 'Intermediate', category: 'Backend', icon: SiExpress },
    { name: 'Tailwind CSS', level: 'Advanced', category: 'Frontend', icon: RiTailwindCssFill },
    { name: 'Bootstrap', level: 'Advanced', category: 'Frontend', icon: FaBootstrap },
    { name: 'C#', level: 'Beginner', category: 'Backend', icon: TbBrandCSharp },
    { name: 'MongoDB', level: 'Intermediate', category: 'Backend', icon: SiMongodb },
    { name: 'Angular', level: 'Intermediate', category: 'Frontend', icon: FaAngular }
]

const categories = [
    { key: 'all', label: 'Todas' },
    { key: 'Frontend', label: 'Frontend' },
    { key: 'Backend', label: 'Backend' },
    { key: 'Tools', label: 'Ferramentas' },
]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill) =>
        activeCategory === "all" || skill.category === activeCategory
    )

    return (
        <section id="skills" className="py-20 px-4 bg-secondary/50 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Linguagens e <span className="text-primary"> habilidades </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Linguagens e ferramentas que já utilizei e continuo aprendendo.</p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button key={category.key} onClick={() => setActiveCategory(category.key)} className={cn(
                            "px-4 py-2 rounded-xl  border transition-colors duration-300 cursor-pointer",
                            activeCategory === category.key ? "bg-primary text-primary-foreground border-primary cta-secondary" : "hover:bg-primary/10 button cta-secondary hover:cta-secondary-hover active:cta-secondary-active before:secondary-before hover:before:secondary-hover-before")}>
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div key={index} className="gradient-border p-6 bg-card rounded-lg shadow-xs card-hover">
                            <div className="flex items-center gap-3 justify-between">
                                {skill.icon && (<skill.icon className="text-3xl text-primary" />)}
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}