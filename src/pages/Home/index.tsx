import { Container } from "../../styles/global";
import {
  AboutImageGrid,
  AboutImageGridThree,
  AboutImageGridTwo,
  AboutSection,
  AuxGridTwo,
  Hero,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Teste,
} from "./styles";

export function Home() {
  return (
    <>
      <Hero>
        <div>
          <h1>We Believe In Love</h1>
          <p>Rota Ecológica dos Milagres, Alagoas</p>
        </div>
      </Hero>
      <AboutSection>
        <Container>
          <p>
            A Capela dos Milagres é feita de amor. E quando essa é a base da
            construção, Milagres tornam-se realidade para muitos e inifinitos
            sonhos.
          </p>
          <AboutImageGrid>
            <Image1></Image1>
            <Image2></Image2>
            <Image3></Image3>
          </AboutImageGrid>
          <Teste></Teste>
        </Container>
      </AboutSection>
      <AboutSection>
        <Container>
          <p>
            A Capela tem uma área total de 180 m² e capacidade interna para 180
            pessoas, sendo 120 sentadas nos 20 bancos de madeira... As demais
            pessoas podem assistir através das 6 janelas da Capela!
          </p>
          <AboutImageGridTwo>
            <Image4></Image4>
            <AuxGridTwo>
              <Image5></Image5>
              <Image6></Image6>
            </AuxGridTwo>
          </AboutImageGridTwo>
        </Container>
      </AboutSection>
      <AboutSection>
        <Container>
          <AboutImageGridThree>
            <Image7>
              <p>
                Temos duas áreas intimistas cobertas, rodeadas de paisagismo
                tropical. Uma com 7M X 35M e outra com 7M X 28M. Além de
                banheiros climatzizados, sala da noiva, espaço para o buffet e
                staff.
              </p>
            </Image7>
          </AboutImageGridThree>
        </Container>
      </AboutSection>
    </>
  );
}
