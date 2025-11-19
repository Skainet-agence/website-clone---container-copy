import { Metadata } from "next";
import HeroSection from "@/components/sections/hero";
import Calculator from "@/components/sections/calculator";
import SolutionsGrid from "@/components/sections/solutions-grid";
import Integrations from "@/components/sections/integrations";
import DevlopiawebSection from "@/components/sections/devlopiaweb";
import ProcessSection from "@/components/sections/process";
import AuditCta from "@/components/sections/audit-cta";
import TestimonialsSection from "@/components/sections/testimonials";
import FaqSection from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Devlopia | Automatisation IA & Intelligence Artificielle pour Entreprises",
  description: "Propulsez votre entreprise avec l'intelligence artificielle. Solutions d'automatisation sur mesure : chatbots, email automation, CRM intelligent, et plus. ROI garanti en 3-4 mois.",
  keywords: "automatisation, intelligence artificielle, IA, chatbot, automation, CRM, email marketing, automatisation entreprise, ROI",
  authors: [{ name: "Devlopia" }],
  openGraph: {
    title: "Devlopia | Automatisation IA pour Entreprises",
    description: "Libérez votre génie créatif, l'IA s'occupe du reste. Découvrez nos solutions d'automatisation intelligente.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devlopia | Automatisation IA",
    description: "Propulsez votre entreprise avec l'intelligence artificielle",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background-primary">
      <HeroSection />
      <Calculator />
      <SolutionsGrid />
      <Integrations />
      <DevlopiawebSection />
      <ProcessSection />
      <AuditCta />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
}