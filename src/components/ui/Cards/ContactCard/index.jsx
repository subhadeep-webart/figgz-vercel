import { Icons } from "@/assets";

const ContactCard = ({ keys, value }) => {
  return (
    <div className="flex justify-center items-center relative ">
      <div className="w-[94px] h-[94px] border border-primary rounded-full bg-contact-card-bg flex justify-center items-center absolute left-[-30px] z-10">
        <Icons.Phone fill="#FEA800" />
      </div>
      <div className="min-h-[132px] h-[132px] max-w-[366px] w-full bg-contact-card-bg border border-contact-card-border rounded-lg flex flex-col justify-center items-center">
        <div className="w-full !pl-[60px]">
          <h4 className="font-normal text-lg text-text-otp">{keys}</h4>
          <span className="font-medium text-lg text-contact-us text-center">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
