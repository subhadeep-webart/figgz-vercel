import AddCouponFormOne from "./AddCouponFormOne";
import AddCouponFormTwo from "./AddCouponFormTwo";


const AddCouponFormContainer=()=>{
    return(
        <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-[65%] w-full">
            <AddCouponFormOne/>
            </div>
             <div className="md:w-[35%] w-full">
            <AddCouponFormTwo/>
            </div>
        </div>
    )
};

export default AddCouponFormContainer;