import styled from "styled-components";

export const HeaderBg = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2.5rem 0;
  color: ${(props) => props.theme.white};

  h1 {
    font-size: 1rem;
    text-transform: uppercase;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: none;
  }

  ul {
    display: flex;
    text-transform: uppercase;
    gap: 3rem;
    font-family: "Comfortaa", serif;
  }

  a {
    text-decoration: none;
    color: white;
    position: relative;
  }

  a:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px; /* Ajuste a posição da linha */
    width: 0;
    height: 1px; /* Ajuste a altura da linha */
    background-color: white;
    transition: width 0.3s ease-in-out; /* Transição para a animação */
  }

  a:hover::after {
    width: 100%; /* Define a largura completa no hover */
  }
  @media (max-width: 1200px) {
    nav {
      display: none;
    }
    button {
      display: block;
      background: transparent;
      border: 0;
      color: ${(props) => props.theme.white};
    }
  }
`;
