import styled from "styled-components"

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
    background: rgb(20,19,22);
    background: linear-gradient(180deg, rgba(20,19,22,1) 0%, #2d3959 100%);

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

export const Ul = styled.ul`
    width: 65%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 150px;
    padding: 200px 0;
    flex-wrap: wrap;
`

export const Li = styled.li`
    width: 500px;
    height: 260px;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    z-index: 3;
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
`