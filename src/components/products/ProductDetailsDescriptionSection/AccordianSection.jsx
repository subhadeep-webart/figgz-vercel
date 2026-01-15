"use client";
import { Accordion, AccordionItem } from "@heroui/react";

const AccordianSection = ({ tabs }) => {
  return (
    <Accordion>
      {tabs.map((tab) => (
        <AccordionItem
          key={tab.id}
          aria-label={tab.label}
          title={tab.label}
          classNames={{
            title: "text-sm font-semibold !mb-2",
            content: "text-sm font-medium text-text-payment-info",
          }}
          className="!py-3"
        >
          {tab.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordianSection;
