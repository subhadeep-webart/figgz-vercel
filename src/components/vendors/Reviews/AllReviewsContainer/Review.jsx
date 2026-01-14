import { Icons } from "@/assets";

const Review = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex gap-2.5">
        <Icons.StarsRatingIcon />
        <span className="text-sm text-medium-gray font-normal">10.06.2025</span>
      </div>
      <p className="text-sm font-normal text=-sidebar-lucide">
        Vivamus efficitur fermentum quam, eu aliquet diam tincidunt at. Integer
        aliquam euismod ipsum sit amet suscipit. Nullam posuere tincidunt leo.
        Etiam faucibus maximus mollis. Morbi scelerisque ante sed magna
        pulvinar, vitae mattis lorem rhoncus.
      </p>
      <span  className="text-sm font-semibold text=-sidebar-lucide">Smith Doe</span>
    </div>
  );
};

export default Review;
