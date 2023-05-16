import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        height: 100vh;
        background-color: #141316;
        color: #fff;
    }

    ul{
        list-style-type: none;
    }

    a{
        color: #000;
        text-decoration: none;
    }
`