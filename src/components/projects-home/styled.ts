import styled from "styled-components"

export const Section = styled.section`
    width: 100%;
    height: 750px;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 3;

    @media(max-width: 1380px){
        height: 800px;
    }

    @media(max-width: 810px){
        height: 850px;
    }

    @media(max-width: 670px){
        height: 900px;
    }
`

export const DivProjects = styled.div`
    width: 70%;
    max-width: 1900px;
    height: 655px;
    border: 1px solid #7c93d1;
    position: absolute;
    top: -50px;
    background-color: #141316;
    display: flex;
    gap: 50px;
    padding: 0 80px;
    justify-content: center;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    animation: RenderProjects 1s normal;

    @keyframes RenderProjects{
        from{
            transform: translateY(60px);
            opacity: 0;
        }
        to{
            transform: translateY(0);
            opacity: 1;
        }
    }

    @media(max-width: 1380px){
        flex-direction: column;
        height: 700px;
        padding: 50px 80px;
    }

    @media(max-width: 810px){
        height: 750px;
        gap: 30px;
    }

    @media(max-width: 670px){
        height: 800px;
    }

    @media(max-width: 610px){
        padding: 10px 20px
    }

    @media(max-width: 420px){
        width: 90%;
        gap: 50px;
    }
`

export const TextDiv = styled.div`
    width: 40%;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 1380px){
        width: 100%;
    }
`

export const P = styled.p`
    font-size: 30px;
    line-height: 45px;
    font-family: sans-serif;
    color: #ccc;
    text-shadow: 5px 5px 2px #000;

    @media(max-width: 1565px){
        font-size: 25px;
        line-height: 40px;
    }

    @media(max-width: 1050px){
        font-size: 20px;
        line-height: 35px;
    }

    @media(max-width: 790px){
        font-size: 18px;
        line-height: 30px;
    }

    @media(max-width: 420px){
        font-size: 15px;
        line-height: 25px;
    }
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

    @media(max-width: 790px){
        flex-direction: column;
        gap: 0;
    }

    @media(max-width: 610px){
        height: 60%;
    }
`

export const UlProjects = styled.ul`
    width: 280px;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;

    @media(max-width: 1565px){
        width: 240px;
        flex-direction: column;
        gap: 20px;
    }

    @media(max-width: 1380px){
        width: 50%;
    }

    @media(max-width: 790px){
        width: 100%;
    }
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

    @media(max-width: 1565px){
        width: 220px;
        height: 275px;
        position: static;
    }

    @media(max-width: 1380px){
        width: 95%;
        height: 200px;
    }

    @media(max-width: 790px){
        height: 100px;
    }
`

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

    @media(max-width: 930px){
        width: 150px;
        height: 60px;
    }

    @media(max-width: 790px){
        height: 30px;
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
    
    @media(max-width: 1050px){
        font-size: 16px;
        line-height: 25px;
    }
`