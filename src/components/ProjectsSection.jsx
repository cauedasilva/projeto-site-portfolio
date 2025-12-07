import { ArrowRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "projeto-shop",
        description: "Um sistema simples de gestão de loja, frontend em Angular e backend em .NET + SQL Server com funcionalidades de CRUD para estoque (produtos) e clientes. ",
        image: `${import.meta.env.BASE_URL}projects/projeto-shop.png`,
        tags: ["Angular", "TypeScript", "C#", "ASP.NET", "SQL Server", "HTML", "CSS"],
        githubUrl: "https://github.com/cauedasilva/projeto-shop"
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="relative justify-center py-20 px-4">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Meus <span className="text-primary"> projetos </span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Projetos desenvolvidos tanto no meu tempo livre quanto ao longo do curso de Sistemas de Informação na FURB.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-xs font-medium rounded-full border bg-secundary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.githubUrl} size={20} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/cauedasilva" target="_blank" className="w-fit flex justify-center items-center mx-auto gap-2 text-center button cta-secondary hover:cta-secondary-hover active:cta-secondary-active before:secondary-before hover:before:secondary-hover-before">
                        <p className="mb-1 m-0 ">Acesse o meu perfil no Github</p><ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}