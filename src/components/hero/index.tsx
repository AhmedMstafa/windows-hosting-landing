import { Routs } from '@/constants/enums';
import Link from '../link';
import Box from './box';
import SmBox from './sm-box';
import { getCurrentLocale } from '@/lib/getCurrentLocale';
import getTrans from '@/lib/translation';

export default async function Hero() {
  const locale = await getCurrentLocale();

  const { hero } = await getTrans(locale);

  return (
    <section className="overflow-hidden h-[calc(100vh-85px)]">
      <div className="text-white bg-main-color pt-[85px] h-[90%] scale-110 rounded-b-full shadow-[0_10px_0_20px_rgba(200,206,222,1)]">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[24px]  md:text-[40px] font-semibold ">
            {hero.title}
          </h1>
          <h2 className="font-light text-[14px] max-w-[80%] md:max-w-[614px] text-center">
            {hero.subTitle}
          </h2>
        </div>
        <div className="flex justify-center gap-4 mt-6 text-[14px]">
          <button className="border px-4 py-2 rounded-md hover:border-transparent hover:bg-white hover:text-main-color cursor-pointer transition">
            <Link href={`/${Routs.CREATE_ACCOUNT}`}>{hero.createAccount}</Link>
          </button>
          <button className="border px-4 py-2 rounded-md hover:border-transparent hover:bg-white hover:text-main-color cursor-pointer transition">
            <Link href={`/${Routs.PRICES}`}>{hero.viewPrices}</Link>
          </button>
        </div>
        <div className="relative -z-50 flex flex-col items-center mt-15 sm:mt-30 scale-50 sm:scale-80 md:scale-90 lg:scale-100">
          <div className="flex justify-around w-full  ">
            <SmBox />
            <SmBox />
          </div>
          <Box />
        </div>
      </div>
    </section>
  );
}
