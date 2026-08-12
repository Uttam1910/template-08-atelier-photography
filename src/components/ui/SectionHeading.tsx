import type { ReactNode } from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  /** Defaults to h2; use h1 only where the page has no other heading. */
  as?: "h1" | "h2" | "h3";
  align?: "start" | "between";
  action?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  as: Tag = "h2",
  align = "start",
  action,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        align === "between" ? "md:flex-row md:items-end md:justify-between" : ""
      } ${className}`}
    >
      <div className="max-w-2xl">
        {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
        <Tag className={Tag === "h1" ? "text-title" : "text-heading"}>{title}</Tag>
        {lead ? <p className="mt-5 max-w-xl text-lead text-muted">{lead}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
