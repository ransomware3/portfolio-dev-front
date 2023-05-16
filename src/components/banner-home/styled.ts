import styled from "styled-components"
import Bg from "../../assets/bg-1.png"

export const Section = styled.section`
    width: 100%;
    height: 110vh;
    background-image: url(${Bg});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Fira Code', monospace;
    background-attachment: fixed;
    position: relative;
    z-index: 1;

    &::after{
        content: '';
        width: 100%;
        height: 20%;
        background-color: #111;
        background: -moz-linear-gradient(to bottom, rgba(1,1,1,0) 0, rgba(1,1,1,0) 20%, #141316 100%);
        background: linear-gradient(to bottom, rgba(1,1,1,0) 0, rgba(1,1,1,0) 20%, #141316 100%);
        position: absolute;
        bottom: 0;
        z-index: 2;
    }
`

export const H1 = styled.h1`
    font-size: 65px;
    font-weight: 400;
    margin-left: 150px;

    animation: View 1s normal;

    @keyframes View {
        from{
            opacity: 0;
            transform: translateX(-50px);
        }
        to{
            opacity: 1;
            transform: translateX(0);
        }
    }
`

export const H2 = styled.h2`
    max-width: 820px;
    border-right: 6px solid rgba(255, 255, 255, 0.5);
    font-size: 45px;
    font-weight: 400;
    margin-left: 190px;
    white-space: nowrap;
    overflow: hidden;

    animation: Cursor 500ms steps(30) infinite normal,
    Write 4s steps(30) .5s normal both;

    @keyframes Cursor {
        from{
            border-right-color: rgba(255, 255, 255, 0.5);
        }
        to{
            border-right-color: transparent;
        }
    }

    @keyframes Write {
        from{
            width: 0;
        }
        to{
            width: 820px;
        }
    }
`