"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Laptop,
  TrendingUp,
  ShoppingCart,
  Mail,
  Calculator,
  Code,
  Infinity,
  Check,
  Calendar,
  ShoppingBag
} from "lucide-react";
import {
  FaMicrosoft,
  FaGoogle,
  FaSlack,
  FaTrello,
  FaList,
  FaCalendarAlt,
  FaSalesforce,
  FaShopify,
  FaAmazon,
  FaEbay,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaStripe,
  FaPaypal,
  FaGithub,
  FaAws,
  FaGoogle as FaGoogleCloud,
  FaDatabase
} from "react-icons/fa";
import {
  SiNotion,
  SiHubspot,
  SiZoho,
  SiIntercom,
  SiZendesk,
  SiWoocommerce,
  SiMagento,
  SiBigcommerce,
  SiMailchimp,
  SiWhatsapp,
  SiQuickbooks,
  SiXero,
  SiZapier,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiMake
} from "react-icons/si";

interface Integration {
  name: string;
  icon: React.ReactNode;
}

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  integrations: Integration[];
}

const categoriesData: Category[] = [
  {
    id: "productivity",
    name: "Productivité & Bureautique",
    icon: Laptop,
    color: "#0084FF",
    integrations: [
      { name: "Microsoft 365", icon: <FaMicrosoft className="w-6 h-6" /> },
      { name: "Google Workspace", icon: <FaGoogle className="w-6 h-6" /> },
      { name: "Slack", icon: <FaSlack className="w-6 h-6" /> },
      { name: "Trello", icon: <FaTrello className="w-6 h-6" /> },
      { name: "Asana", icon: <FaList className="w-6 h-6" /> },
      { name: "Monday.com", icon: <Calendar className="w-6 h-6" /> },
      { name: "Calendly", icon: <FaCalendarAlt className="w-6 h-6" /> },
      { name: "Notion", icon: <SiNotion className="w-6 h-6" /> }
    ]
  },
  {
    id: "crm",
    name: "CRM & Ventes",
    icon: TrendingUp,
    color: "#22C55E",
    integrations: [
      { name: "Salesforce", icon: <FaSalesforce className="w-6 h-6" /> },
      { name: "HubSpot", icon: <SiHubspot className="w-6 h-6" /> },
      { name: "Pipedrive", icon: <TrendingUp className="w-6 h-6" /> },
      { name: "Zoho CRM", icon: <SiZoho className="w-6 h-6" /> },
      { name: "ActiveCampaign", icon: <Mail className="w-6 h-6" /> },
      { name: "Aircall", icon: <div className="w-6 h-6 flex items-center justify-center text-xl">📞</div> },
      { name: "Intercom", icon: <SiIntercom className="w-6 h-6" /> },
      { name: "Zendesk", icon: <SiZendesk className="w-6 h-6" /> }
    ]
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: ShoppingCart,
    color: "#F97316",
    integrations: [
      { name: "Shopify", icon: <FaShopify className="w-6 h-6" /> },
      { name: "WooCommerce", icon: <SiWoocommerce className="w-6 h-6" /> },
      { name: "Magento", icon: <SiMagento className="w-6 h-6" /> },
      { name: "PrestaShop", icon: <ShoppingBag className="w-6 h-6" /> },
      { name: "Amazon", icon: <FaAmazon className="w-6 h-6" /> },
      { name: "eBay", icon: <FaEbay className="w-6 h-6" /> },
      { name: "BigCommerce", icon: <SiBigcommerce className="w-6 h-6" /> },
      { name: "Square", icon: <div className="w-6 h-6 flex items-center justify-center"><div className="w-4 h-4 border-2 border-current"></div></div> }
    ]
  },
  {
    id: "marketing",
    name: "Marketing & Communication",
    icon: Mail,
    color: "#A855F7",
    integrations: [
      { name: "Mailchimp", icon: <SiMailchimp className="w-6 h-6" /> },
      { name: "SendGrid", icon: <Mail className="w-6 h-6" /> },
      { name: "WhatsApp Business", icon: <SiWhatsapp className="w-6 h-6" /> },
      { name: "Facebook Ads", icon: <FaFacebookF className="w-6 h-6" /> },
      { name: "Google Ads", icon: <FaGoogle className="w-6 h-6" /> },
      { name: "LinkedIn", icon: <FaLinkedinIn className="w-6 h-6" /> },
      { name: "Instagram", icon: <FaInstagram className="w-6 h-6" /> },
      { name: "Twitter", icon: <FaTwitter className="w-6 h-6" /> }
    ]
  },
  {
    id: "accounting",
    name: "Comptabilité & Finance",
    icon: Calculator,
    color: "#EF4444",
    integrations: [
      { name: "QuickBooks", icon: <SiQuickbooks className="w-6 h-6" /> },
      { name: "Sage", icon: <Calculator className="w-6 h-6" /> },
      { name: "Xero", icon: <SiXero className="w-6 h-6" /> },
      { name: "PayPal", icon: <FaPaypal className="w-6 h-6" /> },
      { name: "Stripe", icon: <FaStripe className="w-6 h-6" /> },
      { name: "Banque", icon: <div className="w-6 h-6 flex items-center justify-center text-xl">🏦</div> },
      { name: "Facture.net", icon: <div className="w-6 h-6 flex items-center justify-center text-xl">📄</div> },
      { name: "Pennylane", icon: <Calculator className="w-6 h-6" /> }
    ]
  },
  {
    id: "development",
    name: "Développement & Techniques",
    icon: Code,
    color: "#06B6D4",
    integrations: [
      { name: "Zapier", icon: <SiZapier className="w-6 h-6" /> },
      { name: "GitHub", icon: <FaGithub className="w-6 h-6" /> },
      { name: "AWS", icon: <FaAws className="w-6 h-6" /> },
      { name: "Firebase", icon: <SiFirebase className="w-6 h-6" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" /> },
      { name: "MySQL", icon: <SiMysql className="w-6 h-6" /> },
      { name: "Google Cloud", icon: <FaGoogleCloud className="w-6 h-6" /> },
      { name: "Make.com", icon: <SiMake className="w-6 h-6" /> }
    ]
  }
];

export default function IntegrationsPage() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="min-h-screen relative bg-[#0A0B1E]">
      <Navigation />
      
      <main className="min-h-screen relative z-0">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6 max-w-[1100px]">
            <div 
              ref={heroAnimation.ref}
              className={`text-center transition-all duration-1000 ${
                heroAnimation.isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] break-words">
                L'IA compatible avec <span className="text-[#0084FF]">tous vos outils</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed px-2">
                Intégrez notre intelligence artificielle à votre écosystème digital existant pour des processus encore plus fluides et efficaces
              </p>
            </div>
          </div>
        </section>

        {/* Categories Sections */}
        {categoriesData.map((category, categoryIndex) => {
          const CategoryIcon = category.icon;
          const badgeAnimation = useScrollAnimation({ threshold: 0.15 });

          return (
            <section
              key={category.id}
              id={category.id}
              className="py-8"
            >
              <div className="container mx-auto px-6 max-w-[1280px]">
                {/* Category Header Badge */}
                <div className="mb-6 flex justify-center">
                  <div
                    ref={badgeAnimation.ref}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2 transition-all duration-700 ${
                      badgeAnimation.isVisible
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90"
                    }`}
                    style={{
                      backgroundColor: category.color
                    }}
                  >
                    <CategoryIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
                    <span className="text-white font-semibold text-xs tracking-wide uppercase">
                      {category.name}
                    </span>
                  </div>
                </div>

                {/* Integrations Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                  {category.integrations.map((integration, integrationIndex) => {
                    const cardAnimation = useScrollAnimation({ threshold: 0.1 });

                    return (
                      <div
                        key={integrationIndex}
                        ref={cardAnimation.ref}
                        className={`group bg-[#13143B]/60 backdrop-blur-sm rounded-xl p-4 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex flex-col items-center justify-center min-h-[110px] ${
                          cardAnimation.isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-12"
                        }`}
                        style={{
                          transitionDelay: cardAnimation.isVisible ? `${integrationIndex * 40}ms` : "0ms",
                          transitionDuration: "700ms"
                        }}
                      >
                        {/* Icon */}
                        <div 
                          className="mb-2.5 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: category.color }}
                        >
                          {integration.icon}
                        </div>

                        {/* Name */}
                        <h3 className="text-xs font-semibold text-white/90 text-center leading-tight">
                          {integration.name}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}

        {/* Bottom CTA Section */}
        <section className="py-16 pb-24">
          <div className="container mx-auto px-6 max-w-[950px]">
            <div 
              ref={ctaAnimation.ref}
              className={`bg-[#13143B]/60 backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 md:p-10 text-center transition-all duration-1000 ${
                ctaAnimation.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-[#0084FF]/10 flex items-center justify-center mx-auto mb-5">
                <Infinity className="w-8 h-8 text-[#0084FF]" strokeWidth={2} />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                Bien plus que ces intégrations...
              </h2>
              
              <p className="text-sm text-[#94A3B8] leading-relaxed max-w-2xl mx-auto mb-8">
                Ces intégrations ne représentent qu'un aperçu de nos capacités. Nos solutions d'IA s'adaptent à <span className="font-semibold text-white">n'importe quel outil ou plateforme</span> que vous utilisez. Chaque projet est unique et s'adapte à vos besoins spécifiques.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#0084FF]/10 flex items-center justify-center mx-auto mb-3">
                    <div className="text-2xl">🔗</div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">Intégrations sur mesure</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Nous connectons l'IA à vos outils spécifiques
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#0084FF]/10 flex items-center justify-center mx-auto mb-3">
                    <div className="text-2xl">🔧</div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">Solutions innovantes</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Création d'intégrations uniques selon vos besoins
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#0084FF]/10 flex items-center justify-center mx-auto mb-3">
                    <div className="text-2xl">🚀</div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">Évolutives avec vous</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    S'adaptent à votre croissance
                  </p>
                </div>
              </div>

              <div className="bg-[#1A1B3F]/40 border border-white/[0.06] rounded-2xl p-5 mb-8 text-left max-w-2xl mx-auto">
                <p className="text-xs text-[#94A3B8] mb-3 text-center">
                  <span className="font-semibold text-white">Discutons gratuitement de vos outils</span> et voyons comment les connecter intelligemment !
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#0084FF]" strokeWidth={2.5} />
                    <span>Intégration à vos outils existants, quels qu'ils soient</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#0084FF]" strokeWidth={2.5} />
                    <span>Analyse de votre écosystème digital actuel</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#0084FF]" strokeWidth={2.5} />
                    <span>Recommandations d'intégrations personnalisées</span>
                  </li>
                </ul>
              </div>

              <Button
                asChild
                className="bg-[#0084FF] hover:bg-[#0084FF]/90 text-white px-8 py-6 h-auto rounded-xl font-semibold text-sm group shadow-lg shadow-[#0084FF]/25 transition-all duration-300 hover:scale-[1.02]"
              >
                <Link href="/#calendly">
                  Réserver mon audit gratuit
                </Link>
              </Button>
              
              <p className="text-xs text-[#94A3B8]/70 mt-4 flex flex-wrap items-center justify-center gap-2">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                  Consultation 100% gratuite
                </span>
                <span className="text-[#94A3B8]/40">•</span>
                <span>Sans engagement</span>
                <span className="text-[#94A3B8]/40">•</span>
                <span>30 minutes</span>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}