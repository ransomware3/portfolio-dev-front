import styled from "styled-components"

export const DivModal = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const Section = styled.section`
    width: 100%;
    height: 750px;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 3;
`

export const DivProjects = styled.div`
    width: 70%;
    height: 655px;
    border: 1px solid #7c93d1;
    position: absolute;
    top: -50px;
    background-color: #141316;
    display: flex;
    gap: 50px;
    justify-content: center;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    animation: RenderProjects 1s normal;

    @keyframes RenderProjects{
        0%{
            transform: translateY(60px);
            opacity: 0;
        }
        70%{
            transform: translateY(60px);
            opacity: 0;
        }
        100%{
            transform: translateY(0);
            opacity: 1;
        }
    }
`

export const TextDiv = styled.div`
    width: 40%;
    height: 100%;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const P = styled.p`
    font-size: 30px;
    line-height: 45px;
    font-family: sans-serif;
    color: #ccc;
    text-shadow: 5px 5px 2px #000;
`

export const Strong = styled.strong`
    font-weight: bold;
    color: #fff;
`

export const Projects = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
`

export const UlProjects = styled.ul`
    width: 280px;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
`

export const LiProject = styled.li`
    width: 250px;
    height: 305px;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    position: absolute;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

export const StyledCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.6 );
    transition: .3s;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #fff;
    // padding: 10px;
    cursor: pointer;

    &:hover{
        background-color: rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 50px rgba(0,0,0,0.9) inset;
    }
`

export const StyledAnchor = styled.a`
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #141316;
    border: 1px solid #7c93d1;
    color: #7c93d1;
    font-weight: bold;
    font-family: sans-serif;
    border-radius: 10px;
    transition: .2s;

    &:hover{
        background-color: #000;
        color: #fff;
    }
`

export const Pp = styled.p`
    font-size: 20px;
    font-family: sans-serif;
    font-weight: bold;
    color: #fff;
    padding: 10px;
    line-height: 30px;
    text-shadow: 5px 5px 2px #000;
    text-align: center;
    opacity: 0.5;
`