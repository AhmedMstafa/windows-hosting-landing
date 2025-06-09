import Image from 'next/image';

type featureProps = {
  icon: string;
  title: string;
  description: string;
};

export default function Feature({ icon, title, description }: featureProps) {
  return (
    <div className="flex flex-col gap-4 px-8 justify-center w-[370px] h-[277px] rounded-md shadow-md p-4 bg-white">
      <div className="relative w-[60px] h-[60px] mb-4">
        <Image src={icon} alt="icon" fill />
      </div>
      <h5 className="font-semibold">{title}</h5>
      <p className="text-[13px] font-light">{description}</p>
    </div>
  );
}
