"use client";

import { useState } from "react";
import Image from "next/image";
import { Select, SelectItem } from "@heroui/react";

export const countries = [
  { key: "us", label: "United States", flag: "/flags/us.png" },
  { key: "gb", label: "United Kingdom", flag: "/flags/gb.png" },
  { key: "ca", label: "Canada", flag: "/flags/ca.png" },
  { key: "au", label: "Australia", flag: "/flags/au.png" },
  { key: "in", label: "India", flag: "/flags/in.png" },
  { key: "de", label: "Germany", flag: "/flags/de.png" },
  { key: "fr", label: "France", flag: "/flags/fr.png" },
  { key: "jp", label: "Japan", flag: "/flags/jp.png" },
  { key: "br", label: "Brazil", flag: "/flags/br.png" },
];

const LanguageSelect = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div>
      <Select
        value={selectedCountry.key}
        onValueChange={(key) => {
          const country = countries.find((c) => c.key === key);
          if (country) setSelectedCountry(country);
        }}
        items={countries}
        className="w-12"
        classNames={{
          trigger:
            "min-h-[36px] h-[36px] w-12 p-0 rounded-full overflow-hidden shadow-sm hover:shadow-md focus:shadow-md",
          value: "w-full h-full",
        }}
        renderValue={() => (
          <Image
            src={selectedCountry.flag}
            alt={selectedCountry.label}
            width={32}
            height={32}
            className="rounded-full object-cover"
            priority 
          />
        )}
      >
        {countries.map((country) => (
          <SelectItem
            key={country.key}
            value={country.key}
          >
            {country.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default LanguageSelect;
