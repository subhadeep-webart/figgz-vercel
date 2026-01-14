import AllProductsHeader from "@/components/vendors/AllProducts/AllProductsHeader";
import AllProductTableContainer from "@/components/vendors/AllProducts/AllProductTableContainer";

const AllProductsPage = () => {
  return (
    <section className="w-full flex flex-col gap-8 section_padding">
      <AllProductsHeader />
      <AllProductTableContainer />
    </section>
  );
};

export default AllProductsPage;
