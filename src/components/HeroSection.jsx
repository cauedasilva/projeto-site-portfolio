import { ArrowDown } from "lucide-react"
import { motion } from "motion/react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Linkedin, Github } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-6xl mt-24 text-center z-10 flex flex-col md:flex-row items-center md:justify-between gap-8 mb-14">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl sm:text-5xl tracking-tight font-bold">
                        <span className="opacity-0 animate-fade-in">Bem-vindo</span>
                        <span className="opacity-0 animate-fade-in-delay-1 ml-2">ao meu</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2 text-glow ml-2">portfólio</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Estudante de desenvolvimento Web e graduando do curso de Sistemas de Informação na FURB, entusiasta por tecnologia e programação.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center items-center">
                        <div>
                            <a href="#projects" className="button cta-secondary hover:cta-secondary-hover active:cta-secondary-active before:secondary-before hover:before:secondary-hover-before mr-4">
                                Meus projetos
                            </a>
                        </div>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/cauedasilva/" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="https://github.com/cauedasilva" target="_blank">
                                <Github />
                            </a>
                        </div>
                    </div>
                </div>

                <motion.div className="hero-image-container" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
                    <div className="code-display">
                        <SyntaxHighlighter language="typescript" customStyle={{ margin: 0, padding: "2rem", height: "100%", borderRadius: "10px", background: "rgba(30, 41, 59)", backdropFilter: "blur(10px)", marginBottom: 50 }} style={vscDarkPlus}>{`
export class DialogBox implements AfterViewInit {
    @ViewChild('modal') modalElement!: ElementRef;
    @Output() onClose = new EventEmitter<boolean>();

    title = 'Confirmar';
    message = 'Você tem certeza?';
    private modalInstance: any;

    open(title: string, message: string) {
        this.title = title;
        this.message = message;
        this.modalInstance.show();
    }
    confirm() {
        this.modalInstance.hide();
        this.onClose.emit(true);
    }
    cancel() {
        this.modalInstance.hide();
        this.onClose.emit(false);
    }
}`}
                        </SyntaxHighlighter>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <ArrowDown className="h-8 w-8 text-primary" />
            </div>
        </section>
    )
}