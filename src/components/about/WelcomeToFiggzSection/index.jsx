import CountSection from "./CountSection";
import StartShopping from "./StartShopping";
import StartShoppingSection from "./StartShoppingSection";
import WelcomeSection from "./WelcomeSection";

const WelcomeToFiggzSection = () => {
  return (
    <section className="md:max-h-[585px] h-full">
      <div className="md:hidden flex flex-col gap-8 container">
        {" "}
        <CountSection className="self-end " />
        <WelcomeSection />
        <StartShopping />
      </div>
      <div className="md:grid grid-cols-12 gap-11 hidden">
        <div className="col-span-4">
          <WelcomeSection />
        </div>
        <div className="col-span-8">
          <StartShoppingSection />
        </div>
      </div>
    </section>
  );
};

export default WelcomeToFiggzSection;
