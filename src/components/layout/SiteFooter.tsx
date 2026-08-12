import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { contact } from "@/content/contact";
import { footerNav } from "@/content/navigation";
import { site } from "@/content/site";

export function SiteFooter() {
  // Resolved when the page is prerendered.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg">
      <Container size="wide">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl tracking-tight">
              {site.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {site.description}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow mb-5">Pages</h2>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-rule text-sm text-muted transition-colors duration-200 hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow mb-5">Studio</h2>
            <ul className="space-y-3 text-sm text-muted">
              {contact.channels.map((channel) => (
                <li key={channel.label}>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="link-rule transition-colors duration-200 hover:text-fg"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    channel.value
                  )}
                </li>
              ))}
              {contact.locations.map((location) => (
                <li key={location.city}>{location.city}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. A fictional studio, built as a website template.
          </p>
          <ul className="flex flex-wrap gap-6">
            {site.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  rel="noreferrer"
                  className="link-rule transition-colors duration-200 hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
