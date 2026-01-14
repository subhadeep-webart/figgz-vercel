import { Icons } from "@/assets";

const ReviewRatings = () => {
  return (
    <div>
      <h4 className="text-base font-normal text-sidebar-lucide mb-2.5">
        Average Rating
      </h4>
      <div className="flex flex-col gap-1">
        <span className="font-medium text-2xl text-avatar-heading flex items-center gap-2.5">
          5.5K <Icons.StarsRatingIcon />
        </span>
        <p className="text-sm font-normal text-sidebar-lucide">
          Growth in reviews in this year
        </p>
      </div>
    </div>
  );
};

export default ReviewRatings;
