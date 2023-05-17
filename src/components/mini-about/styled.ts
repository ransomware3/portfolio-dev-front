import styled from "styled-components"
import BgMyself from "../../assets/natan.png"

export const Section = styled.section`
    width: 100%;
    height: 750px;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 3;
`

export const DivAbout = styled.div`
    width: 70%;
    height: 600px;
    border: 1px solid #7c93d1;
    position: absolute;
    top: -50px;
    background-color: #141316;
    display: flex;
    padding: 90px;
    gap: 70px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    animation: RenderAbout 1s normal;

    @keyframes RenderAbout{
        0%{
            transform: translateY(-60px);
            opacity: 0;
        }
        70%{
            transform: translateY(-60px);
            opacity: 0;
        }
        100%{
            transform: translateY(0);
            opacity: 1;
        }
    }
`

export const DivImage = styled.div`
    width: 36%;
    height: 99%;
    border: 1px solid #444;
    background-position: center;
    background-size: contain;
    background-image: url(${BgMyself});
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

export const DivText = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
`

export const P = styled.p`
    font-size: 25px;
    line-height: 35px;
    font-family: sans-serif;
    color: #ccc;
    text-shadow: 5px 5px 2px #000;
`

export const Strong = styled.strong`
    font-weight: bold;
    color: #fff;
`

export const BtnAnchor = styled.a`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #7c93d1;
    border: 1px solid #7c93d1;
    background-color: #141316;
    border-radius: 50%;
    position: absolute;
    font-size: 25px;
    bottom: 50px;
    right: 100px;
    z-index: 5;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    &:hover{
        transform: scale(1.1);
    }
`