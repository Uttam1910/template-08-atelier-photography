import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { StudioIntro } from "@/components/sections/StudioIntro";
import { Disciplines } from "@/components/sections/Disciplines";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { ContactCta } from "@/components/sections/ContactCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <StudioIntro />
      <Disciplines />
      <ClientStrip />
      <ContactCta />
    </>
  );
}
