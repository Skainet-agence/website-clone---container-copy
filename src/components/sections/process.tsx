import { Check } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Audit Gratuit",
    description: "Analyse approfondie de vos processus actuels pour identifier les opportunités d'automatisation les plus rentables.",
    features: ["Diagnostic complet", "Roadmap personnalisée", "ROI estimé"],
  },
  {
    number: "02",
    title: "Implémentation",
    description: "Développement et déploiement de vos solutions d'automatisation avec formation de vos équipes.",
    features: ["Développement sur mesure", "Formation complète", "Tests et validation"],
  },
  {
    number: "03",
    title: "Optimisation",
    description: "Suivi des performances et optimisation continue pour maximiser vos résultats et votre ROI.",
    features: ["Monitoring 24/7", "Rapports détaillés", "Support continu"],
  },
];

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ProcessCard = ({ number, title, description, features, index }: ProcessCardProps) => (
  <div 
    className="relative p-6 md:p-10 rounded-2xl bg-[#2a2f5a] border border-white/10 overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(0,0,0,0.5)] hover:border-white/20 animate-in fade-in slide-in-from-bottom-4 duration-700"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary" />
    <div className="relative flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="absolute inset-0 blur-xl bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 rounded-full" />
        <p className="relative text-5xl md:text-[56px] font-extrabold text-primary leading-none transition-all duration-300">
          {number}
        </p>
      </div>
      <div className="relative mb-4">
        <div className="absolute inset-0 blur-lg bg-white/0 group-hover:bg-white/40 transition-all duration-300 rounded-lg" />
        <h3 className="relative text-xl md:text-2xl font-bold text-white transition-colors duration-300">{title}</h3>
      </div>
      <p className="text-text-secondary mb-6 text-sm md:text-base">
        {description}
      </p>
      <ul className="space-y-2 text-text-secondary text-sm md:text-base text-left w-full">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ProcessSection = () => {
  return (
    <section className="py-13 sm:py-19 lg:py-26 bg-background-primary">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {processSteps.map((step, index) => (
            <ProcessCard key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;