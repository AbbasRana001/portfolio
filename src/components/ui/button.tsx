import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type ButtonStyle = { variant?: "primary" | "secondary" | "ghost" };
type ButtonProps = ComponentPropsWithoutRef<"button"> & ButtonStyle;
type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & ButtonStyle;

export function Button({ variant = "primary", className = "", type = "button", ...props }: ButtonProps) {
  return <button type={type} className={`button button-${variant} ${className}`} {...props} />;
}

/** Links navigate; buttons perform actions. Keep native semantics for each. */
export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return <Link className={`button button-${variant} ${className}`} {...props} />;
}
