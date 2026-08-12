import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";
import { Frame } from "@/components/photography/Frame";
import { home } from "@/content/home";

export function StudioIntro() {
  const { intro } = home;

  return (
    <section className="border-b border-line py-20 lg:py-28">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-5">
            <Frame
              artwork={intro.artwork}
              ratio="landscape"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="reveal lg:col-span-7 lg:pl-8">
            <p className="eyebrow">{intro.eyebrow}</p>
            <h2 className="mt-6 text-heading">{intro.title}</h2>
            <div className="mt-8 space-y-5 text-lead text-muted">
              {intro.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10">
              <ActionLink href={intro.action.href}>{intro.action.label}</ActionLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
