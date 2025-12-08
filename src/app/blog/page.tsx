import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/modern-digital-illustration-of-ai-chatbo-2a080b88-20251208152949.jpg",
    category: "Intelligence Artificielle",
    readTime: "8 min",
    date: "7 Décembre 2024",
    featured: true,
  },
  {
    id: "automatisation-email-marketing-roi",
    title: "Automatisation Email Marketing : Comment Obtenir 300% de ROI",
    excerpt: "Les secrets des campagnes d'emailing automatisées qui convertissent. Stratégies éprouvées, erreurs à éviter, et résultats mesurables pour votre entreprise.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/digital-illustration-of-automated-email--ebdf50e7-20251208152949.jpg",
    category: "Marketing Automation",
    readTime: "10 min",
    date: "5 Décembre 2024",
    featured: true,
  },
  {
    id: "calculer-roi-automatisation-guide-complet",
    title: "Guide Complet : Calculer le ROI de l'Automatisation IA",
    excerpt: "Méthodologie étape par étape pour mesurer précisément l'impact financier de l'automatisation. Incluant templates Excel et études de cas réels.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/professional-business-illustration-of-ro-5325d2a5-20251208152949.jpg",
    category: "Business Intelligence",
    readTime: "12 min",
    date: "3 Décembre 2024",
    featured: true,
  },
  {
    id: "pme-automatisation-par-ou-commencer",
    title: "PME & Automatisation : Par Où Commencer Sans Se Tromper",
    excerpt: "Le guide pratique pour les dirigeants de PME qui veulent automatiser intelligemment. Les 5 processus à prioriser et les pièges à éviter absolument.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/digital-illustration-of-ai-automation-tr-1171da0a-20251208152949.jpg",
    category: "Transformation Digitale",
    readTime: "9 min",
    date: "1 Décembre 2024",
    featured: false,
  },
  {
    id: "crm-intelligent-ia-booster-ventes",
    title: "CRM Intelligent : Comment l'IA Booste Vos Ventes de 40%",
    excerpt: "Découvrez les fonctionnalités d'IA qui transforment votre CRM en machine à vendre. Scoring automatique, prédictions, et personnalisation à grande échelle.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/modern-illustration-of-crm-intelligent-s-d4dc6f90-20251208152949.jpg",
    category: "Sales & CRM",
    readTime: "11 min",
    date: "28 Novembre 2024",
    featured: false,
  },
  {
    id: "ecommerce-automatisation-complete-guide",
    title: "E-commerce Automatisé : De 0 à 100K€/mois avec l'IA",
    excerpt: "L'architecture complète d'un e-commerce automatisé rentable. Gestion des stocks, emails, service client, et marketing... tout en pilote automatique.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/digital-illustration-of-ecommerce-automa-681dd514-20251208152950.jpg",
    category: "E-commerce",
    readTime: "15 min",
    date: "25 Novembre 2024",
    featured: false,
  },
];

const categories = [
  "Tous les articles",
  "Intelligence Artificielle",
  "Marketing Automation",
  "Business Intelligence",
  "Transformation Digitale",
  "Sales & CRM",
  "E-commerce",
];

export default function BlogPage() {
  const featuredArticles = blogArticles.filter(article => article.featured);
  const regularArticles = blogArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center animate-in fade-in slide-in-from-bottom-2 duration-700">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span className="text-primary text-sm font-semibold">✨ Expertise & Innovation</span>
            </div>
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

      {/* Categories Filter */}
      <section className="pb-8 md:pb-12">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center justify-center gap-3 flex-wrap animate-in fade-in slide-in-from-bottom-2 duration-700 delay-150">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  index === 0
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-background-secondary text-text-secondary hover:bg-background-tertiary hover:text-white border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles - Large Cards */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center gap-3 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Articles Phares</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {featuredArticles.slice(0, 2).map((article, index) => (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
                className="group bg-gradient-to-br from-background-secondary/80 to-background-tertiary/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-700"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent z-10"></div>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-white">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 text-text-secondary text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                    <span>Lire l'article</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Third Featured Article - Full Width */}
          {featuredArticles[2] && (
            <Link
              href={`/blog/${featuredArticles[2].id}`}
              className="group mt-6 md:mt-8 flex flex-col md:flex-row bg-gradient-to-br from-background-secondary/80 to-background-tertiary/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-500"
            >
              <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background-primary/50 z-10"></div>
                <Image
                  src={featuredArticles[2].image}
                  alt={featuredArticles[2].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-white">
                    <Tag className="w-3 h-3" />
                    {featuredArticles[2].category}
                  </span>
                </div>
              </div>

              <div className="md:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-text-secondary text-sm mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {featuredArticles[2].date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featuredArticles[2].readTime}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {featuredArticles[2].title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  {featuredArticles[2].excerpt}
                </p>

                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                  <span>Lire l'article complet</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Regular Articles Grid */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center gap-3 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Tous les Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
                className="group bg-gradient-to-br from-background-secondary/80 to-background-tertiary/60 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent z-10"></div>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <span className="inline-flex items-center gap-1 bg-primary/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-bold text-white">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 text-text-secondary text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                    <span>Lire plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
