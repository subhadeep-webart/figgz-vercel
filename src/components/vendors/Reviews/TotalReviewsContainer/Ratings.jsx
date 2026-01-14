import { Icons } from "@/assets";
import { cn, Divider } from "@heroui/react";

const Ratings = ({
  rating = 5,
  reviews = "2.0 K",
  starSize = 12,
  starColor = "#C8C5C0",
  dividerWidth = "w-24",
  dividerClassName,
  textClassName,
  className,
}) => {
  return (
    <div className={cn("flex items-center justify-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5">
        <Icons.Star size={starSize} fill={starColor} />
        <span
          className={cn("font-medium text-[10px] text-black", textClassName)}
        >
          {rating}
        </span>
      </div>

      <Divider
        className={cn(
          "bg-transparent border-solid border-3 my-2 border-vendor-success",
          dividerWidth,
          dividerClassName
        )}
      />

      <span className={cn("font-medium text-[10px] text-black", textClassName)}>
        {reviews}
      </span>
    </div>
  );
};

export default Ratings;
