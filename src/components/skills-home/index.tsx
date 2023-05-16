import { ImHtmlFive } from "react-icons/im"
import { ImCss3 } from "react-icons/im"
import { SiJavascript } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import {
    Section,
    Ul,
    Li,
    P
} from "./styled"

export const SkillsHome = () => (
    <Section>
        <Ul>
            <Li><ImHtmlFive /><P>HTML</P></Li>
            <Li><ImCss3 /><P>CSS</P></Li>
            <Li><SiJavascript /><P>JavaScript</P></Li>
            <Li><FaReact /><P>React</P></Li>
            <Li><SiTypescript /><P>TypeScript</P></Li>
        </Ul>
    </Section>
)