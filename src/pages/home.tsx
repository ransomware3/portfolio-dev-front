import { Header } from "../components/header"
import { Banner } from "../components/banner-home"
import { ProjectsHome } from "../components/projects-home"
import { SkillsHome } from "../components/skills-home"
import { MiniAbout } from "../components/mini-about"
import { Footer } from "../components/footer"


export const Home = () => (
    <>
        <Header/>
        <Banner/>
        <ProjectsHome/>
        <SkillsHome/>
        <MiniAbout/>
        <Footer/>
    </>
)