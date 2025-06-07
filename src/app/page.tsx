import Header from '@/components/header';
import Hero from '@/components/hero';
import Hosting from '@/components/hosting';
import Pricing from '@/components/pricing';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Hosting />
        <Pricing />
      </main>
    </>
  );
}
