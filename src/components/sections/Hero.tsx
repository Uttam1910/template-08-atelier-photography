import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";
import { Frame } from "@/components/photography/Frame";
import { home } from "@/content/home";

export function Hero() {
  const { hero } = home;

  return (
    <section className="border-b border-line">
      <Container size="wide">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-7 lg:pr-8">
            <p className="eyebrow rise">{hero.eyebrow}</p>
            <h1 className="rise rise-1 mt-8 text-display">
              {hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="rise rise-2 mt-8 max-w-lg text-lead text-muted">{hero.lead}</p>
            <div className="rise rise-3 mt-10 flex flex-wrap items-center gap-4">
              <ActionLink href={hero.actions[0]!.href} variant="solid">
                {hero.actions[0]!.label}
              </ActionLink>
              <ActionLink href={hero.actions[1]!.href} variant="outline">
                {hero.actions[1]!.label}
              </ActionLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Frame
              artwork={hero.artwork}
              ratio="portrait"
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="rise rise-1"
            />
            <dl className="mt-6 grid grid-cols-3 border-t border-line pt-6">
              {hero.meta.map((item) => (
                <div key={item.label}>
                  <dt className="eyebrow">{item.label}</dt>
                  <dd className="mt-2 font-display text-xl tracking-tight">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
