import Image from 'next/image';

type ServiceProps = {
  title: string;
  className?: string;
};

export default function Service({ title, className }: ServiceProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <div className="relative w-[20px] h-[20px]">
        <Image src="/check-true.svg" alt="check mark true" fill />
      </div>
      <p className="font-semibold text-nowrap text-center">{title}</p>
    </div>
  );
}
