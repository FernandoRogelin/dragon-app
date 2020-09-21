import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.mystic};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100vh;
  }
`;

export default GlobalStyle;
