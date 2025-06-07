import { plans } from '@/dictionaries/ar.json';
import Link from '../link';
import { Routs } from '@/constants/enums';

type PlanTypes = {
  color: string;
};

export default function Plan({ color }: PlanTypes) {
  return (
    <div
      className="relative w-[310px] pt-[40px] rounded-md overflow-hidden shadow-md bg-white"
      style={{ position: 'relative' }}
    >
      <div
        className="absolute top-0 left-0 w-full h-[20px]"
        style={{ backgroundColor: `#${color}` }}
      />

      <h5 className="text-center text-[28px] text-main-color">
        {plans.planOne.title}
      </h5>
      <p className="text-[24px] text-[#17171780] text-center">
        <strong className="text-[80px] font-thin text-main-color">
          {plans.planOne.price.number}
        </strong>
        {plans.planOne.price.tag}
      </p>
      <div className="flex justify-center items-center gap-2">
        <p className="text-[14px] bg-[#FEE9DF] text-[#F67A3C] py-1 px-2 rounded-md">
          {plans.planOne.discount.content}
          <span>{plans.planOne.discount.percentage}</span>
        </p>
        <p className="text-[#17171780] font-thin">
          <strong className="text-[24px] font-thin">
            {plans.planOne.discount.price.number}
          </strong>
          {plans.planOne.discount.price.tag}
        </p>
      </div>
      <button className="border my-4 block mx-auto px-4 py-2 rounded-md bg-main-color text-white hover:bg-white hover:text-main-color hover:border-main-color cursor-pointer transition">
        <Link href={`/${Routs.ORDER_NOW}`}>{plans.planOne.orderNow}</Link>
      </button>
      <div
        dir="ltr"
        className="border-y-1 border-[#0000000D] flex flex-col gap-4 pt-4 pb-8 mx-6"
      >
        <p>
          <strong>{plans.planOne.storage.content}</strong>{' '}
          <span>
            {plans.planOne.storage.number} {plans.planOne.storage.tag}
          </span>
        </p>
        <p>
          <strong>{plans.planOne.websiteCount.content}</strong>{' '}
          <span>{plans.planOne.websiteCount.number}</span>
        </p>
        <p>
          <strong>{plans.planOne.ram.content}</strong>{' '}
          <span>{plans.planOne.ram.number} GB</span>
        </p>
        <p>
          <strong>{plans.planOne.cpu.content}</strong>{' '}
          <span>{plans.planOne.cpu.number} Cores</span>
        </p>
        <p>
          <strong>{plans.planOne.cPanel.content}</strong>{' '}
          <span>{plans.planOne.cPanel.name}</span>
        </p>
        <p>
          <strong>{plans.planOne.subdomains.content}</strong>{' '}
          <span>{plans.planOne.subdomains.name}</span>
        </p>
        <p>
          <strong>{plans.planOne.dataBases.content}</strong>{' '}
          <span>{plans.planOne.dataBases.name}</span>
        </p>
        <p>
          <strong>{plans.planOne.email.content}</strong>{' '}
          <span>{plans.planOne.email.name}</span>
        </p>
        <p>
          <strong>{plans.planOne.ftp.content}</strong>{' '}
          <span>{plans.planOne.ftp.name}</span>
        </p>
        <p className="font-light">
          {plans.planOne.dedicatedNameServer.content}
        </p>
      </div>
      <p className="font-light text-main-color py-5 text-center cursor-pointer hover:bg-main-color hover:text-white transition">
        {plans.planOne.comparePackages}
      </p>
    </div>
  );
}
