import Image from 'next/image';

export default function SmBox() {
  return (
    <div className="relative w-[266px] h-[154px] hidden sm:block">
      <span className="w-full h-full absolute ">
        <Image src="/border-two.svg" alt="border" fill />
      </span>
      <span className="w-[176px] h-[137px] absolute bottom-10 left-1/2 -translate-x-1/2">
        <Image src="/hero-box-container.svg" alt="border" fill />
      </span>
      <span className="w-[70px] h-[70px] absolute -top-12 left-1/2 -translate-x-1/2 animate-float">
        <Image src="hero-box.svg" alt="border" fill />
      </span>
      <span className="w-[110px] h-[212px] absolute top-15 -translate-y-full left-1/2 -translate-x-1/2 ">
        <Image src="/sm-shadow.svg" alt="border" fill />
      </span>
    </div>
  );
}
