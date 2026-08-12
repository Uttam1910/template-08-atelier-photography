import { Container } from "@/components/ui/Container";
import { clientStrip, clients } from "@/content/studio";

export function ClientStrip({ heading = "h2" }: { heading?: "h2" | "h3" }) {
  const Heading = heading;

  return (
    <section className="border-b border-line py-16 lg:py-20">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="eyebrow">{clientStrip.eyebrow}</p>
            <Heading className="mt-4 font-display text-2xl tracking-tight">
              {clientStrip.title}
            </Heading>
          </div>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-5">
            {clients.map((client) => (
              <li
                key={client}
                className="font-display text-lg tracking-tight text-muted transition-colors duration-300 hover:text-fg"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
