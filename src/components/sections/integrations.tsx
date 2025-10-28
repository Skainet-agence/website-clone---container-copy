"use client";

import Link from 'next/link';
import { Plus } from 'lucide-react';
import { FaMicrosoft, FaGoogle, FaSlack, FaShopify, FaSalesforce } from 'react-icons/fa';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface Integration {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const integrations: Integration[] = [
  { name: 'Microsoft', icon: FaMicrosoft, color: 'text-[#60a5fa]' },
  { name: 'Google', icon: FaGoogle, color: 'text-[#f87171]' },
  { name: 'Slack', icon: FaSlack, color: 'text-[#c084fc]' },
  { name: 'Shopify', icon: FaShopify, color: 'text-[#4ade80]' },
  { name: 'Salesforce', icon: FaSalesforce, color: 'text-[#60a5fa]' },
  { name: '100+ autres', icon: Plus, color: 'text-[#9ca3af]' },
];

const IntegrationCard = ({ name, icon: Icon, color, index, isVisible }: Integration & { index: number; isVisible: boolean }) => (
  <div 
    className={`bg-[#2a2f5a] text-center p-6 md:p-8 rounded-xl transition-all duration-700 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 hover:bg-[#323762] border border-white/10 hover:border-white/20 group ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <Icon className={`mx-auto mb-4 h-10 w-10 md:h-12 md:w-12 ${color} transition-all duration-300 group-hover:scale-125 group-hover:rotate-6`} />
    <p className="text-white font-semibold text-sm md:text-base">{name}</p>
  </div>
);

export default function Integrations() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef as any} id="integrations" className="relative py-13 sm:py-19 lg:py-26 bg-gradient-radial from-[#1A1B3F] to-[#0A0B1E]">
      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6">
            L'IA Compatible Avec Tous Vos Outils
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Intégrez notre intelligence artificielle à vos outils existants pour des processus encore plus fluides et efficaces
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {integrations.map((integration, index) => (
            <IntegrationCard key={integration.name} {...integration} index={index} isVisible={isVisible} />
          ))}
        </div>

        <div className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href="/integrations"
            className="inline-block bg-primary text-primary-foreground font-semibold uppercase tracking-wider px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-[0_4px_12px_rgba(0,132,255,0.4)] transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:shadow-[0_6px_20px_rgba(0,132,255,0.6)] text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            VOIR TOUTES LES INTÉGRATIONS
          </Link>
        </div>
      </div>
    </section>
  );
}