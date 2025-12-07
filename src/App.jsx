import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import { ThemeProvider } from "./components/ThemeContext"
import { LoadingBar } from "./components/LoadingBar"

const Home = lazy(() => import("./pages/Home"))
const NotFound = lazy(() => import("./pages/NotFound"))

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/site-portfolio">
        <Suspense fallback={<LoadingBar />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
