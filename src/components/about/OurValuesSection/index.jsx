import { PUBLIC_IMAGES } from "@/assets";
import OurValues from "./OurValues";

const OurValuesSection = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${PUBLIC_IMAGES.AboutOurValuesBackground})`,
        }}
        className="bg-cover bg-center h-[394px] w-full rounded-3xl flex justify-end !py-14"
      >
        <div className="flex flex-col justify-start items-center !mr-[100px]">
        <div className="flex flex-col gap-2  w-full h-52">
          <h1 className="text-white font-bold text-4xl">
            Our <span className="text-secondary">Values</span>
          </h1>

          <h2 className="font-medium text-base text-white">
            At the heart of everything we do are these core values
          </h2>
        </div>
        <div>
          <OurValues />
        </div>
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
