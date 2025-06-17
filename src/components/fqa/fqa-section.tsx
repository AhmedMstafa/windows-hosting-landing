import { getCurrentLocale } from '@/lib/getCurrentLocale';
import Accordion, { AccordionItem } from '../accordion';
import getTrans from '@/lib/translation';

export default async function FQASection() {
  const locale = await getCurrentLocale();
  const { fqa } = await getTrans(locale);
  return (
    <Accordion classes="w-full bg-white">
      {fqa.questions.map((question) => (
        <AccordionItem
          key={question.id}
          id={question.id}
          title={question.question}
          classes=""
        >
          <p className="max-w-[549px] text-[14px] font-light px-4">
            {question.answer}
          </p>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
