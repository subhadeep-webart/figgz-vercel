import StartShoppingSection from "./StartShoppingSection";
import WelcomeSection from "./WelcomeSection";

const WelcomeToFiggzSection = () => {
  return (
    <section className="max-h-[585px] h-full">
      <div className="grid grid-cols-12 gap-11">
        <div className="col-span-4">
            <WelcomeSection/>
        </div>
        <div className="col-span-8">
            <StartShoppingSection/>
        </div>
      </div>
    </section>
  );
};

export default WelcomeToFiggzSection;
