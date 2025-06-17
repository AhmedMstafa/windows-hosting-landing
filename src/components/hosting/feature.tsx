import Image from 'next/image';
import { getCurrentLocale } from '@/lib/getCurrentLocale';
import getTrans from '@/lib/translation';

type featureTypes = {
  image: string;
  alt: string;
};

export default async function Feature({ image, alt }: featureTypes) {
  const locale = await getCurrentLocale();
  const { hosting } = await getTrans(locale);
  return (
    <div className="flex flex-col gap-4 px-8 justify-center w-[370px] h-[277px] rounded-md shadow-md p-4 bg-white">
      <div className="w-[60px] h-[91px] mb-4">
        <Image src={image} alt={alt} width={100} height={100} />
      </div>
      <h5 className="font-semibold">{hosting.featureOne.title}</h5>
      <p className="text-[14px]">{hosting.featureOne.subTitle}</p>
    </div>
  );
}
