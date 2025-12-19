"use client"
import { Accordion, AccordionItem } from "@heroui/react";
import ProductFilterTypeGroup from "./ProductFilterTypeGroup";

const ProductFilterAccordion = () => {
    return (
        <Accordion>
            <AccordionItem title="Category" aria-label="Category">
                <ProductFilterTypeGroup/>
            </AccordionItem>
        </Accordion>
    )
}

export default ProductFilterAccordion;