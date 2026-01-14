"use client";

import { useState } from "react";
import { Slider } from "@heroui/react";

const PriceRangeSlider = () => {
  const [priceRange, setPriceRange] = useState([100, 500]);

  return (
    <div className="!py-2 px-2">
      <div className="flex justify-between text-sm font-medium !mb-2">
        <span>{priceRange[0]}</span>
        <span>{priceRange[1]}</span>
      </div>

      <Slider
        defaultValue={priceRange}
        minValue={0}
        maxValue={2000}
        step={50}
        size="sm"
        onChange={(value) => setPriceRange(value)}
      ></Slider>
    </div>
  );
};

export default PriceRangeSlider;
