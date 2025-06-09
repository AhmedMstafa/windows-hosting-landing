import Accordion, { AccordionItem } from '../accordion';
import { fqa } from '@/dictionaries/ar.json';
export default function FQASection() {
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
