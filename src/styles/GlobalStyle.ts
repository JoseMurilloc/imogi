import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #1B1D24;
    overflow: hidden;
  }

  ::-webkit-scrollbar {
    background-color: #1B1D24;
    width: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #121214;
    border-radius: 2rem;
  }
`;
