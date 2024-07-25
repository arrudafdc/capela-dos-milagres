import { List } from "@phosphor-icons/react";
import { Container } from "../../styles/global";
import { HeaderBg, HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderBg>
      <Container>
        <HeaderContainer>
          <h1>Believe</h1>
          <button>
            <List size={28} />
          </button>
          <nav>
            <ul>
              <li>A Rota</li>
              <li>Sustentabilidade</li>
              <li>Galeria</li>
              <li>Blog</li>
            </ul>
          </nav>
        </HeaderContainer>
      </Container>
    </HeaderBg>
  );
}
