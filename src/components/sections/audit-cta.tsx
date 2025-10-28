"use client";

import { CalendarDays } from "lucide-react";
import { useEffect } from "react";

const AuditCta = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCalendlyClick = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/votre-lien-calendly'
      });
    }
  };

  return (
    <section id="calendly" className="bg-background-primary py-13 sm:py-19 lg:py-26">
      <div className="container mx-auto px-4">
        <div 
          className="mx-auto max-w-[800px] rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 lg:p-16 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-primary/10 hover:shadow-[0_0_50px_rgba(0,132,255,0.7),0_0_100px_rgba(0,132,255,0.5),0_0_150px_rgba(0,132,255,0.3)] animate-in fade-in slide-in-from-bottom-4 duration-700"
        >
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-b from-[#4A5F9F] to-[#3B4B7C] transition-transform duration-300 hover:scale-110 hover:rotate-6">
              <CalendarDays className="h-7 w-7 md:h-8 md:w-8 text-primary" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
              Réservez votre audit gratuit
            </h2>
            
            <p className="max-w-2xl text-base sm:text-lg text-text-secondary">
              Planifiez un appel de découverte pour discuter de vos besoins d'automatisation et découvrir comment nous pouvons transformer votre entreprise.
            </p>

            <button
              onClick={handleCalendlyClick}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 h-12 px-8 mt-8"
            >
              Planifier un rendez-vous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditCta;