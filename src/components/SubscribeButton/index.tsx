import { Container } from "./styles";

interface SubscribeButtonProps {
  priceId: string;
}

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return <Container type="button">Subscribe now</Container>;
}
