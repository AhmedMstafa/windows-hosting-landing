import { Routs } from '@/constants/enums';
import Link from 'next/link';
import Service from './service';
import { getCurrentLocale } from '@/lib/getCurrentLocale';
import getTrans from '@/lib/translation';

export default async function SupportInformation() {
  const locale = await getCurrentLocale();
  const { supportInformation } = await getTrans(locale);
  return (
    <section className="pt-40 pb-20">
      <div className="container text-center flex flex-col gap-8">
        <h4 className="text-main-color font-semibold text-[40px] mb-4">
          {supportInformation.title}
        </h4>
        <h5 className="text-[20px] font-light">
          {supportInformation.subTitle}
        </h5>
        <h6 className="text-[20px] font-semibold ">
          {supportInformation.description}
        </h6>
        <button className="border block mx-auto mt-4 px-4 py-2 rounded-md hover:bg-main-color hover:text-white cursor-pointer transition">
          <Link href={`/${Routs.ORDER_NOW}`}>
            {supportInformation.orderNow}
          </Link>
        </button>

        <div
          className="flex flex-wrap items-center justify-center sm:justify-between gap-x-4 gap-y-16 
         py-4 "
        >
          {supportInformation.services.map((service) => (
            <Service
              key={service.key}
              title={service.label}
              className="basis-[100%] md:basis-[40%] lg:basis-[30%]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
