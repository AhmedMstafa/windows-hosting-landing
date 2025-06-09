import ChooseUs from '@/components/choose-us';
import ClientsBadges from '@/components/clients-badges';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Hosting from '@/components/hosting';
import Pricing from '@/components/pricing';
import SupportInformation from '@/components/support-information';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Hosting />
        <Pricing />
        <SupportInformation />
        <ChooseUs />
        <ClientsBadges/>
      </main>
    </>
  );
}
