import { PUBLIC_IMAGES } from "@/assets";
import ManageCardsCard from "@/components/ui/Cards/ProfileCards/ManageCardsCard";
import AddNewCardSection from "./AddNewCardSection";

const ManageCard = () => {
  return (
    <section className="w-full">
      <ManageCardsCard
        logo={PUBLIC_IMAGES.PaypalLogo}
        buttonLabel="Link Account"
        buttonClassName="text-secondary border-secondary"
      />
      <ManageCardsCard
        logo={PUBLIC_IMAGES.VisaLogo}
        cardNumber="**** **** **** 2574"
        buttonLabel="Delete"
        buttonClassName="text-danger border-danger"
      />
      <AddNewCardSection/>
    </section>
  );
};

export default ManageCard;
