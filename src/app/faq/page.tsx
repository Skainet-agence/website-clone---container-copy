"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Plus, Info, Wrench, Briefcase } from "lucide-react";
import Link from "next/link";

const faqData = [
  {
    category: "Général",
    icon: Info,
    id: "general",
    count: "15 questions sur les bases de l'automatisation",
    questions: [
      {
        question: "Qu'est-ce que l'automatisation d'entreprise ?",
        answer: "L'automatisation d'entreprise consiste à utiliser des technologies, notamment l'intelligence artificielle, pour exécuter automatiquement des tâches répétitives ou complexes sans intervention humaine constante. Cela peut inclure l'automatisation des emails, la gestion de la relation client (CRM), le traitement de documents, la planification, et bien plus encore. L'objectif est de libérer du temps pour vos équipes afin qu'elles se concentrent sur des activités à plus forte valeur ajoutée."
      },
      {
        question: "Pourquoi automatiser ses processus métier ?",
        answer: "L'automatisation permet de gagner un temps précieux, de réduire les erreurs humaines, d'améliorer la productivité, de diminuer les coûts opérationnels et d'offrir une meilleure expérience client. Elle libère vos équipes des tâches répétitives pour qu'elles se concentrent sur des activités à plus forte valeur ajoutée."
      },
      {
        question: "Quel ROI attendre de l'automatisation ?",
        answer: "Nos clients constatent généralement un retour sur investissement entre 3 et 4 mois. Les économies proviennent de la réduction du temps passé sur les tâches répétitives, de la diminution des erreurs, de l'amélioration de la satisfaction client, et de l'augmentation de la productivité globale."
      },
      {
        question: "L'automatisation va-t-elle remplacer mes employés ?",
        answer: "Non, bien au contraire ! L'automatisation vise à augmenter et à valoriser vos employés, pas à les remplacer. En libérant votre équipe des tâches répétitives et chronophages, vous leur permettez de se concentrer sur ce qui compte vraiment : la stratégie, la créativité, la relation client, et les tâches à forte valeur ajoutée."
      },
      {
        question: "Combien de temps pour automatiser mon entreprise ?",
        answer: "Le délai de mise en place varie selon la complexité du projet. Pour une automatisation simple (chatbot basique, emails automatisés), comptez 2 à 4 semaines. Pour des projets plus complexes impliquant plusieurs systèmes, cela peut prendre de 6 à 12 semaines. Nous commençons toujours par un audit gratuit pour établir un calendrier précis."
      },
      {
        question: "Quels processus automatiser en priorité ?",
        answer: "Nous recommandons de commencer par les tâches répétitives, chronophages et à faible valeur ajoutée : gestion des emails, qualification des leads, facturation, relances clients, planification de rendez-vous, saisie de données. Notre audit gratuit identifie les opportunités les plus rentables pour votre entreprise."
      },
      {
        question: "L'automatisation est-elle sécurisée ?",
        answer: "Absolument. La sécurité de vos données est notre priorité absolue. Nous utilisons des protocoles de chiffrement de pointe (SSL/TLS), des serveurs sécurisés conformes aux normes RGPD, et des pratiques de développement sécurisé. Toutes nos automatisations respectent les réglementations européennes en matière de protection des données."
      },
      {
        question: "Peut-on automatiser une petite entreprise ?",
        answer: "Oui ! L'automatisation n'est pas réservée aux grandes entreprises. Les PME et TPE bénéficient même davantage de l'automatisation car chaque heure gagnée a un impact direct sur la croissance. Nous proposons des solutions adaptées à tous les budgets, avec des forfaits démarrant à partir de 500€."
      },
      {
        question: "Comment mesurer l'efficacité de l'automatisation ?",
        answer: "Nous définissons ensemble des indicateurs de performance clés (KPI) avant de commencer : temps gagné (heures par semaine), réductions de coûts, augmentation de la productivité, amélioration de la satisfaction client, réduction du taux d'erreur, et ROI global. Nous fournissons des rapports détaillés mensuels."
      },
      {
        question: "Quels sont les risques de l'automatisation ?",
        answer: "Les principaux risques sont une mauvaise configuration initiale, un manque de maintenance, ou des automatisations trop complexes. C'est pourquoi nous testons exhaustivement chaque automatisation, offrons une formation complète, et proposons un support continu pour garantir le succès à long terme."
      },
      {
        question: "Comment choisir son agence d'automatisation ?",
        answer: "Privilégiez une agence qui propose un audit gratuit, qui a des références clients vérifiables, qui offre une formation et un support après livraison, qui est transparente sur les coûts, et qui comprend réellement votre secteur d'activité. Demandez des exemples concrets de projets similaires au vôtre."
      },
      {
        question: "Quels sont les freins courants à l'automatisation ?",
        answer: "Les freins les plus courants sont : la peur du changement, le manque de compréhension technique, les préoccupations sur les coûts, la crainte de perdre le contrôle, et la résistance des équipes. Nous accompagnons la conduite du changement et formons vos équipes pour lever ces obstacles."
      },
      {
        question: "Comment former ses équipes à l'automatisation ?",
        answer: "Nous incluons systématiquement une formation personnalisée : sessions en direct (visio ou sur site), vidéos tutoriels accessibles 24/7, documentation complète illustrée, et accompagnement progressif sur les premières semaines. Nous adaptons le niveau de formation selon les compétences de vos équipes."
      },
      {
        question: "Combien de temps pour voir les premiers résultats ?",
        answer: "Les premiers résultats sont visibles dès la mise en production de la première automatisation, généralement sous 2 à 4 semaines. Vous constaterez immédiatement un gain de temps sur les tâches automatisées. Le ROI complet est atteint entre 3 et 6 mois selon la complexité du projet."
      },
      {
        question: "Quelle est la différence entre automatisation et digitalisation ?",
        answer: "La digitalisation consiste à transformer des processus manuels en processus numériques (ex: passer du papier à l'ordinateur). L'automatisation va plus loin : elle permet aux processus numériques de s'exécuter automatiquement sans intervention humaine. L'automatisation est l'étape suivante de la digitalisation."
      }
    ]
  },
  {
    category: "Outils et Plateformes",
    icon: Wrench,
    id: "outils",
    count: "15 questions sur les outils et plateformes",
    questions: [
      {
        question: "Quel est le meilleur outil d'automatisation ?",
        answer: "Il n'existe pas d'outil universel parfait. Le meilleur outil dépend de vos besoins spécifiques. Nous utilisons principalement Make (Integromat), Zapier, n8n, et du développement personnalisé. Lors de l'audit gratuit, nous recommandons les outils les plus adaptés à votre situation, votre budget et vos objectifs."
      },
      {
        question: "Make ou Zapier : lequel choisir ?",
        answer: "Make offre plus de flexibilité et de fonctionnalités avancées pour les workflows complexes, avec un meilleur rapport qualité-prix. Zapier est plus simple à prendre en main pour les automatisations basiques. Nous recommandons généralement Make pour les projets professionnels car il offre plus de possibilités d'évolution."
      },
      {
        question: "Comment intégrer ChatGPT à mon CRM ?",
        answer: "Nous utilisons les API d'OpenAI pour intégrer GPT à votre CRM (Salesforce, HubSpot, etc.). Cela permet d'automatiser la qualification des leads, la génération de résumés de conversations, la rédaction d'emails personnalisés, et l'analyse de sentiments. L'intégration prend généralement 1 à 2 semaines."
      },
      {
        question: "Airtable peut-il remplacer mon logiciel métier ?",
        answer: "Airtable est très puissant et peut remplacer de nombreux logiciels métier pour certaines entreprises, notamment pour la gestion de projets, les bases de données clients, ou le suivi d'opérations. Cependant, il a ses limites pour des besoins très spécifiques. Nous évaluons lors de l'audit si Airtable convient à vos besoins."
      },
      {
        question: "Qu'est-ce que n8n et pourquoi l'utiliser ?",
        answer: "n8n est une plateforme d'automatisation open-source, auto-hébergeable, offrant un contrôle total sur vos données. C'est idéal pour les entreprises avec des exigences de sécurité élevées ou des besoins de personnalisation avancés. Nous recommandons n8n pour les projets complexes nécessitant une souveraineté des données."
      },
      {
        question: "Comment automatiser WhatsApp Business ?",
        answer: "Nous utilisons l'API officielle WhatsApp Business pour créer des chatbots, automatiser les réponses, envoyer des notifications, et intégrer WhatsApp à votre CRM. Cela nécessite une validation par Meta. Les cas d'usage incluent : service client 24/7, confirmations de rendez-vous, suivi de commandes, et campagnes marketing."
      },
      {
        question: "Peut-on automatiser Excel avec l'IA ?",
        answer: "Oui, absolument ! Nous automatisons la saisie de données, les calculs complexes, la génération de rapports, l'extraction de données depuis d'autres sources, et même l'analyse prédictive avec l'IA. Les fichiers Excel peuvent être intégrés dans des workflows automatisés complets avec d'autres outils."
      },
      {
        question: "Comment connecter mes outils existants ?",
        answer: "Nous utilisons des connecteurs natifs (API) ou des plateformes d'intégration comme Make et Zapier pour connecter vos outils. La plupart des logiciels populaires (Google, Microsoft, Salesforce, Shopify, etc.) ont des API robustes. Pour les outils sans API, nous développons des solutions personnalisées."
      },
      {
        question: "Quels outils pour automatiser la facturation ?",
        answer: "Nous intégrons des outils comme Stripe, PayPal, QuickBooks, Pennylane, ou Sellsy pour automatiser la création de factures, l'envoi automatique, les relances de paiement, le rapprochement bancaire, et la génération de rapports financiers. L'automatisation de la facturation fait gagner 10 à 15 heures par mois."
      },
      {
        question: "Comment automatiser LinkedIn pour la prospection ?",
        answer: "Nous utilisons des outils conformes aux conditions d'utilisation de LinkedIn (comme Phantombuster ou Waalaxy) pour automatiser l'envoi de demandes de connexion personnalisées, les messages de suivi, la collecte de données de prospects, et l'intégration avec votre CRM. Attention : l'automatisation agressive peut être risquée."
      },
      {
        question: "Salesforce vs HubSpot : automatisation comparée",
        answer: "Salesforce offre des capacités d'automatisation plus avancées et personnalisables, idéal pour les grandes entreprises avec des processus complexes. HubSpot est plus accessible, avec une automatisation marketing excellente, parfait pour les PME. Les deux s'intègrent bien avec nos solutions d'automatisation IA."
      },
      {
        question: "Comment automatiser Google Sheets ?",
        answer: "Google Sheets se prête parfaitement à l'automatisation via Google Apps Script, l'API Google Sheets, et des plateformes comme Make. Nous automatisons l'import de données, les calculs, la génération de rapports, l'envoi d'alertes, et la synchronisation avec d'autres outils. C'est une solution économique et puissante."
      },
      {
        question: "Peut-on automatiser Shopify entièrement ?",
        answer: "Oui, Shopify offre une API très complète. Nous automatisons la gestion des stocks, la création de produits, les commandes, les remboursements, les emails clients, les promotions, l'intégration avec les fournisseurs, et le service client. Résultat : une boutique qui tourne presque toute seule."
      },
      {
        question: "Comment automatiser les réseaux sociaux ?",
        answer: "Nous utilisons des outils comme Buffer, Hootsuite, ou Make pour automatiser la planification de posts, la publication multi-plateformes, la réponse aux commentaires et messages, la génération de contenu avec l'IA, et l'analyse de performance. Cela fait gagner 10 à 20 heures par semaine."
      },
      {
        question: "Quels outils pour automatiser la comptabilité ?",
        answer: "Nous intégrons des solutions comme QuickBooks, Xero, Pennylane, Sage, ou Cegid pour automatiser la saisie comptable, le rapprochement bancaire, la génération de déclarations, les relances clients, et les rapports financiers. L'automatisation comptable réduit les erreurs de 90% et fait gagner des dizaines d'heures."
      }
    ]
  },
  {
    category: "Automatisation par Secteur",
    icon: Briefcase,
    id: "secteurs",
    count: "20 questions par secteur d'activité",
    questions: [
      {
        question: "Comment automatiser un e-commerce ?",
        answer: "Pour les boutiques en ligne, nous automatisons : la synchronisation des stocks multi-plateformes, les emails de panier abandonné, les recommandations produits personnalisées, le service client avec chatbot, les relances post-achat, les demandes d'avis, la gestion des promotions, et le suivi des commandes. Résultat : +15-30% de ventes, -60% de temps de gestion."
      },
      {
        question: "Automatisation pour cabinet comptable : par où commencer ?",
        answer: "Pour les cabinets comptables, nous priorisons : l'automatisation de la collecte des documents clients, le rapprochement bancaire, la saisie comptable avec IA (OCR), la génération de déclarations, les relances clients, et la production de rapports. Ces automatisations font gagner 20 à 30 heures par semaine et réduisent les erreurs de 90%."
      },
      {
        question: "Comment automatiser un restaurant ?",
        answer: "Pour les restaurants, nous automatisons : les réservations en ligne 24/7, les confirmations et rappels SMS, la gestion des avis clients, les commandes en livraison, la gestion des stocks et des commandes fournisseurs, les plannings du personnel, et le marketing (promotions, fidélité). Gain de temps : 15 à 20 heures par semaine."
      },
      {
        question: "Automatisation immobilière : quels processus ?",
        answer: "Pour les agences immobilières et agents, nous automatisons : la qualification des leads (acheteurs/vendeurs), les relances automatiques, la diffusion d'annonces multi-plateformes, la planification de visites, l'envoi de biens correspondants aux critères, les rapports d'estimation automatiques, et le suivi des transactions. Doublez vos conversions tout en divisant par deux le temps administratif."
      },
      {
        question: "Comment automatiser un cabinet médical ?",
        answer: "Pour les professionnels de santé (médecins, dentistes, kinés), nous automatisons : la prise de rendez-vous en ligne 24/7, les rappels automatiques (SMS/email), la gestion des dossiers patients, les téléconsultations, la facturation et le suivi des paiements, les ordonnances récurrentes, et la gestion des stocks. Tout en respectant le RGPD et le secret médical."
      },
      {
        question: "Automatisation pour coach : quels outils ?",
        answer: "Pour les coachs (business, sport, vie), nous automatisons : la qualification des prospects avec des formulaires intelligents, la planification de sessions, l'envoi de ressources et d'exercices personnalisés, les relances et le suivi de progression, la gestion des paiements et abonnements, et les sondages de satisfaction. Concentrez-vous sur le coaching, pas l'administratif."
      },
      {
        question: "Comment automatiser une agence marketing ?",
        answer: "Pour les agences marketing et communication, nous automatisons : la qualification des leads, les rapports clients automatiques, la collecte et l'analyse de données (analytics), la planification de contenus, les campagnes email multiclients, la facturation et le suivi du temps, et la gestion de projets. Gagnez 25 à 35 heures par semaine pour vous concentrer sur la créativité."
      },
      {
        question: "Automatisation pour artisan : est-ce rentable ?",
        answer: "Absolument ! Pour les artisans du BTP (plombier, électricien, menuisier, etc.), nous automatisons : les devis et factures, la planification des chantiers, les relances clients, la gestion des stocks et des commandes fournisseurs, les rappels de maintenance, et la communication avec les clients (photos, livraison). Résultat : 15 à 20 heures gagnées par semaine et plus de chantiers."
      },
      {
        question: "Comment automatiser un salon de coiffure ?",
        answer: "Pour les salons de coiffure et instituts de beauté, nous automatisons : la prise de rendez-vous en ligne, les confirmations et rappels SMS, la gestion de la fidélité client, les campagnes de promotions ciblées, la gestion des stocks de produits, les avis clients, et les statistiques de fréquentation. Optimisez votre planning et fidélisez votre clientèle."
      },
      {
        question: "Comment automatiser une auto-école ?",
        answer: "Pour les auto-écoles, nous automatisons : les inscriptions en ligne, la planification automatique des leçons de conduite, les rappels de leçons et d'examens, le suivi de progression des élèves, la gestion des paiements échelonnés, les relances, et la communication avec les élèves (résultats, conseils). Gérez plus d'élèves sans stress administratif."
      },
      {
        question: "Automatisation pour thérapeute : conformité RGPD ?",
        answer: "Oui, nous créons des solutions 100% conformes RGPD pour les thérapeutes (psychologues, sophrologues, etc.). Nous automatisons : la prise de rendez-vous, les rappels, la gestion sécurisée des dossiers patients, la facturation, les téléconsultations, et les sondages de satisfaction. Toutes les données sont chiffrées et hébergées sur des serveurs européens sécurisés."
      },
      {
        question: "Comment automatiser un garage automobile ?",
        answer: "Pour les garages et centres auto, nous automatisons : la prise de rendez-vous en ligne, les devis automatiques selon les prestations, les rappels d'entretien et de contrôle technique, la gestion des commandes pièces fournisseurs, la facturation, et les avis clients. Améliorez votre taux de remplissage et la satisfaction client."
      },
      {
        question: "Automatisation pour wedding planner : exemples concrets ?",
        answer: "Pour les organisateurs de mariages, nous automatisons : la qualification des prospects, l'envoi de brochures personnalisées, la planification de rendez-vous, le suivi des prestataires, les relances paiements, les checklists automatiques pour les mariés, et la collecte de témoignages. Gérez plus de mariages sans stress avec un suivi irréprochable."
      },
      {
        question: "Comment automatiser une salle de sport ?",
        answer: "Pour les salles de sport et de fitness, nous automatisons : les inscriptions et renouvellements d'abonnements, la gestion des accès (badgeuse), les rappels de séances, les campagnes de réengagement des membres inactifs, la planification des cours collectifs, les paiements et relances, et les sondages de satisfaction. Réduisez le taux de churn et optimisez l'occupation."
      },
      {
        question: "Automatisation pour formateur : quels gains ?",
        answer: "Pour les formateurs et organismes de formation, nous automatisons : l'inscription des stagiaires, l'envoi des convocations et documents, la planification des sessions, les rappels, la collecte des émargements (signature électronique), la facturation et les relances, la génération des certificats, et les enquêtes de satisfaction. Gagnez 20 heures par semaine sur l'administratif."
      },
      {
        question: "Comment automatiser un cabinet d'avocat ?",
        answer: "Pour les cabinets d'avocats, nous automatisons : la qualification des nouveaux dossiers, la planification des rendez-vous, la gestion des échéances et des délais, les rappels d'audiences, la facturation horaire automatique, la gestion documentaire, et la communication clients. Concentrez-vous sur le droit, pas sur l'administratif, tout en assurant un suivi irréprochable."
      },
      {
        question: "Automatisation pour agent immobilier : outils recommandés ?",
        answer: "Nous recommandons une stack incluant : un CRM immobilier (comme Prophety) connecté à Make, des chatbots pour qualifier les leads 24/7, des outils de diffusion multi-annonces, un système de prise de rendez-vous automatique, et des emails automatisés selon le comportement des prospects. Cette stack multiplie par 3 votre efficacité commerciale."
      },
      {
        question: "Comment automatiser une boutique physique ?",
        answer: "Pour les commerces physiques, nous automatisons : la gestion de la fidélité client, les campagnes SMS/email promotionnelles, la gestion des stocks avec alertes de réapprovisionnement, la synchronisation entre caisse et comptabilité, les avis clients, et les statistiques de vente. Même sans e-commerce, l'automatisation booste votre chiffre d'affaires."
      },
      {
        question: "Automatisation pour wedding planner : exemples concrets ?",
        answer: "Pour les organisateurs de mariages et d'événements, nous automatisons : la qualification des demandes, l'envoi de brochures et devis personnalisés, la planification des rendez-vous, le suivi des prestataires (relances, confirmations), la gestion des paiements et relances, les checklists automatiques envoyées aux mariés selon le calendrier, et la collecte de témoignages post-événement."
      },
      {
        question: "Comment automatiser une boutique physique ?",
        answer: "Pour les commerces de détail, nous automatisons : le programme de fidélité (points, récompenses), les campagnes promotionnelles ciblées (SMS, email), la gestion des stocks avec alertes de réapprovisionnement, la synchronisation entre caisse et comptabilité, les demandes d'avis post-achat, et les statistiques de vente en temps réel. Même sans site e-commerce, boostez votre CA."
      }
    ]
  }
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <div className="text-center animate-in fade-in slide-in-from-bottom-2 duration-700">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Questions <span className="text-primary">Fréquentes</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
              Toutes les réponses à vos questions sur l'automatisation IA et nos services
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Rapide */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <div className="bg-gradient-to-br from-background-secondary/80 to-background-tertiary/60 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <h2 className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Navigation Rapide
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {faqData.map((section, index) => {
                const Icon = section.icon;
                return (
                  <a
                    key={index}
                    href={`#${section.id}`}
                    className="group bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/60 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                          {section.category}
                        </h3>
                        <p className="text-sm text-text-secondary">
                          {section.count}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections by Category */}
      {faqData.map((section, sectionIndex) => {
        const Icon = section.icon;
        return (
          <section key={sectionIndex} id={section.id} className="py-8 md:py-12 scroll-mt-24">
            <div className="container mx-auto px-4 max-w-[1100px]">
              <div className="flex items-center gap-3 mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
                <div className="bg-primary/20 p-2.5 rounded-lg">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                  {section.category}
                </h2>
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
                {section.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`section-${sectionIndex}-item-${index}`}
                    className="bg-background-secondary border border-border rounded-lg hover:bg-muted hover:border-white/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 duration-700"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <AccordionTrigger className="group w-full text-left p-5 md:p-6 text-foreground text-sm sm:text-base md:text-lg font-medium flex items-center justify-between hover:no-underline [&>svg]:hidden">
                      <span className="flex-1 pr-4">{item.question}</span>
                      <div className="bg-primary/10 p-2 rounded-full transition-all duration-300 group-hover:bg-primary/20 shrink-0">
                        <Plus className="h-5 w-5 text-primary transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-45" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="bg-gradient-to-br from-background-secondary to-background-tertiary border border-border rounded-2xl p-8 md:p-12 text-center animate-in fade-in slide-in-from-bottom-2 duration-700 shadow-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Votre question n'est pas dans la liste ?
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Nos experts sont à votre disposition pour répondre à toutes vos questions sur l'automatisation IA.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,132,255,0.5),0_0_60px_rgba(0,132,255,0.3)]">
              <Link href="/#calendly">
                📅 Prendre Rendez-vous Gratuit
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}