import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/home"
import { Projects } from "../pages/projects"

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
        </Routes>
    </BrowserRouter>
)