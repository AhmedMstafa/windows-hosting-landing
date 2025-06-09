import { clientsBadges } from '@/dictionaries/ar.json';
import Badge from './badge';

export default function ClientsBadges() {
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
