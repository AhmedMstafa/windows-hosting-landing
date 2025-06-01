'use client';

import Logo from './logo';
import Language from './language';
import Link from '../link';
import { navbar } from '@/dictionaries/en.json';
import { Routs } from '@/constants/enums';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';
import { useState } from 'react';
import Image from 'next/image';

const Links = [
  {
    id: crypto.randomUUID(),
    title: navbar.demos,
    href: Routs.DEMOS,
  },
  {
    id: crypto.randomUUID(),
    title: navbar.hosting,
    href: Routs.HOSTING,
  },
  {
    id: crypto.randomUUID(),
    title: navbar.proHosting,
    href: Routs.PRO_HOSTING,
  },
  {
    id: crypto.randomUUID(),
    title: navbar.domains,
    href: Routs.DOMAINS,
  },
  {
    id: crypto.randomUUID(),
    title: navbar.needHelp,
    href: Routs.NEED_HELP,
  },
  {
    id: crypto.randomUUID(),
    title: navbar.pages,
    href: Routs.PAGES,
  },
  {
    id: crypto.randomUUID(),
    title: navbar.contactUs,
    href: Routs.CONTACT_US,
  },
  {
    id: crypto.randomUUID(),
    title: navbar.clientLogin,
    href: Routs.CLIENT_LOGIN,
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className=" nav-container w-full flex justify-between">
      <div className="flex items-center w-[168px] justify-between">
        <Logo />
        <Language />
      </div>
      <button
        onClick={() => setOpenMenu((prev) => !prev)}
        className="text-[40px] cursor-pointer lg:hidden"
      >
        {openMenu ? <IoCloseSharp /> : <IoMenuSharp />}
      </button>
      <ul
        className={`${
          !openMenu ? 'translate-x-full ' : ''
        } transition-transform border-b lg:translate-0 lg:border-0 absolute left-0 top-full w-full flex flex-col items-start bg-white p-8 gap-8 lg:flex-row lg:static lg:w-fit lg:p-0 lg:items-center lg:gap-6 xl:gap-8`}
      >
        {Links.map((link) => {
          if (link.title === navbar.clientLogin) {
            return <ClientLogin key={link.id} link={link} />;
          }

          return (
            <li
              key={link.id}
              className="cursor-pointer relative 
            before:absolute 
              before:h-0.5 
              before:bg-black 
              before:w-0 
              before:-bottom-1 
              before:transition-all 
              before:duration-500 
              hover:before:w-full"
            >
              <Link href={`/${link.href}`}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ClientLogin({
  link,
}: {
  link: { id: string; title: string; href: string };
}) {
  return (
    <li className="flex items-center gap-2 cursor-pointer text-white py-2 px-4 lg:rounded-2xl bg-secondary-color hover:bg-[#2b1f51f0] transition">
      <Link href={`/${link.href}`}>{link.title}</Link>
      <span className="w-[16px]">
        <Image src="/logout.svg" alt="logout" width={100} height={100} />
      </span>
    </li>
  );
}
