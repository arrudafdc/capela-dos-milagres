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
              <li>
                <a href="#">A Rota</a>
              </li>
              <li>
                <a href="#">Sustentabilidade</a>
              </li>
              <li>
                <a href="#">Galeria</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
        </HeaderContainer>
      </Container>
    </HeaderBg>
  );
}
