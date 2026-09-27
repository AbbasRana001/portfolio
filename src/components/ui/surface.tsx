import type { ComponentPropsWithoutRef } from "react";

export function Surface({ className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={`surface ${className}`} {...props} />;
}
