import { useEffect, useState } from "react"

export const LoadingBar = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-foreground/10 z-50">
      <div
        className="h-full bg-primary transition-all duration-200"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}