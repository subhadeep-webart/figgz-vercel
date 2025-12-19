import { ORDER_HISTORY_TABLE_HEADER } from "@/constants";
import OrderTableHeader from "../../Tables/components/OrderTableHeader";
import TableWrapper from "../../Tables/components/TableWrapper";
import SingleImageCard from "../SingleImageCard";
import { cn } from "@heroui/react";
import CustomChip from "../../CustomChip";
import CustomButton from "../../Buttons/CustomButton";
import { Icons } from "@/assets";
const OrderHistoryCard = ({ bgClassName, className }) => {
  return (
    // <TableWrapper>

    //   {/* <OrderTableHeader tableHeader={ORDER_HISTORY_TABLE_HEADER} /> */}
    //   <thead>
    //         <tr className={cn("bg-order-table-header",bgClassName)}>
    //             {tableHeader?.map((tableHeader, index) => (<th className={cn("!py-4 !px-6 text-left font-normal text-lg text-product-text-base", className)} key={`order_table_header-${index + 1}`}>{tableHeader?.headerName}</th>))}
    //         </tr>
    //     </thead>
    //   <tbody className="border-x border-b border-secondary rounded-b-2xl !w-full">

    //     <tr className="text-product-text-info">

    //       <td className="!py-4 !px-6 text-left font-normal text-lg">
    //         25477888
    //       </td>
    //       {/* Payment */}
    //       <td className="!py-4 !px-6 text-left font-normal text-lg">

    //         <div className="flex flex-col">

    //           <div className="flex items-center gap-2">

    //             <Icons.CardIcon size={18} /> Credit Card
    //           </div>
    //           <span className="text-sm text-product-text-base font-medium">
    //             **** **** **** 2547
    //           </span>
    //         </div>
    //       </td>
    //       <td className="!py-4 !px-6 text-left font-normal text-lg">
    //         #91021547
    //       </td>
    //       <td className="!py-4 !px-6 text-left font-normal text-lg">
    //         24 April 2025
    //       </td>
    //     </tr>
    //     {/* PRODUCT ROW (FULL WIDTH) */}
    //     <tr>

    //       <td colSpan={4} className="!px-6 !py-4">

    //         <div className="w-full !py-3.5 !px-7 border-1 border-image-wrapper bg-shopping-cart rounded-2xl flex justify-start items-start">

    //           <SingleImageCard
    //             className={"h-36 w-44 bg-white"}
    //             imageWrapperClass={"h-32"}
    //             imageClass={"h-32"}
    //           />
    //           <div className="flex-1">

    //             <p className="font-medium">

    //               adidas Terrex AX4 Mid Gore-TEX Hiking Shoes Women’s, Black,
    //               Size 8
    //             </p>
    //             <p className="text-gray-500 text-sm">

    //               Vorem ipsum dolor sit amet, consectetur adipiscing.
    //             </p>
    //           </div>
    //           <span className="font-semibold text-lg">$20.00</span>
    //           <Icons.ChevronRight size={22} />
    //         </div>
    //       </td>
    //     </tr>
    //     <tr>

    //       <td colSpan={4} className="!px-6 !py-4">

    //         <div className="flex justify-between items-center relative">

    //           <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full text-yellow-700">

    //             {/* <Icons.Truck size={16} /> */} On The Way
    //           </div>
    //           <div className="flex gap-4 absolute w-fit right-4">

    //             <button className="border border-gray-400 rounded-full px-6 py-2 text-gray-800">

    //               Track
    //             </button>
    //             <button className="bg-primary rounded-full px-6 py-2 text-white">

    //               Download Invoice
    //             </button>
    //           </div>
    //         </div>
    //       </td>
    //     </tr>
    //   </tbody>
    // </TableWrapper>
    <TableWrapper>
      <div className="w-full  rounded-2xl overflow-hidden !mb-9">
        {/* Header - mimicking thead */}
        <div className={cn("bg-order-table-header", bgClassName)}>
          <div className="grid grid-cols-4">
            {ORDER_HISTORY_TABLE_HEADER?.map((header, index) => (
              <div
                key={`order_table_header-${index + 1}`}
                className={cn(
                  "!py-4 !px-6 text-left font-normal text-lg text-product-text-base",
                  className
                )}
              >
                {header?.headerName}
              </div>
            ))}
          </div>
        </div>

        {/* Card Body */}
        <div className="border-x border-b border-secondary rounded-b-2xl bg-white">
          {/* Order Info Row */}
          <div className="grid grid-cols-4 text-product-text-info">
            {/* Order ID */}
            <div className="!py-4 !px-6 text-left font-normal text-lg">
              25477888
            </div>

            {/* Payment Method */}
            <div className="!py-4 !px-6 text-left font-normal text-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Icons.CardIcon size={18} />
                  Credit Card
                </div>
                <span className="text-sm text-product-text-base font-medium">
                  **** **** **** 2547
                </span>
              </div>
            </div>

            {/* Invoice / Reference */}
            <div className="!py-4 !px-6 text-left font-normal text-lg">
              #91021547
            </div>

            {/* Date */}
            <div className="!py-4 !px-6 text-left font-normal text-lg">
              24 April 2025
            </div>
          </div>

          {/* Product Full-Width Row */}
          <div className="!px-9 !py-2.5">
            <div className="w-full !px-8 !py-3.5 border border-image-wrapper bg-shopping-cart rounded-2xl flex items-start justify-between gap-6">
              <SingleImageCard
                className="h-36 w-44 bg-white flex-shrink-0"
                imageWrapperClass="h-32"
                imageClass="h-32"
              />
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <p className="font-medium text-lg text-product-text-base">
                    adidas Terrex AX4 Mid Gore-TEX Hiking Shoes Women’s, Black,
                    Size 8
                  </p>
                  <span className="font-semibold text-lg">$20.00</span>
                </div>

                <div className="flex justify-between">
                  <p className="text-product-text-info text-base mt-1">
                    Vorem ipsum dolor sit amet, consectetur adipiscing.
                  </p>
                  <Icons.ChevronRight size={22} />
                </div>
              </div>
            </div>
          </div>

          {/* Status + Actions Row */}
          <div className="!px-6 !py-4 ">
            <div className="flex justify-between items-center">
              <CustomChip
                className="h-9 border border-border-on-the-way text-border-on-the-way !px-5 "
                variant="bordered"
              >
                <div className="flex items-center justify-center">
                  <Icons.DeliveryParcelIcon size={22} /> On The Way
                </div>
              </CustomChip>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4 !mt-[-26px] !mr-[56px]">
          <CustomChip
            className="h-12 border border-secondary text-secondary !px-14 bg-white"
            variant="bordered"
          >
            Track
          </CustomChip>
          <CustomButton className="!px-9 h-12 text-secondary font-medium text-base">
            <span className="underline">Download Invoice</span>
          </CustomButton>
        </div>
      </div>

      <div className="w-full  rounded-2xl overflow-hidden !mb-9">
        {/* Header - mimicking thead */}
        <div className={cn("bg-order-table-header", bgClassName)}>
          <div className="grid grid-cols-4">
            {ORDER_HISTORY_TABLE_HEADER?.map((header, index) => (
              <div
                key={`order_table_header-${index + 1}`}
                className={cn(
                  "!py-4 !px-6 text-left font-normal text-lg text-product-text-base",
                  className
                )}
              >
                {header?.headerName}
              </div>
            ))}
          </div>
        </div>

        {/* Card Body */}
        <div className="border-x border-b border-secondary rounded-b-2xl bg-white">
          {/* Order Info Row */}
          <div className="grid grid-cols-4 text-product-text-info">
            {/* Order ID */}
            <div className="!py-4 !px-6 text-left font-normal text-lg">
              25477888
            </div>

            {/* Payment Method */}
            <div className="!py-4 !px-6 text-left font-normal text-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Icons.CardIcon size={18} />
                  Credit Card
                </div>
                <span className="text-sm text-product-text-base font-medium">
                  **** **** **** 2547
                </span>
              </div>
            </div>

            {/* Invoice / Reference */}
            <div className="!py-4 !px-6 text-left font-normal text-lg">
              #91021547
            </div>

            {/* Date */}
            <div className="!py-4 !px-6 text-left font-normal text-lg">
              24 April 2025
            </div>
          </div>

          {/* Product Full-Width Row */}
          <div className="!px-9 !py-2.5">
            <div className="w-full !px-8 !py-3.5 border border-image-wrapper bg-shopping-cart rounded-2xl flex items-start justify-between gap-6">
              <SingleImageCard
                className="h-36 w-44 bg-white flex-shrink-0"
                imageWrapperClass="h-32"
                imageClass="h-32"
              />
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <p className="font-medium text-lg text-product-text-base">
                    adidas Terrex AX4 Mid Gore-TEX Hiking Shoes Women’s, Black,
                    Size 8
                  </p>
                  <span className="font-semibold text-lg">$20.00</span>
                </div>

                <div className="flex justify-between">
                  <p className="text-product-text-info text-base mt-1">
                    Vorem ipsum dolor sit amet, consectetur adipiscing.
                  </p>
                  <Icons.ChevronRight size={22} />
                </div>
              </div>
            </div>
          </div>

          {/* Status + Actions Row */}
          <div className="!px-6 !py-4 ">
            <div className="flex justify-between items-center">
              <CustomChip
                className="h-9 border border-border-on-the-way-2 text-border-on-the-way-2 !px-5 "
                variant="bordered"
              >
                <div className="flex items-center justify-center">
                  <Icons.DeliveryParcelIcon size={22} color="#457108"/> On The Way
                </div>
              </CustomChip>
            </div>
          </div>
        </div>
      
      </div>
      </TableWrapper>

  );
};
export default OrderHistoryCard;
