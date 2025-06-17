import getTrans from '@/lib/translation';
import Plan from './plan';
import { getCurrentLocale } from '@/lib/getCurrentLocale';

export default async function Pricing() {
  const locale = await getCurrentLocale();
  const { plans } = await getTrans(locale);
  return (
    <section className="bg-[url('/pricing-bg.svg')] bg-no-repeat bg-contain bg-top pt-40">
      <h4 className="text-main-color text-[64px] text-center mb-8">
        {plans.title}
      </h4>
      <div className="container">
        <div className="flex justify-around gap-8 flex-wrap">
          <Plan color="FBE06B" />
          <Plan color="C6CDE0" />
          <Plan color="69A0E0" />
        </div>
      </div>
    </section>
  );
}
