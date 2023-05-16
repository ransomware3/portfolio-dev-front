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
`