import Link from '../link';
import { Routs } from '@/constants/enums';
import { logo } from '@/dictionaries/ar.json';

export default function Logo() {
  return (
    <Link
      href={Routs.ROOT}
      className="cursor-pointer text-[40px] font-semibold"
    >
      {logo}
    </Link>
  );
}
