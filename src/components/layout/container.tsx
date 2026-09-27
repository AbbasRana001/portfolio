import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  width?: "default" | "narrow";
};

export function Container({ children, width = "default", className = "", ...props }: ContainerProps) {
  return <div className={`page-container container-${width} ${className}`} {...props}>{children}</div>;
}
