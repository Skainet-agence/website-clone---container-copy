import { Star } from 'lucide-react';

const testimonialsData = [
  {
    quote: "En 3 mois, nous avons automatisé 80% de notre service client. Nos équipes peuvent enfin se concentrer sur la stratégie au lieu de répondre aux mêmes questions.",
    name: "Marie Dubois",
    title: "CEO",
  },
  {
    quote: "L'automatisation de notre processus de vente nous fait gagner 15h par semaine. Le ROI a été atteint en moins de 2 mois.",
    name: "Pierre Martin",
    title: "CEO et Fondateur",
  },
  {
    quote: "Leur approche est remarquable. Ils ont su comprendre nos besoins spécifiques et créer des solutions parfaitement adaptées à notre secteur.",
    name: "Sarah Johnson",
    title: "Fondatrice",
  },
];

type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  index: number;
};

const TestimonialCard = ({ quote, name, title, index }: TestimonialCardProps) => {
  return (
    <div 
      className="flex h-full flex-col rounded-2xl bg-[#2a2f5a] p-6 md:p-8 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(0,0,0,0.5)] hover:border-white/20 group animate-in fade-in slide-in-from-bottom-4 duration-700"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="mb-6 flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-[#ffd700] text-[#ffd700] transition-transform duration-300 group-hover:scale-110" aria-hidden="true" style={{ animationDelay: `${i * 50}ms` }} />
        ))}
      </div>
      <blockquote className="flex-grow italic text-text-secondary-light text-sm md:text-base">
        <p>"{quote}"</p>
      </blockquote>
      <footer className="mt-6 md:mt-8">
        <div className="font-semibold text-text-primary text-base md:text-lg transition-colors duration-300 group-hover:text-primary">{name}</div>
        <div className="text-sm text-text-secondary">{title}</div>
      </footer>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-background-primary py-13 sm:py-19 lg:py-26">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 md:mb-16 max-w-3xl text-center animate-in fade-in slide-in-from-bottom-2 duration-700">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-4 md:mb-6">
            Nos résultats parlent pour nous
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary">
            Des centaines d'entreprises révolutionnent leur performance grâce à nous
          </p>
        </div>
        <div className="mx-auto grid max-w-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;