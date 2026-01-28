import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import SelectField from "@/components/ui/Select/SelectField";

const {
  default: VendorDashboardTableWrapper,
} = require("@/components/shared/Wrapper/VendorDashboardTableWrapper");

const PayoutDetailsContainer = () => {
  return (
    <VendorDashboardTableWrapper>
      <div className="flex flex-col gap-2.5">
        <h3 className="font-semibold text-base md:text-xl text-[#000000]">Payout Details</h3>
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between">
          <div className="bg-sidebar-icon-container rounded-xl !p-5 max-w-[440px] w-full flex flex-col md:flex-row gap-2 md:gap-0 md:justify-between">
            <div>
              <h3 className="font-semibold text-sm text-dark-gray !mb-1">
                Amount to be paid
              </h3>
              <span className="font-bold text-xl text-[#000000]">
                $2,565.60
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-dark-gray !mb-1">
                Last With Drawn Payment
              </h3>
              <span className="font-bold text-xl text-[#000000]">
                $1,565.60
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            {" "}
            {/* <CustomButton
              className="bg-primary text-raisin text-sm font-medium w-52 !py-2.5"
            >
              Withdraw Payment <Icons.ChevronDown size={18} />
            </CustomButton> */}
            <SelectField
              placeholder="Withdraw Payment"
              options={[
                { label: "Withdraw via Bank", value: "bank" },
                { label: "Withdraw via PayPal", value: "paypal" },
              ]}
              className=""
              classNames={{
                base: ["w-52 rounded-full"], 
                trigger: [
                  "bg-primary !px-5",
                  "text-raisin",
                  "text-sm font-medium",
                  "!py-2.5",
                  "px-4",
                  "rounded-full",
                  "!shadow-none",
                  "!border-none",
                ],

                value: ["text-raisin text-sm font-medium"], 
                selectorIcon: ["text-raisin"],
              }}
            />
            <span className="font-normal text-sm text-sidebar-lucide">
              Expected payout on : 25 Jan 2025
            </span>
          </div>
        </div>
      </div>
    </VendorDashboardTableWrapper>
  );
};

export default PayoutDetailsContainer;
