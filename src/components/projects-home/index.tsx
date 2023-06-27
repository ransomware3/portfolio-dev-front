import { useInView } from "react-intersection-observer"
import { useState } from "react"
import listOne from "../../json/mini-list-1.json"
import listTwo from "../../json/mini-list-2.json"
import "./styled.css"
import {
    DivModal,
    Section,
    DivProjects,
    TextDiv,
    Projects,
    UlProjects,
    LiProject,
    P,
    Strong,
    StyledCard,
    StyledAnchor,
    Pp,
    Img
} from "./styled"

export const ProjectsHome = () => {

    const projectsListOne = listOne.Projetos
    const projectsListTwo = listTwo.Projetos

    const [openModal, setOpenModal] = useState(Array(projectsListOne.length + projectsListTwo.length).fill(false))

    const toggleModal = (id: number) => {
        setOpenModal(() => {
            const newOpenModal = [...openModal]
            newOpenModal[id] = !newOpenModal[id]
            return newOpenModal
        })
    }

    const { ref, inView } = useInView({
        threshold: 0,
    })


    return (
        <Section ref={ref}>
            {inView && (
                <DivProjects>
                    <TextDiv>
                        <P>
                            Nessa pequena seção apresento alguns dos meus <Strong>projetos</Strong> em destaque, por favor sinta-se a vontade para olhá-los <Strong>em execução</Strong> ou até mesmo sua <Strong>escrita em código</Strong>!
                        </P>
                    </TextDiv>
                    <Projects>
                        <UlProjects className="ul-one">
                            {projectsListOne.map(item => {
                                return (
                                    <LiProject>
                                        <StyledCard onClick={() => toggleModal(item.id)}>
                                            <Img src={item.miniSprite}/>
                                            {openModal[item.id] ? (
                                                <DivModal>
                                                    <StyledAnchor href={item.site} target="_blank">IR PARA O SITE</StyledAnchor>
                                                    <StyledAnchor href={item.code} target="_blank">CÓDIGO ESCRITO</StyledAnchor>
                                                </DivModal>
                                            ) : (
                                                <>
                                                    <Pp>{item.name}</Pp>
                                                </>
                                            )}
                                        </StyledCard>
                                    </LiProject>
                                )
                            })}
                        </UlProjects>
                        <UlProjects className="ul-two">
                            {projectsListTwo.map(item => {
                                return (
                                    <LiProject>
                                        <StyledCard onClick={() => toggleModal(item.id)}>
                                            <Img src={item.miniSprite}></Img>
                                            {openModal[item.id] ? (
                                                <DivModal>
                                                    <StyledAnchor href={item.site} target="_blank">IR PARA O SITE</StyledAnchor>
                                                    <StyledAnchor href={item.code} target="_blank">CÓDIGO ESCRITO</StyledAnchor>
                                                </DivModal>
                                            ) : (
                                                <>
                                                    <Pp>{item.name}</Pp>
                                                </>
                                            )}
                                        </StyledCard>
                                    </LiProject>
                                )
                            })}
                        </UlProjects>
                    </Projects>
                </DivProjects>
            )
            }
        </Section >
    )
}