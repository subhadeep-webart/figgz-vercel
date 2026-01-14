import BankDetailsContainer from "@/components/vendors/Earnings/BankDetailsContainer";
import EarningsGraphContainer from "@/components/vendors/Earnings/EarningsGraphContainer";
import MyInvoiceContainer from "@/components/vendors/Earnings/MyInvoiceContainer";
import PayoutDetailsContainer from "@/components/vendors/Earnings/PayoutDetailsContainer";
import TransactionsContainer from "@/components/vendors/Earnings/TransactionsContainer";

const EarningPage = () => {
  return (
    <section className="w-full flex flex-col gap-5 section_padding">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
        <TransactionsContainer />
        </div>
        <div className="col-span-9">
        <BankDetailsContainer />
        </div>
      </div>
      <PayoutDetailsContainer />
      <EarningsGraphContainer/>
      <MyInvoiceContainer/>
    </section>
  );
};

export default EarningPage;
