import type { ElementType, ReactNode } from "react";

export interface ContainerProps {
  as?: ElementType;
  size?: "default" | "wide" | "narrow";
  className?: string;
  children: ReactNode;
}

const SIZE_CLASS = {
  narrow: "max-w-3xl",
  default: "max-w-[86rem]",
  wide: "max-w-[104rem]",
} as const;

export function Container({
  as: Tag = "div",
  size = "default",
  className = "",
  children,
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full px-6 sm:px-8 lg:px-12 ${SIZE_CLASS[size]} ${className}`}>
      {children}
    </Tag>
  );
}
