import styled from "styled-components";
import heroImage from "../../../public/main-bg.png";
import heroImageMobile from "../../../public/mobile-bg.png";
import image1 from "../../../public/about/image1.png";
import image2 from "../../../public/about/image2.png";
import image3 from "../../../public/about/image3.png";
import image4 from "../../../public/about/image4.png";
import image5 from "../../../public/about/image5.png";
import image6 from "../../../public/about/image6.png";
import image7 from "../../../public/about/image7.png";
import teste from "../../../public/about/teste.png";

export const Hero = styled.div`
  background: gray;

  background: url(${heroImage}) no-repeat center center/cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7.5rem;

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

export const AboutSection = styled.section`
  margin-bottom: 12.5rem;

  p {
    font-size: 2.25rem;
    margin-bottom: 2.75rem;
  }

  @media (max-width: 992px) {
    p {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 576px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const AboutImageGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  height: 500px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image1 = styled.div`
  background: url(${image1}) no-repeat center center/cover;
`;

export const Image2 = styled.div`
  background: url(${image2}) no-repeat center center/cover;
`;

export const Image3 = styled.div`
  background: url(${image3}) no-repeat center center/cover;
`;

export const Teste = styled.div`
  display: none;
  background: url(${teste}) no-repeat center center/cover;

  @media (max-width: 768px) {
    display: block;
    height: 700px;
  }
`;

export const AboutImageGridTwo = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: 600px;
`;

export const AuxGridTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    height: 100%;
  }
`;

export const Image4 = styled.div`
  background: url(${image4}) no-repeat center center/cover;
`;

export const Image5 = styled.div`
  background: url(${image5}) no-repeat center center/cover;
`;

export const Image6 = styled.div`
  background: url(${image6}) no-repeat center center/cover;
`;

export const AboutImageGridThree = styled.section`
  display: flex;
  justify-content: center;

  div {
    width: 820px;
    height: 1000px;
    padding: 6.25rem 6.25rem 0 6.25rem;

    p {
      color: ${(props) => props.theme.white};
      text-align: center;
      font-size: 1.75rem;
    }

    @media (max-width: 992px) {
      padding: 6.25rem 4rem 0 4rem;
      p {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 768px) {
      p {
        font-size: 1.25rem;
      }
    }

    @media (max-width: 576px) {
      padding: 6.25rem 2rem 0 2rem;
      p {
        font-size: 1rem;
      }
    }
  }
`;

export const Image7 = styled.div`
  background: url(${image7}) no-repeat center center/cover;
`;
