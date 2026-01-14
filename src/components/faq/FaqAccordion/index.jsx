"use client"
import { Accordion, AccordionItem } from "@heroui/react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqAccordion = () => {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return (
        <Accordion variant="splitted" motionProps={{
            variants: {
                enter: {
                    y: 0,
                    opacity: 1,
                    height: "auto",
                    overflowY: "unset",
                    transition: {
                        height: {
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                            duration: 1,
                        },
                        opacity: {
                            easings: "ease",
                            duration: 1,
                        },
                    },
                },
                exit: {
                    y: -10,
                    opacity: 0,
                    height: 0,
                    overflowY: "hidden",
                    transition: {
                        height: {
                            easings: "ease",
                            duration: 0.25,
                        },
                        opacity: {
                            easings: "ease",
                            duration: 0.3,
                        },
                    },
                },
            },
        }}
            itemClasses={{
                base: "bg-shopping-cart shadow-none border-1 border-image-wrapper rounded-[20px] data-[open=true]:border-primary",
                title: "text-accordion-content font-normal text-lg ",
                trigger: "!px-6 !py-4 data-[open=true]:bg-primary rounded-[20px]",
                content: "!py-4 !px-9 bg-shopping-cart !my-1 text-base !text-text-info !font-normal rounded-[20px]"
            }}
        >
            <AccordionItem key="1" aria-label="Accordion 1" title="Gorem ipsum dolor sit amet, consectetuing elit."
                indicator={({ isOpen }) => (isOpen ? <ChevronUp color="#ffffff" /> : <ChevronDown color="#4B4B4B" />)}
            >
                {defaultContent}
            </AccordionItem>
        </Accordion>
    )
}

export default FaqAccordion;