export default function Language() {
  return (
    <button
      className="relative group flex w-[43px] h-4 text-end justify-between items-center cursor-pointer transition   before:absolute 
             before:h-0.5 
             before:bg-black 
             before:w-0 
             before:-bottom-2 
             before:transition-all 
             before:duration-500 
             hover:before:w-full"
    >
      <span className="w-4 h-4 bg-[#D9D9D9] rounded-full group-hover:bg-main-color transition-all duration-500"></span>
      EN
    </button>
  );
}
