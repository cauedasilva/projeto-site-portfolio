import { useEffect, useState } from "react"
import { useTheme } from "./ThemeContext";

export const LineBackground = () => {
    const { isDarkMode } = useTheme();
    const [trail, setTrail] = useState([])

    useEffect(() => {
        generateTrail();

        const handleResize = () => generateTrail();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateTrail = () => {
        const numberOfTrails = Math.min(Math.floor((window.innerHeight + window.innerWidth) / 10000), 30);
        const newTrails = []

        for (let i = 0; i < numberOfTrails; i++) {
            newTrails.push({
                id: i,
                depth: Math.random(),
                y: Math.random() * 100,
                x: Math.random() * 100,
                animationDuration: Math.random() * 4 + 16
            })
        }

        setTrail(newTrails)
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {trail.map((trail) => (
                <div
                    key={trail.id}
                    className={`${isDarkMode ? "trail" : "trail-black"} ${trail.depth > 0.6 ? "animate-trailParallax" : "animate-trailParallaxFar"}`}
                    style={{
                        "--duration": `${trail.animationDuration}s`,
                        width: `${0.5 + trail.depth * 1.5}px`,
                        height: "120vh",
                        top: `${trail.y}%`,
                        left: `${trail.x}%`,
                        opacity: 0.1 + trail.depth * 0.5,
                        filter: `brightness(${0.5 + trail.depth * 0.5})`
                    }}
                ></div>
            ))}
        </div>
    )
}
