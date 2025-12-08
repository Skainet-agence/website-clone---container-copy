import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlogContent } from "@/components/blog/blog-content";

export const metadata: Metadata = {
  title: "Blog IA & Automatisation | Devlopia - Guides & Conseils d'Experts",
  description: "Découvrez nos articles experts sur l'intelligence artificielle et l'automatisation d'entreprise. Guides pratiques, études de cas, et conseils pour transformer votre business avec l'IA.",
  keywords: "blog IA, automatisation entreprise, intelligence artificielle, guides IA, chatbot, automation, transformation digitale, ROI automatisation",
};

const blogArticles = [
  {
    id: "chatbots-intelligents-revolution-service-client",
    title: "Comment les Chatbots IA Révolutionnent le Service Client en 2024",
    excerpt: "Découvrez comment l'intelligence artificielle conversationnelle transforme radicalement l'expérience client et libère 60% du temps de vos équipes support.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/modern-professional-3d-illustration-of-a-a32d93d0-20251208154025.jpg",
    category: "Support Client",
    readTime: "8 min",
    date: "7 Décembre 2024",
    featured: true,
  },
  {
    id: "automatisation-email-marketing-roi",
    title: "Automatisation Email Marketing : Comment Obtenir 300% de ROI",
    excerpt: "Les secrets des campagnes d'emailing automatisées qui convertissent. Stratégies éprouvées, erreurs à éviter, et résultats mesurables pour votre entreprise.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/professional-digital-illustration-of-ema-16bd8784-20251208154026.jpg",
    category: "Automatisation Marketing",
    readTime: "10 min",
    date: "5 Décembre 2024",
    featured: true,
  },
  {
    id: "calculer-roi-automatisation-guide-complet",
    title: "Guide Complet : Calculer le ROI de l'Automatisation IA",
    excerpt: "Méthodologie étape par étape pour mesurer précisément l'impact financier de l'automatisation. Incluant templates Excel et études de cas réels.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/sleek-business-illustration-of-roi-growt-a5359ea9-20251208154026.jpg",
    category: "Stratégie & ROI",
    readTime: "12 min",
    date: "3 Décembre 2024",
    featured: true,
  },
  {
    id: "pme-automatisation-par-ou-commencer",
    title: "PME & Automatisation : Par Où Commencer Sans Se Tromper",
    excerpt: "Le guide pratique pour les dirigeants de PME qui veulent automatiser intelligemment. Les 5 processus à prioriser et les pièges à éviter absolument.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/modern-corporate-illustration-of-busines-1d140ac2-20251208154026.jpg",
    category: "Transformation Digitale",
    readTime: "9 min",
    date: "1 Décembre 2024",
    featured: false,
  },
  {
    id: "crm-intelligent-ia-booster-ventes",
    title: "CRM Intelligent : Comment l'IA Booste Vos Ventes de 40%",
    excerpt: "Découvrez les fonctionnalités d'IA qui transforment votre CRM en machine à vendre. Scoring automatique, prédictions, et personnalisation à grande échelle.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/professional-3d-illustration-of-intellig-d2677f52-20251208154028.jpg",
    category: "Ventes & CRM",
    readTime: "11 min",
    date: "28 Novembre 2024",
    featured: false,
  },
  {
    id: "ecommerce-automatisation-complete-guide",
    title: "E-commerce Automatisé : De 0 à 100K€/mois avec l'IA",
    excerpt: "L'architecture complète d'un e-commerce automatisé rentable. Gestion des stocks, emails, service client, et marketing... tout en pilote automatique.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/modern-digital-illustration-of-automated-8dd3bcc8-20251208154026.jpg",
    category: "E-commerce",
    readTime: "15 min",
    date: "25 Novembre 2024",
    featured: false,
  },
  // Articles IA Générale (2024 - parmi les plus anciens)
  {
    id: "intelligence-artificielle-entreprise-guide-2024",
    title: "Intelligence Artificielle en Entreprise : Le Guide Complet 2024",
    excerpt: "Tout ce que vous devez savoir sur l'IA en 2024 : technologies existantes, applications concrètes, et opportunités pour votre entreprise. État des lieux et perspectives d'avenir.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/modern-professional-3d-illustration-of-a-37d761da-20251208175832.jpg",
    category: "Intelligence Artificielle",
    readTime: "14 min",
    date: "15 Février 2024",
    featured: false,
  },
  {
    id: "revolution-ia-generative-opportunites-business",
    title: "La Révolution de l'IA Générative : Opportunités Business pour 2024-2025",
    excerpt: "ChatGPT, Midjourney, Claude... Comment l'explosion de l'IA générative ouvre des possibilités inédites pour transformer votre entreprise. Vision et stratégies pour l'avenir.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/futuristic-3d-illustration-of-generative-6c3fa2c5-20251208175833.jpg",
    category: "Intelligence Artificielle",
    readTime: "13 min",
    date: "8 Mars 2024",
    featured: false,
  },
  // Cas Clients
  {
    id: "cas-client-trading-crypto-arbitrage-automatise",
    title: "Cas Client : Agent d'Arbitrage Crypto Automatisé - 2,8M€ de Profits en 6 Mois",
    excerpt: "Découvrez comment notre système d'IA ultra-personnalisé a révolutionné le trading crypto de CryptoFlow avec un workflow d'arbitrage multi-plateformes automatisé, générant 2,8M€ de profits en 6 mois.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/professional-business-photograph-of-a-mo-8f3bdae3-20251208172713.jpg",
    category: "Cas Clients",
    readTime: "12 min",
    date: "28 Novembre 2025",
    featured: false,
  },
  {
    id: "cas-client-industrie-precision-automatisation-production",
    title: "Cas Client : Comment une PME Industrielle a Réduit ses Coûts de 35% avec l'IA",
    excerpt: "Découvrez comment Precision Métal, une entreprise de 45 employés, a automatisé sa chaîne de production et son suivi qualité pour économiser 180 000€/an.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/modern-3d-isometric-illustration-of-an-i-5818cbb1-20251208155233.jpg",
    category: "Cas Clients",
    readTime: "14 min",
    date: "15 Juin 2025",
    featured: false,
  },
  {
    id: "cas-client-cabinet-medical-gestion-patients",
    title: "Cas Client : Un Cabinet Médical Multiplie par 3 sa Capacité de Consultation",
    excerpt: "Comment le Dr. Rousseau a libéré 20h/semaine grâce à l'automatisation des prises de rendez-vous, rappels et gestion administrative.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/professional-3d-illustration-of-a-modern-8b5c9f27-20251208155233.jpg",
    category: "Cas Clients",
    readTime: "12 min",
    date: "22 Avril 2025",
    featured: false,
  },
  {
    id: "cas-client-ecommerce-mode-croissance-explosive",
    title: "Cas Client : De 50K€ à 400K€/mois - L'E-commerce Mode Qui Explose Grâce à l'IA",
    excerpt: "L'histoire de StyleHub : comment un chatbot intelligent et l'automatisation email ont multiplié le CA par 8 en 10 mois.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/sleek-3d-e-commerce-visualization-with-f-cec75fdc-20251208155234.jpg",
    category: "Cas Clients",
    readTime: "16 min",
    date: "8 Mars 2025",
    featured: false,
  },
  {
    id: "cas-client-cabinet-comptable-efficacite-double",
    title: "Cas Client : Cabinet Comptable Double son Portefeuille Clients Sans Recruter",
    excerpt: "Découvrez comment Compta Plus a automatisé 70% de ses tâches administratives et accepte désormais 50 clients supplémentaires avec la même équipe.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/professional-3d-illustration-of-automate-34534262-20251208155233.jpg",
    category: "Cas Clients",
    readTime: "13 min",
    date: "3 Février 2025",
    featured: false,
  },
  {
    id: "cas-client-agence-immobiliere-leads-conversion",
    title: "Cas Client : Agence Immobilière Augmente ses Conversions de 127% en 4 Mois",
    excerpt: "Comment Immo Premium a transformé son processus de qualification des leads avec un CRM intelligent et un suivi automatisé hyper-personnalisé.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/modern-3d-real-estate-crm-visualization--05d221f3-20251208155234.jpg",
    category: "Cas Clients",
    readTime: "15 min",
    date: "18 Janvier 2025",
    featured: false,
  },
];

const categories = [
  "Tous les articles",
  "Intelligence Artificielle",
  "Support Client",
  "Automatisation Marketing",
  "Stratégie & ROI",
  "Transformation Digitale",
  "Ventes & CRM",
  "E-commerce",
  "Cas Clients",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center animate-in fade-in slide-in-from-bottom-2 duration-700">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Le Blog <span className="text-primary">IA & Automatisation</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Guides pratiques, études de cas réelles, et conseils d'experts pour propulser votre entreprise 
              avec l'intelligence artificielle. <span className="text-white font-semibold">Résultats mesurables garantis.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content with filtering */}
      <BlogContent articles={blogArticles} categories={categories} />

      {/* Newsletter CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="bg-gradient-to-br from-primary/20 via-background-secondary to-secondary/20 border border-primary/30 rounded-2xl p-8 md:p-12 text-center animate-in fade-in slide-in-from-bottom-2 duration-700 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDg0ZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Recevez Nos Meilleurs Conseils IA
              </h2>
              <p className="text-base sm:text-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
                Chaque semaine, découvrez des <span className="text-white font-semibold">stratégies concrètes</span>, 
                des <span className="text-white font-semibold">études de cas exclusives</span>, et des 
                <span className="text-white font-semibold"> templates prêts à l'emploi</span> pour automatiser votre entreprise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto mb-6">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full sm:flex-1 px-5 py-4 rounded-lg bg-background-primary/50 border border-border text-white placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 whitespace-nowrap">
                  S'abonner Gratuitement
                </Button>
              </div>
              
              <p className="text-xs text-text-secondary">
                🔒 Vos données sont sécurisées. Désabonnement en 1 clic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="bg-gradient-to-br from-background-secondary to-background-tertiary border border-border rounded-2xl p-8 md:p-12 text-center animate-in fade-in slide-in-from-bottom-2 duration-700 shadow-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Prêt à Automatiser <span className="text-primary">Votre Entreprise</span> ?
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Découvrez comment nos solutions d'automatisation IA peuvent transformer votre entreprise en 
              <span className="text-white font-semibold"> moins de 30 jours</span>. Audit gratuit et sans engagement.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,132,255,0.5),0_0_60px_rgba(0,132,255,0.3)]">
              <Link href="/#calendly">
                📅 Réserver Mon Audit Gratuit
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}