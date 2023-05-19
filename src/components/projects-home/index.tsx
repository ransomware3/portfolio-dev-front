import { useInView } from "react-intersection-observer"
import { useState } from "react"
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
    Pp
} from "./styled"

export const ProjectsHome = () => {

    const [openModal1, setOpenModal1] = useState<boolean>(false)
    const [openModal2, setOpenModal2] = useState<boolean>(false)
    const [openModal3, setOpenModal3] = useState<boolean>(false)
    const [openModal4, setOpenModal4] = useState<boolean>(false)

    const { ref, inView } = useInView({
        threshold: 0,
    })


    return (
        <Section ref={ref}>
            {inView && (
                <DivProjects>
            <TextDiv onClick={() => {
                    setOpenModal1(false)
                    setOpenModal2(false)
                    setOpenModal3(false)
                    setOpenModal4(false)
                }}>
                <P>
                    Nessa pequena seção apresento alguns dos meus <Strong>projetos</Strong> em destaque, por favor sinta-se a vontade para olhá-los <Strong>em execução</Strong> ou até mesmo sua <Strong>escrita em código</Strong>!
                </P>
            </TextDiv>
            <Projects>
                <UlProjects>
                    <LiProject className="pokemon" style={{ top: "-50px" }}><StyledCard onClick={() => setOpenModal1(!openModal1)}>
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
                    </StyledCard></LiProject>
                </UlProjects>
                <UlProjects>
                    <LiProject className="github" style={{ top: "50px" }}><StyledCard onClick={() => setOpenModal3(!openModal3)}>
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
                    </StyledCard></LiProject>
                </UlProjects>
            </Projects>
        </DivProjects>
    )
}
        </Section >
    )
}