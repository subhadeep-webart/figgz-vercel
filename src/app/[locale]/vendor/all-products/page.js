import VendorSectionHeaderWrapper from "@/components/shared/Wrapper/VendorSectionHeaderWrapper";
import AllProductsHeader from "@/components/vendors/AllProducts/AllProductsHeader";
import AllProductTableContainer from "@/components/vendors/AllProducts/AllProductTableContainer";

const AllProductsPage = () => {
    return (
        <section className="w-full">
            <AllProductsHeader />
            <AllProductTableContainer />
        </section>
    )
}

export default AllProductsPage;