import AddProductHeader from "@/components/vendors/AddProduct/AddProductHeader";
import SaveButton from "@/components/vendors/AddProduct/AddProductTabForm/SaveButton";

const AddProductLayout = ({ children }) => {
  return (
    <section className="w-full section_padding">
      <AddProductHeader />

      {children}
      <SaveButton />
    </section>
  );
};

export default AddProductLayout;
