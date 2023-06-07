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

    // const [openModal1, setOpenModal1] = useState<boolean>(false)
    // const [openModal2, setOpenModal2] = useState<boolean>(false)
    // const [openModal3, setOpenModal3] = useState<boolean>(false)
    // const [openModal4, setOpenModal4] = useState<boolean>(false)
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
                        <UlProjects>
                            {projectsListOne.map(item => {
                                return (
                                    <LiProject>
                                        <StyledCard onClick={() => toggleModal(item.id)}>
                                            {openModal[item.id] ? (
                                                <DivModal>
                                                    <StyledAnchor href={item.site} target="_blank">IR PARA O SITE</StyledAnchor>
                                                    <StyledAnchor href={item.code} target="_blank">CÓDIGO ESCRITO</StyledAnchor>
                                                </DivModal>
                                            ) : (
                                                <>
                                                    <Img src={item.miniSprite}></Img>
                                                    {/* <Pp>{item.name}</Pp> */}
                                                </>
                                            )}
                                        </StyledCard>
                                    </LiProject>
                                )
                            })}
                            {/* <LiProject className="pokemon" style={{ top: "-50px" }}><StyledCard onClick={() => setOpenModal1(!openModal1)}>
                                {openModal1 ? (
                                    <DivModal>
                                        <StyledAnchor href="https://desafio-pokemon-react.vercel.app/" target="_blank">IR PARA O SITE</StyledAnchor>
                                        <StyledAnchor href="https://github.com/ransomware3/desafio-pokemon-react" target="_blank">CÓDIGO ESCRITO</StyledAnchor>
                                    </DivModal>
                                ) : (<Pp>Pokédex - Poke API</Pp>)}
                            </StyledCard></LiProject>
                            <LiProject className="peao" style={{ bottom: "50px" }}><StyledCard onClick={() => setOpenModal2(!openModal2)}>
                                {openModal2 ? (
                                    <DivModal>
                                        <StyledAnchor href="https://projeto-peaodovalle-e-valentin.vercel.app/" target="_blank">IR PARA O SITE</StyledAnchor>
                                        <StyledAnchor href="https://github.com/ransomware3/projeto-peaodovalle-e-valentin" target="_blank">CÓDIGO ESCRITO</StyledAnchor>
                                    </DivModal>
                                ) : (<Pp>Peão do Valle & Valentin</Pp>)}
                            </StyledCard></LiProject> */}
                        </UlProjects>
                        <UlProjects>
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
                            {/* <LiProject className="github" style={{ top: "50px" }}><StyledCard onClick={() => setOpenModal3(!openModal3)}>
                                {openModal3 ? (
                                    <DivModal>
                                        <StyledAnchor href="https://ransomware3.github.io/projeto-fetch-github-api/" target="_blank">IR PARA O SITE</StyledAnchor>
                                        <StyledAnchor href="https://github.com/ransomware3/projeto-fetch-github-api" target="_blank">CÓDIGO ESCRITO</StyledAnchor>
                                    </DivModal>
                                ) : (<Pp>Buscador de Perfil Github API</Pp>)}
                            </StyledCard></LiProject>
                            <LiProject className="adas" style={{ bottom: "-50px" }}><StyledCard onClick={() => setOpenModal4(!openModal4)}>
                                {openModal4 ? (
                                    <DivModal>
                                        <StyledAnchor href="https://adas-saude-seguros.vercel.app/" target="_blank">IR PARA O SITE</StyledAnchor>
                                        <StyledAnchor href="https://github.com/ransomware3/projeto-adas-saude" target="_blank">CÓDIGO ESCRITO</StyledAnchor>
                                    </DivModal>
                                ) : (<Pp>Adas Saúde Seguros</Pp>)}
                            </StyledCard></LiProject> */}
                        </UlProjects>
                    </Projects>
                </DivProjects>
            )
            }
        </Section >
    )
}