import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react"
import { cn } from "../lib/utils"
import { useState } from "react"
import { ToastContainer, toast, Slide } from 'react-toastify';
import emailjs from 'emailjs-com';

export const ContactSection = () => {
    const notify = (alert) => alert ? toast.info("Mensagem enviada com sucesso!") : toast("Erro ao enviar a mensagem. Tente novamente mais tarde.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        transition: Slide
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        <section id="contact" className="min-h-screen items-center px-6 py-24 bg-secondary">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Entre em <span className="text-primary"> contato </span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex flex-col justify-center align-middle items-center">
                            <h3 className="text-2xl font-semibold mb-6 pb-2">Informações de contato</h3>
                            <div className="space-y-6 justify-center">
                                <div className="flex flex-col items-center space-x bg-card p-4 rounded-lg backdrop-blur-xs">
                                    <div className="p3 flex items-center justify-around gap-2">
                                        <Mail className="h-6 w-6 text-primary" />
                                        <h4 className="font-medium">Email</h4>
                                    </div>
                                    <div>
                                        <a href="mailto:cauedasilva.slv@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">cauedasilva.slv@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center space-x bg-card p-4 rounded-lg backdrop-blur-xs">
                                    <div className="p3 flex items-center justify-around gap-2">
                                        <MapPin className="h-6 w-6 text-primary" />
                                        <h4 className="font-medium">Localização</h4>
                                    </div>
                                    <div>
                                        <a className="text-muted-foreground hover:text-primary transition-colors duration-300">Blumenau/Pomerode, SC</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-0">
                            <h3 className="text-2xl font-semibold mb-6">Redes Sociais</h3>
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

                    <div className="bg-card p-8 rounded-lg shadow-xs backdrop-blur-xs">
                        <h3 className="text-2xl font-semibold mb-6">Envie uma mensagem</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium">Nome</label>
                                <input type="text" id="name" name="name" value={formData.name} required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Cauê da Silva" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">E-mail</label>
                                <input type="email" id="email" name="email" value={formData.email} required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="cauedasilva.slv@gmail.com" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensagem</label>
                                <textarea id="message" name="message" value={formData.message} required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Olá..." onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                            </div>

                            <button typeof="submit" disabled={isSubmitting} className={cn("button cta-secondary hover:cta-secondary-hover active:cta-secondary-active before:secondary-before hover:before:secondary-hover-before w-full flex items-center justify-center gap-2 cursor-pointer")}>
                                <p className="mb-1">{isSubmitting ? "Enviando..." : "Envie uma mensagem"}</p>
                                <Send size={16} />
                            </button>
                            <ToastContainer className="toast-container" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}