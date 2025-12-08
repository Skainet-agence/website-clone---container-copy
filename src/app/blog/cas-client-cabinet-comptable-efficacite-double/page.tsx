import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, CheckCircle2, TrendingUp, Target, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Cas Client : Cabinet Comptable Double son Portefeuille Sans Recruter | Devlopia",
  description: "Découvrez comment Compta Plus a automatisé 70% de ses tâches administratives et accepte 50 clients supplémentaires avec la même équipe.",
  keywords: "cas client comptabilité, automatisation cabinet comptable, gestion clients, saisie automatique, IA comptabilité",
};

export default function CasClientComptablePage() {
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
            Cabinet Comptable Double son Portefeuille Clients <span className="text-primary">Sans Recruter</span>
          </h1>

          <div className="flex items-center gap-6 text-text-secondary text-sm mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              3 Février 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              13 min de lecture
            </span>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/professional-3d-illustration-of-automate-34534262-20251208155233.jpg"
              alt="Automatisation cabinet comptable"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content - Suite identique avec contenu adapté pour cabinet comptable... */}
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
                  <strong className="text-white">Compta Plus</strong> est un cabinet d'expertise comptable créé en 2010 à Nantes par Stéphanie Moreau, expert-comptable diplômée. Le cabinet accompagne des TPE/PME (commerces, artisans, professions libérales) dans leur gestion comptable, fiscale et sociale.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">📍 Localisation</p>
                    <p className="text-white">Nantes, Pays de la Loire</p>
                  </div>
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">👥 Équipe</p>
                    <p className="text-white">1 expert-comptable + 3 collaborateurs</p>
                  </div>
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">💼 Portefeuille</p>
                    <p className="text-white">85 clients TPE/PME</p>
                  </div>
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">💰 CA Annuel</p>
                    <p className="text-white">420 000€</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Points Forts */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                Points Forts du Cabinet
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Expertise Polyvalente</p>
                  <p className="text-text-secondary">Maîtrise multi-secteurs (commerce, BTP, libéral, services)</p>
                </div>
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Relation Client Privilégiée</p>
                  <p className="text-text-secondary">Approche conseil personnalisée, taux fidélité 95%</p>
                </div>
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Réactivité Appréciée</p>
                  <p className="text-text-secondary">Disponibilité pour les clients, accompagnement fiscal pointu</p>
                </div>
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Réputation Locale</p>
                  <p className="text-text-secondary">Bouche-à-oreille efficace, recommandations clients</p>
                </div>
              </div>
            </div>

            {/* Problématique */}
            <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/30 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🚨 Saturation et Opportunités Manquées</h2>
              
              <div className="space-y-6 text-text-secondary">
                <p className="text-lg text-white font-semibold">
                  Le cabinet refusait 4-5 nouveaux clients/mois faute de capacité. L'équipe croulait sous les tâches répétitives...
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Saisie Manuelle Chronophage</p>
                      <p>60% du temps des collaborateurs passé à saisir factures, relevés bancaires, notes de frais. Erreurs de saisie : 2-3% (retraitements coûteux)</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Relances Clients Inefficaces</p>
                      <p>Obtention documents comptables : 15 jours en moyenne. Relances téléphoniques répétées = perte de temps (4h/semaine/collaborateur)</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Production Bilans Tardive</p>
                      <p>Délai moyen clôture annuelle : 6 mois. Clients insatisfaits car déclarations fiscales au dernier moment</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Missions à Faible Valeur Ajoutée</p>
                      <p>L'équipe passe 70% du temps sur tâches administratives vs 30% sur conseil stratégique (qui génère plus de valeur)</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Surcharge en Période Fiscale</p>
                      <p>Mars-Mai : équipe en burn-out (50-60h/semaine). Turnover élevé (1 collaborateur/an quitte le cabinet)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-destructive/20 mt-6">
                  <p className="text-white font-bold text-xl mb-2">Constat Stéphanie :</p>
                  <p className="text-lg">
                    "Nous refusons <span className="text-destructive font-bold">50 000€ de CA potentiel/an</span> faute de capacité. 
                    Mon équipe s'épuise sur des tâches que <strong className="text-white">l'IA pourrait faire en 10x moins de temps</strong>. 
                    Je veux développer l'activité conseil qui rapporte plus et valorise mieux mes collaborateurs, mais 
                    <strong className="text-white"> on est coincés dans l'opérationnel basique</strong>."
                  </p>
                </div>
              </div>
            </div>

            {/* Processus */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🔍 Notre Audit Opérationnel</h2>
              
              <div className="space-y-6">
                <div className="bg-background-secondary/60 border-l-4 border-primary rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Phase 1 : Analyse Processus (2 semaines)</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Shadowing 3 collaborateurs pendant 5 jours : chronométrage tâches</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Analyse 120 dossiers clients : typologie, complexité, temps passé</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Cartographie 47 tâches récurrentes et leur potentiel d'automatisation</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Interviews clients (15) : satisfaction, irritants, attentes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-background-secondary/60 border-l-4 border-primary rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Phase 2 : Diagnostic & Priorisation</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Identification 18 processus automatisables (gain temps cumulé : 72h/semaine)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Calcul capacité additionnelle : +50 clients sans recrutement</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>ROI projeté : investissement amorti en 7-8 mois</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Plan d'Action */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🎯 Solution Déployée</h2>
              
              <div className="space-y-6">
                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Saisie Automatique Intelligente (OCR + IA)</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Reconnaissance automatique factures/relevés (PDF, photos, emails)</li>
                        <li>✅ Extraction données : montants, dates, TVA, comptes comptables</li>
                        <li>✅ Apprentissage automatique : IA s'améliore selon historique client</li>
                        <li>✅ Intégration directe logiciel comptable (Sage, Cegid, Quadratus)</li>
                        <li>✅ Validation humaine 5% seulement (anomalies détectées)</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 4 semaines</p>
                      <p className="text-success font-semibold mt-2">🎯 Gain : 35h/semaine équipe</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Portail Client & Collecte Automatisée</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Espace client web/mobile : dépôt documents simplifié (drag & drop)</li>
                        <li>✅ Rappels automatiques SMS/email si documents manquants</li>
                        <li>✅ Connexion bancaire automatique : récupération relevés en temps réel</li>
                        <li>✅ Tableau de bord client : suivi compta en direct, indicateurs clés</li>
                        <li>✅ Notifications proactives : échéances fiscales, alertes trésorerie</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 3 semaines</p>
                      <p className="text-success font-semibold mt-2">🎯 Gain : 16h/semaine relances</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Automatisation Déclarations Fiscales</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Pré-remplissage automatique formulaires (TVA, IS, DAS2, CVAE)</li>
                        <li>✅ Contrôles cohérence avant envoi (détection anomalies)</li>
                        <li>✅ Télédéclaration automatique avec accusés réception</li>
                        <li>✅ Archivage légal sécurisé 10 ans</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 2 semaines</p>
                      <p className="text-success font-semibold mt-2">🎯 Gain : 12h/semaine</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">IA Conseil Prédictive</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Détection opportunités fiscales (crédits impôt, optimisations)</li>
                        <li>✅ Alertes trésorerie prédictives (tensions à 30/60/90 jours)</li>
                        <li>✅ Benchmarking sectoriel automatique (vs concurrents)</li>
                        <li>✅ Suggestions amélioration rentabilité personnalisées</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 3 semaines</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-xl p-6 border border-primary/30 mt-6">
                <p className="text-white font-bold text-lg mb-2">💰 Investissement Total :</p>
                <p className="text-2xl font-black text-primary mb-3">34 000€</p>
                <p className="text-text-secondary text-sm">Incluant : logiciels, intégrations, migration données, formation équipe, support 12 mois</p>
              </div>
            </div>

            {/* Résultats */}
            <div className="bg-gradient-to-br from-success/20 to-success/10 border border-success/40 rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-10 h-10 text-success" />
                <h2 className="text-3xl font-bold text-white m-0">Résultats Impressionnants (12 Mois)</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Nouveaux Clients</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">+52</p>
                  <p className="text-text-secondary text-sm">85 → 137 clients (capacité doublée)</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Temps Saisie Réduit</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">-73%</p>
                  <p className="text-text-secondary text-sm">35h → 9,5h/semaine libérées</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Délai Clôture Annuelle</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">2,5 mois</p>
                  <p className="text-text-secondary text-sm">Vs 6 mois avant (clients ravis)</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Taux Erreur</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">-91%</p>
                  <p className="text-text-secondary text-sm">2,3% → 0,2% (quasi zéro retraitement)</p>
                </div>
              </div>

              <div className="bg-success/20 border border-success/40 rounded-xl p-6 mb-6">
                <p className="text-white font-bold text-2xl mb-3">💰 Impact Financier Annuel</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-text-secondary text-sm mb-1">CA Additionnel</p>
                    <p className="text-3xl font-black text-success">+260 000€</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm mb-1">Investissement</p>
                    <p className="text-3xl font-black text-white">34 000€</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm mb-1">Gain Net</p>
                    <p className="text-3xl font-black text-primary">226 000€</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/20 border border-primary/30 rounded-xl p-6">
                <p className="text-white font-bold text-xl mb-2">📈 ROI Atteint en 6,2 Mois</p>
                <p className="text-text-secondary">
                  L'investissement amorti en <strong className="text-white">moins de 7 mois</strong>. 
                  Sur 3 ans, le gain cumulé est projeté à <strong className="text-primary">678 000€</strong>.
                </p>
              </div>
            </div>

            {/* Témoignage */}
            <div className="bg-gradient-to-br from-background-secondary to-background-tertiary border-l-4 border-primary rounded-xl p-8 mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold shrink-0">
                  SM
                </div>
                <div>
                  <p className="text-white font-bold text-xl">Stéphanie Moreau</p>
                  <p className="text-primary font-semibold">Expert-Comptable, Compta Plus</p>
                </div>
              </div>
              
              <p className="text-text-secondary text-lg italic leading-relaxed mb-4">
                "L'automatisation a <strong className="text-white">transformé mon cabinet</strong>. Avant, on passait 70% du temps 
                à saisir des factures et relancer les clients. Aujourd'hui, <strong className="text-white">mes collaborateurs font du vrai 
                conseil</strong> : ils aident les clients à optimiser leur fiscalité, améliorer leur rentabilité, anticiper leurs besoins 
                de trésorerie. C'est valorisant pour eux et nos clients adorent ! Nous avons <strong className="text-white">pris 52 nouveaux 
                clients</strong> sans recruter une seule personne supplémentaire. La période fiscale qui était un cauchemar est devenue 
                gérable. <strong className="text-white">Mon équipe est plus épanouie, mes clients plus satisfaits, et mon CA a explosé</strong>. 
                C'est gagnant sur tous les plans !"
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
                  <p className="text-primary font-bold mb-2 text-lg">😊 Qualité de Vie au Travail</p>
                  <p className="text-text-secondary">
                    Fini les 60h/semaine en période fiscale. Équipe travaille 40h max, y compris mars-mai
                  </p>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2 text-lg">📈 Turnover Divisé par 5</p>
                  <p className="text-text-secondary">
                    Plus aucun départ collaborateur en 12 mois. Métier redevenu attractif (conseil vs saisie)
                  </p>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2 text-lg">🌟 Satisfaction Clients +38%</p>
                  <p className="text-text-secondary">
                    NPS passé de 42 à 58. Clients apprécient réactivité, portail en ligne et conseils proactifs
                  </p>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2 text-lg">💼 Positionnement Haut de Gamme</p>
                  <p className="text-text-secondary">
                    Cabinet perçu comme innovant et moderne. Attire clients à plus forte valeur ajoutée
                  </p>
                </div>
              </div>
            </div>

            {/* Leçons Clés */}
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">💡 Leçons Clés de Ce Projet</h2>
              
              <div className="space-y-4 text-text-secondary">
                <div className="flex gap-4">
                  <span className="text-2xl">1️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">L'automatisation libère du temps pour le conseil</p>
                    <p>Les tâches répétitives (saisie, relances) n'ont aucune valeur ajoutée. L'IA les traite mieux et plus vite</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">2️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Croissance sans recrutement = rentabilité maximale</p>
                    <p>Doubler le portefeuille clients sans embaucher = marge nette démultipliée</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">3️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Les collaborateurs préfèrent le conseil à la saisie</p>
                    <p>Revalorisation du métier = motivation accrue et fidélisation équipe</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">4️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Les clients adorent le self-service bien fait</p>
                    <p>Portail client moderne + alertes proactives = expérience client premium</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="bg-gradient-to-br from-primary/20 via-background-secondary to-secondary/20 border border-primary/30 rounded-2xl p-8 md:p-12 text-center mt-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Votre Cabinet Comptable Mérite <span className="text-primary">Cette Transformation</span>
              </h2>
              <p className="text-base sm:text-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
                Doublez votre portefeuille clients sans recruter grâce à l'automatisation intelligente.
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