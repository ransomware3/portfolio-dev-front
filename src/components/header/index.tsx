import {
    HeaderTag,
    Nav,
    Ul,
    StyledLink
} from "./styled"

export const Header = () => (
    <HeaderTag id="top">
        <Nav>
            <Ul>
                <li><StyledLink to="/">INÍCIO</StyledLink></li>
                <li><StyledLink to="/">PROJETOS</StyledLink></li>
                <li><StyledLink to="/">REDES PROFISSIONAIS</StyledLink></li>
            </Ul>
        </Nav>
    </HeaderTag>
)