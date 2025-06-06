import Image from 'next/image';
import { hosting } from '@/dictionaries/ar.json';

type featureTypes = {
  image: string;
  alt: string;
};

export default function Feature({ image, alt }: featureTypes) {
  return (
    <div className="flex flex-col gap-4 px-8 justify-center w-[370px] h-[277px] rounded-md shadow-md p-4">
      <div className="w-[60px] h-[91px] mb-4">
        <Image src={image} alt={alt} width={100} height={100} />
      </div>
      <h5 className="font-semibold">{hosting.featureOne.title}</h5>
      <p className="text-[14px]">{hosting.featureOne.subTitle}</p>
    </div>
  );
}
