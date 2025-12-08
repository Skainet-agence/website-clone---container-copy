import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Types
type ArticleContent = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
      points?: string[];
      highlight?: string;
    }[];
    conclusion: string;
    cta: {
      title: string;
      description: string;
    };
  };
};

// Articles database
const articles: Record<string, ArticleContent> = {
  "chatbots-intelligents-revolution-service-client": {
    id: "chatbots-intelligents-revolution-service-client",
    title: "Comment les Chatbots IA Révolutionnent le Service Client en 2024",
    excerpt: "Découvrez comment l'intelligence artificielle conversationnelle transforme radicalement l'expérience client et libère 60% du temps de vos équipes support.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/modern-professional-3d-illustration-of-a-a32d93d0-20251208154025.jpg",
    category: "Intelligence Artificielle",
    readTime: "8 min",
    date: "7 Décembre 2024",
    content: {
      introduction: "Le service client traverse une révolution silencieuse mais radicale. En 2024, les chatbots propulsés par l'intelligence artificielle ne sont plus de simples automates scriptés : ils comprennent le contexte, apprennent de chaque interaction, et offrent une expérience client qui rivalise - voire surpasse - celle d'un conseiller humain. Mais comment exactement cette technologie transforme-t-elle le paysage du support client ? Et surtout, comment votre entreprise peut-elle en tirer profit sans investissement massif ?",
      sections: [
        {
          title: "L'évolution des chatbots : De l'automate rigide à l'assistant intelligent",
          content: "Les chatbots d'ancienne génération suivaient des scripts prédéfinis, créant souvent plus de frustration que de solutions. Les chatbots IA modernes utilisent le traitement du langage naturel (NLP) et l'apprentissage automatique pour comprendre l'intention réelle derrière chaque question, même mal formulée.",
          points: [
            "Compréhension contextuelle avancée qui saisit les nuances du langage humain",
            "Capacité d'apprentissage continu à partir de chaque conversation",
            "Personnalisation automatique basée sur l'historique client",
            "Gestion multilingue native sans configuration supplémentaire",
            "Intégration transparente avec vos systèmes existants (CRM, base de connaissances, outils métier)"
          ]
        },
        {
          title: "Les bénéfices mesurables : Au-delà de la simple automatisation",
          content: "Nos clients constatent des résultats spectaculaires dès les premières semaines de déploiement. Ces gains ne sont pas théoriques - ils sont mesurables, reproductibles, et s'amplifient avec le temps.",
          points: [
            "60% de réduction du volume de tickets traités manuellement",
            "Temps de réponse divisé par 10 (de plusieurs heures à quelques secondes)",
            "Disponibilité 24/7 sans coût additionnel d'équipe de nuit",
            "Satisfaction client en hausse de 35% grâce à la réactivité instantanée",
            "Libération de 15 à 25 heures par semaine pour vos équipes support",
            "ROI atteint en 2-3 mois pour les PME, 1-2 mois pour les volumes élevés"
          ],
          highlight: "Exemple concret : Une entreprise de e-commerce avec 500 tickets mensuels a réduit son temps de traitement de 45h à 18h par mois, soit une économie de 27h valorisée à 810€ mensuels (30€/h). Coût du chatbot : 200€/mois. ROI : 305%."
        },
        {
          title: "Les cas d'usage qui transforment votre business",
          content: "Un chatbot IA bien conçu ne se contente pas de répondre aux questions - il devient un acteur central de votre stratégie commerciale.",
          points: [
            "Support client multicanal : Site web, WhatsApp, Messenger, Instagram en simultané",
            "Qualification automatique des leads avec scoring intelligent",
            "Prise de rendez-vous automatisée intégrée à votre agenda",
            "Recommandations produits personnalisées basées sur le comportement",
            "Suivi de commande et notifications proactives",
            "Collecte de feedback et enquêtes de satisfaction automatiques",
            "Escalade intelligente vers un humain uniquement quand nécessaire"
          ]
        },
        {
          title: "Comment choisir et déployer votre chatbot IA",
          content: "La technologie est mature, mais le succès dépend d'une implémentation stratégique. Voici notre méthodologie éprouvée sur plus de 50 projets.",
          points: [
            "Audit des conversations existantes pour identifier les questions récurrentes",
            "Mapping des parcours clients et points de friction actuels",
            "Création d'une base de connaissances optimisée pour l'IA",
            "Formation du chatbot avec vos données spécifiques",
            "Tests utilisateurs rigoureux avant le déploiement complet",
            "Monitoring en temps réel et optimisation continue",
            "Formation de vos équipes pour gérer les escalades complexes"
          ],
          highlight: "Notre approche garantit un taux de résolution automatique supérieur à 70% dès le premier mois, atteignant 85-90% après 3 mois d'optimisation continue."
        },
        {
          title: "Les erreurs à éviter absolument",
          content: "Nous avons identifié les pièges courants qui sabotent les projets de chatbots. Évitez-les pour garantir votre succès.",
          points: [
            "Déployer sans formation suffisante sur vos données spécifiques",
            "Ne pas prévoir d'escalade humaine pour les cas complexes",
            "Ignorer l'importance de la personnalité du chatbot (ton, style)",
            "Manquer d'intégration avec vos outils existants (CRM, ticketing)",
            "Ne pas mesurer les KPIs clés (taux de résolution, satisfaction, temps de réponse)",
            "Abandonner trop tôt sans phase d'optimisation",
            "Vouloir tout automatiser d'un coup au lieu d'une approche progressive"
          ]
        }
      ],
      conclusion: "Les chatbots IA ne sont plus un luxe réservé aux grandes entreprises - ils sont devenus un impératif stratégique pour toute organisation soucieuse d'offrir une expérience client moderne tout en maîtrisant ses coûts. La question n'est plus 'Faut-il adopter cette technologie ?' mais plutôt 'Comment la déployer rapidement et efficacement ?'. Chez Devlopia, nous avons développé une méthodologie éprouvée qui garantit un ROI positif dès les premiers mois, tout en respectant votre budget et vos contraintes opérationnelles.",
      cta: {
        title: "Prêt à révolutionner votre service client ?",
        description: "Réservez votre audit gratuit de 30 minutes. Nous analyserons vos besoins spécifiques et vous proposerons une roadmap personnalisée avec estimation de ROI."
      }
    }
  },
  "automatisation-email-marketing-roi": {
    id: "automatisation-email-marketing-roi",
    title: "Automatisation Email Marketing : Comment Obtenir 300% de ROI",
    excerpt: "Les secrets des campagnes d'emailing automatisées qui convertissent. Stratégies éprouvées, erreurs à éviter, et résultats mesurables pour votre entreprise.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/professional-digital-illustration-of-ema-16bd8784-20251208154026.jpg",
    category: "Marketing Automation",
    readTime: "10 min",
    date: "5 Décembre 2024",
    content: {
      introduction: "L'email marketing reste le canal digital le plus rentable avec un ROI moyen de 36€ pour chaque euro investi. Mais ce chiffre grimpe à 42€ - voire 50€ - avec l'automatisation intelligente. La différence ? Des séquences personnalisées déclenchées au bon moment, qui transforment vos prospects en clients fidèles sans intervention manuelle. Découvrez les stratégies concrètes qui fonctionnent en 2024.",
      sections: [
        {
          title: "Les 7 automatisations email qui génèrent 80% des résultats",
          content: "Principe de Pareto appliqué à l'email : quelques automatisations stratégiques génèrent la majorité de votre chiffre d'affaires. Voici lesquelles déployer en priorité.",
          points: [
            "Séquence de bienvenue (5-7 emails) : +320% d'engagement vs email unique",
            "Panier abandonné : récupère 15-30% des ventes perdues",
            "Re-engagement clients inactifs : réactive 10-20% de votre base dormante",
            "Upsell/cross-sell post-achat : +25% de valeur client moyenne",
            "Lead nurturing segmenté : accélère le cycle de vente de 50%",
            "Anniversaire/événements : génère 4x plus de conversions qu'un email classique",
            "Réactivation après téléchargement de lead magnet : convertit 2-5% en clients"
          ],
          highlight: "Une entreprise SaaS B2B a généré 47 000€ de CA additionnel en 6 mois uniquement avec 3 automatisations : bienvenue, nurturing, et réactivation. Investissement : 2 400€ (setup + outil). ROI : 1 858%."
        },
        {
          title: "Segmentation intelligente : Le secret des 300% de ROI",
          content: "L'automatisation sans segmentation, c'est comme un fusil à lunette sans visée. La puissance vient de la personnalisation basée sur le comportement réel de vos prospects et clients.",
          points: [
            "Segmentation comportementale : pages visitées, emails ouverts, clics",
            "Scoring automatique des leads selon engagement et fit produit",
            "Personnalisation dynamique du contenu selon le segment",
            "Timing optimal : envoi quand le prospect est le plus réceptif",
            "Tests A/B automatisés pour optimiser en continu",
            "Prédiction du churn et campagnes de rétention préventives"
          ]
        },
        {
          title: "L'architecture d'une séquence qui convertit",
          content: "Une séquence email performante suit une structure psychologique éprouvée. Voici le blueprint que nous utilisons pour tous nos clients.",
          points: [
            "Email 1 (Jour 0) : Bienvenue + bénéfice immédiat + première valeur",
            "Email 2 (Jour 2) : Histoire + problème résolu + témoignage client",
            "Email 3 (Jour 4) : Contenu éducatif + démonstration de l'expertise",
            "Email 4 (Jour 7) : Objections traitées + FAQ + social proof",
            "Email 5 (Jour 10) : Offre claire + urgence + garantie",
            "Email 6 (Jour 14) : Dernière chance + FOMO + bonus",
            "Email 7 (Jour 21+) : Réengagement + nouveau contenu"
          ],
          highlight: "Cette structure génère un taux de conversion moyen de 3-8% (vs 0,5-2% pour un email unique), soit 4 à 6 fois plus de résultats."
        },
        {
          title: "Les outils et intégrations indispensables",
          content: "La technologie facilite l'implémentation. Voici notre stack recommandée selon votre budget et vos besoins.",
          points: [
            "Plateformes email : ActiveCampaign (PME), HubSpot (croissance), ou Mailchimp (débutants)",
            "Intégration CRM pour centraliser les données clients",
            "Tracking comportemental : Segment ou Google Analytics 4",
            "A/B testing intégré pour optimiser objets et contenus",
            "Formulaires intelligents avec champs conditionnels",
            "Connecteurs API pour synchroniser avec votre écosystème"
          ]
        },
        {
          title: "KPIs et optimisation continue",
          content: "Mesurer, analyser, optimiser : le cycle vertueux qui transforme une campagne moyenne en machine à cash.",
          points: [
            "Taux d'ouverture : objectif 25-35% (vs moyenne industrie 15-20%)",
            "Taux de clic : objectif 3-6% (vs moyenne 2-3%)",
            "Taux de conversion : objectif 2-8% selon le secteur",
            "Taux de désabonnement : maintenir sous 0,5% par campagne",
            "Revenue per email : métrique ultime du ROI",
            "Deliverability : maintenir au-dessus de 95%"
          ],
          highlight: "Amélioration de 1% du taux de conversion = +36% de revenus annuels pour une liste de 10 000 contacts générant 50€ de valeur moyenne."
        }
      ],
      conclusion: "L'automatisation email n'est pas une dépense marketing - c'est un investissement qui génère des revenus prédictibles et scalables. La clé ? Une stratégie basée sur les données, une segmentation intelligente, et une optimisation continue. Les entreprises qui maîtrisent ces principes voient leur ROI email grimper de 200% à 500% par rapport à l'envoi manuel. Et le meilleur ? Une fois configuré, le système tourne en pilote automatique, générant des ventes 24/7 sans intervention humaine.",
      cta: {
        title: "Multipliez votre ROI email par 3",
        description: "Audit gratuit de vos campagnes actuelles + roadmap personnalisée d'automatisation. Découvrez le potentiel de revenus inexploité dans votre liste."
      }
    }
  },
  "calculer-roi-automatisation-guide-complet": {
    id: "calculer-roi-automatisation-guide-complet",
    title: "Guide Complet : Calculer le ROI de l'Automatisation IA",
    excerpt: "Méthodologie étape par étape pour mesurer précisément l'impact financier de l'automatisation. Incluant templates Excel et études de cas réels.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a171cb0-4675-4d44-a4d0-c463f6dad5a4/generated_images/sleek-business-illustration-of-roi-growt-a5359ea9-20251208154026.jpg",
    category: "Business Intelligence",
    readTime: "12 min",
    date: "3 Décembre 2024",
    content: {
      introduction: "Automatiser pour automatiser n'a aucun sens. L'automatisation doit générer un retour sur investissement mesurable et rapide. Mais comment calculer précisément le ROI d'un projet d'automatisation IA ? Ce guide vous donne une méthodologie concrète, des formules prêtes à l'emploi, et des exemples réels pour justifier vos investissements et mesurer leur impact.",
      sections: [
        {
          title: "La formule universelle du ROI en automatisation",
          content: "Le calcul de base est simple, mais le diable est dans les détails. Voici comment ne rien oublier.",
          points: [
            "ROI = [(Gains - Coûts) / Coûts] × 100",
            "Gains = Économies de temps + Réduction d'erreurs + Revenus additionnels",
            "Coûts = Investissement initial + Coûts récurrents (outil, maintenance)",
            "Période de retour = Investissement initial / Gains mensuels",
            "Valeur actualisée nette (VAN) pour projets >12 mois",
            "Bénéfices intangibles : satisfaction client, moral des équipes, agilité"
          ],
          highlight: "Exemple : Investissement de 3 000€, gains mensuels de 1 200€, coûts récurrents de 150€/mois. ROI à 12 mois : [(12 600 - 4 800) / 4 800] × 100 = 162,5%. Période de retour : 2,8 mois."
        },
        {
          title: "Quantifier les gains : La méthode des 4 piliers",
          content: "Ne sous-estimez pas vos gains. Voici comment capturer l'impact réel de l'automatisation.",
          points: [
            "Pilier 1 - Temps gagné : Heures économisées × Coût horaire moyen",
            "Pilier 2 - Réduction d'erreurs : Coût moyen d'une erreur × Erreurs évitées",
            "Pilier 3 - Croissance du CA : Ventes additionnelles directement attribuables",
            "Pilier 4 - Optimisation des ressources : Évitement d'embauches futures"
          ]
        },
        {
          title: "Étude de cas #1 : Automatisation service client (chatbot IA)",
          content: "PME e-commerce, 8 employés, 400 tickets support mensuels. Voici le calcul complet.",
          points: [
            "Situation avant : 60h/mois de support (30€/h) = 1 800€/mois",
            "Investissement : 2 500€ setup + 200€/mois d'abonnement",
            "Résultats après 3 mois : 70% tickets résolus automatiquement",
            "Temps économisé : 42h/mois × 30€ = 1 260€/mois",
            "Coût total première année : 2 500€ + (200€ × 12) = 4 900€",
            "Gains première année : 1 260€ × 12 = 15 120€",
            "ROI année 1 : [(15 120 - 4 900) / 4 900] × 100 = 208%",
            "Période de retour : 2,3 mois"
          ],
          highlight: "Bonus non quantifié : Satisfaction client +25%, disponibilité 24/7, temps libéré pour stratégie."
        },
        {
          title: "Étude de cas #2 : Automatisation email marketing",
          content: "Agence de services B2B, 5 000 contacts, 2 campagnes manuelles mensuelles.",
          points: [
            "Situation avant : 8h/mois de création email (50€/h) = 400€/mois",
            "CA moyen par campagne : 3 500€ (2 campagnes) = 7 000€/mois",
            "Investissement : 1 500€ setup + 150€/mois d'outil",
            "Résultats : 8 séquences automatisées + nurturing + réactivation",
            "Temps économisé : 6h/mois (garder 2h monitoring) = 300€/mois",
            "CA additionnel : +4 200€/mois grâce aux automatisations",
            "Gains mensuels nets : 300€ + 4 200€ - 150€ = 4 350€/mois",
            "ROI année 1 : [(52 200 - 3 300) / 3 300] × 100 = 1 481%",
            "Période de retour : 0,4 mois (12 jours!)"
          ]
        },
        {
          title: "Les coûts cachés à inclure dans votre calcul",
          content: "Pour un ROI réaliste, n'oubliez aucun coût. Voici la checklist complète.",
          points: [
            "Coûts de setup : Développement, intégration, configuration",
            "Formation des équipes : Temps × Coût horaire",
            "Licences et abonnements logiciels",
            "Maintenance et optimisation (10-15% de l'investissement initial/an)",
            "Support technique si externalisé",
            "Migration de données si changement de système",
            "Temps de gestion du projet en interne"
          ]
        },
        {
          title: "Template Excel de calcul ROI automatisation",
          content: "Utilisez notre modèle pour calculer votre propre ROI en 10 minutes.",
          points: [
            "Onglet 1 : Situation actuelle (temps, coûts, erreurs)",
            "Onglet 2 : Investissement prévu (setup + récurrent)",
            "Onglet 3 : Gains projetés (conservateurs, réalistes, optimistes)",
            "Onglet 4 : Calcul ROI automatique avec graphiques",
            "Onglet 5 : Comparaison de scénarios multiples",
            "Onglet 6 : Sensibilité aux variations (si gains -20% ou +30%)"
          ],
          highlight: "Notre template inclut les benchmarks par secteur pour valider vos hypothèses. Téléchargement gratuit avec votre audit."
        }
      ],
      conclusion: "Calculer le ROI de l'automatisation n'est pas un exercice théorique - c'est l'outil de décision le plus puissant pour prioriser vos investissements technologiques. Les chiffres ne mentent pas : l'automatisation bien pensée génère des ROI de 150% à 500% en première année. La clé ? Des hypothèses réalistes, une mesure rigoureuse, et une optimisation continue. Chez Devlopia, nous ne vendons pas de solutions - nous vendons des ROI mesurables et garantis.",
      cta: {
        title: "Calculons ensemble votre ROI potentiel",
        description: "Audit gratuit de 30 minutes : nous analysons vos processus, calculons votre ROI prévisionnel, et vous remettons un rapport détaillé."
      }
    }
  }
};

// Generate metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles[params.slug];
  
  if (!article) {
    return {
      title: "Article non trouvé | Blog Devlopia",
      description: "L'article demandé n'existe pas ou a été déplacé.",
    };
  }

  return {
    title: `${article.title} | Blog Devlopia`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: "article",
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    notFound();
  }

  // Get other articles for recommendations
  const otherArticles = Object.values(articles)
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Back Navigation */}
      <div className="pt-24 md:pt-32 pb-6">
        <div className="container mx-auto px-4 max-w-[900px]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Retour au blog</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 max-w-[900px]">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="inline-flex items-center gap-1.5 bg-primary/20 border border-primary/30 px-3 py-1.5 rounded-lg text-sm font-bold text-primary">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-text-secondary text-sm">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5 text-text-secondary text-sm">
              <Clock className="w-4 h-4" />
              {article.readTime} de lecture
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-text-secondary leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200">
            {article.excerpt}
          </p>

          {/* Featured Image */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-text-secondary leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              {article.content.introduction}
            </p>
          </div>

          {/* Content Sections */}
          {article.content.sections.map((section, index) => (
            <section key={index} className="mb-12">
              <div className="flex items-start gap-3 mb-6">
                <div className="bg-primary/20 p-2 rounded-lg mt-1 shrink-0">
                  {index % 3 === 0 && <Lightbulb className="w-6 h-6 text-primary" />}
                  {index % 3 === 1 && <TrendingUp className="w-6 h-6 text-primary" />}
                  {index % 3 === 2 && <CheckCircle2 className="w-6 h-6 text-primary" />}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {section.content}
                  </p>

                  {/* Section Points */}
                  {section.points && section.points.length > 0 && (
                    <ul className="space-y-3 mb-6">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 group">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="text-text-secondary leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Highlight Box */}
                  {section.highlight && (
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-xl">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-primary shrink-0 mt-1" />
                        <p className="text-white leading-relaxed font-medium">
                          {section.highlight}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-background-secondary/80 to-background-tertiary/60 border border-border rounded-2xl p-8 md:p-10 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <CheckCircle2 className="w-7 h-7 text-primary" />
              </div>
              Conclusion
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {article.content.conclusion}
            </p>
          </div>

          {/* Article CTA */}
          <div className="bg-gradient-to-br from-primary/20 via-background-secondary to-secondary/20 border border-primary/30 rounded-2xl p-8 md:p-12 text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {article.content.cta.title}
            </h3>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              {article.content.cta.description}
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/40">
              <Link href="/#calendly">
                📅 Réserver Mon Audit Gratuit Maintenant
              </Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Continuer la lecture</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherArticles.map((relatedArticle, index) => (
              <Link
                key={relatedArticle.id}
                href={`/blog/${relatedArticle.id}`}
                className="group bg-gradient-to-br from-background-secondary/80 to-background-tertiary/60 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <span className="inline-block bg-primary/20 px-2.5 py-1 rounded-md text-xs font-bold text-primary mb-3">
                    {relatedArticle.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-text-secondary text-sm line-clamp-2 mb-4">
                    {relatedArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                    <span>Lire plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}