import { createGlobalStyle } from "styled-components";
import variables from "./variables";


const GlobalStyle = createGlobalStyle`

  ${variables}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    font-size: 62.5%;

    scrollbar-width: thin;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  body {
    min-height: 100%;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    overflow-x: hidden;
    padding: 2rem 2vw;

    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    line-height: 1.3;
  }

  #root {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }


  h1, h2, h3
  h4, h5, h6 {
    margin:  0 0 1rem 0;
    font-weight: 600;
    line-height: 1.1;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    &:active, &:visited {
      color: inherit;
    }
  }
  
`;

export default GlobalStyle;
