import { Linkedin, Github } from "lucide-react";
import { LineArt } from "./LineArt";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
            <div className="container max-w-6xl mt-6 text-center z-10 flex flex-col md:flex-row items-center justify-center gap-8 mb-14">
                <div>
                    <LineArt />
                </div>

                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl sm:text-5xl tracking-tight font-light">
                        <span className="opacity-0 animate-fade-in">Bem-vindo</span>
                        <span className="opacity-0 animate-fade-in-delay-1 ml-2">ao meu</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2 ml-2">portfólio</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 font-light">
                        Estudante de desenvolvimento Web e graduando do curso de Ciência da Computação na FURB.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center items-center">
                        <div>
                            <a href="#projects" className="button cta-secondary hover:cta-secondary-hover active:cta-secondary-active before:secondary-before hover:before:secondary-hover-before mr-4">
                                Meus projetos
                            </a>
                        </div>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/cauedasilva/" target="_blank">
                                <Linkedin strokeWidth={1}/>
                            </a>
                            <a href="https://github.com/cauedasilva" target="_blank">
                                <Github strokeWidth={1}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}