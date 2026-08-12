import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { disciplines } from "@/content/studio";
import { home } from "@/content/home";

export function Disciplines() {
  return (
    <section className="border-b border-line py-20 lg:py-28">
      <Container size="wide">
        <SectionHeading
          eyebrow={home.disciplines.eyebrow}
          title={home.disciplines.title}
          align="between"
          action={
            <ActionLink href={home.disciplines.action.href}>
              {home.disciplines.action.label}
            </ActionLink>
          }
        />

        <ul className="mt-14 border-t border-line">
          {disciplines.map((discipline, index) => (
            <li
              key={discipline.title}
              className="reveal grid gap-3 border-b border-line py-8 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <span className="eyebrow md:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl tracking-tight md:col-span-4">
                {discipline.title}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted md:col-span-7">
                {discipline.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
