import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    
}
html,body{
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    font-family: "Sarala", sans-serif;
    background-color: #151515;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scroll-behavior: smooth;
}
`;

export default GlobalStyle;
