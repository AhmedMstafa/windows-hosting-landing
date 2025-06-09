import Image from 'next/image';

type badgeProps = {
  name: string;
  badge: string;
};

export default function Badge({ name, badge }: badgeProps) {
  return (
    <div className="w-[250px] h-[250px] flex flex-col justify-center items-center bg-white">
      <div className="relative w-[164px] h-[164px]">
        <Image src={badge} alt="client badge" fill />
      </div>
      <p className="text-[18px] font-semibold">{name}</p>
    </div>
  );
}
