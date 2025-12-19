"use client"
import CustomButton from "@/components/ui/Buttons/CustomButton";
import ContactUsForm from "@/components/ui/forms/contact/ContactUsForm";
import { Checkbox } from "@heroui/react";

const ContactFormSection = () => {
  return (
    <div className="w-full max-h-[702px] h-full bg-order-table-header rounded-2xl !px-16 !py-11 flex flex-col gap-14">
      <div>
        <h1 className="font-semibold text-[32px] text-foreground">
          Contact Us
        </h1>
        <p className="font-medium text-base yexy-text-contact-us">
          Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <ContactUsForm />
      <div className="flex justify-between items-center">
        <Checkbox defaultSelected classNames={{base:"gap-2"}}>I agree to the Privacy Policy</Checkbox>
        <CustomButton className="h-[60px] font-medium text-base text-[#000000] !px-24">Submit</CustomButton>
      </div>
    </div>
  );
};

export default ContactFormSection;
