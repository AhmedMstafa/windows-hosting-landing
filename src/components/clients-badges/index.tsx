import Badge from './badge';
import { getCurrentLocale } from '@/lib/getCurrentLocale';
import getTrans from '@/lib/translation';

export default async function ClientsBadges() {
  const locale = await getCurrentLocale();
  const { clientsBadges } = await getTrans(locale);
  return (
    <section className="pt-40">
      <div className="container">
        <h4 className="text-main-color font-semibold text-[40px] mb-4 text-center">
          {clientsBadges.title}
        </h4>

        <div className="flex flex-wrap justify-center gap-8">
          {clientsBadges.clients.map((client) => (
            <Badge key={client.badge} badge={client.badge} name={client.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
