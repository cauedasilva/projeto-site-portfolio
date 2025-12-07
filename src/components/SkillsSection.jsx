import { useState } from "react"
import { cn } from "../lib/utils"

const skills = [
    {name: 'JavaScript', level: 'Advanced', category: 'Frontend' },
    {name: 'React', level: 'Advanced', category: 'Frontend' },
    {name: 'Node.js', level: 'Intermediate', category: 'Backend' },
    {name: 'CSS', level: 'Advanced', category: 'Frontend' },
    {name: 'HTML', level: 'Advanced', category: 'Frontend' },
    {name: 'Git', level: 'Intermediate', category: 'Tools' },
    {name: 'Java', level: 'Beginner', category: 'Backend' },
    {name: 'SQL', level: 'Intermediate', category: 'Backend' },
    {name: 'TypeScript', level: 'Intermediate', category: 'Frontend' },
    {name: 'Express.js', level: 'Intermediate', category: 'Backend' },
    {name: 'Tailwind CSS', level: 'Advanced', category: 'Frontend' },
    {name: 'Bootstrap', level: 'Advanced', category: 'Frontend' },
    {name: 'C#', level: 'Beginner', category: 'Backend' },
    {name: 'MongoDB', level: 'Intermediate', category: 'Backend' },
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
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Linguagens e <span className="text-primary"> habilidades </span>
                </h2>

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
                            <div className="text-left">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}