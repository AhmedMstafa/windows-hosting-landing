import React from 'react';
import Image from 'next/image';
import { useAccordionContext } from '.';

type accordionItemProps = {
  id: string;
  title: string;
  classes: string;
  children: React.ReactNode;
};

export default function AccordionItem({
  id,
  title,
  classes,
  children,
}: accordionItemProps) {
  const { openItemId, toggleItem } = useAccordionContext();

  const isOpen = openItemId === id;

  return (
    <div className={classes}>
      <h4
        onClick={() => toggleItem(id)}
        className="flex items-center justify-between gap-1 text-main-color text-[20px] font-normal px-4 py-6"
      >
        {title}
        <div className="relative shrink-0 w-[20px] h-[20px] cursor-pointer text-main-color ">
          {isOpen ? (
            <Image src="/minus.svg" alt="icon" fill />
          ) : (
            <Image src="/plus.svg" alt="icon" fill />
          )}
        </div>
      </h4>
      <div className={`${isOpen ? 'visible' : 'hidden'}`}>{children}</div>
    </div>
  );
}
