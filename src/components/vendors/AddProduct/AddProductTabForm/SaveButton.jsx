import CustomButton from "@/components/ui/Buttons/CustomButton";

const SaveButton=()=>{
    return(
        <div className="flex justify-center !my-10">
        <CustomButton
          className="bg-primary text-foreground text-lg font-medium w-56 !py-3.5"
           href={"#"}
         >
           Save
        </CustomButton>
       </div>
    )
};

export default SaveButton;