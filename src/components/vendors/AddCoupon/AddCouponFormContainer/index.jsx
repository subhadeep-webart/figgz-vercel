import AddCouponFormOne from "./AddCouponFormOne";
import AddCouponFormTwo from "./AddCouponFormTwo";


const AddCouponFormContainer=()=>{
    return(
        <div className="flex gap-6">
            <div className="w-[65%]">
            <AddCouponFormOne/>
            </div>
             <div className="w-[35%]">
            <AddCouponFormTwo/>
            </div>
        </div>
    )
};

export default AddCouponFormContainer;