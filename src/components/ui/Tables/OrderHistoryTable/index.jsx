"use client"
import { Icons } from "@/assets";
import { ORDER_HISTORY_TABLE_HEADER } from "@/constants";
import SingleImageCard from "../../Cards/SingleImageCard";
import TableWrapper from "../components/TableWrapper";

const OrderHistoryTable = () => {
    return (
        <TableWrapper>
            <tbody className="border-x border-b border-secondary rounded-b-2xl !w-full">
                <tr className="text-product-text-info">
                    <td className="!py-4 !px-6 text-left font-normal text-lg">25477888</td>

                    {/* Payment */}
                    <td className="!py-4 !px-6 text-left font-normal text-lg">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <Icons.CardIcon size={18} />
                                Credit Card
                            </div>
                            <span className="text-sm text-product-text-base font-medium">**** **** **** 2547</span>
                        </div>
                    </td>

                    <td className="!py-4 !px-6 text-left font-normal text-lg">#91021547</td>
                    <td className="!py-4 !px-6 text-left font-normal text-lg">24 April 2025</td>
                </tr>

                {/* PRODUCT ROW (FULL WIDTH) */}
                <tr>
                    <td colSpan={4} className="!px-6 !py-4">
                        <div className="w-full !py-3.5 !px-7 border-1 border-image-wrapper bg-shopping-cart rounded-2xl flex justify-start items-start">
                            <SingleImageCard className={"h-36 w-44 bg-white"} imageWrapperClass={"h-32"} imageClass={"h-32"} />

                            <div className="flex-1">
                                <p className="font-medium">
                                    adidas Terrex AX4 Mid Gore-TEX Hiking Shoes Women’s, Black, Size 8
                                </p>
                                <p className="text-gray-500 text-sm">
                                    Vorem ipsum dolor sit amet, consectetur adipiscing.
                                </p>
                            </div>

                            <span className="font-semibold text-lg">$20.00</span>
                            <Icons.ChevronRight size={22} />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan={4} className="!px-6 !py-4">
                        <div className="flex justify-between items-center relative">
                            <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full text-yellow-700">
                                {/* <Icons.Truck size={16} /> */}
                                On The Way
                            </div>

                            <div className="flex gap-4 absolute w-fit right-4">
                                <button className="border border-gray-400 rounded-full px-6 py-2 text-gray-800">
                                    Track
                                </button>

                                <button className="bg-primary rounded-full px-6 py-2 text-white">
                                    Download Invoice
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </TableWrapper>
    );
};

export default OrderHistoryTable;
