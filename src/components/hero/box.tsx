import Image from 'next/image';

export default function Box() {
  return (
    <div className="relative w-[452px] h-[262px]">
      <span className="w-full h-full absolute ">
        <Image src="/border-one.svg" alt="border" fill />
      </span>
      <span className="w-[317px] h-[250px] absolute bottom-10 left-1/2 -translate-x-1/2">
        <Image src="/hero-windows-container.svg" alt="border" fill />
      </span>
      <span className="w-[100px] h-[100px] absolute -top-15 left-1/2 -translate-x-1/2 animate-float">
        <Image src="/hero-windows.svg" alt="border" fill />
      </span>
      <span className="w-[131px] h-[386px] absolute top-17 -translate-y-full left-1/2 -translate-x-1/2">
        <Image src="/lg-shadow.svg" alt="border" fill />
      </span>
    </div>
  );
}
