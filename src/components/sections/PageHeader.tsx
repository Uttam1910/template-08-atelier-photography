import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
  aside?: ReactNode;
}

/** The h1 block used by every inner page. */
export function PageHeader({ eyebrow, title, lead, aside }: PageHeaderProps) {
  return (
    <section className="border-b border-line">
      <Container size="wide">
        <div className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-8">
            <p className="eyebrow rise">{eyebrow}</p>
            <h1 className="rise rise-1 mt-7 max-w-3xl text-title">{title}</h1>
            {lead ? (
              <p className="rise rise-2 mt-7 max-w-xl text-lead text-muted">{lead}</p>
            ) : null}
          </div>
          {aside ? (
            <div className="rise rise-2 lg:col-span-4 lg:pt-2">{aside}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
