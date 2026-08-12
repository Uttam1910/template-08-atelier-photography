import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { contact } from "@/content/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Commission Atelier, or ask about prints and licensing. Studios in Lisbon and Copenhagen; every enquiry answered within two working days.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow={contact.eyebrow}
        title={contact.title}
        lead={contact.lead}
        aside={
          <dl className="space-y-7 border-t border-line pt-8">
            {contact.channels.map((channel) => (
              <div key={channel.label}>
                <dt className="eyebrow">{channel.label}</dt>
                <dd className="mt-2.5 text-sm">
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="link-rule transition-colors duration-200 hover:text-accent"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    channel.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="border-b border-line py-16 lg:py-24">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <h2 className="text-heading">{contact.form.title}</h2>
              <p className="mt-4 max-w-md border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">
                {contact.form.demoNotice}
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-5">
              <h2 className="eyebrow">Studios</h2>
              <div className="mt-8 space-y-10">
                {contact.locations.map((location) => (
                  <div key={location.city} className="border-t border-line pt-6">
                    <h3 className="font-display text-2xl tracking-tight">{location.city}</h3>
                    <address className="mt-4 space-y-1 text-sm not-italic text-muted">
                      {location.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                    <p className="mt-4 text-sm text-muted">{location.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
