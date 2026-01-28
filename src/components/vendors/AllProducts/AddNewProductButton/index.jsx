"use client";
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { useRouter } from "next/navigation";

const AddNewProductButton = () => {
  const router = useRouter();
  const handleNewProduct = () => {
    router.push("/en/vendor/add-product");
  };

  return (
    // <CustomButton className="bg-primary text-raisin text-sm font-normal w-40 !py-2.5" clickHandler={handleNewProduct}>
    //     Add New Product
    // </CustomButton>
    <CustomButton
      className="bg-primary text-raisin text-sm font-normal w-10 min-w-10 md:w-40 md:!py-2.5 flex items-center justify-center"
      clickHandler={handleNewProduct}
    >
      <Icons.Plus className="md:hidden" size={20} />
      <span className="hidden md:inline">Add New Product</span>
    </CustomButton>
  );
};

export default AddNewProductButton;
