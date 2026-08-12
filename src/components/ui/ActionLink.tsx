import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export interface ActionLinkProps {
  href: string;
  children: string;
  variant?: "solid" | "outline" | "text";
  className?: string;
}

const BASE =
  "inline-flex items-center gap-2.5 text-sm transition-colors duration-200";

const VARIANT = {
  solid:
    "bg-fg text-bg px-6 py-3.5 hover:bg-accent hover:text-accent-contrast tracking-tight",
  outline:
    "border border-line-strong px-6 py-3.5 text-fg hover:border-accent hover:text-accent tracking-tight",
  text: "text-fg hover:text-accent tracking-tight",
} as const;

export function ActionLink({
  href,
  children,
  variant = "text",
  className = "",
}: ActionLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const Icon = variant === "text" ? ArrowRight : ArrowUpRight;
  const content = (
    <>
      <span className={variant === "text" ? "link-rule" : undefined}>{children}</span>
      <Icon aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={1.5} />
    </>
  );
  const classes = `${BASE} ${VARIANT[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
