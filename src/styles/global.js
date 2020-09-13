import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background-color: ${(props) => props.theme.background};

    ul {
      list-style-type: none;
    }

    a {
      color: inherit;
      font-weight: inherit;
      text-decoration: none;
    }
  }
`;