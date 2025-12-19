import CountSection from "./CountSection";
import StartShopping from "./StartShopping";

const StartShoppingSection = () => {
  return (
    <div className="flex flex-col gap-28">
      <CountSection className="self-end"/>
      <StartShopping />
    </div>
  );
};

export default StartShoppingSection;
