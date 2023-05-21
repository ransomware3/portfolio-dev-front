import styled from "styled-components"

export const FooterTag = styled.footer`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #141316;
`

export const Limiter = styled.div`
    max-width: 1900px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: sans-serif;
    color: #ccc;

    @media(max-width: 700px){
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }

    @media(max-width: 550px){
        font-size: 13px;
    }
`

export const MiniContainer = styled.div`
    width: 95%;
    height: 100%;
    border-top: 1px solid #7c93d1;
    display: flex;
    justify-content: center;
`