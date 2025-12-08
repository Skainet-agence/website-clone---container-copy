import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, CheckCircle2, TrendingUp, Target, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Cas Client : Agence Immobilière +127% de Conversions en 4 Mois | Devlopia",
  description: "Comment Immo Premium a transformé son processus de qualification des leads avec un CRM intelligent et un suivi automatisé hyper-personnalisé.",
  keywords: "cas client immobilier, automatisation agence immobilière, CRM immobilier, qualification leads, IA immobilier",
};

export default function CasClientImmobilierPage() {
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
            Agence Immobilière Augmente ses Conversions de <span className="text-primary">127% en 4 Mois</span>
          </h1>

          <div className="flex items-center gap-6 text-text-secondary text-sm mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              18 Janvier 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              15 min de lecture
            </span>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/modern-3d-real-estate-crm-visualization--05d221f3-20251208155234.jpg"
              alt="CRM immobilier intelligent"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content similaire... */}
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
                  <strong className="text-white">Immo Premium</strong> est une agence immobilière indépendante créée en 2016 à Bordeaux par Thomas Leroux, agent immobilier depuis 15 ans. L'agence se spécialise dans la transaction (vente/achat) de biens résidentiels haut de gamme (300K€ - 1,5M€).
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">📍 Localisation</p>
                    <p className="text-white">Bordeaux, Nouvelle-Aquitaine</p>
                  </div>
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">👥 Équipe</p>
                    <p className="text-white">1 directeur + 5 agents commerciaux</p>
                  </div>
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">💼 Transactions/An</p>
                    <p className="text-white">45-50 ventes conclues</p>
                  </div>
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">💰 CA Annuel</p>
                    <p className="text-white">680 000€</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Points Forts */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                Points Forts de l'Agence
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Positionnement Premium</p>
                  <p className="text-text-secondary">Spécialisation haut de gamme avec commissions élevées (5-7%)</p>
                </div>
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Réseau Local Solide</p>
                  <p className="text-text-secondary">Excellente connaissance marché bordelais, notaires partenaires</p>
                </div>
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Réputation Établie</p>
                  <p className="text-text-secondary">4,7/5 sur Google (180 avis), bouche-à-oreille efficace</p>
                </div>
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Équipe Compétente</p>
                  <p className="text-text-secondary">Agents expérimentés, fort taux closing (12% des leads)</p>
                </div>
              </div>
            </div>

            {/* Problématique */}
            <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/30 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🚨 Leads Qui S'évaporent</h2>
              
              <div className="space-y-6 text-text-secondary">
                <p className="text-lg text-white font-semibold">
                  L'agence génère 200+ leads/mois via publicité et site web, mais peine à les transformer en mandats et ventes...
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Qualification Leads Désastreuse</p>
                      <p>75% des leads = "touristes" non qualifiés (curieux, hors budget, chronophages). Agents perdent 60% du temps sur prospects non sérieux</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Suivi Leads Inexistant</p>
                      <p>CRM basique (Excel partagé). Leads non relancés systématiquement. Délai rappel : 48-72h (trop tard → lead parti chez concurrent)</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Communication Générique</p>
                      <p>Emails/SMS identiques pour tous. Zéro personnalisation selon profil acheteur, budget, critères recherche</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Gestion Patrimoine Désorganisée</p>
                      <p>250 annonces actives mais pas de matching intelligent lead/bien. Agents envoient listings aléatoires → taux ouverture 8%</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Visites Mal Organisées</p>
                      <p>Coordination manuelle planning visites. Annulations dernière minute, créneaux vides, double-bookings</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-destructive/20 mt-6">
                  <p className="text-white font-bold text-xl mb-2">Analyse Thomas :</p>
                  <p className="text-lg">
                    "On génère <span className="text-destructive font-bold">200 leads/mois</span> avec la pub Facebook/Google (8 000€/mois), 
                    mais <strong className="text-white">seuls 24 deviennent clients</strong> (12% conversion). <strong className="text-white">
                    176 prospects qualifiés partent chez la concurrence</strong> car on ne les suit pas assez vite ou avec assez de 
                    pertinence. Mes agents s'épuisent à trier le bon grain de l'ivraie au lieu de <strong className="text-white">
                    faire des visites et closer des ventes</strong>."
                  </p>
                </div>
              </div>
            </div>

            {/* Processus */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🔍 Notre Analyse Complète</h2>
              
              <div className="space-y-6">
                <div className="bg-background-secondary/60 border-l-4 border-primary rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Phase 1 : Audit Pipeline Commercial (3 semaines)</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Analyse 600 leads sur 3 mois : origine, temps réponse, taux conversion par source</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Shadowing 3 agents pendant 1 semaine : chronométrage activités</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Mystery shopping : test réactivité agence (appel, formulaire web, email)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Interviews 15 clients perdus : pourquoi sont-ils allés ailleurs ?</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-background-secondary/60 border-l-4 border-primary rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Phase 2 : Diagnostic Points de Friction</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Identification 11 points de perte leads dans le tunnel de conversion</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Mapping persona : 5 profils acheteurs avec motivations/objections spécifiques</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Benchmark 8 agences concurrentes : stratégies CRM, réactivité, outils</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Plan d'Action */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🎯 Solution CRM Intelligente Déployée</h2>
              
              <div className="space-y-6">
                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">CRM Immobilier IA + Scoring Automatique</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Lead scoring IA : notation 0-100 selon 18 critères (budget, projet, urgence)</li>
                        <li>✅ Attribution automatique leads chauds aux agents (round-robin intelligent)</li>
                        <li>✅ Détection intentions (achat immédiat, veille passive, investissement locatif)</li>
                        <li>✅ Enrichissement données automatique (revenus estimés, capacité emprunt)</li>
                        <li>✅ Historique unifié : emails, appels, SMS, visites en 1 clic</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 4 semaines</p>
                      <p className="text-success font-semibold mt-2">🎯 Objectif : +150% taux qualification</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Suivi Automatisé Multi-Canal Hyper-Personnalisé</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Réponse automatique instantanée (<5 secondes) avec 1er contact personnalisé</li>
                        <li>✅ Séquences nurturing selon persona : 7-12 touchpoints sur 30 jours</li>
                        <li>✅ Relances SMS/Email/WhatsApp selon préférence contact</li>
                        <li>✅ Rappels agents si lead chaud non contacté sous 30min</li>
                        <li>✅ Réactivation leads dormants 60j+ avec offres ciblées</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 3 semaines</p>
                      <p className="text-success font-semibold mt-2">🎯 Objectif : Zéro lead sans suivi</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Matching Intelligent Lead ↔ Bien Immobilier</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Algorithme matching 15 critères (localisation, budget, surface, prestations)</li>
                        <li>✅ Envoi automatique sélection personnalisée 3-5 biens parfaits</li>
                        <li>✅ Alertes temps réel si nouveau bien correspond au profil lead</li>
                        <li>✅ Tableau de bord lead : accès direct annonces matchées, favoris, historique</li>
                        <li>✅ Tracking comportement : biens consultés, durée, pages visitées</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 3 semaines</p>
                      <p className="text-success font-semibold mt-2">🎯 Objectif : +250% taux engagement</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Planification Visites Automatisée</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Réservation visites en ligne : lead choisit créneau disponible agent</li>
                        <li>✅ Synchronisation calendriers agents + rappels SMS J-1 et H-2</li>
                        <li>✅ Optimisation tournées : regroupement visites géographique</li>
                        <li>✅ Gestion annulations : reprogrammation automatique + remplissage créneaux libérés</li>
                        <li>✅ Feedback post-visite automatique : satisfaction, objections, intention achat</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 2 semaines</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Analytics Prédictifs & Pipeline Management</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Dashboard temps réel : leads par statut, taux conversion, CA prévisionnel</li>
                        <li>✅ IA prédictive : probabilité closing par lead (score chaud/tiède/froid)</li>
                        <li>✅ Identification leads à risque (non contacté depuis X jours, engagement baisse)</li>
                        <li>✅ Performance agents : classement, objectifs, commissions projetées</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 2 semaines</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-xl p-6 border border-primary/30 mt-6">
                <p className="text-white font-bold text-lg mb-2">💰 Investissement Total :</p>
                <p className="text-2xl font-black text-primary mb-3">22 500€</p>
                <p className="text-text-secondary text-sm">Incluant : CRM personnalisé, intégrations, migration données, formation équipe, support 12 mois</p>
              </div>
            </div>

            {/* Déploiement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">⚙️ Déploiement Progressif</h2>
              
              <div className="space-y-6 text-text-secondary">
                <p className="text-lg">
                  Mise en place sur <strong className="text-white">14 semaines</strong> avec formation intensive des agents :
                </p>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <h3 className="text-white font-bold text-lg mb-4">📅 Timeline</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="text-primary font-bold whitespace-nowrap">S1-S4</div>
                      <div>Installation CRM + Migration 600 leads existants + Tests scoring IA</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-primary font-bold whitespace-nowrap">S5-S7</div>
                      <div>Configuration séquences automatisées + Formation agents (8h/agent)</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-primary font-bold whitespace-nowrap">S8-S10</div>
                      <div>Déploiement matching IA + Intégration site web + Portail lead</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-primary font-bold whitespace-nowrap">S11-S12</div>
                      <div>Planification visites + Analytics dashboard</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-primary font-bold whitespace-nowrap">S13-S14</div>
                      <div>Optimisation + Support intensif + Ajustements</div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                  <p className="text-white font-bold mb-2">👥 Adoption Équipe</p>
                  <p>
                    <strong className="text-white">6 agents formés</strong> en 2 sessions. Accompagnement terrain 1 mois : 
                    coach assiste aux appels, corrige en temps réel. Mise en place <strong className="text-white">
                    challenges hebdomadaires</strong> (meilleur taux conversion → bonus 300€) pour stimuler adoption.
                  </p>
                </div>
              </div>
            </div>

            {/* Résultats */}
            <div className="bg-gradient-to-br from-success/20 to-success/10 border border-success/40 rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-10 h-10 text-success" />
                <h2 className="text-3xl font-bold text-white m-0">Résultats Exceptionnels (4 Mois)</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Taux Conversion Leads</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">+127%</p>
                  <p className="text-text-secondary text-sm">12% → 27,2% (54 ventes/mois vs 24)</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Délai 1er Contact</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">< 2min</p>
                  <p className="text-text-secondary text-sm">Vs 48-72h avant (réactivité record)</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Temps Agents Libéré</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">35%</p>
                  <p className="text-text-secondary text-sm">Focus sur leads qualifiés uniquement</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Taux Visite → Offre</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">+89%</p>
                  <p className="text-text-secondary text-sm">18% → 34% (matching parfait)</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-background-primary/50 rounded-xl p-4 border border-success/20">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">📧 Taux Ouverture Emails</span>
                    <span className="text-success font-bold">43%</span>
                  </div>
                  <p className="text-text-secondary text-sm mt-1">Vs 8% avant (personnalisation IA)</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-4 border border-success/20">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">🎯 Leads Qualifiés Score >70</span>
                    <span className="text-success font-bold">68%</span>
                  </div>
                  <p className="text-text-secondary text-sm mt-1">Agents traitent uniquement prospects sérieux</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-4 border border-success/20">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">⏱️ Durée Cycle Vente</span>
                    <span className="text-success font-bold">-31%</span>
                  </div>
                  <p className="text-text-secondary text-sm mt-1">90j → 62j (suivi optimisé)</p>
                </div>
              </div>

              <div className="bg-success/20 border border-success/40 rounded-xl p-6 mb-6">
                <p className="text-white font-bold text-2xl mb-3">💰 Impact Financier (4 Mois)</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-text-secondary text-sm mb-1">CA Additionnel</p>
                    <p className="text-3xl font-black text-success">+420 000€</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm mb-1">Investissement</p>
                    <p className="text-3xl font-black text-white">22 500€</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm mb-1">ROI</p>
                    <p className="text-3xl font-black text-primary">1 867%</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/20 border border-primary/30 rounded-xl p-6">
                <p className="text-white font-bold text-xl mb-2">📈 ROI Atteint en 16 Jours</p>
                <p className="text-text-secondary">
                  L'investissement récupéré en <strong className="text-white">2 semaines et demie</strong>. 
                  Projection annuelle : <strong className="text-primary">+1,26M€ de CA</strong> (doublement activité).
                </p>
              </div>
            </div>

            {/* Témoignage */}
            <div className="bg-gradient-to-br from-background-secondary to-background-tertiary border-l-4 border-primary rounded-xl p-8 mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold shrink-0">
                  TL
                </div>
                <div>
                  <p className="text-white font-bold text-xl">Thomas Leroux</p>
                  <p className="text-primary font-semibold">Directeur, Immo Premium</p>
                </div>
              </div>
              
              <p className="text-text-secondary text-lg italic leading-relaxed mb-4">
                "Avant, on jetait <strong className="text-white">8 000€/mois en pub</strong> et 70% des leads partaient dans la nature. 
                Mes agents passaient des heures à trier, rappeler des gens injoignables, envoyer des listings aléatoires... 
                <strong className="text-white">C'était du gâchis monstre</strong>. Maintenant, l'IA score les leads dès leur arrivée. 
                Mes agents savent exactement qui appeler en priorité, reçoivent les infos enrichies, et le système envoie 
                automatiquement les biens parfaitement matchés. <strong className="text-white">On a doublé nos ventes en 4 mois</strong> 
                avec la même équipe ! Les agents sont moins stressés car ils ne chassent que des prospects chauds. 
                Notre taux de closing explose. <strong className="text-white">C'est la meilleure décision business que j'ai prise</strong>. 
                On vise 100 ventes/an maintenant !"
              </p>

              <div className="flex gap-1 text-yellow-400 text-2xl">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            {/* Bénéfices Additionnels */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🎁 Bénéfices Supplémentaires</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2 text-lg">😊 Satisfaction Équipe</p>
                  <p className="text-text-secondary">
                    Agents adorent le nouveau système. Fini les heures perdues, focus sur leur métier : vendre
                  </p>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2 text-lg">🌟 Expérience Client Premium</p>
                  <p className="text-text-secondary">
                    Clients impressionnés par réactivité (<2min) et pertinence biens proposés. NPS +34 points
                  </p>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2 text-lg">📊 Visibilité Pipeline Totale</p>
                  <p className="text-text-secondary">
                    Thomas pilote l'agence avec dashboard temps réel. Anticipe CA, détecte problèmes, optimise ressources
                  </p>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2 text-lg">💼 Recrutement Facilité</p>
                  <p className="text-text-secondary">
                    Agence perçue comme moderne et technologique. Attire jeunes agents talentueux (2 recrutements prévus)
                  </p>
                </div>
              </div>
            </div>

            {/* Leçons Clés */}
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">💡 Leçons Clés de Cette Transformation</h2>
              
              <div className="space-y-4 text-text-secondary">
                <div className="flex gap-4">
                  <span className="text-2xl">1️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">La vitesse tue en immobilier</p>
                    <p>Lead contacté en <2min a 10x plus de chances de convertir qu'un lead rappelé sous 48h. L'automatisation gagne la course</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">2️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">La qualification automatique libère les commerciaux</p>
                    <p>Scorer les leads par IA permet aux agents de se concentrer sur le closing plutôt que sur le tri</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">3️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">La personnalisation est reine</p>
                    <p>Matching intelligent lead ↔ bien transforme l'expérience. Fini les listings génériques, place au sur-mesure automatisé</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">4️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Le CRM intelligent est l'arme ultime de l'agent moderne</p>
                    <p>Un bon CRM IA transforme une agence moyenne en machine de guerre commerciale</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="bg-gradient-to-br from-primary/20 via-background-secondary to-secondary/20 border border-primary/30 rounded-2xl p-8 md:p-12 text-center mt-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Votre Agence Immobilière Mérite <span className="text-primary">Ces Résultats</span>
              </h2>
              <p className="text-base sm:text-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
                Transformez vos leads en clients avec un CRM intelligent et un suivi automatisé.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,132,255,0.5)]">
                <Link href="/#calendly">
                  📅 Réserver Mon Audit Gratuit
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}