import { Container, Content } from "./styles";

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
      </Content>
    </Container>
  );
}
