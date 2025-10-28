"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import {
  Bot,
  Headphones,
  Star,
  MessageSquare,
  Mail,
  Target,
  Users,
  Share2,
  FileText,
  FolderOpen,
  BarChart3,
  Settings,
  ShoppingCart,
  Package,
  Receipt,
  TrendingUp,
  Check,
  ArrowRight,
  Lightbulb,
  Infinity
} from "lucide-react";

const solutionsData = [
{
  id: "client",
  category: "Automatisation Client",
  icon: Users,
  bgColor: "#0084FF",
  solutions: [
  {
    icon: Bot,
    title: "Chatbots Intelligents",
    description: "Des assistants conversationnels IA qui comprennent vos clients, répondent instantanément et qualifient automatiquement vos prospects 24/7.",
    features: [
    "Support client 24/7 automatisé",
    "Génération de leads qualifiés",
    "Intégration multicanale (site, WhatsApp, Messenger)"]

  },
  {
    icon: Headphones,
    title: "Support Client IA",
    description: "Un système de support qui traite automatiquement les demandes courantes et ne transfère que les cas complexes à vos équipes.",
    features: [
    "Résolution automatique des demandes",
    "Base de connaissances intelligente",
    "Escalade intelligente aux humains"]

  },
  {
    icon: Star,
    title: "Gestion des Avis",
    description: "Surveillez, analysez et répondez automatiquement aux avis clients sur Google, Facebook, Trustpilot et toutes les plateformes.",
    features: [
    "Monitoring en temps réel",
    "Réponses personnalisées automatiques",
    "Analyse de sentiment et alertes"]

  },
  {
    icon: MessageSquare,
    title: "Live Chat Automatisé",
    description: "Chat en direct avec IA qui engage proactivement vos visiteurs et convertit automatiquement les prospects en clients.",
    features: [
    "Engagement proactif des visiteurs",
    "Recommandations de produits intelligentes",
    "Support multilingue automatique"]

  }]

},
{
  id: "marketing",
  category: "Marketing & Ventes",
  icon: Mail,
  bgColor: "#C85588",
  solutions: [
  {
    icon: Mail,
    title: "Email Marketing Intelligent",
    description: "Campagnes d'emailing ultra-personnalisées avec segmentation IA, A/B testing automatique et optimisation des taux d'ouverture.",
    features: [
    "Segmentation et personnalisation IA",
    "Séquences automatiques adaptatives",
    "A/B testing et optimisation continue"]

  },
  {
    icon: Target,
    title: "Lead Generation Automatisée",
    description: "Génération continue de prospects qualifiés via scraping intelligent, enrichissement de données et scoring automatique.",
    features: [
    "Prospection multicanaux automatique",
    "Enrichissement et scoring des leads",
    "Intégration directe dans votre CRM"]

  },
  {
    icon: Users,
    title: "CRM Intelligent",
    description: "Automatisation complète de votre CRM : saisie automatique, scoring prédictif, relances intelligentes et rapports en temps réel.",
    features: [
    "Saisie et mise à jour automatiques",
    "IA prédictive pour prioriser les leads",
    "Relances et suivis automatisés"]

  },
  {
    icon: Share2,
    title: "Social Media Automation",
    description: "Publication automatique sur tous vos réseaux sociaux avec contenu généré par IA et planification optimale pour maximum d'engagement.",
    features: [
    "Génération de contenu avec ChatGPT",
    "Planification et publication automatiques",
    "Analytics et reporting automatisés"]

  }]

},
{
  id: "processus",
  category: "Processus Métier",
  icon: Settings,
  bgColor: "#3D8B8B",
  solutions: [
  {
    icon: FileText,
    title: "Automatisation Comptable",
    description: "Automatisation complète de votre comptabilité : saisie OCR, rapprochement bancaire, déclarations et reporting financier automatisés.",
    features: [
    "Saisie comptable automatique avec OCR",
    "Rapprochement bancaire intelligent",
    "Génération automatique des déclarations"]

  },
  {
    icon: FolderOpen,
    title: "Gestion Documentaire Intelligente",
    description: "Classification, extraction et archivage automatiques de tous vos documents avec recherche instantanée et OCR intelligent.",
    features: [
    "OCR et extraction de données",
    "Classification et archivage automatiques",
    "Recherche intelligente multi-critères"]

  },
  {
    icon: BarChart3,
    title: "Rapports & Tableaux de Bord",
    description: "Génération automatique de rapports personnalisés, tableaux de bord en temps réel et envoi automatique aux parties prenantes.",
    features: [
    "KPI en temps réel avec alertes",
    "Génération et distribution automatiques",
    "Visualisations dynamiques personnalisées"]

  },
  {
    icon: Settings,
    title: "Workflow Management",
    description: "Automatisation complète de vos processus métier : approbations, notifications, validations et routage intelligent des tâches.",
    features: [
    "Processus métier entièrement automatisés",
    "Approbations et validations intelligentes",
    "Notifications et alertes contextuelles"]

  }]

},
{
  id: "ecommerce",
  category: "E-commerce & Digital",
  icon: ShoppingCart,
  bgColor: "#D4A03D",
  solutions: [
  {
    icon: ShoppingCart,
    title: "E-commerce Intelligent",
    description: "Optimisez vos ventes avec recommandations IA, prix dynamiques, emails de panier abandonné et upselling automatique.",
    features: [
    "Recommandations produits personnalisées",
    "Prix dynamiques et promotions auto",
    "Récupération paniers abandonnés"]

  },
  {
    icon: Package,
    title: "Gestion Stock Automatisée",
    description: "Gestion intelligente des stocks avec prédiction de la demande, réapprovisionnement auto et synchronisation multi-plateformes.",
    features: [
    "Prédiction de la demande avec IA",
    "Réapprovisionnement automatique",
    "Synchronisation multi-canaux en temps réel"]

  },
  {
    icon: Receipt,
    title: "Facturation & Paiements Auto",
    description: "Automatisation complète : génération de factures, envoi automatique, relances intelligentes et rapprochement des paiements.",
    features: [
    "Facturation récurrente automatique",
    "Relances de paiement intelligentes",
    "Intégration Stripe, PayPal, etc."]

  },
  {
    icon: TrendingUp,
    title: "Analytics & Prédictions",
    description: "Analyses avancées et prédictions IA pour anticiper les tendances, optimiser vos campagnes et maximiser votre ROI.",
    features: [
    "Prédictions de ventes avec IA",
    "Analyse comportementale clients",
    "Recommandations d'optimisation automatiques"]

  }]

}];


export default function SolutionsPage() {
  return (
    <div className="min-h-screen relative bg-[#0A0B1E]">
      <Navigation />
      
      <main className="min-h-screen relative z-0">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-[1100px]">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Solutions d'<span className="text-[#0084FF]">Automatisation IA</span>
              </h1>
              
              <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed mb-2">
                Découvrez notre gamme complète de solutions d'automatisation intelligente
              </p>
              <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed mb-10">
                pour transformer votre entreprise
              </p>
              
              <Button
                asChild
                className="bg-[#0084FF] hover:bg-[#0084FF]/90 text-white px-8 py-6 h-auto rounded-lg font-semibold text-base shadow-lg shadow-[#0084FF]/25 transition-all duration-300 hover:scale-[1.02]"
              >
                <Link href="/#calendly">
                  Découvrir nos solutions
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Sections */}
        {solutionsData.map((category, categoryIndex) => {
          const CategoryIcon = category.icon;

          return (
            <section
              key={category.id}
              id={categoryIndex === 0 ? "solutions" : category.id}
              className="py-12"
            >
              <div className="container mx-auto px-6 max-w-[1280px]">
                {/* Category Header Badge */}
                <div className="mb-8 flex justify-center">
                  <div
                    className="inline-flex items-center gap-2.5 rounded-full px-6 py-2.5 shadow-lg"
                    style={{
                      backgroundColor: category.bgColor
                    }}
                  >
                    <CategoryIcon className="w-5 h-5 text-white" strokeWidth={2.5} />
                    <span className="text-white font-bold text-sm tracking-wide uppercase">
                      {category.category}
                    </span>
                  </div>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.solutions.map((solution, solutionIndex) => {
                    const SolutionIcon = solution.icon;

                    return (
                      <div
                        key={solutionIndex}
                        className="group bg-[#1A1B3F] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                      >
                        {/* Icon */}
                        <div className="flex justify-center mb-5">
                          <div
                            className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                            style={{
                              backgroundColor: category.bgColor
                            }}
                          >
                            <SolutionIcon className="w-8 h-8 text-white" strokeWidth={2} />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-white mb-3 leading-tight text-center">
                          {solution.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[13px] text-[#94A3B8] mb-5 leading-relaxed text-center">
                          {solution.description}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-2.5">
                          {solution.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-2.5 text-[12px] text-[#94A3B8] leading-relaxed"
                            >
                              <Check
                                className="w-4 h-4 mt-0.5 shrink-0"
                                style={{ color: category.bgColor }}
                                strokeWidth={3}
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}

        {/* Bottom CTA Section */}
        <section className="py-20 pb-24">
          <div className="container mx-auto px-6 max-w-[950px]">
            <div className="bg-[#1A1B3F]/80 backdrop-blur-sm border border-white/[0.1] rounded-3xl p-8 md:p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                Ces solutions ne sont qu'un <span className="text-[#0084FF]">aperçu</span> de nos possibilités
              </h2>
              
              <p className="text-base text-[#94A3B8] leading-relaxed max-w-2xl mx-auto mb-6">
                Les automatisations présentées ci-dessus représentent seulement les plus demandées par nos clients. En réalité, <span className="font-semibold text-white">les possibilités sont infinies</span> et s'adaptent parfaitement à vos problématiques spécifiques.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#0084FF]/10 flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="w-8 h-8 text-[#0084FF]" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">Solutions Sur Mesure</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    Chaque automatisation est conçue spécifiquement pour vos besoins uniques
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#0084FF]/10 flex items-center justify-center mx-auto mb-3">
                    <Target className="w-8 h-8 text-[#0084FF]" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">Adaptabilité Totale</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    Nous nous adaptons à votre secteur, vos outils et vos contraintes
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#0084FF]/10 flex items-center justify-center mx-auto mb-3">
                    <Infinity className="w-8 h-8 text-[#0084FF]" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">Possibilités Infinies</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    Si cela peut être automatisé, nous pouvons le faire pour vous
                  </p>
                </div>
              </div>

              {/* Comment ça marche section */}
              <div className="bg-[#252654]/50 border border-white/[0.08] rounded-2xl p-6 mb-8 text-center max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B9D] to-[#C85588] flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Comment ça marche ?</h3>
                </div>
                
                <p className="text-sm text-[#94A3B8] mb-3">
                  Lors de notre <span className="font-semibold text-white">rendez-vous gratuit</span>, nous analysons ensemble :
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-[#94A3B8]">
                    <Check className="w-5 h-5 mt-0.5 shrink-0 text-[#0084FF]" strokeWidth={2.5} />
                    <span>Vos processus actuels et leurs difficultés</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#94A3B8]">
                    <Check className="w-5 h-5 mt-0.5 shrink-0 text-[#0084FF]" strokeWidth={2.5} />
                    <span>Les tâches répétitives qui vous font perdre du temps</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#94A3B8]">
                    <Check className="w-5 h-5 mt-0.5 shrink-0 text-[#0084FF]" strokeWidth={2.5} />
                    <span>Les opportunités d'automatisation spécifiques à votre activité</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#94A3B8]">
                    <Check className="w-5 h-5 mt-0.5 shrink-0 text-[#0084FF]" strokeWidth={2.5} />
                    <span>Les solutions sur mesure adaptées à vos contraintes</span>
                  </li>
                </ul>
              </div>

              <Button
                asChild
                className="bg-[#0084FF] hover:bg-[#0084FF]/90 text-white px-10 py-7 h-auto rounded-xl font-semibold text-base group shadow-lg shadow-[#0084FF]/25 transition-all duration-300 hover:scale-[1.02]"
              >
                <Link href="/#calendly">
                  Réserver mon audit gratuit
                </Link>
              </Button>
              
              <p className="text-sm text-[#94A3B8]/70 mt-4 flex flex-wrap items-center justify-center gap-2">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                  Consultation 100% gratuite et sans engagement
                </span>
                <span className="text-[#94A3B8]/40">•</span>
                <span>Durée : 30 minutes</span>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}