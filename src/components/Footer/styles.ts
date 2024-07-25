import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 180px;
  background: #173f36;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Comfortaa", serif;
  color: ${(props) => props.theme.white};

  p {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
`;
