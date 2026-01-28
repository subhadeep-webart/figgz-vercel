import { cn } from "@heroui/react";

const BannerComponent = ({ children, bgImage, className = "" }) => {
  return (
    <section
      className={cn(
        "relative w-full h-[231px] md:h-[504px] rounded-4xl overflow-hidden bg-cover bg-center flex items-end",
        className,
      )}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </section>
  );
};

const BannerBody = ({ children, className = "" }) => {
  return (
    <div
      className={cn(
        "relative z-10 w-full flex items-center !px-6 md:!px-20 !pb-6 md:!pb-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

BannerComponent.Body = BannerBody;

export default BannerComponent;
