import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, CheckCircle2, TrendingUp, Target, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Cas Client : E-commerce Mode Passe de 50K€ à 400K€/mois | Devlopia",
  description: "L'histoire de StyleHub : comment un chatbot intelligent et l'automatisation email ont multiplié le CA par 8 en 10 mois.",
  keywords: "cas client ecommerce, automatisation boutique en ligne, chatbot vente, email automation, croissance ecommerce, IA retail",
};

export default function CasClientEcommercePage() {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header */}
      <section className="pt-28 md:pt-36 pb-8">
        <div className="container mx-auto px-4 max-w-[900px]">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-semibold">Retour au blog</span>
          </Link>

          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-lg text-sm font-bold mb-4">
              📋 Cas Client
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            De 50K€ à 400K€/mois : L'E-commerce Mode Qui <span className="text-primary">Explose Grâce à l'IA</span>
          </h1>

          <div className="flex items-center gap-6 text-text-secondary text-sm mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              8 Mars 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              16 min de lecture
            </span>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/sleek-3d-e-commerce-visualization-with-f-cec75fdc-20251208155234.jpg"
              alt="Croissance e-commerce avec IA"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-[900px]">
          <article className="prose prose-invert prose-lg max-w-none">
            
            {/* Situation Client */}
            <div className="bg-gradient-to-br from-background-secondary/80 to-background-tertiary/60 border border-border rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">Situation Client</h2>
              </div>
              
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p className="text-lg">
                  <strong className="text-white">StyleHub</strong> est une boutique e-commerce de prêt-à-porter féminin créée en 2022 par Clara Dubois, 28 ans, ancienne acheteuse mode chez Galeries Lafayette. Positionnement : mode tendance accessible (30-80€/pièce) pour femmes 25-40 ans urbaines.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">📍 Siège</p>
                    <p className="text-white">Paris, gestion 100% en ligne</p>
                  </div>
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">👥 Équipe Départ</p>
                    <p className="text-white">3 personnes (fondatrice + 2 assistantes)</p>
                  </div>
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">💰 CA Début Projet</p>
                    <p className="text-white">50 000€/mois (stagnant)</p>
                  </div>
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">🛍️ Secteur</p>
                    <p className="text-white">E-commerce mode féminine</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Points Forts */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                Points Forts de StyleHub
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Œil Mode Affûté</p>
                  <p className="text-text-secondary">Clara détecte les tendances 3-4 mois avant leur explosion (TikTok, influenceurs)</p>
                </div>
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Communauté Instagram Engagée</p>
                  <p className="text-text-secondary">42K abonnés (taux engagement 6,2% - excellent pour la mode)</p>
                </div>
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Qualité Produits</p>
                  <p className="text-text-secondary">Sélection rigoureuse fournisseurs européens, finitions soignées</p>
                </div>
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Taux Retour Faible</p>
                  <p className="text-text-secondary">12% seulement (vs 25-30% moyenne secteur mode)</p>
                </div>
              </div>
            </div>

            {/* Problématique */}
            <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/30 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🚨 Le Mur de Croissance</h2>
              
              <div className="space-y-6 text-text-secondary">
                <p className="text-lg text-white font-semibold">
                  Après 18 mois, StyleHub stagne à 50K€/mois. Clara investit massivement en publicité Meta/Google (15K€/mois) 
                  mais le CA ne décolle pas. Pire : la marge s'érode...
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Taux de Conversion Catastrophique (0,8%)</p>
                      <p>Sur 100 visiteurs, seul 1 achète. Énorme trafic mais très peu de ventes concrètes</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Taux d'Abandon Panier 76%</p>
                      <p>3/4 des clients abandonnent sans acheter. Raisons : hésitations tailles, questions sans réponse, comparaison concurrence</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Zéro Fidélisation Client</p>
                      <p>92% des ventes = nouveaux clients. Aucun système de nurturing, relance ou programme fidélité</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Service Client Débordé</p>
                      <p>200+ questions/jour par email (tailles, délais, matières). Temps réponse : 24-48h → frustration clients</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Campagnes Email Basiques</p>
                      <p>1 newsletter/semaine à toute la base. Aucune segmentation, personnalisation. Taux ouverture : 11% (faible)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-destructive/20 mt-6">
                  <p className="text-white font-bold text-xl mb-2">Diagnostic Clara :</p>
                  <p className="text-lg">
                    "Je dépense <span className="text-destructive font-bold">15 000€/mois en pub</span> pour attirer du trafic, mais 
                    <strong className="text-white"> je ne capitalise pas dessus</strong>. Les visiteurs partent sans acheter, et ceux qui 
                    achètent ne reviennent jamais. <strong className="text-white">Je cours après de nouveaux clients en permanence</strong> 
                    au lieu de fidéliser ceux que j'ai. C'est épuisant et non rentable."
                  </p>
                </div>
              </div>
            </div>

            {/* Processus d'Analyse */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🔍 Notre Analyse Approfondie</h2>
              
              <div className="space-y-6">
                <div className="bg-background-secondary/60 border-l-4 border-primary rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Phase 1 : Audit Conversion (10 jours)</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Analyse heatmaps + recordings sessions utilisateurs (500 sessions)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Audit tunnel de vente : 14 points de friction identifiés</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Analyse 200 emails service client : questions récurrentes, objections</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Benchmark 8 concurrents directs : stratégies conversion & fidélisation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-background-secondary/60 border-l-4 border-primary rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Phase 2 : Stratégie Data-Driven</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Segmentation client en 7 personas selon comportement d'achat</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Mapping parcours client idéal avec 24 touchpoints automatisés</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Calcul LTV (Lifetime Value) et CAC (Coût Acquisition) par segment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Plan d'Action */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🎯 Plan de Transformation Déployé</h2>
              
              <div className="space-y-6">
                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Chatbot IA Shopping Assistant 24/7</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Conseiller virtuel mode intégré (répond 180+ questions produits)</li>
                        <li>✅ Recommandations tenues complètes basées sur style/occasion</li>
                        <li>✅ Guide tailles personnalisé (mesures + morphologie)</li>
                        <li>✅ Suggestions cross-sell intelligentes (+23% panier moyen)</li>
                        <li>✅ Gestion objections temps réel (livraison, retours, paiement)</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 3 semaines</p>
                      <p className="text-success font-semibold mt-2">🎯 Objectif : Taux conversion 0,8% → 2,8%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Automatisation Email Marketing Hyper-Personnalisée</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Séquence abandon panier (3 emails J+1h, J+24h, J+72h) avec codes promo dynamiques</li>
                        <li>✅ Nurturing post-achat (merci, conseils styling, cross-sell ciblé)</li>
                        <li>✅ Recommandations IA basées sur historique navigation/achats</li>
                        <li>✅ Segmentation comportementale : 12 segments automatiques</li>
                        <li>✅ Reconquête clients inactifs 90j+ avec offres personnalisées</li>
                        <li>✅ Programme fidélité gamifié (points, niveaux VIP)</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 4 semaines</p>
                      <p className="text-success font-semibold mt-2">🎯 Objectif : Taux réachat 8% → 35%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Retargeting Intelligent Multi-Canal</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Audiences dynamiques Facebook/Instagram (visiteurs, paniers abandonnés, acheteurs)</li>
                        <li>✅ Publicités créatives auto-générées selon produits consultés</li>
                        <li>✅ SMS marketing contextuels (livraison, réassort favoris, ventes privées)</li>
                        <li>✅ Push notifications web personnalisées</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 2 semaines</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Optimisation Conversion UX/CRO</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Refonte fiches produits (photos lifestyle, avis clients mis en avant)</li>
                        <li>✅ Checkout en 1 page avec paiement express (Apple Pay, Google Pay)</li>
                        <li>✅ Preuve sociale dynamique ("12 personnes regardent cet article")</li>
                        <li>✅ Urgence non intrusive (stocks limités réels, livraison express J+1)</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 3 semaines</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-xl p-6 border border-primary/30 mt-6">
                <p className="text-white font-bold text-lg mb-2">💰 Investissement Total :</p>
                <p className="text-2xl font-black text-primary mb-3">28 500€</p>
                <p className="text-text-secondary text-sm">Incluant : développements sur-mesure, intégrations, formation équipe, 6 mois support</p>
              </div>
            </div>

            {/* Déploiement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">⚙️ Déploiement Progressif</h2>
              
              <div className="space-y-6 text-text-secondary">
                <p className="text-lg">
                  Mise en place échelonnée sur <strong className="text-white">10 semaines</strong> pour tester, mesurer, ajuster :
                </p>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <h3 className="text-white font-bold text-lg mb-4">📅 Timeline de Déploiement</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="text-primary font-bold whitespace-nowrap">S1-S3</div>
                      <div>Installation chatbot IA + Formation Clara/équipe (6h) + Tests A/B positionnement</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-primary font-bold whitespace-nowrap">S4-S7</div>
                      <div>Configuration automation emails + Segmentation base clients + Création 18 séquences</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-primary font-bold whitespace-nowrap">S8-S9</div>
                      <div>Setup retargeting + Optimisations CRO site (14 modifications)</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-primary font-bold whitespace-nowrap">S10</div>
                      <div>Analyse résultats + Ajustements fins + Formation équipe élargie</div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                  <p className="text-white font-bold mb-2">🧪 Approche Test & Learn</p>
                  <p>
                    Chaque fonctionnalité déployée en <strong className="text-white">A/B test</strong> pendant 7-14 jours avant généralisation. 
                    <strong className="text-white"> 22 tests menés</strong> durant le déploiement, permettant d'identifier les quick wins 
                    et d'abandonner 3 features peu performantes.
                  </p>
                </div>
              </div>
            </div>

            {/* Résultats */}
            <div className="bg-gradient-to-br from-success/20 to-success/10 border border-success/40 rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-10 h-10 text-success" />
                <h2 className="text-3xl font-bold text-white m-0">Résultats Explosifs (10 Mois)</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Croissance CA Mensuel</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">+700%</p>
                  <p className="text-text-secondary text-sm">50K€ → 400K€/mois</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Taux de Conversion</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">3,2%</p>
                  <p className="text-text-secondary text-sm">x4 vs 0,8% initial</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Taux Réachat</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">42%</p>
                  <p className="text-text-secondary text-sm">Vs 8% avant (clients fidèles)</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Panier Moyen</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">+31%</p>
                  <p className="text-text-secondary text-sm">67€ → 88€ (cross-sell IA)</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-background-primary/50 rounded-xl p-4 border border-success/20">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">📧 Emails Abandon Panier</span>
                    <span className="text-success font-bold">28% récupération</span>
                  </div>
                  <p className="text-text-secondary text-sm mt-1">126K€ CA additionnel/an</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-4 border border-success/20">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">🤖 Chatbot Conversions</span>
                    <span className="text-success font-bold">18% ventes</span>
                  </div>
                  <p className="text-text-secondary text-sm mt-1">72K€ CA/mois généré directement</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-4 border border-success/20">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">⏱️ Temps Réponse Service Client</span>
                    <span className="text-success font-bold">-89%</span>
                  </div>
                  <p className="text-text-secondary text-sm mt-1">24-48h → 2h (chatbot traite 78% questions)</p>
                </div>
              </div>

              <div className="bg-success/20 border border-success/40 rounded-xl p-6 mb-6">
                <p className="text-white font-bold text-2xl mb-3">💰 Bilan Financier Année 1</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-text-secondary text-sm mb-1">CA Additionnel</p>
                    <p className="text-3xl font-black text-success">2,1M€</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm mb-1">Investissement</p>
                    <p className="text-3xl font-black text-white">28 500€</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm mb-1">ROI</p>
                    <p className="text-3xl font-black text-primary">7 368%</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/20 border border-primary/30 rounded-xl p-6">
                <p className="text-white font-bold text-xl mb-2">📈 ROI Atteint en 18 Jours</p>
                <p className="text-text-secondary">
                  L'investissement a été récupéré en <strong className="text-white">moins de 3 semaines</strong>. 
                  StyleHub est devenue profitable et génère désormais <strong className="text-primary">120K€ de marge nette/mois</strong>.
                </p>
              </div>
            </div>

            {/* Témoignage */}
            <div className="bg-gradient-to-br from-background-secondary to-background-tertiary border-l-4 border-primary rounded-xl p-8 mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold shrink-0">
                  CD
                </div>
                <div>
                  <p className="text-white font-bold text-xl">Clara Dubois</p>
                  <p className="text-primary font-semibold">Fondatrice, StyleHub</p>
                </div>
              </div>
              
              <p className="text-text-secondary text-lg italic leading-relaxed mb-4">
                "Je pensais que mon problème c'était le trafic. J'investissais <strong className="text-white">15 000€/mois en pub</strong> 
                sans résultats. L'équipe m'a fait comprendre que <strong className="text-white">mon vrai problème c'était la conversion 
                et la fidélisation</strong>. Aujourd'hui, avec le même budget pub, je fais <strong className="text-white">8x plus de CA</strong>. 
                Le chatbot répond aux clientes à 3h du matin, les emails automatiques transforment les visiteuses en acheteuses fidèles... 
                <strong className="text-white"> C'est devenu une machine à cash</strong> bien huilée. Je peux enfin me concentrer sur 
                la création de collections au lieu de gérer les urgences opérationnelles. <strong className="text-white">On recrute 
                4 personnes</strong> pour accompagner la croissance !"
              </p>

              <div className="flex gap-1 text-yellow-400 text-2xl">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            {/* Impact Équipe */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">👥 Impact sur l'Équipe</h2>
              
              <div className="space-y-4">
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-white font-bold mb-2 text-lg">📈 Croissance Équipe</p>
                  <p className="text-text-secondary">
                    De 3 à 7 personnes en 10 mois : 1 chef de produit, 2 préparateurs commandes, 1 photographe, 1 community manager
                  </p>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-white font-bold mb-2 text-lg">😊 Qualité de Vie Améliorée</p>
                  <p className="text-text-secondary">
                    Clara et ses assistantes ne croulent plus sous les emails clients répétitifs. Focus sur tâches à forte valeur ajoutée
                  </p>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-white font-bold mb-2 text-lg">🎯 Vision Long Terme</p>
                  <p className="text-text-secondary">
                    Objectif : 1M€/mois d'ici 18 mois. Lancement ligne maison en préparation. Levée de fonds en discussion
                  </p>
                </div>
              </div>
            </div>

            {/* Leçons */}
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">💡 Leçons Clés de Ce Succès</h2>
              
              <div className="space-y-4 text-text-secondary">
                <div className="flex gap-4">
                  <span className="text-2xl">1️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Le trafic sans conversion ne sert à rien</p>
                    <p>Investir dans l'automatisation de la conversion est 10x plus rentable que multiplier la publicité</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">2️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">La fidélisation client est le vrai jackpot</p>
                    <p>Acquérir un nouveau client coûte 5-7x plus cher que fidéliser un existant. La LTV explose avec le réachat</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">3️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">L'IA conversationnelle transforme l'e-commerce</p>
                    <p>Un chatbot bien configuré remplace un SAV de 3 personnes et vend 24/7 sans fatigue</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">4️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">L'email automation reste le canal ROI n°1</p>
                    <p>Séquences intelligentes + personnalisation IA = machine à cash automatique qui tourne en arrière-plan</p>
                  </div>
                </div>
              </div>
            </div>

          </article>

          {/* CTA Final */}
          <div className="bg-gradient-to-br from-primary/20 via-background-secondary to-secondary/20 border border-primary/30 rounded-2xl p-8 md:p-12 text-center mt-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Votre E-commerce Mérite <span className="text-primary">Cette Croissance Explosive</span>
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Que vous vendiez mode, beauté, déco, ou tout autre produit en ligne, 
              <span className="text-white font-semibold"> nous avons les solutions pour multiplier vos ventes et fidéliser vos clients</span>.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,132,255,0.5)]">
              <Link href="/#calendly">
                📅 Réserver Mon Audit Gratuit
              </Link>
            </Button>
            <p className="text-sm text-text-secondary mt-4">
              💰 Découvrez votre potentiel de croissance en 30 minutes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}