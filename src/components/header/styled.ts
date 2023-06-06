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
    max-width: 1000px;

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

export const Li = styled.li`
    position: relative;
    display: flex;
    justify-content: center;
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

export const Label = styled.label`
    cursor: pointer;
    color: #ccc;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 14px;

    @media(max-width: 440px){
        font-size: 12px;
    }
`

export const Modal = styled.ul`
    width: 300px;
    height: 200px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #141316;
    border: 1px solid #7c93d1;
    border-radius: 8px;
    position: absolute;
    top: 30px;

    @media (max-width: 578px) {
        right: 20px;
    }

    @media (max-width: 394px) {
        right: 0px;
    }
`

export const Anchor = styled.a`
    color: #ccc;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 18px;
    transition: .2s;

    &:hover{
        color: #fff;
    }
`