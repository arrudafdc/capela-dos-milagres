import styled from "styled-components";
import heroImage from "../../../public/main-bg.png";
import heroImageMobile from "../../../public/mobile-bg.png";

export const Hero = styled.div`
  background: gray;

  background: url(${heroImage}) no-repeat center center/cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.white};

  h1 {
    font-size: 5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.5rem;
    font-family: "Comfortaa", serif;
    text-align: center;
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1rem;
    }
    background: url(${heroImageMobile}) no-repeat center center/cover;
  }
  @media (max-width: 576px) {
    h1 {
      font-size: 2rem;
      padding: 0 1rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
