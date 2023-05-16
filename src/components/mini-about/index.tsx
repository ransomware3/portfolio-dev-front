import { useInView } from "react-intersection-observer"
import { IoIosArrowUp } from "react-icons/io"
import {
    Section,
    DivAbout,
    DivImage,
    DivText,
    P,
    Strong,
    BtnAnchor
} from "./styled"

export const MiniAbout = () => {

    const { ref, inView } = useInView({
        threshold: 0,
    })

    return (
        <Section ref={ref}>
            {inView && (
                <DivAbout>
                    <DivImage></DivImage>
                    <DivText>
                        <P>
                            Sou um <Strong>desenvolvedor web Front-End</Strong>, sou fascinado com o mundo da tecnologia
                            e computadores desde garoto, então para realizar meu sonho de construir minha carreira nesse ramo comecei a estudar <Strong>programação</Strong>, hoje me sinto pronto para somar em um time, tendo como hard skills <Strong>HTML</Strong>, <Strong>CSS</Strong>, <Strong>JavaScript</Strong>, <Strong>Git</Strong>, <Strong>TypeScript</Strong> e <Strong>React</Strong>.
                        </P>
                    </DivText>
                </DivAbout>
            )}
        <BtnAnchor href="#top"><IoIosArrowUp/></BtnAnchor>
        </Section>
    )
}