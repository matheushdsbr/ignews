import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { Button } from "./styles";
import { signIn, signOut, useSession } from "next-auth/client";

export default function SignInButton() {
  const [session] = useSession();

  return session ? (
    <Button type="button" onClick={() => signOut()}>
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className="closeIcon" />
    </Button>
  ) : (
    <Button type="button" onClick={() => signIn("github")}>
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </Button>
  );
}
