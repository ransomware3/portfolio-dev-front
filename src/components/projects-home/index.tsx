import { useInView } from "react-intersection-observer"
import "./styled.css"
import {
    Section,
    DivProjects,
    TextDiv,
    Projects,
    UlProjects,
    LiProject,
    P,
    Strong,
    StyledAnchor,
    Pp
} from "./styled"

export const ProjectsHome = () => {

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
                            <LiProject className="pokemon" style={{ top: "-50px" }}><StyledAnchor target="_blank" href="https://desafio-pokemon-react.vercel.app/"><Pp>Pokédex - Poke API</Pp></StyledAnchor></LiProject>
                            <LiProject className="peao" style={{ bottom: "50px" }}><StyledAnchor target="_blank" href="https://projeto-peaodovalle-e-valentin.vercel.app/"><Pp>Peão do Valle & Valentin</Pp></StyledAnchor></LiProject>
                        </UlProjects>
                        <UlProjects>
                            <LiProject className="github" style={{ top: "50px" }}><StyledAnchor target="_blank" href="https://ransomware3.github.io/projeto-fetch-github-api/"><Pp>Buscador de Perfil Github API</Pp></StyledAnchor></LiProject>
                            <LiProject className="adas" style={{ bottom: "-50px" }}><StyledAnchor target="_blank" href="https://adas-saude-seguros.vercel.app/"><Pp>Adas Saúde Seguros</Pp></StyledAnchor></LiProject>
                        </UlProjects>
                    </Projects>
                </DivProjects>
            )}
        </Section>
    )
}