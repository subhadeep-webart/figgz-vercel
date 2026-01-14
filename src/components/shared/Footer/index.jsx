import BottomFooter from "./BottomFooter";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Footer = () => {
  return (
    <footer className="bg-raisin relative z-50">
      <div className="md:max-h-[356px] h-full container !py-8">
        <div className="custom-container grid grid-cols-12 gap-7 md:gap-28 md:max-h-80 h-full">
          <div className="col-span-12 md:col-span-8">
            <LeftSide />
          </div>
          <div className="col-span-12 md:col-span-4">
            <RightSide />
          </div>
        </div>
      </div>
      <BottomFooter />
    </footer>
  );
};

export default Footer;
