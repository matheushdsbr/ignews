import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { Container } from "./styles";

export default function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <Container type="button">
      <FaGithub color="#04d361" />
      Matheus Silva
      <FiX color="#737380" className="closeIcon" />
    </Container>
  ) : (
    <Container type="button">
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </Container>
  );
}
