import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";
import { Frame } from "@/components/photography/Frame";
import { process, services, servicesCta, servicesIntro } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Architecture and interiors, editorial and documentary, brand and campaign, product and still life — plus how a commission runs from brief to delivery.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow={servicesIntro.eyebrow}
        title={servicesIntro.title}
        lead={servicesIntro.lead}
      />

      <section className="border-b border-line">
        <Container size="wide">
          <h2 className="sr-only">Service areas</h2>
          <div className="divide-y divide-line">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="reveal grid gap-8 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20"
              >
                <div className="lg:col-span-1">
                  <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="text-heading">{service.title}</h3>
                  <p className="mt-4 max-w-lg text-lead text-muted">{service.summary}</p>
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <ul className="mt-8 max-w-md">
                    {service.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="border-t border-line py-3 text-sm last:border-b"
                      >
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-5">
                  <Frame
                    artwork={service.artwork}
                    ratio="landscape"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16 lg:py-24">
        <Container size="wide">
          <p className="eyebrow">Process</p>
          <h2 className="mt-6 max-w-2xl text-heading">
            How a commission runs, from first call to final delivery
          </h2>
          <ol className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <li key={step.step} className="reveal border-t border-line pt-7">
                <span className="eyebrow">{step.step}</span>
                <h3 className="mt-4 font-display text-2xl tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container size="wide">
          <div className="reveal grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="text-title">{servicesCta.title}</h2>
              <p className="mt-6 max-w-lg text-lead text-muted">{servicesCta.body}</p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <ActionLink href={servicesCta.action.href} variant="solid">
                {servicesCta.action.label}
              </ActionLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
