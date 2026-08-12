import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";
import { home } from "@/content/home";

export function ContactCta() {
  const { cta } = home;

  return (
    <section className="py-24 lg:py-36">
      <Container size="wide">
        <div className="reveal grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow">{cta.eyebrow}</p>
            <h2 className="mt-6 text-title">{cta.title}</h2>
            <p className="mt-6 max-w-lg text-lead text-muted">{cta.body}</p>
          </div>
          <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:items-end">
            <ActionLink href={cta.action.href} variant="solid">
              {cta.action.label}
            </ActionLink>
            <a
              href={cta.secondary.href}
              className="link-rule text-sm text-muted transition-colors duration-200 hover:text-fg"
            >
              {cta.secondary.label}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
