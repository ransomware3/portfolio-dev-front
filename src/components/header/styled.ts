import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderTag = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 3;
`

export const Nav = styled.nav`
    width: 25%;

    @media(max-width: 1260px){
        width: 35%;
    }

    @media(max-width: 900px){
        width: 45%;
    }

    @media(max-width: 700px){
        width: 75%;
    }

    @media(max-width: 440px){
        width: 80%;
    }
`

export const Ul = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const StyledLink = styled(Link)`
    color: #ccc;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 14px;

    @media(max-width: 440px){
        font-size: 12px;
    }
`