import AllReviewsContainer from "@/components/vendors/Reviews/AllReviewsContainer";
import ReviewsHeader from "@/components/vendors/Reviews/ReviewsHeader";
import TotalReviewsContainer from "@/components/vendors/Reviews/TotalReviewsContainer";

const ReviewsPage = () => {
  return (
    <section className="w-full flex flex-col gap-7 section_padding">
      <ReviewsHeader />
      <TotalReviewsContainer/>
      <AllReviewsContainer/>
    </section>
  );
};

export default ReviewsPage;
