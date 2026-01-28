import { Icons } from "@/assets";

const Review = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex flex-row-reverse md:flex-row gap-2.5 justify-between md:justify-normal">
        <Icons.StarsRatingIcon />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text=-sidebar-lucide md:hidden">
            Smith Doe
          </span>
          <span className="text-sm text-medium-gray font-normal">
            10.06.2025
          </span>
        </div>
      </div>
      <p className="text-sm font-normal text=-sidebar-lucide">
        Vivamus efficitur fermentum quam, eu aliquet diam tincidunt at. Integer
        aliquam euismod ipsum sit amet suscipit. Nullam posuere tincidunt leo.
        Etiam faucibus maximus mollis. Morbi scelerisque ante sed magna
        pulvinar, vitae mattis lorem rhoncus.
      </p>
      <span className="text-sm font-semibold text=-sidebar-lucide hidden md:block">
        Smith Doe
      </span>
    </div>
  );
};

export default Review;
