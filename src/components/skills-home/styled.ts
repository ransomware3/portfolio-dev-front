import styled from "styled-components"
import BgSkills from "../../assets/bg-7.png"

export const Section = styled.section`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${BgSkills});
    background-position: top;
    background-size: cover;
    background-attachment: fixed;
    position: relative;

    &::before{
        content: '';
        width: 100%;
        height: 20%;
        background-color: #111;
        background: -moz-linear-gradient(to top, rgba(1,1,1,0) 0, rgba(1,1,1,0) 40%, #141316 100%);
        background: linear-gradient(to top, rgba(1,1,1,0) 0, rgba(1,1,1,0) 40%, #141316 100%);
        position: absolute;
        top: 0;
        z-index: 2;
    }

    &::after{
        content: '';
        width: 100%;
        height: 20%;
        background-color: #111;
        background: -moz-linear-gradient(to bottom, rgba(1,1,1,0) 0, rgba(1,1,1,0) 40%, #141316 100%);
        background: linear-gradient(to bottom, rgba(1,1,1,0) 0, rgba(1,1,1,0) 40%, #141316 100%);
        position: absolute;
        bottom: 0;
        z-index: 2;
    }

    @media(max-width: 700px){
        height: 400px;
    }
`

export const Ul = styled.ul`
    width: 60%;
    max-width: 1800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 150px;

    @media(max-width: 830px){
        width: 75%;
    }

    @media(max-width: 700px){
        justify-content: center;
    }
`

export const Li = styled.li`
    font-size: 50px;
    color: #ccc;
    -webkit-filter: drop-shadow(5px 5px #141316);
    filter: drop-shadow(5px 5px #141316);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media(max-width: 700px){
        font-size: 40px;
    }
`

export const P = styled.p`
    font-size: 18px;
    font-weight: bold;
    font-family: sans-serif;

    @media(max-width: 700px){
        font-size: 16px;
    }
`