import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react"
import { cn } from "../lib/utils"
import { useState } from "react"
import { ToastContainer, toast, Slide } from 'react-toastify';
import emailjs from 'emailjs-com';
import { GrowingLines } from "./LineArt";

export const ContactSection = () => {
    const notify = (alert) => alert ? toast("Mensagem enviada com sucesso!") : toast("Erro ao enviar a mensagem. Tente novamente mais tarde.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: false,
        transition: Slide
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => toast("Copiado para a área de transferência.", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: false,
                transition: Slide
            }))
            .catch(() => toast("Erro ao copiar.", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: false,
                transition: Slide
            }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then(() => {
            notify(true);
            setFormData({
                name: '',
                email: '',
                message: ''
            })
        }).catch(() => {
            notify(false);
        });
        setTimeout(() => {
            setIsSubmitting(false);
        }, 1500);
    }

    return (
        <section id="contact" className="flex justify-center items-center px-6 bg-secondary">
            <div className="container max-w-6xl mt-6 text-center z-10 flex flex-col md:flex-row items-center justify-center gap-8 mb-14">
                <div>
                    <GrowingLines />
                </div>
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-light text-center p-4">Entre em contato</h2>
                    <div className="grid grid-cols-1">
                        <div>
                            <div className="flex flex-col justify-center align-middle items-center">
                                <div className="justify-center">
                                    <div className="flex items-center justify-center space-x p-4 backdrop-blur-xs">
                                        <div className="flex items-center gap-1 mr-2">
                                            <Mail className="h-6 w-6" strokeWidth={1} />
                                        </div>
                                        <div>
                                            <a onClick={() => copyToClipboard("cauedasilva.slv@gmail.com")} className="cursor-pointer text-muted-foreground hover:text-primary font-light ">cauedasilva.slv@gmail.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center space-x p-4 backdrop-blur-xs">
                                        <div className="p3 flex items-center justify-center gap-1 mr-2">
                                            <MapPin className="h-6 w-6" strokeWidth={1} />
                                        </div>
                                        <div>
                                            <a onClick={() => copyToClipboard("cauedasilva.slv@gmail.com")} className="cursor-pointer text-muted-foreground font-light hover:text-primary">Blumenau/Pomerode, SC</a>
                                        </div>
                                    </div>
                                    <ToastContainer className="toast-container" />
                                </div>
                            </div>

                            <div className="pt-0">
                                <div className="flex space-x-4 justify-center p-4">
                                    <a className="hover:text-primary" href="https://www.linkedin.com/in/cauedasilva/" target="_blank">
                                        <Linkedin strokeWidth={1} />
                                    </a>
                                    <a className="hover:text-primary" href="https://github.com/cauedasilva" target="_blank">
                                        <Github strokeWidth={1} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <div className="bg-card p-8 shadow-xs backdrop-blur-xs ">
                        <h3 className="text-2xl font-light mb-6">Envie uma mensagem</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-light">Nome</label>
                                <input type="text" id="name" name="name" value={formData.name} required className="w-full px-4 py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Cauê da Silva" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-light">E-mail</label>
                                <input type="email" id="email" name="email" value={formData.email} required className="w-full px-4 py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="exemplo@gmail.com" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-light">Mensagem</label>
                                <textarea id="message" name="message" value={formData.message} required className="w-full px-4 py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Olá..." onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                            </div>

                            <button typeof="submit" disabled={isSubmitting} className={cn("button cta-secondary hover:cta-secondary-hover active:cta-secondary-active before:secondary-before hover:before:secondary-hover-before w-full flex items-center justify-center gap-2 cursor-pointer")}>
                                <p className="mb-1">{isSubmitting ? "Enviando..." : "Enviar"}</p>
                                <Send size={16} strokeWidth={1} />
                            </button>
                            <ToastContainer className="toast-container" />
                        </form>
                    </div> */}

                    </div>
                </div>
            </div>
        </section>
    )
}