import { Container } from "../../styles/global";
import { FooterContainer } from "./styles";
import tamojuntoLogo from "../../../public/tamojunto-logo.svg";

export function Footer() {
  return (
    <FooterContainer>
      <Container>
        <img src={tamojuntoLogo} alt="" />
        <p>Copyright © 2024 todos os direitos reservados.</p>
      </Container>
    </FooterContainer>
  );
}
