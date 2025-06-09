import FQASection from './fqa-section';
import { fqa } from '@/dictionaries/ar.json';
import InfoCard from './infoCard';

export default function FQA() {
  return (
    <section className="pt-40 pb-40">
      <div className="container flex items-center md:gap-16">
        <div className="hidden md:flex flex-col gap-4">
          {fqa.cards.map((card) => (
            <InfoCard key={card.id} icon={card.icon} name={card.name} />
          ))}
        </div>
        <FQASection />
      </div>
    </section>
  );
}
