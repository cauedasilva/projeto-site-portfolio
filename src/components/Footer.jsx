import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="bg-card py-2 px-4 flex items-center justify-between relative border-t border-t-border mt-6 pt-2">
            <p className="text-sm font-light text-muted-foreground"> &copy; {new Date().getFullYear()}</p>
            <a href="#hero" className="p-2 bg-primary/10 hover:bg-primary/20 text-primary">
                <ArrowUp size={20} strokeWidth={1} />
            </a>
        </footer>
    )
}