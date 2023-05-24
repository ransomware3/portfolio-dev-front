import { useState } from "react"
import { Header } from "../header"
import { Footer } from "../footer"
// import Bg0 from "../../assets/0.png"
// import Bg1 from "../../assets/1.png"
// import Bg2 from "../../assets/2.png"
// import Bg3 from "../../assets/3.png"
// import Bg4 from "../../assets/4.png"
// import Bg5 from "../../assets/5.png"
// import Bg6 from "../../assets/6.png"
// import Bg7 from "../../assets/7-poke2.png"
// import Bg8 from "../../assets/8.png"
// import Bg9 from "../../assets/9.png"
import projects from "../../json/list.json"
import {
    Main,
    Ul,
    Li,
    DivModal,
    StyledAnchor
} from "./styled"

export const ProjectsBody = () => {

    const projectsList = projects.Projetos
    const [openModal, setOpenModal] = useState(Array(projectsList.length).fill(false))

    const toggleModal = (id: number) => {
        setOpenModal(() => {
            const newOpenModal = [...openModal]
            newOpenModal[id] = !newOpenModal[id]
            return newOpenModal
        })
    }


    const test = projectsList.map(item => {
        return (
            <Li onClick={() => toggleModal(item.id)} key={item.id}>
                {item.sprite}
                {openModal[item.id] && (
                    <DivModal>
                        <StyledAnchor target="_blank" href="https://google.com">teste</StyledAnchor>
                        <StyledAnchor target="_blank" href="https://google.com">teste2</StyledAnchor>
                    </DivModal>
                )}
            </Li>
        )
    })


    return (
        <>
            <Header />
            <Main>
                <Ul>{test}</Ul>
            </Main>
            <Footer />
        </>
    )
}