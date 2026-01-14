import { Checkbox, CheckboxGroup } from "@heroui/react";

const ProductFilterTypeGroup = ({ options, renderLabel, orientation="horizontal" }) => {
  return (
    <div className="w-full">
      <CheckboxGroup
        color="warning"
        classNames={{ trigger: "!pb-2" }}
         orientation={orientation}
      >
        {options.map((option) => (
          <Checkbox
            key={option.value}
            value={option.value}
            className="gap-2 text-checkbox-text text-xs lg:text-base flex items-center"
          >
            {renderLabel ? renderLabel(option) : option.label}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
};

export default ProductFilterTypeGroup;
