"use client"
import { Icons } from "@/assets";
import OrderTableHeader from "../components/OrderTableHeader";
import TableWrapper from "../components/TableWrapper";
import CustomChip from "../../CustomChip";
import { ORDER_CONFIRMED_HISTORY_TABLE_HEADER } from "@/constants";
import CustomButton from "../../Buttons/CustomButton";
import { useRouter } from "next/navigation";

const OrderConfirmedHistoryTable = () => {
   const router = useRouter();
    const handleInvoice = () => {
      router.push("/en/invoice");
    };
  return (
    <TableWrapper>
      <OrderTableHeader
        tableHeader={ORDER_CONFIRMED_HISTORY_TABLE_HEADER}
        className="text-white text-lg"
        bgClassName="bg-secondary"
      />
      <tbody>
        <tr className="text-product-text-info [&>td]:!py-4 [&>td]:!px-6 [&>td]:text-left [&>td]:font-semibold [&>td]:text-lg bg-delivery-address">
          <td>#8745478</td>

          <td>
           Credit Card  
          </td>
          <td>#91021547</td>
          <td>24 April 2025</td>
          <td>
            <div className="!mt-[-54px]">
            <CustomButton
              className="!px-9 h-14 text-[#000000] font-medium text-base"
              clickHandler={handleInvoice}
            >
              <span className="underline">Download Invoice</span>
            </CustomButton>
            </div>
          </td>
        </tr>
      </tbody>
    </TableWrapper>
  );
};

export default OrderConfirmedHistoryTable;
