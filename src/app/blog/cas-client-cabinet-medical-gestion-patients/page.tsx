import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, CheckCircle2, TrendingUp, Target, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Cas Client : Cabinet Médical Multiplie par 3 sa Capacité | Devlopia",
  description: "Découvrez comment le Dr. Rousseau a libéré 20h/semaine grâce à l'automatisation des prises de rendez-vous, rappels et gestion administrative.",
  keywords: "cas client médical, automatisation cabinet médical, gestion patients, prise rendez-vous automatisée, IA santé",
};

export default function CasClientMedicalPage() {
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
            Un Cabinet Médical Multiplie par 3 sa <span className="text-primary">Capacité de Consultation</span>
          </h1>

          <div className="flex items-center gap-6 text-text-secondary text-sm mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              22 Avril 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              12 min de lecture
            </span>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/professional-3d-illustration-of-a-modern-8b5c9f27-20251208155233.jpg"
              alt="Automatisation cabinet médical"
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
                  <strong className="text-white">Cabinet Médical Dr. Rousseau</strong> est un cabinet de médecine générale situé dans une zone semi-rurale près de Tours. Le Dr. Marc Rousseau, médecin généraliste depuis 12 ans, exerce en cabinet individuel avec l'aide d'une secrétaire médicale à mi-temps.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">📍 Localisation</p>
                    <p className="text-white">Tours, Centre-Val de Loire</p>
                  </div>
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">👥 Équipe</p>
                    <p className="text-white">1 médecin + 1 secrétaire (mi-temps)</p>
                  </div>
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">👨‍⚕️ Patientèle</p>
                    <p className="text-white">1 850 patients actifs</p>
                  </div>
                  <div className="bg-background-primary/50 rounded-xl p-4 border border-border/50">
                    <p className="text-primary font-bold mb-2">🏥 Type</p>
                    <p className="text-white">Cabinet individuel</p>
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
                  <p className="text-primary font-bold mb-2">✅ Excellente Réputation</p>
                  <p className="text-text-secondary">4,9/5 sur Doctolib avec plus de 280 avis patients</p>
                </div>
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Expertise Reconnue</p>
                  <p className="text-text-secondary">Spécialisation en suivi chronique (diabète, hypertension)</p>
                </div>
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Approche Humaine</p>
                  <p className="text-text-secondary">Consultations longues, écoute attentive, patients fidèles</p>
                </div>
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2">✅ Zone Sous-Dotée</p>
                  <p className="text-text-secondary">Forte demande locale avec peu de médecins disponibles</p>
                </div>
              </div>
            </div>

            {/* Problématique */}
            <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/30 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🚨 Problématique Rencontrée</h2>
              
              <div className="space-y-6 text-text-secondary">
                <p className="text-lg text-white font-semibold">
                  Malgré une excellente réputation, le Dr. Rousseau était confronté à une charge administrative écrasante :
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Saturation Téléphonique</p>
                      <p>70-90 appels/jour pour prises de RDV, la secrétaire à mi-temps (9h-13h) ne peut répondre qu'à 40% des appels. Délai d'attente moyen : <strong className="text-white">3-4 semaines</strong></p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Patients Perdus par Frustration</p>
                      <p>Estimation : <strong className="text-white">250 patients/an</strong> changent de médecin car impossibles à joindre. Perte CA estimée : 18 750€/an</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Taux d'Absentéisme 18%</p>
                      <p>Pas de rappels systématiques → nombreux RDV non honorés → créneaux perdus (2-3h/semaine)</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Gestion Administrative Chronophage</p>
                      <p>Le Dr. Rousseau passe <strong className="text-white">8h/semaine</strong> en soirée sur dossiers, courriers, comptes-rendus médicaux</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-destructive font-bold">❌</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Burnout Menaçant</p>
                      <p>50-55h de travail/semaine, épuisement, questionnement sur la poursuite de l'activité</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-destructive/20 mt-6">
                  <p className="text-white font-bold text-xl mb-2">Impact Global :</p>
                  <p className="text-lg">
                    Le cabinet tournait à <span className="text-destructive font-bold">60% de sa capacité théorique</span> à cause de l'inefficacité administrative. 
                    Le Dr. Rousseau envisageait sérieusement de <strong className="text-white">réduire son activité ou fermer le cabinet</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Processus */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🔍 Notre Processus d'Analyse</h2>
              
              <div className="space-y-6">
                <div className="bg-background-secondary/60 border-l-4 border-primary rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Phase 1 : Immersion Cabinet (1 semaine)</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Observation sur site 3 jours complets (plages horaires variées)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Enregistrement et analyse de 150 appels téléphoniques (anonymisés)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Interviews Dr. Rousseau et secrétaire : pain points et besoins</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Analyse agenda 6 derniers mois : taux d'absentéisme, motifs consultations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-background-secondary/60 border-l-4 border-primary rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Phase 2 : Diagnostic & Opportunités</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Identification de 9 processus automatisables à fort impact</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Calcul potentiel : +40% capacité sans recrutement</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>Benchmark 12 cabinets similaires déjà automatisés</span>
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
                      <h3 className="text-xl font-bold text-white mb-3">Prise de RDV 100% Automatisée 24/7</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Système de réservation en ligne intelligent (Doctolib Pro optimisé)</li>
                        <li>✅ Chatbot IA sur site web répondant aux 40 questions fréquentes</li>
                        <li>✅ Gestion automatique urgences/consultations standard/renouvellements</li>
                        <li>✅ SMS confirmation immédiate avec lien ajout calendrier</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 2 semaines</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Système de Rappels Multi-Canal Intelligent</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Rappel SMS J-3 avant RDV (personnalisé avec nom médecin)</li>
                        <li>✅ Email J-7 avec infos pratiques (documents à apporter, préparation)</li>
                        <li>✅ Appel automatique vocal J-1 pour patients âgés (80+)</li>
                        <li>✅ Confirmation en 1 clic ou reprogrammation automatique</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 1 semaine</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Gestion Administrative Automatisée</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Reconnaissance vocale IA pour dictée dossiers médicaux (transcription temps réel)</li>
                        <li>✅ Génération automatique courriers médecins correspondants (templates intelligents)</li>
                        <li>✅ Automatisation ordonnances récurrentes (renouvellements traitements chroniques)</li>
                        <li>✅ Facturation automatique télétransmission CPAM</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 3 semaines</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Optimisation Agenda & Téléconsultation</h3>
                      <ul className="space-y-2 text-text-secondary">
                        <li>✅ Algorithme optimisation planning (consultations courtes/longues, urgences)</li>
                        <li>✅ Plateforme téléconsultation sécurisée pour renouvellements simples</li>
                        <li>✅ Questionnaires pré-consultation automatiques (gain temps diagnostic)</li>
                        <li>✅ Gestion intelligente liste d'attente (remplissage créneaux libérés)</li>
                      </ul>
                      <p className="text-primary font-bold mt-3">⏱️ Déploiement : 2 semaines</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-xl p-6 border border-primary/30 mt-6">
                <p className="text-white font-bold text-lg mb-2">💰 Investissement Total :</p>
                <p className="text-2xl font-black text-primary mb-3">12 800€</p>
                <p className="text-text-secondary text-sm">Incluant : logiciels médicaux, intégrations, formation, support 12 mois</p>
              </div>
            </div>

            {/* Mise en Place */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">⚙️ Mise en Place et Accompagnement</h2>
              
              <div className="space-y-6 text-text-secondary">
                <p className="text-lg">
                  Le déploiement s'est étalé sur <strong className="text-white">8 semaines</strong> avec une approche respectueuse du quotidien médical :
                </p>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <h3 className="text-white font-bold text-lg mb-4">📅 Chronologie de Déploiement</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="text-primary font-bold">S1-S2</div>
                      <div>Configuration prise RDV en ligne + Migration agenda Doctolib</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-primary font-bold">S3</div>
                      <div>Déploiement système rappels + Tests avec 50 patients volontaires</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-primary font-bold">S4-S6</div>
                      <div>Installation reconnaissance vocale + Formation Dr. Rousseau (4 sessions 1h)</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-primary font-bold">S7-S8</div>
                      <div>Téléconsultation + Optimisation agenda + Ajustements fins</div>
                    </div>
                  </div>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <h3 className="text-white font-bold text-lg mb-4">👥 Accompagnement Personnalisé</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span><strong className="text-white">Formation Dr. Rousseau</strong> : 4h réparties (dictée vocale, tableau bord, téléconsultation)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span><strong className="text-white">Formation secrétaire</strong> : 3h (nouveau système, gestion urgences, troubleshooting)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span><strong className="text-white">Communication patients</strong> : Affiches salle d'attente, SMS explicatif 1850 patients</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span><strong className="text-white">Support dédié</strong> : Hotline 7j/7 pendant 3 mois (réponse <30min)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Suivi */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">📊 Suivi des Performances</h2>
              
              <div className="space-y-6 text-text-secondary">
                <p className="text-lg">
                  Suivi mensuel pendant <strong className="text-white">6 mois</strong> pour mesurer l'impact et ajuster :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                    <p className="text-primary font-bold mb-3">📈 Indicateurs Suivis</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Nombre consultations/semaine</li>
                      <li>• Taux absentéisme RDV</li>
                      <li>• Délai moyen obtention RDV</li>
                      <li>• Taux adoption réservation en ligne</li>
                      <li>• Temps administratif Dr. Rousseau</li>
                      <li>• Satisfaction patients (NPS)</li>
                    </ul>
                  </div>

                  <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                    <p className="text-primary font-bold mb-3">🔧 Optimisations Apportées</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Ajustement durées consultations types</li>
                      <li>• Personnalisation messages rappels</li>
                      <li>• Amélioration templates courriers</li>
                      <li>• Extension plages téléconsultation</li>
                      <li>• Nouvelles FAQ chatbot (12 ajouts)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                  <p className="text-white font-bold mb-2">🎯 Approche Data-Driven</p>
                  <p>
                    Revue mensuelle des analytics avec le Dr. Rousseau pour identifier les axes d'amélioration. 
                    <strong className="text-white"> 8 optimisations mineures</strong> déployées durant les 6 premiers mois, améliorant 
                    l'expérience patient et l'efficacité de 15% supplémentaires.
                  </p>
                </div>
              </div>
            </div>

            {/* Résultats */}
            <div className="bg-gradient-to-br from-success/20 to-success/10 border border-success/40 rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-10 h-10 text-success" />
                <h2 className="text-3xl font-bold text-white m-0">Résultats Spectaculaires</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Augmentation Consultations</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">+187%</p>
                  <p className="text-text-secondary text-sm">De 68 à 195 consultations/semaine</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Réduction Absentéisme</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">-83%</p>
                  <p className="text-text-secondary text-sm">18% → 3% de RDV non honorés</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Temps Libéré</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">20h/sem</p>
                  <p className="text-text-secondary text-sm">Plus de soirées administratives</p>
                </div>

                <div className="bg-background-primary/50 rounded-xl p-6 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-lg">Délai Obtention RDV</span>
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-4xl font-black text-success mb-2">3 jours</p>
                  <p className="text-text-secondary text-sm">Vs 3-4 semaines avant</p>
                </div>
              </div>

              <div className="bg-success/20 border border-success/40 rounded-xl p-6 mb-6">
                <p className="text-white font-bold text-2xl mb-3">💰 Impact Financier Annuel</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-text-secondary text-sm mb-1">CA Additionnel</p>
                    <p className="text-3xl font-black text-success">+86 400€</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm mb-1">Investissement</p>
                    <p className="text-3xl font-black text-white">12 800€</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm mb-1">Gain Net</p>
                    <p className="text-3xl font-black text-primary">73 600€</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/20 border border-primary/30 rounded-xl p-6">
                <p className="text-white font-bold text-xl mb-2">📈 ROI Atteint en 1,8 Mois</p>
                <p className="text-text-secondary">
                  Le cabinet a récupéré son investissement en <strong className="text-white">moins de 2 mois</strong>. 
                  Sur 3 ans, le gain cumulé est estimé à <strong className="text-primary">220 800€</strong>.
                </p>
              </div>
            </div>

            {/* Témoignage */}
            <div className="bg-gradient-to-br from-background-secondary to-background-tertiary border-l-4 border-primary rounded-xl p-8 mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold shrink-0">
                  MR
                </div>
                <div>
                  <p className="text-white font-bold text-xl">Dr. Marc Rousseau</p>
                  <p className="text-primary font-semibold">Médecin Généraliste</p>
                </div>
              </div>
              
              <p className="text-text-secondary text-lg italic leading-relaxed mb-4">
                "J'étais au bord du burnout. Entre les appels incessants, les tâches administratives qui débordaient 
                le soir... je ne voyais plus la lumière au bout du tunnel. Aujourd'hui, <strong className="text-white">j'ai retrouvé 
                ma passion pour la médecine</strong>. Je peux consacrer <strong className="text-white">100% de mon temps aux patients</strong> pendant 
                les consultations, sans penser à ce que je dois faire après. Ma secrétaire est moins stressée, les patients 
                sont ravis de pouvoir prendre RDV à 22h s'ils le souhaitent, et moi j'ai récupéré mes soirées et week-ends. 
                <strong className="text-white"> C'est une renaissance professionnelle et personnelle</strong>. Je recommande à tous mes confrères !"
              </p>

              <div className="flex gap-1 text-yellow-400 text-2xl">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            {/* Bénéfices Additionnels */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">🎁 Bénéfices Inattendus</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2 text-lg">😊 Qualité de Vie Retrouvée</p>
                  <p className="text-text-secondary">
                    Le Dr. Rousseau finit désormais à 19h au lieu de 22h. Week-ends 100% libres pour la famille
                  </p>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2 text-lg">🌟 Satisfaction Patients Accrue</p>
                  <p className="text-text-secondary">
                    Note Doctolib passée de 4,9 à 5/5. Nombreux retours positifs sur la facilité de prise RDV
                  </p>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2 text-lg">👴 Accès Amélioré Seniors</p>
                  <p className="text-text-secondary">
                    Les patients âgés non digitaux apprécient les rappels vocaux automatiques personnalisés
                  </p>
                </div>

                <div className="bg-background-secondary/60 border border-border rounded-xl p-6">
                  <p className="text-primary font-bold mb-2 text-lg">📱 Téléconsultation Appréciée</p>
                  <p className="text-text-secondary">
                    35% des renouvellements d'ordonnances se font en téléconsultation, gain temps pour tous
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
                    <p className="text-white font-semibold mb-1">L'automatisation libère du temps pour l'humain</p>
                    <p>En déléguant les tâches répétitives à l'IA, le médecin peut se concentrer sur son cœur de métier : soigner</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">2️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Les patients apprécient l'autonomie</p>
                    <p>Pouvoir prendre RDV 24/7 sans attendre est un confort très apprécié, surtout pour les actifs</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">3️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">ROI rapide dans le médical</p>
                    <p>Chaque heure libérée = consultations supplémentaires = revenus additionnels immédiats</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">4️⃣</span>
                  <div>
                    <p className="text-white font-semibold mb-1">L'accompagnement est essentiel</p>
                    <p>Formation adaptée et support réactif sont cruciaux pour l'adoption par le personnel médical</p>
                  </div>
                </div>
              </div>
            </div>

          </article>

          {/* CTA Final */}
          <div className="bg-gradient-to-br from-primary/20 via-background-secondary to-secondary/20 border border-primary/30 rounded-2xl p-8 md:p-12 text-center mt-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Votre Cabinet Médical Mérite <span className="text-primary">Cette Transformation</span>
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Que vous soyez médecin généraliste, spécialiste, dentiste ou autre professionnel de santé, 
              <span className="text-white font-semibold"> nous avons les solutions pour alléger votre charge administrative et améliorer votre qualité de vie</span>.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,132,255,0.5)]">
              <Link href="/#calendly">
                📅 Réserver Mon Audit Gratuit
              </Link>
            </Button>
            <p className="text-sm text-text-secondary mt-4">
              ⏱️ Découvrez combien d'heures vous pourriez récupérer chaque semaine
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}