import OrderItemsSection from "@/components/track/OrderItemsSection";
import TrackingSection from "@/components/track/TrackingSection";

const TrackPage = () => {
  return (
    <section className="container section_padding ">
      <TrackingSection />
      <OrderItemsSection />
    </section>
  );
};

export default TrackPage;
