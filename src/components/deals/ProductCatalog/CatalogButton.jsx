import CustomButton from "@/components/ui/Buttons/CustomButton";
import { cn } from "@heroui/react";

const CatalogButton = ({ categoryName, isSelected = false }) => {
    return (
        <CustomButton className={cn("w-fit bg-transparent text-deals-catalog-text h-10 border border-deals-catalog font-normal text-xs rounded-4xl !px-5", isSelected && "font-semibold text-secondary border-secondary")}>
            {categoryName}
        </CustomButton>
    )
}

export default CatalogButton;