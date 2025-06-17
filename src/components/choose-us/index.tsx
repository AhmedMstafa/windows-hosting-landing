import Feature from './feature';
import { getCurrentLocale } from '@/lib/getCurrentLocale';
import getTrans from '@/lib/translation';

export default async function ChooseUs() {
  const locale = await getCurrentLocale();
  const { chooseUs } = await getTrans(locale);
  return (
    <section className="bg-[url('/choose-us.svg')] bg-no-repeat bg-contain bg-top pt-30">
      <div className="container">
        <h4 className="text-main-color font-semibold text-[40px] mb-4 text-center">
          {chooseUs.title}
        </h4>
        <div className="flex flex-wrap justify-center gap-4 pt-20">
          {chooseUs.features.map((feat) => (
            <Feature
              key={feat.icon}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
