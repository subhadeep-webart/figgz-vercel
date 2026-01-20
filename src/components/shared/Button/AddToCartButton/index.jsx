import CustomButton from "@/components/ui/Buttons/CustomButton";

const AddToCartButton = () => {
  return (
    <CustomButton
      className="bg-transparent text-secondary font-semibold text-sm border-1 border-secondary min-h-10 h-10 min-w-32 w-32"
      variant="bordered"
    >
      Add To Cart
    </CustomButton>
  );
};

export default AddToCartButton;
