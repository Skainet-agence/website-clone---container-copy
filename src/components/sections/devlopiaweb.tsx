"use client";

import { Check, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const DevlopiawebSection = () => {
    const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

    const listWebPro = [
        "Design sur mesure",
        "Responsive 100%",
        "SEO optimisé",
        "Livraison 7-14 jours",
    ];

    const listAutoIntegre = [
        "Chatbot intégré",
        "Formulaires intelligents",
        "Email automation",
        "CRM connecté",
    ];

    const benefitCards = [
        {
            num: "1",
            title: "Site Web Performant",
            description: "Création de votre site professionnel optimisé pour la conversion et le référencement.",
        },
        {
            num: "2",
            title: "Intégration IA",
            description: "Connexion de vos automatisations directement sur votre site pour une expérience fluide.",
        },
        {
            num: "3",
            title: "Croissance Automatisée",
            description: "Votre écosystème digital travaille 24/7 pour générer et convertir vos prospects.",
        }
    ];

    return (
        <section ref={sectionRef as any} className="py-13 sm:py-19 lg:py-26 bg-background-secondary text-text-primary">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6">
                        On s'occupe de votre site web aussi
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
                        Créez un écosystème digital complet&nbsp;: site web performant + automatisations intelligentes
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12 items-start">
                    {/* Left Column (Main Card) */}
                    <div className={`lg:col-span-3 bg-background-secondary border border-border rounded-2xl p-6 md:p-8 flex flex-col h-full transition-all duration-700 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="flex items-center mb-6">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4 shrink-0 transition-transform duration-300 hover:scale-110 hover:rotate-3">
                                <Globe className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white">Devlopia Web</h3>
                                <p className="text-primary font-semibold text-base md:text-lg">
                                    Sites web + Automatisation
                                </p>
                            </div>
                        </div>

                        <p className="text-text-secondary mb-6 md:mb-8 text-sm md:text-base">
                            Pourquoi séparer création web et automatisation&nbsp;? Chez nous, votre site devient le point central de tous vos processus automatisés.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                            <div>
                                <h4 className="text-base md:text-lg font-bold text-white mb-4">Site Web Professionnel</h4>
                                <ul className="space-y-3">
                                    {listWebPro.map((item) => (
                                        <li key={item} className="flex items-center text-text-secondary text-sm md:text-base">
                                            <Check className="w-4 h-4 text-primary mr-3 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-base md:text-lg font-bold text-white mb-4">Automatisations Intégrées</h4>
                                <ul className="space-y-3">
                                    {listAutoIntegre.map((item) => (
                                        <li key={item} className="flex items-center text-text-secondary text-sm md:text-base">
                                            <Check className="w-4 h-4 text-primary mr-3 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-muted/50 border border-border rounded-lg p-4 mb-6 md:mb-8 text-xs md:text-sm transition-all duration-300 hover:bg-muted/70">
                            <p className="font-bold text-white mb-2">L'avantage de l'écosystème complet&nbsp;:</p>
                            <p className="text-text-secondary leading-relaxed">
                                Votre site capture les leads → L'IA les qualifie → Les processus les convertissent → Vous récoltez les résultats
                            </p>
                        </div>

                        <div className="mt-auto flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://devlopiaweb.fr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto text-center bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                            >
                                Découvrir Devlopia Web
                            </a>
                            <a
                                href="#"
                                className="w-full sm:w-auto text-center bg-secondary text-secondary-foreground font-semibold py-3 px-6 rounded-xl hover:bg-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/30 text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                            >
                                Pack Site + Agent IA
                            </a>
                        </div>
                    </div>

                    {/* Right Column (Numbered Cards) */}
                    <div className="lg:col-span-2 space-y-6 md:space-y-8">
                        {benefitCards.map((card, index) => (
                            <div 
                              key={card.num} 
                              className={`p-[1.5px] bg-gradient-to-br from-border-gradient-start to-border-gradient-end rounded-2xl transition-all duration-700 hover:shadow-lg hover:shadow-primary/20 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                              style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="bg-background-secondary rounded-[15px] p-5 md:p-6 lg:p-8 h-full hover:bg-background-secondary/90 transition-colors duration-300">
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-border-gradient-start to-border-gradient-end bg-clip-text text-transparent leading-none pt-1">
                                            {card.num}
                                        </span>
                                        <div>
                                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{card.title}</h4>
                                            <p className="text-text-secondary text-sm md:text-base">{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevlopiawebSection;