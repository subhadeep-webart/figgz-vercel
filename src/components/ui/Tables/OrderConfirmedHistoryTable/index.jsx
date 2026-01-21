"use client";
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
        className="text-white text-lg hidden md:block"
        bgClassName="bg-secondary"
      />
      <thead>
        <tr className="bg-secondary md:hidden">
          <th className="!py-3 text-center font-semibold text-white text-base">
            Order Details
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-product-text-info [&>td]:!py-4 [&>td]:!px-6 [&>td]:text-left [&>td]:font-semibold [&>td]:text-lg bg-delivery-address hidden md:block">
          <td>#8745478</td>

          <td>Credit Card</td>
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

          <tr
          className="
            bg-delivery-address
            text-product-text-info
            font-semibold
            text-lg

            block 
            rounded-lg
            mb-4

            md:hidden
          "
        >
          <td className="block !px-6 !py-3 font-semibold text-product-text-info text-sm text-center">
            <span className="font-normal !mr-3.5">Order ID: </span>
            #8745478
          </td>

          <td className="block !px-6 !py-3 text-product-text-info text-sm text-center">
            <span className="font-normal !mr-3.5">Payment Method: </span>
            Credit Card
          </td>

          <td className="block !px-6 !py-3 text-product-text-info text-sm text-center">
            <span className="font-normal !mr-3.5">Transaction ID: </span>
            #91021547
          </td>

          <td className="block !px-6 !py-3 text-product-text-info text-sm text-center">
            <span className="font-normal !mr-3.5">Date: </span>
            24 April 2025
          </td>

          <td className="block !px-6 !py-4">
            <CustomButton
              className="w-full !px-9 h-10 text-[#000000] font-medium text-xs"
              clickHandler={handleInvoice}
            >
              <span className="">Download Invoice</span>
            </CustomButton>
          </td>
        </tr>
      </tbody>
    </TableWrapper>
  );
};

export default OrderConfirmedHistoryTable;
