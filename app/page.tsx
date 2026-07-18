import Image from "next/image";
import { HeroSection } from "@/components/ui/hero";
import { SiteFooter } from "@/components/ui/footer";
import { SiteHeader } from "@/components/ui/header";
import { ServicesSection } from "@/components/ui/services";
import { WhyUsSection } from "@/components/ui/us";
import { ProcessSection } from "@/components/ui/process";
import { PortfolioSection } from "@/components/ui/portfolio-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { ContactSection } from "@/components/ui/contact";
export default function Home() {
  return (
    <main>
        <HeroSection></HeroSection>
        <SiteHeader></SiteHeader>
        <ServicesSection></ServicesSection>
        <WhyUsSection></WhyUsSection>
        <ProcessSection></ProcessSection>
        <PortfolioSection></PortfolioSection>
        <TestimonialsSection></TestimonialsSection>
        <ContactSection></ContactSection>
        <SiteFooter></SiteFooter>
    </main>
  );
}
