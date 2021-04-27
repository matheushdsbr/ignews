import { Container, Content } from "./styles";
import SignInButton from "../SignInButton";

export default function Header() {
  return (
    <Container>
      <Content>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          <a href="" className="active">
            Home
          </a>
          <a href="">Posts</a>
        </nav>

        <SignInButton />
      </Content>
    </Container>
  );
}
