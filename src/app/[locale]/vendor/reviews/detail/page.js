import ReviewDetailsContainer from "@/components/vendors/Reviews/ReviewDetailsContainer";
import ReviewsHeader from "@/components/vendors/Reviews/ReviewsHeader";
import TotalReviewsContainer from "@/components/vendors/Reviews/TotalReviewsContainer";

const ReviewDetailPage = () => {
  return (
    <section className="w-full flex flex-col gap-7 section_padding">
      <ReviewsHeader />
      <TotalReviewsContainer />
      <ReviewDetailsContainer />
    </section>
  );
};

export default ReviewDetailPage;
