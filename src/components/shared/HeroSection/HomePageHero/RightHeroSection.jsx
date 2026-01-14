import CustomButton from "@/components/ui/Buttons/CustomButton";

const RightHeroSection = ({background}) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
      className="bg-cover bg-center w-full rounded-3xl flex justify-end items-end md:max-h-[340px] min-h-[340px] h-full">
        <CustomButton className="w-1/3 bg-banner-btn rounded-3xl text-white text-xs h-9 !mr-24 !mb-11">
          Shop now
        </CustomButton>
      </div>
    </>
  );
};

export default RightHeroSection;
