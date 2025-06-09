'use client';

import { createContext, useContext, useState } from 'react';
import AccordionItem from './accordion-item';

type AccordionContextType = {
  openItemId: string | null;
  toggleItem: (id: string) => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error(
      'Accordion-related components must be wrapped in <Accordion>.'
    );
  }
  return ctx;
}

type AccordionProps = {
  classes?: string;
  children: React.ReactNode;
};

export default function Accordion({ classes = '', children }: AccordionProps) {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  function toggleItem(id: string) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={classes}>{children}</div>
    </AccordionContext.Provider>
  );
}

export { AccordionItem };
