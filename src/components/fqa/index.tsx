import FQASection from './fqa-section';
import InfoCard from './infoCard';
import { getCurrentLocale } from '@/lib/getCurrentLocale';
import getTrans from '@/lib/translation';

export default async function FQA() {
  const locale = await getCurrentLocale();
  const { fqa } = await getTrans(locale);
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
