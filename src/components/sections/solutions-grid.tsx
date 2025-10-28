"use client";

import React from 'react';
import { Bot, Mail, Users, Share2, Calculator, ShoppingCart, Check, LucideProps } from 'lucide-react';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface SolutionCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.FC<LucideProps>;
  iconBgGradient: string;
  accentColor: string;
}

const solutions: SolutionCardProps[] = [
  {
    title: "Chatbots Intelligents",
    description: "Assistants virtuels conversationnels qui gèrent vos interactions clients 24/7 avec une intelligence naturelle.",
    features: [
      "Support client automatisé",
      "Génération de leads qualifiés",
      "Intégration multicanale",
    ],
    icon: Bot,
    iconBgGradient: "from-[#3B4B7C] to-[#4A5F9F]",
    accentColor: "text-blue-400",
  },
  {
    title: "Automatisation Email",
    description: "Séquences d'emails personnalisées qui nurturent vos prospects et fidélisent vos clients automatiquement.",
    features: [
      "Campagnes personnalisées",
      "Segmentation intelligente",
      "Analytics avancés",
    ],
    icon: Mail,
    iconBgGradient: "from-[#6B4FA0] to-[#7C3AED]",
    accentColor: "text-purple-400",
  },
  {
    title: "Gestion CRM Intelligente",
    description: "Optimisation automatique de votre pipeline commercial avec scoring de leads et suivi personnalisé.",
    features: [
      "Scoring automatique des leads",
      "Suivi des opportunités",
      "Rapports prédictifs",
    ],
    icon: Users,
    iconBgGradient: "from-[#2D7A7A] to-[#3D8B8B]",
    accentColor: "text-green-400",
  },
  {
    title: "Social Media Automation",
    description: "Publication automatique de contenu optimisé sur vos réseaux sociaux avec engagement intelligent.",
    features: [
      "Planification multi-plateformes",
      "Génération de contenu IA",
      "Analyse de performance",
    ],
    icon: Share2,
    iconBgGradient: "from-[#A3436C] to-[#C85588]",
    accentColor: "text-pink-400",
  },
  {
    title: "Automatisation Comptable",
    description: "Traitement automatique de vos factures, devis et rapports financiers avec précision maximale.",
    features: [
      "Facturation automatique",
      "Rapprochement bancaire",
      "Reporting financier",
    ],
    icon: Calculator,
    iconBgGradient: "from-[#B8822F] to-[#D4A03D]",
    accentColor: "text-yellow-400",
  },
  {
    title: "E-commerce Intelligent",
    description: "Optimisation automatique de votre boutique en ligne avec gestion des stocks et recommandations personnalisées.",
    features: [
      "Gestion stock automatique",
      "Recommandations IA",
      "Optimisation prix dynamique",
    ],
    icon: ShoppingCart,
    iconBgGradient: "from-[#5B5FA8] to-[#7072BE]",
    accentColor: "text-indigo-400",
  },
];

const SolutionCard: React.FC<{ card: SolutionCardProps; index: number; isVisible: boolean }> = ({ card, index, isVisible }) => {
  const Icon = card.icon;
  return (
    <div 
      className={`bg-[#2a2f5a] p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(0,0,0,0.5)] hover:border-white/20 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-center mb-6">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br ${card.iconBgGradient} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          <Icon className={`w-8 h-8 ${card.accentColor} transition-transform duration-300 group-hover:scale-110`} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-primary">{card.title}</h3>
      </div>
      <p className="text-muted-foreground mb-6 text-center text-sm md:text-base">{card.description}</p>
      <ul className="space-y-2 text-muted-foreground text-sm md:text-base">
        {card.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className={`w-4 h-4 mr-2 shrink-0 ${card.accentColor} transition-transform duration-300 group-hover:scale-125`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SolutionsGrid = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef as any} id="solutions" className="py-13 sm:py-19 lg:py-26 bg-background-secondary">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6">
            Découvrez notre palette complète d'automatisations
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformez vos processus métier avec nos solutions IA sur mesure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((card, index) => (
            <SolutionCard key={index} card={card} index={index} isVisible={isVisible} />
          ))}
        </div>

        <div className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href="/solutions"
            className="inline-block bg-primary text-primary-foreground font-semibold px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Découvrir toutes les automatisations possibles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;