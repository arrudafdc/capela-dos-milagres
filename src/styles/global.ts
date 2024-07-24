import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.black};
    font-family: "Libre Baskerville", serif;
    font-weight: 400;
  }
`;
