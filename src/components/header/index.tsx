import {
    HeaderTag,
    Nav,
    Ul,
    Li,
    StyledLink,
    Label,
    Modal,
    Anchor
} from "./styled"
import "./style.css"

export const Header = () => (
    <HeaderTag id="top">
        <Nav>
            <Ul>
                <Li><StyledLink to="/">INÍCIO</StyledLink></Li>
                <Li><StyledLink to="/projetos">PROJETOS</StyledLink></Li>
                <Li>
                    <Label className="label-box" htmlFor="links">REDES PROFISSIONAIS</Label>
                    <input className="box" type="checkbox" id="links"></input>
                    <Modal className="modal">
                        <Li>
                            <Anchor href="https://www.linkedin.com/in/natan-iori-baldo-9b5a3a241/" target="_blank">LINKEDIN</Anchor>
                        </Li>
                        <Li>
                            <Anchor href="https://github.com/ransomware3" target="_blank">GITHUB</Anchor>
                        </Li>
                        <Li>
                            <Anchor href="https://www.instagram.com/iori.natan_/" target="_blank">INSTAGRAM</Anchor>
                        </Li>
                    </Modal>
                </Li>
            </Ul>
        </Nav>
    </HeaderTag>
)