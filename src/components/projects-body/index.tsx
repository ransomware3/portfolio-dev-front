import { useState } from "react"
import { Header } from "../header"
import { Footer } from "../footer"
import BgPokemon from "../../assets/pokemon2.png"
import BgAdas from "../../assets/adas2.png"
import BgGithub from "../../assets/github2.png"
import BgPeao from "../../assets/peao2.png"
import BgRank from "../../assets/rank2.png"
import BgAdvice from "../../assets/advice2.png"
import BgMarvel from "../../assets/marvel2.png"
import BgPokemonSlide from "../../assets/slide-poke2.png"
import BgForm from "../../assets/form2.png"
import BgNFT from "../../assets/nft2.png"
import {
    Main,
    Ul,
    Li,
    DivModal,
    StyledAnchor
} from "./styled"

export const ProjectsBody = () => {

    const [openModal1, setOpenModal1] = useState<boolean>(false)
    const [openModal2, setOpenModal2] = useState<boolean>(false)
    const [openModal3, setOpenModal3] = useState<boolean>(false)
    const [openModal4, setOpenModal4] = useState<boolean>(false)
    const [openModal5, setOpenModal5] = useState<boolean>(false)
    const [openModal6, setOpenModal6] = useState<boolean>(false)
    const [openModal7, setOpenModal7] = useState<boolean>(false)
    const [openModal8, setOpenModal8] = useState<boolean>(false)
    const [openModal9, setOpenModal9] = useState<boolean>(false)
    const [openModal10, setOpenModal10] = useState<boolean>(false)

    return (
        <>
            <Header />
            <Main>
                <Ul>
                    <Li onClick={() => setOpenModal1(!openModal1)} style={{ backgroundImage: `url(${BgPokemon})` }}>
                        {openModal1 && (
                            <DivModal>
                                <StyledAnchor target="_blank" href="https://google.com">teste</StyledAnchor>
                                <StyledAnchor target="_blank" href="https://google.com">teste2</StyledAnchor>
                            </DivModal>
                        )}
                    </Li>
                    <Li onClick={() => setOpenModal2(!openModal2)} style={{ backgroundImage: `url(${BgAdas})` }}>
                        {openModal2 && (
                            <DivModal>
                                <StyledAnchor target="_blank" href="https://google.com">teste</StyledAnchor>
                                <StyledAnchor target="_blank" href="https://google.com">teste2</StyledAnchor>
                            </DivModal>
                        )}
                    </Li>
                    <Li onClick={() => setOpenModal3(!openModal3)} style={{ backgroundImage: `url(${BgGithub})` }}>
                        {openModal3 && (
                            <DivModal>
                                <StyledAnchor target="_blank" href="https://google.com">teste</StyledAnchor>
                                <StyledAnchor target="_blank" href="https://google.com">teste2</StyledAnchor>
                            </DivModal>
                        )}
                    </Li>
                    <Li onClick={() => setOpenModal4(!openModal4)} style={{ backgroundImage: `url(${BgAdvice})` }}>
                        {openModal4 && (
                            <DivModal>
                                <StyledAnchor target="_blank" href="https://google.com">teste</StyledAnchor>
                                <StyledAnchor target="_blank" href="https://google.com">teste2</StyledAnchor>
                            </DivModal>
                        )}
                    </Li>
                    <Li onClick={() => setOpenModal5(!openModal5)} style={{ backgroundImage: `url(${BgForm})` }}>
                        {openModal5 && (
                            <DivModal>
                                <StyledAnchor target="_blank" href="https://google.com">teste</StyledAnchor>
                                <StyledAnchor target="_blank" href="https://google.com">teste2</StyledAnchor>
                            </DivModal>
                        )}
                    </Li>
                    <Li onClick={() => setOpenModal6(!openModal6)} style={{ backgroundImage: `url(${BgMarvel})` }}>
                        {openModal6 && (
                            <DivModal>
                                <StyledAnchor target="_blank" href="https://google.com">teste</StyledAnchor>
                                <StyledAnchor target="_blank" href="https://google.com">teste2</StyledAnchor>
                            </DivModal>
                        )}
                    </Li>
                    <Li onClick={() => setOpenModal7(!openModal7)} style={{ backgroundImage: `url(${BgPokemonSlide})` }}>
                        {openModal7 && (
                            <DivModal>
                                <StyledAnchor target="_blank" href="https://google.com">teste</StyledAnchor>
                                <StyledAnchor target="_blank" href="https://google.com">teste2</StyledAnchor>
                            </DivModal>
                        )}
                    </Li>
                    <Li onClick={() => setOpenModal8(!openModal8)} style={{ backgroundImage: `url(${BgPeao})` }}>
                        {openModal8 && (
                            <DivModal>
                                <StyledAnchor target="_blank" href="https://google.com">teste</StyledAnchor>
                                <StyledAnchor target="_blank" href="https://google.com">teste2</StyledAnchor>
                            </DivModal>
                        )}
                    </Li>
                    <Li onClick={() => setOpenModal9(!openModal9)} style={{ backgroundImage: `url(${BgRank})` }}>
                        {openModal9 && (
                            <DivModal>
                                <StyledAnchor target="_blank" href="https://google.com">teste</StyledAnchor>
                                <StyledAnchor target="_blank" href="https://google.com">teste2</StyledAnchor>
                            </DivModal>
                        )}
                    </Li>
                    <Li onClick={() => setOpenModal10(!openModal10)} style={{ backgroundImage: `url(${BgNFT})` }}>
                        {openModal10 && (
                            <DivModal>
                                <StyledAnchor target="_blank" href="https://google.com">teste</StyledAnchor>
                                <StyledAnchor target="_blank" href="https://google.com">teste2</StyledAnchor>
                            </DivModal>
                        )}
                    </Li>
                </Ul>
            </Main>
            <Footer />
        </>
    )
}