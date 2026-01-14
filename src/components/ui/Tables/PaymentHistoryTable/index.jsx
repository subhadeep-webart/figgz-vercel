import { PAYMENT_HISTORY_TABLE_HEADER } from "@/constants";
import OrderTableHeader from "../components/OrderTableHeader";
import TableWrapper from "../components/TableWrapper";
import { Icons } from "@/assets";
import CustomChip from "../../CustomChip";

const PaymentHistoryTable = () => {
  return (
    <TableWrapper>
      <OrderTableHeader tableHeader={PAYMENT_HISTORY_TABLE_HEADER} />
      <tbody>
        <tr className="text-product-text-info [&>td]:!py-4 [&>td]:!px-6 [&>td]:text-left [&>td]:font-normal [&>td]:text-lg">
          <td>25477888</td>

          <td>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Icons.CardIcon size={18} />
                Credit Card
              </div>
              <span className="text-sm text-product-text-base font-medium">
                **** **** **** 2547
              </span>
            </div>
          </td>
          <td>$254</td>
          <td>24 April 2025</td>
          <td>
            <CustomChip
              className="text-success border-1 border-success"
              variant="bordered"
            >
              Paid
            </CustomChip>
          </td>
        </tr>
        <tr className="text-product-text-info [&>td]:!py-4 [&>td]:!px-6 [&>td]:text-left [&>td]:font-normal [&>td]:text-lg">
          <td>25477888</td>

          <td>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Icons.PaypalIcon size={18} />
                Paypal
              </div>
              <span className="text-sm text-product-text-base font-medium">
                **** **** **** 2547
              </span>
            </div>
          </td>
          <td>$254</td>
          <td>24 April 2025</td>
          <td>
            <CustomChip
              className="text-danger border-1 border-danger"
              variant="bordered"
            >
              Cancelled
            </CustomChip>
          </td>
        </tr>
        <tr className="text-product-text-info [&>td]:!py-4 [&>td]:!px-6 [&>td]:text-left [&>td]:font-normal [&>td]:text-lg">
          <td>25477888</td>

          <td>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Icons.PaypalIcon size={18} />
                Paypal
              </div>
              <span className="text-sm text-product-text-base font-medium">
                **** **** **** 2547
              </span>
            </div>
          </td>
          <td>$254</td>
          <td>24 April 2025</td>
          <td>
            <CustomChip
              className="text-warning border-1 border-warning"
              variant="bordered"
            >
              Pending
            </CustomChip>
          </td>
        </tr>
        <tr className="text-product-text-info [&>td]:!py-4 [&>td]:!px-6 [&>td]:text-left [&>td]:font-normal [&>td]:text-lg">
          <td>25477888</td>

          <td>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Icons.PaypalIcon size={18} />
                Paypal
              </div>
              <span className="text-sm text-product-text-base font-medium">
                **** **** **** 2547
              </span>
            </div>
          </td>
          <td>$254</td>
          <td>24 April 2025</td>
          <td>
            <CustomChip
              className="text-danger border-1 border-danger"
              variant="bordered"
            >
              Cancelled
            </CustomChip>
          </td>
        </tr>
        <tr className="text-product-text-info [&>td]:!py-4 [&>td]:!px-6 [&>td]:text-left [&>td]:font-normal [&>td]:text-lg">
          <td>25477888</td>

          <td>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Icons.PaypalIcon size={18} />
                Paypal
              </div>
              <span className="text-sm text-product-text-base font-medium">
                **** **** **** 2547
              </span>
            </div>
          </td>
          <td>$254</td>
          <td>24 April 2025</td>
          <td>
            <CustomChip
              className="text-warning border-1 border-warning"
              variant="bordered"
            >
              Pending
            </CustomChip>
          </td>
        </tr>
      </tbody>
    </TableWrapper>
  );
};

export default PaymentHistoryTable;
