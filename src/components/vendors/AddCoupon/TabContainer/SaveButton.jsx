const { default: CustomButton } = require("@/components/ui/Buttons/CustomButton");

const SaveButton=()=>{
    return(
        <div className="flex justify-end !my-10">
        <CustomButton
          className="bg-primary text-foreground text-sm md:text-lg font-medium w-52 !py-3.5"
          
         >
           Save & Submit
        </CustomButton>
       </div>
    )
};

export default SaveButton;



