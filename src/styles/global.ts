import styled, { createGlobalStyle } from "styled-components";

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
  
  ul {
    list-style: none;
  }

`;

export const Container = styled.div`
  max-width: 100%;
  margin: 0 7.5rem;

  @media (max-width: 1200px) {
    margin: 0 2rem;
  }
`;
