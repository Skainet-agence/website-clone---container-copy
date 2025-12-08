"use client";

import { Calendar, Check, Target, Users, TrendingUp, Sparkles, CheckCircle, Workflow } from "lucide-react";
import Link from "next/link";

export default function ProcessusPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Notre <span className="text-primary">Processus</span> Éprouvé
          </h1>
          <p className="text-lg text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre méthode en 3 étapes pour transformer votre entreprise avec l'IA. Un processus rodé qui garantit des résultats mesurables et durables.
          </p>
          <Link
            href="#steps"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            DÉCOUVRIR LA MÉTHODE
          </Link>
        </div>
      </section>

      {/* 3 Étapes Section */}
      <section id="steps" className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              3 Étapes Pour Votre Succès
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Une approche méthodique et personnalisée pour maximiser votre retour sur investissement
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-[#22C55E] to-[#F97316]" style={{ width: 'calc(100% - 80px)', marginLeft: '40px' }} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 01 - Blue */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10" />
                <div className="bg-[#20214A] border border-primary/30 rounded-2xl p-8 mt-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <div className="text-6xl font-black text-primary mb-4">01</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Audit Gratuit</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    Analyse de vos processus pour identifier les opportunités d'automatisation les plus rentables.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Diagnostic approfondi</span>
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Calcul du ROI potentiel</span>
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Roadmap personnalisée</span>
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Gains rapides identifiés</span>
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Recommandations détaillées</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 02 - Green */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#22C55E] rounded-full z-10" />
                <div className="bg-[#20214A] border border-[#22C55E]/30 rounded-2xl p-8 mt-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#22C55E]/20">
                  <div className="text-6xl font-black text-[#22C55E] mb-4">02</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Implémentation</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    Développement et déploiement de vos solutions avec formation de vos équipes.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-[#22C55E] mr-3 mt-0.5 flex-shrink-0" />
                      <span>Développement sur mesure</span>
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-[#22C55E] mr-3 mt-0.5 flex-shrink-0" />
                      <span>Intégration avec vos outils</span>
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-[#22C55E] mr-3 mt-0.5 flex-shrink-0" />
                      <span>Formation de vos équipes</span>
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-[#22C55E] mr-3 mt-0.5 flex-shrink-0" />
                      <span>Tests et validation</span>
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-[#22C55E] mr-3 mt-0.5 flex-shrink-0" />
                      <span>Mise en production</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 03 - Orange */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#F97316] rounded-full z-10" />
                <div className="bg-[#20214A] border border-[#F97316]/30 rounded-2xl p-8 mt-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#F97316]/20">
                  <div className="text-6xl font-black text-[#F97316] mb-4">03</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Optimisation</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    Suivi des performances et optimisation continue pour maximiser vos résultats.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-[#F97316] mr-3 mt-0.5 flex-shrink-0" />
                      <span>Monitoring 24/7</span>
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-[#F97316] mr-3 mt-0.5 flex-shrink-0" />
                      <span>Rapports de performance</span>
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-[#F97316] mr-3 mt-0.5 flex-shrink-0" />
                      <span>Améliorations continues</span>
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-[#F97316] mr-3 mt-0.5 flex-shrink-0" />
                      <span>Support technique</span>
                    </li>
                    <li className="flex items-start text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-[#F97316] mr-3 mt-0.5 flex-shrink-0" />
                      <span>Évolutions et extensions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Cette Méthode Fonctionne */}
      <section className="py-16 px-4 bg-background-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Pourquoi Cette Méthode Fonctionne
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Des résultats garantis grâce à une approche éprouvée et personnalisée
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#20214A]/80 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Approche Ciblée</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Solutions parfaitement adaptées à vos besoins spécifiques.
              </p>
            </div>

            <div className="bg-[#20214A]/80 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#22C55E] to-[#22C55E]/60 rounded-2xl flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Accompagnement</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Formation et support continu pour vos équipes.
              </p>
            </div>

            <div className="bg-[#20214A]/80 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#F97316]/60 rounded-2xl flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">ROI Mesurable</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Suivi précis avec des KPIs concrets et chiffrés.
              </p>
            </div>

            <div className="bg-[#20214A]/80 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#7C3AED]/60 rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Adaptabilité</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Solutions flexibles qui s'ajustent à vos besoins changeants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment Ça Marche */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Workflow className="h-10 w-10 text-primary" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Comment Ça Marche
              </h2>
            </div>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              De la première consultation aux résultats rapides, découvrez le calendrier de votre transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* J+0 */}
            <div className="bg-[#20214A] border border-primary/30 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl font-black text-primary mb-3">J+0</div>
              <h3 className="text-xl font-bold text-white mb-3">Premier Contact</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Appel de découverte et présentation de vos processus.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-text-secondary text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>30 min</span>
                </li>
                <li className="flex items-start text-text-secondary text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>Échange confidentiel</span>
                </li>
                <li className="flex items-start text-text-secondary text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>Sans engagement</span>
                </li>
              </ul>
            </div>

            {/* J+7 */}
            <div className="bg-[#20214A] border border-[#22C55E]/30 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl font-black text-[#22C55E] mb-3">J+7</div>
              <h3 className="text-xl font-bold text-white mb-3">Audit Complet</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Présentation des opportunités et validation de la stratégie.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-text-secondary text-sm">
                  <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>Rapport complet</span>
                </li>
                <li className="flex items-start text-text-secondary text-sm">
                  <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>Feuille de route détaillée</span>
                </li>
              </ul>
            </div>

            {/* J+30 */}
            <div className="bg-[#20214A] border border-[#F97316]/30 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl font-black text-[#F97316] mb-3">J+30</div>
              <h3 className="text-xl font-bold text-white mb-3">Première Automatisation</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Lancement de votre première solution et formation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-text-secondary text-sm">
                  <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>Solution déployée</span>
                </li>
                <li className="flex items-start text-text-secondary text-sm">
                  <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>Équipes formées</span>
                </li>
              </ul>
            </div>

            {/* J+90 */}
            <div className="bg-[#20214A] border border-[#7C3AED]/30 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl font-black text-[#7C3AED] mb-3">J+90</div>
              <h3 className="text-xl font-bold text-white mb-3">Résultats Mesurables</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Premiers résultats et optimisation continue.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-text-secondary text-sm">
                  <div className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>ROI établi</span>
                </li>
                <li className="flex items-start text-text-secondary text-sm">
                  <div className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>Ajustements continus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-3xl p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Commencez Votre Transformation Dès Aujourd'hui
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Réservez votre audit gratuit et découvrez comment transformer votre entreprise. Aucun engagement, que des opportunités.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 text-lg"
            >
              RÉSERVER MON AUDIT GRATUIT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}