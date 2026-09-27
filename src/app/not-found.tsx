import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container>
      <div className="section-space">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-4 text-4xl">Page not found</h1>
        <p className="mt-4 text-muted">This page does not exist.</p>
        <Link className="mt-6 inline-flex min-h-11 items-center text-accent underline underline-offset-4" href="/">Return home</Link>
      </div>
    </Container>
  );
}
