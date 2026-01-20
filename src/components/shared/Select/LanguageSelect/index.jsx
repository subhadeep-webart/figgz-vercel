"use client";

import { LANGUAGE_LIST } from "@/constants";
import { Select, SelectItem } from "@heroui/react";
import SelectCountryDisplay from "../components/SelectCountryDisplay";

const LanguageSelect = () => {
    return (

        <Select
            items={LANGUAGE_LIST}
            defaultSelectedKeys={["english"]}
            variant="underlined"
            classNames={{
                trigger:
                    "min-h-[36px] h-[36px] w-14 bg-transparent shadow-none hover:!bg-transparent data-[hover=true]:bg-transparent",
                label: "text-black font-semibold text-sm !pb-1",
                listbox: "!px-2 !py-2 bg-transparent",
            }}
            popoverProps={{
                classNames: {
                    base: "w-24",
                    content: "w-24",
                },
            }}
            renderValue={(items) => {
                console.log("Items=====>", items);
                return items.map((item) => (<SelectCountryDisplay key={item.data.key} text={item.data.label}/>))
            }}
        >
            {
                (country) => (
                    <SelectItem
                        key={country.key}
                        value={country.key}
                        textValue={country.label}
                        className="!px-2 !py-2"
                    >
                        <SelectCountryDisplay text={country.label}/>
                    </SelectItem>
                )
            }
        </Select>

    );
};

export default LanguageSelect;
