import ChooseUs from '@/components/choose-us';
import ClientsBadges from '@/components/clients-badges';
import FQA from '@/components/fqa';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Hosting from '@/components/hosting';
import Pricing from '@/components/pricing';
import SupportInformation from '@/components/support-information';
import MainWrapper from '@/components/main-wrapper';

export default function Home() {
  return (
    <>
      <Header />
      <MainWrapper>
        <Hero />
        <Hosting />
        <Pricing />
        <SupportInformation />
        <ChooseUs />
        <ClientsBadges />
        <FQA />
      </MainWrapper>
    </>
  );
}
