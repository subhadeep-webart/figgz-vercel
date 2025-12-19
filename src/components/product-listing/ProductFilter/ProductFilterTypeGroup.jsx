import { Checkbox, CheckboxGroup } from "@heroui/react";

const ProductFilterTypeGroup = () => {
    return (
        <div className="w-full">
            <CheckboxGroup
                color="warning"
                classNames={{
                    trigger:"!pb-2"
                }}
            >
                <Checkbox value="buenos-aires" className="gap-2 text-checkbox-text text-base">Buenos Airesl</Checkbox>
                <Checkbox value="sydney" className="gap-2 text-checkbox-text text-base">Sydney</Checkbox>
                <Checkbox value="san-francisco" className="gap-2 text-checkbox-text text-base">San Francisco</Checkbox>
            </CheckboxGroup>
        </div>
    )
}

export default ProductFilterTypeGroup;