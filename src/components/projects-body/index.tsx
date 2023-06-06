import { useState } from "react"
import { IoIosArrowUp } from "react-icons/io"
import projects from "../../json/list.json"
import {
    Main,
    Ul,
    Li,
    DivModal,
    StyledAnchor,
    Img,
    BtnAnchor
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


    const ProjectsLi = projectsList.map(item => {
        return (
            <Li onClick={() => toggleModal(item.id)} key={item.id}>
                <Img src={item.sprite}></Img>
                {openModal[item.id] && (
                    <DivModal>
                        <StyledAnchor target="_blank" href={item.site}>IR PARA O SITE</StyledAnchor>
                        <StyledAnchor target="_blank" href={item.code}>CÓDIGO ESCRITO</StyledAnchor>
                    </DivModal>
                )}
            </Li>
        )
    })


    return (
        <Main>
            <Ul>{ProjectsLi}</Ul>
            <BtnAnchor href="#top"><IoIosArrowUp /></BtnAnchor>
        </Main>
    )
}