import Image from 'next/image';

type infoCardProps = {
  name: string;
  icon: string;
};

export default function InfoCard({ name, icon }: infoCardProps) {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <div className="relative w-[100px] h-[100px]">
        <Image src={icon} alt="fqa card" fill />
      </div>
      <p className="text-nowrap">{name}</p>
    </div>
  );
}
