import { Link } from "react-router";
import { Container } from "../shared/components/Container";

export const NotFound = () => (
  <Container className="pt-40">
    <h1 className="text-6xl font-extrabold tracking-tighter">Page not found.</h1>
    <Link to="/" className="mt-6 inline-block text-primary">Back to home</Link>
  </Container>
);
