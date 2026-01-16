"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import ProductFilterTypeGroup from "./ProductFilterTypeGroup";
import { Icons } from "@/assets";
import PriceRangeSlider from "./PriceRangeSlider";

const ProductFilterAccordion = () => {
  const catagories = [
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
    { value: "kids", label: "Kids" },
    { value: "sports", label: "Sports" },
    { value: "casual", label: "Casual" },
  ];

  const ratings = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];
  const colors = [
    { value: "brown", label: "Brown" },
    { value: "gold", label: "Gold" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "yellow", label: "Yellow" },
  ];

  const sizes = [
    { value: "45", label: "45" },
    { value: "44", label: "44" },
    { value: "43", label: "43" },
    { value: "42", label: "42" },
    { value: "41", label: "41" },
    { value: "40", label: "40" },
    { value: "39", label: "39" },
  ];
  return (
   <Accordion defaultExpandedKeys={["category", "price", "rating", "color", "size"]}>
      <AccordionItem
      key="category"
        title="Category"
        aria-label="Category"
        className="!py-4"
        classNames={{
          title: ["font-semibold text-xs lg:text-base"],
        }}
      >
        <ProductFilterTypeGroup options={catagories} orientation="vertical" />
      </AccordionItem>
      <AccordionItem
        key="price"
        title="Price"
        aria-label="Price"
        className="!py-4"
        classNames={{
          title: ["font-semibold text-xs lg:text-base"],
        }}
      >
        <PriceRangeSlider />
      </AccordionItem>
      <AccordionItem
        key="rating"
        title="Product Rating"
        aria-label="Product Rating"
        className="!py-4"
        classNames={{
          title: ["font-semibold text-xs lg:text-base"],
        }}
      >
        <ProductFilterTypeGroup
          options={ratings}
          renderLabel={(option) => (
            <div className="flex items-center gap-1">
              <span>{option.value}</span>
              {/* {Array.from({ length: Number(option.value) }).map((_, i) => (
                <Icons.Star key={i} fill="#F48B22" color="#F48B22" />
              ))} */}
              <Icons.Star fill="#F48B22" color="#F48B22" />
            </div>
          )}
        />
      </AccordionItem>

      <AccordionItem
        key="color"
        title="Color"
        aria-label="Color"
        className="!py-4"
        classNames={{
          title: ["font-semibold text-xs lg:text-base"],
        }}
      >
        <ProductFilterTypeGroup
          options={colors}
          renderLabel={(option) => (
            <div className="flex items-center gap-2">
              <span>{option.label}</span>
              <span
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: option.value }}
              />
            </div>
          )}
        />
      </AccordionItem>
      <AccordionItem
        key="size"
        title="Size"
        aria-label="Size"
        className="!py-4"
        classNames={{
          title: ["font-semibold text-xs lg:text-base"],
        }}
      >
        <ProductFilterTypeGroup
          options={sizes}
          renderLabel={(option) => (
            <div className="flex items-center gap-2">
              <span>{option.label}</span>
            </div>
          )}
        />
      </AccordionItem>
    </Accordion>
  );
};

export default ProductFilterAccordion;
