import { Code, Briefcase, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-25 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary"> mim </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Cauê da Silva - {new Date().getFullYear() - 2003} anos</h3>
                        <p className="text-muted-foreground text-xl">Natural de Pomerode (SC), sou graduando em Sistemas de Informação pela FURB. Tenho grande interesse por tecnologia e por tudo que envolve o digital. Estou sempre em busca de aprender coisas novas, explorar ferramentas, entender tendências e desenvolver minhas habilidades na área de desenvolvimento web.</p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center text-center">
                            <a href="#contact" className="button cta-secondary hover:cta-secondary-hover active:cta-secondary-active before:secondary-before hover:before:secondary-hover-before">Contato</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold">Desenvolvimento Web</h3>
                                    <p className="text-muted-foreground">Meu objetivo é criar sites, aplicações e serviços modernos, responsivos e alinhados às melhores práticas do desenvolvimento web.</p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold">Pessoal</h3>
                                    <p className="text-muted-foreground">Ávido leitor no tempo livre, possuo Inglês C1 e também interessado em infraestrutura de TI e homelabs, configuração de switches, routers, load balancers, firewalls e etc.</p>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold">Carreira</h3>
                                    <p className="text-muted-foreground">Atualmente sou analista de suporte técnico na Unifique, onde atuo há quatro anos, acumulando experiência prática em atendimento, diagnóstico e resolução de problemas em ambiente de telecomunicações e infraestrutura de rede.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}