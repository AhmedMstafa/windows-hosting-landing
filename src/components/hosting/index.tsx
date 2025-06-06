import { hosting } from '@/dictionaries/ar.json';
import Link from '../link';
import { Routs } from '@/constants/enums';
import Feature from './feature';

export default function Hosting() {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-center text-main-color text-[32px]">
          {hosting.title.firstSlice}
          <strong>{hosting.title.secondSlice}</strong>
          {hosting.title.thirdSlice}
        </h2>
        <h3 className="text-[16px] max-w-[820px] text-center mx-auto pt-4">
          {hosting.subTitle}
        </h3>
        <button className="border block mx-auto mt-4 px-4 py-2 rounded-md hover:bg-main-color hover:text-white cursor-pointer transition">
          <Link href={`/${Routs.ORDER_NOW}`}>{hosting.orderNow}</Link>
        </button>
        <h4 className="text-[40px] text-main-color text-center mt-4">
          {hosting.header}
        </h4>
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          <Feature image="/arrow.svg" alt="arrow" />
          <Feature image="/save.svg" alt="save" />
          <Feature image="/chart.svg" alt="chart" />
        </div>
      </div>
    </section>
  );
}
