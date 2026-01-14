import AddCouponFormContainer from "@/components/vendors/AddCoupon/AddCouponFormContainer";
import TabContainer from "@/components/vendors/AddCoupon/TabContainer";
import SaveButton from "@/components/vendors/AddCoupon/TabContainer/SaveButton";


const AddCouponLayout=({ children })=> {
  return (
    <section className="w-full flex flex-col gap-10">
      <AddCouponFormContainer />
      <TabContainer />
      {children}
      <SaveButton/>
    </section>
  );
};

export default AddCouponLayout;
