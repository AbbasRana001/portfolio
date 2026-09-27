import type { ComponentPropsWithoutRef } from "react";
import { Container } from "@/components/layout/container";

export function Section({ children, className = "", ...props }: ComponentPropsWithoutRef<"section">) {
  return (
    <section tabIndex={-1} className={`section-space ${className}`} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
