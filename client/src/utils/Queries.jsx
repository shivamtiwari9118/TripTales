import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Queries = () => {
  return (
    <div className="w-full px-6 mt-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it free?</AccordionTrigger>
          <AccordionContent>Yes. It's free.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Is it takes the budget for planning?
          </AccordionTrigger>
          <AccordionContent>
            Yes. You can give the budget prefrence.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can I generate the trip of 5 days?
          </AccordionTrigger>
          <AccordionContent>
            Yes. You can generate the trip of maximum 5 days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Can I generate the trip for multiple people?
          </AccordionTrigger>
          <AccordionContent>
            Yes. You can generate the trip for multiple people.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Queries;
