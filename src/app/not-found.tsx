import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";
import { primaryNav } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for is not here.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-28 lg:py-40">
      <Container size="wide">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-7 max-w-2xl text-title">
          This frame didn&rsquo;t make the edit.
        </h1>
        <p className="mt-7 max-w-md text-lead text-muted">
          The page you were looking for has moved or never existed. The work is all still here.
        </p>

        <div className="mt-12">
          <ActionLink href="/" variant="solid">
            Back to the index
          </ActionLink>
        </div>

        <nav aria-label="Site sections" className="mt-16 max-w-md border-t border-line">
          <ul>
            {primaryNav.map((item) => (
              <li key={item.href} className="border-b border-line">
                <ActionLink href={item.href} className="w-full justify-between py-4">
                  {item.label}
                </ActionLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
