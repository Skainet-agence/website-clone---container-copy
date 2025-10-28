"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqData = [
  {
    question: "Mes données sont-elles sécurisées avec vos automatisations ?",
    answer: "Absolument. La sécurité de vos données est notre priorité absolue. Nous utilisons des protocoles de chiffrement de pointe et des meilleures pratiques de sécurité pour garantir que vos informations restent confidentielles et protégées à chaque étape du processus d'automatisation."
  },
  {
    question: "Puis-je garder mes outils actuels ?",
    answer: "Oui. Nos solutions sont conçues pour s'intégrer de manière transparente avec les outils que vous utilisez déjà. Nous travaillons avec une large gamme de plateformes, de votre CRM à vos logiciels de comptabilité, pour créer un écosystème unifié et efficace."
  },
  {
    question: "Que se passe-t-il si l'automatisation ne fonctionne pas comme prévu ?",
    answer: "Nous offrons un support complet pour garantir que vos automatisations fonctionnent sans faille. Si un problème survient, notre équipe d'experts intervient rapidement pour diagnostiquer et résoudre le problème, minimisant ainsi toute interruption de vos opérations."
  },
  {
    question: "Avez-vous besoin d'accès à nos systèmes internes ?",
    answer: "Pour implémenter les automatisations, nous avons besoin d'un accès limité et sécurisé à certains de vos systèmes. Cet accès est strictly contrôlé, défini au préalable avec vous, et utilisé uniquement dans le but de mettre en place et de maintenir les solutions convenues."
  },
  {
    question: "L'automatisation va-t-elle remplacer mes employés ?",
    answer: "Non, l'automatisation vise à augmenter vos employés, pas à les remplacer. En libérant votre équipe des tâches répétitives et à faible valeur ajoutée, vous leur permettez de se concentrer sur des activités stratégiques, créatives et à plus fort impact pour l'entreprise."
  },
  {
    question: "Proposez-vous un support après l'implémentation ?",
    answer: "Oui, notre partenariat ne s'arrête pas à la livraison. Nous proposons des contrats de support et de maintenance pour assurer la performance continue de vos automatisations, effectuer des mises à jour et les optimiser en fonction de l'évolution de vos besoins."
  },
  {
    question: "Comment mesurez-vous le succès de vos automatisations ?",
    answer: "Nous définissons ensemble des indicateurs de performance clés (KPI) avant même de commencer. Le succès est mesuré par des gains de temps, des réductions de coûts, une augmentation de la productivité, une amélioration de la satisfaction client et, ultimement, un retour sur investissement (ROI) tangible."
  }
];

export default function FaqSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef as any} className="py-13 sm:py-19 lg:py-26 bg-background-primary">
      <div className="container mx-auto px-4 max-w-[900px]">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            Tout ce que vous devez savoir sur nos solutions d'automatisation
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`bg-background-secondary border border-border rounded-lg hover:bg-muted hover:border-white/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <AccordionTrigger className="group w-full text-left p-5 md:p-6 text-foreground text-sm sm:text-base md:text-lg font-medium flex items-center justify-between hover:no-underline [&>svg]:hidden">
                <span className="flex-1 pr-4">{item.question}</span>
                <div className="bg-primary/10 p-2 rounded-full transition-all duration-300 group-hover:bg-primary/20 shrink-0">
                  <Plus className="h-5 w-5 text-primary transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-45" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground text-sm md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className={`mt-8 md:mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 md:py-7 text-sm md:text-base font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
            <Link href="/faq">
              <span className="md:hidden">TOUTES LES QUESTIONS FRÉQUENTES</span>
              <span className="hidden md:inline">DÉCOUVRIR TOUTES LES QUESTIONS FRÉQUENTES</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}