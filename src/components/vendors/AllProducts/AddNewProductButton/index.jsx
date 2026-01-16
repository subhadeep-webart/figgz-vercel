"use client"
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { useRouter } from "next/navigation";

const AddNewProductButton = () => {
     const router = useRouter();
      const handleNewProduct = () => {
        router.push("/en/vendor/add-product");
      };
    
    return (
        <CustomButton className="bg-primary text-raisin text-sm font-normal w-40 !py-2.5" clickHandler={handleNewProduct}>
            Add New Product
        </CustomButton>
    )
}

export default AddNewProductButton;