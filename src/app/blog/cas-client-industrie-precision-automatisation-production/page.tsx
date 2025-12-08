import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, CheckCircle2, TrendingUp, Target, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Cas Client : PME Industrielle Réduit ses Coûts de 35% | Devlopia",
  description: "Découvrez comment Precision Métal a automatisé sa chaîne de production et son suivi qualité pour économiser 180 000€/an grâce à l'IA.",
  keywords: "cas client industrie, automatisation production, IA industrielle, réduction coûts, suivi qualité automatisé",
};

export default function CasClientIndustriePage() {
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
            Comment une PME Industrielle a Réduit ses Coûts de <span className="text-primary">35% avec l'IA</span>
          </h1>

          <div className="flex items-center gap-6 text-text-secondary text-sm mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              15 Juin 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              14 min de lecture
            </span>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/modern-3d-isometric-illustration-of-an-i-5818cbb1-20251208155233.jpg"
              alt="Automatisation industrielle avec IA"
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
                  <strong className="text-white">Precision Métal</strong> est une PME française spécialisée dans l'usinage de pièces métalliques de précision pour l'aéronautique et l'automobile. Fondée en 2008, l'entreprise emploie 45 personnes et réalise un chiffre d'affaires de 5,2M€.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">📍 Localisation</p>
                    <p className="text-white">Lyon, Auvergne-Rhône-Alpes</p>
                  </div>
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">👥 Effectif</p>
                    <p className="text-white">45 employés</p>
                  </div>
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">💰 CA Annuel</p>
                    <p className="text-white">5,2M€</p>
                  </div>
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">🏭 Secteur</p>
                    <p className="text-white">Industrie / Usinage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Points Forts */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                Points Forts de l'Entreprise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Expertise Technique</p>
                  <p className="text-text-secondary">15 ans d'expérience en usinage de précision avec certifications ISO 9001 et EN 9100</p>
                </div>
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Clients Prestigieux</p>
                  <p className="text-text-secondary">Contrats avec Airbus, Safran, PSA et Renault</p>
                </div>
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Équipement Moderne</p>
                  <p className="text-text-secondary">Parc machines CNC récent avec capacités 5 axes</p>
                </div>
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Main d'Œuvre Qualifiée</p>
                  <p className="text-text-secondary">Équipe d'opérateurs et techniciens hautement qualifiés</p>
                </div>
              </div>
            </div>

            {/* Problématique */}
            <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/30 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🚨 Problématique Rencontrée</h2>
              
              <div className="space-y-6 text-text-secondary">
                <p className="text-lg text-white font-semibold">
                  Malgré ses points forts, Precision Métal faisait face à des défis majeurs qui menaçaient sa compétitivité :
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Suivi Qualité Manuel et Chronophage</p>
                      <p>3 contrôleurs qualité passaient 80% de leur temps à saisir manuellement les mesures dans Excel, créant des goulots d'étranglement</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Taux de Rebut Élevé (8,5%)</p>
                      <p>Détection tardive des dérives machine générant 440 000€ de rebuts annuels</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Maintenance Réactive Coûteuse</p>
                      <p>Pannes machines imprévues causant 120h d'arrêt production/an (60 000€ de pertes)</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Planification Production Inefficace</p>
                      <p>Ordonnancement manuel causant des retards de livraison (15% des commandes) et pénalités contractuelles</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Traçabilité Incomplète</p>
                      <p>Impossible de retrouver rapidement l'historique complet d'une pièce en cas de réclamation client</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-destructive/20 mt-6">
                  <p className="text-white font-bold text-xl mb-2">Impact Global :</p>
                  <p className="text-lg">
                    Ces problèmes cumulés représentaient une <span className="text-destructive font-bold">perte annuelle estimée à 520 000€</span> et mettaient en péril la compétitivité face à des concurrents européens plus automatisés.
                  </p>
                </div>
              </div>
            </div>

            {/* Processus */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🔍 Notre Processus d'Analyse</h2>
              
              <div className="space-y-6">
                <div className="bg-background-secondary/60 border-l-4 border-primary rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Phase 1 : Audit Terrain (2 semaines)</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Observation des flux de production sur 8 jours (2 postes)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Interviews approfondies de 18 collaborateurs (opérateurs, contrôleurs, chefs d'équipe)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Analyse des données historiques : 12 mois de registres qualité et maintenance</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Cartographie complète des 23 étapes du processus de production</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-background-secondary/60 border-l-4 border-primary rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Phase 2 : Diagnostic Détaillé</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Identification de 14 points de friction critiques</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Calcul ROI potentiel pour 8 axes d'automatisation</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Priorisation selon impact/complexité (matrice Eisenhower)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Plan d'Action */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🎯 Plan d'Action Déployé</h2>
              
              <div className="space-y-6">
                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Système IoT + IA de Suivi Qualité en Temps Réel</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Installation de 12 capteurs IoT sur machines CNC critiques</li>
                        <li>✅ IA prédictive analysant 50+ paramètres/seconde (vibrations, température, usure outil)</li>
                        <li>✅ Dashboard temps réel avec alertes SMS/email automatiques</li>
                        <li>✅ Détection anomalies avant production de pièces non-conformes</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 6 semaines</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Automatisation Complète du Contrôle Qualité</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Scanners 3D automatiques post-usinage (précision 0,001mm)</li>
                        <li>✅ Reconnaissance d'image IA pour défauts visuels</li>
                        <li>✅ Saisie automatique dans ERP avec blockchain traçabilité</li>
                        <li>✅ Génération automatique certificats conformité PDF</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 8 semaines</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Maintenance Prédictive par Intelligence Artificielle</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Modèle ML entraîné sur 3 ans d'historique pannes</li>
                        <li>✅ Prédiction défaillances 7-14 jours à l'avance (précision 89%)</li>
                        <li>✅ Planification automatique interventions préventives</li>
                        <li>✅ Optimisation stocks pièces détachées critiques</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 4 semaines</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Ordonnancement Intelligent Multi-Critères</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Algorithme d'optimisation considérant 15 contraintes simultanées</li>
                        <li>✅ Simulation scenarios "what-if" en 2 secondes</li>
                        <li>✅ Ré-ordonnancement automatique en cas d'imprévu</li>
                        <li>✅ Réduction temps setup changement série de 35%</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 5 semaines</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-xl p-6 border border-primary/30 mt-6">
                <p className="text-white font-bold text-lg mb-2">💰 Investissement Total :</p>
                <p className="text-2xl font-black text-primary mb-3">87 000€</p>
                <p className="text-text-secondary text-sm">Incluant : matériel IoT, licences logicielles, développement IA sur-mesure, formation équipes</p>
              </div>
            </div>

            {/* Mise en Place */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">⚙️ Mise en Place et Formation</h2>
              
              <div className="space-y-6 text-text-secondary">
                <p className="text-lg">
                  Le déploiement s'est étalé sur <strong className="text-white">5 mois</strong> avec une approche progressive pour minimiser les perturbations :
                </p>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <h3 className="text-white font-bold text-lg mb-4">📅 Chronologie de Déploiement</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="text-primary font-bold">Mois 1</div>
                      <div>Installation infrastructure IoT + Formation équipe technique (2 jours)</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-primary font-bold">Mois 2</div>
                      <div>Déploiement système qualité automatisé + Formation contrôleurs (3 jours)</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-primary font-bold">Mois 3</div>
                      <div>Mise en production maintenance prédictive + Formation responsable maintenance</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-primary font-bold">Mois 4</div>
                      <div>Déploiement ordonnancement IA + Formation planificateurs (2 jours)</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-primary font-bold">Mois 5</div>
                      <div>Optimisation fine + Support intensif (2 ingénieurs sur site 3 jours/semaine)</div>
                    </div>
                  </div>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <h3 className="text-white font-bold text-lg mb-4">👥 Formation des Équipes</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span><strong className="text-white">45 personnes formées</strong> en 3 sessions adaptées par profil</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span><strong className="text-white">Documentation vidéo</strong> : 12 tutoriels courts accessibles sur tablette atelier</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span><strong className="text-white">Ambassadeurs internes</strong> : 4 "power users" formés pour support niveau 1</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span><strong className="text-white">Hotline dédiée</strong> : Support technique 8h-18h pendant 6 mois</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Suivi */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">📊 Suivi et Optimisation Continue</h2>
              
              <div className="space-y-6 text-text-secondary">
                <p className="text-lg">
                  Un accompagnement post-déploiement de <strong className="text-white">12 mois</strong> pour garantir l'atteinte des objectifs :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                    <p className="text-primary font-bold mb-3">📈 KPIs Suivis Hebdomadaires</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Taux de rebut</li>
                      <li>• Temps arrêt machines</li>
                      <li>• Respect délais livraison</li>
                      <li>• Productivité équipe qualité</li>
                      <li>• Coûts maintenance</li>
                    </ul>
                  </div>

                  <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                    <p className="text-primary font-bold mb-3">🔧 Points d'Optimisation</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Revue mensuelle performance</li>
                      <li>• Ajustements modèles IA</li>
                      <li>• Nouvelles règles métier</li>
                      <li>• Formations complémentaires</li>
                      <li>• Évolutions fonctionnelles</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                  <p className="text-white font-bold mb-2">🎯 Méthodologie d'Amélioration Continue</p>
                  <p>
                    Comité de pilotage mensuel (Direction + Chefs d'équipe + Notre équipe) pour analyser les données, 
                    identifier les axes d'optimisation et prioriser les évolutions. <strong className="text-white">14 améliorations mineures</strong> déployées 
                    durant la première année, augmentant les gains de 12% supplémentaires.
                  </p>
                </div>
              </div>
            </div>

            {/* Résultats */}
            <div className="bg-gradient-to-br from-success/20 to-success/10 border border-success/40 rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-10 h-10 text-success" />
                <h2 className="text-3xl font-bold text-white m-0">Résultats Concrets Obtenus</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Réduction Taux de Rebut</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">-73%</p>
                  <p className="text-text-secondary text-sm">De 8,5% à 2,3% • Économie : 320 000€/an</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Réduction Arrêts Machines</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">-82%</p>
                  <p className="text-text-secondary text-sm">120h → 22h/an • Économie : 49 000€/an</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Gain Productivité Qualité</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">+340%</p>
                  <p className="text-text-secondary text-sm">3 contrôleurs traitent 4,4x plus de pièces</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Respect Délais Livraison</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">98,5%</p>
                  <p className="text-text-secondary text-sm">Vs 85% avant • Zéro pénalité contractuelle</p>
                </div>
              </div>

              <div className="bg-success/20 border border-success/40 rounded-xl p-6 mb-6">
                <p className="text-white font-bold text-2xl mb-3">💰 Bilan Financier Année 1</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-text-secondary text-sm mb-1">Économies Totales</p>
                    <p className="text-3xl font-black text-success">182 000€</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm mb-1">Investissement</p>
                    <p className="text-3xl font-black text-white">87 000€</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm mb-1">Gain Net</p>
                    <p className="text-3xl font-black text-primary">95 000€</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/20 border border-primary/30 rounded-xl p-6">
                <p className="text-white font-bold text-xl mb-2">📈 ROI Atteint en 5,7 Mois</p>
                <p className="text-text-secondary">
                  Le retour sur investissement a été <strong className="text-white">2x plus rapide que prévu</strong>. 
                  Sur 3 ans, les économies cumulées sont projetées à <strong className="text-primary">546 000€</strong>.
                </p>
              </div>
            </div>

            {/* Témoignage */}
            <div className="bg-gradient-to-br from-background-secondary to-background-tertiary border-l-4 border-primary rounded-xl p-8 mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold shrink-0">
                  PM
                </div>
                <div>
                  <p className="text-white font-bold text-xl">Philippe Mercier</p>
                  <p className="text-primary font-semibold">Directeur Général, Precision Métal</p>
                </div>
              </div>
              
              <p className="text-text-secondary text-lg italic leading-relaxed mb-4">
                "Je vais être honnête : au début, j'étais <strong className="text-white">sceptique</strong>. L'IA dans l'industrie, 
                ça semblait complexe et risqué. Mais l'équipe Devlopia a pris le temps de vraiment comprendre nos contraintes métier. 
                Aujourd'hui, nous avons retrouvé <strong className="text-white">notre compétitivité face aux concurrents allemands</strong>. 
                Nos équipes ne passent plus leur temps sur des tâches répétitives et peuvent se concentrer sur de la vraie 
                expertise technique. Les clients remarquent la <strong className="text-white">qualité améliorée et la ponctualité</strong>. 
                C'était un investissement, mais aujourd'hui c'est <strong className="text-white">le meilleur que nous ayons fait depuis 10 ans</strong>."
              </p>

              <div className="flex gap-1 text-yellow-400 text-2xl">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            {/* Bénéfices Additionnels */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🎁 Bénéfices Additionnels Inattendus</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2 text-lg">🌟 Attractivité Talents</p>
                  <p className="text-text-secondary">
                    Embauche facilitée : les jeunes ingénieurs préfèrent une usine "connectée 4.0" aux ateliers traditionnels
                  </p>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2 text-lg">📜 Certification Facilitée</p>
                  <p className="text-text-secondary">
                    Renouvellement ISO 9001 sans non-conformité grâce à la traçabilité digitale complète
                  </p>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2 text-lg">🤝 Nouveaux Contrats</p>
                  <p className="text-text-secondary">
                    Capacité à répondre à des appels d'offres nécessitant Industry 4.0 (2 nouveaux clients aérospatial)
                  </p>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2 text-lg">😊 Satisfaction Équipes</p>
                  <p className="text-text-secondary">
                    Baisse turnover de 40% : les collaborateurs apprécient moins de tâches répétitives et plus de responsabilisation
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
                    <p className="text-white font-semibold mb-1">L'IA n'est pas réservée aux grands groupes</p>
                    <p>Une PME de 45 personnes peut bénéficier de technologies de pointe avec un investissement raisonnable et un ROI rapide</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">2️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">L'accompagnement humain est crucial</p>
                    <p>La technologie seule ne suffit pas : formation, change management et support sont indispensables à la réussite</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">3️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Approche progressive gagnante</p>
                    <p>Déployer par étapes permet d'ajuster en temps réel et de minimiser les risques opérationnels</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">4️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">La data est le carburant de l'IA</p>
                    <p>Même des données imparfaites peuvent générer de la valeur : l'important est de commencer à collecter et structurer</p>
                  </div>
                </div>
              </div>
            </div>

          </article>

          {/* CTA Final */}
          <div className="bg-gradient-to-br from-primary/20 via-background-secondary to-secondary/20 border border-primary/30 rounded-2xl p-8 md:p-12 text-center mt-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Votre Industrie Mérite Elle Aussi <span className="text-primary">Cette Transformation</span>
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Que vous soyez dans l'usinage, l'agroalimentaire, la plasturgie ou tout autre secteur industriel, 
              <span className="text-white font-semibold"> nous avons les solutions pour réduire vos coûts et améliorer votre qualité</span>.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,132,255,0.5)]">
              <Link href="/#calendly">
                📅 Réserver Mon Audit Gratuit
              </Link>
            </Button>
            <p className="text-sm text-text-secondary mt-4">
              💰 Découvrez votre potentiel d'économies en 30 minutes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}