import Image from "next/image";
import { HeroSection } from "@/components/ui/hero";
import { SiteFooter } from "@/components/ui/footer";
import { SiteHeader } from "@/components/ui/header";
import { ServicesSection } from "@/components/ui/services";
import { WhyUsSection } from "@/components/ui/us";
import { ProcessSection } from "@/components/ui/process";
import { PortfolioSection } from "@/components/ui/portfolio-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";

import { ComingSoonSection } from "@/components/ui/comingsoon";

export default function Home() {
  return (
    <main>
        <ComingSoonSection></ComingSoonSection>
    </main>
  );
}
