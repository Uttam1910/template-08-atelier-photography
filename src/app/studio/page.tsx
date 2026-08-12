import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { ContactCta } from "@/components/sections/ContactCta";
import { Container } from "@/components/ui/Container";
import { Frame } from "@/components/photography/Frame";
import { studio } from "@/content/studio";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Studio",
  description:
    "Atelier is a six-person photography studio in Lisbon and Copenhagen, working across architecture, culture and craft since 2014.",
  path: "/studio",
});

export default function StudioPage() {
  return (
    <>
      <PageHeader
        eyebrow={studio.eyebrow}
        title={studio.title}
        lead={studio.lead}
        aside={
          <dl className="grid grid-cols-2 gap-y-7 border-t border-line pt-8">
            {studio.facts.slice(0, 4).map((fact) => (
              <div key={fact.label}>
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="mt-2.5 text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="border-b border-line py-16 lg:py-24">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="reveal lg:col-span-7">
              <h2 className="eyebrow">The story</h2>
              <div className="mt-8 space-y-6 text-lead text-muted">
                {studio.story.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="reveal lg:col-span-5">
              <Frame
                artwork={studio.portrait}
                ratio="tall"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16 lg:py-24">
        <Container size="wide">
          <p className="eyebrow">{studio.philosophy.eyebrow}</p>
          <h2 className="mt-6 max-w-2xl text-heading">{studio.philosophy.title}</h2>
          <ul className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {studio.philosophy.items.map((item, index) => (
              <li key={item.title} className="reveal border-t border-line pt-7">
                <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line py-16 lg:py-24">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">{studio.capabilities.eyebrow}</p>
              <h2 className="mt-6 text-heading">{studio.capabilities.title}</h2>
            </div>
            <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
              {studio.capabilities.items.map((item) => (
                <li key={item} className="border-b border-line py-4 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16 lg:py-20">
        <Container size="wide">
          <h2 className="eyebrow">Studio facts</h2>
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
            {studio.facts.map((fact) => (
              <div key={fact.label} className="border-t border-line pt-5">
                <dt className="text-xs text-muted">{fact.label}</dt>
                <dd className="mt-2 font-display text-2xl tracking-tight">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <ClientStrip />
      <ContactCta />
    </>
  );
}
