"use client"
import { Icons } from "@/assets";
import { Radio, RadioGroup } from "@heroui/react";

const PaymnetMethodCheck = () => {
    return (
        <div className="flex flex-col justify-start items-start gap-5">
            <RadioGroup defaultValue="male">
                <Radio value="male" classNames={{ base: "gap-2" }}><div className="flex justify-center items-center text-base text-payment-info gap-1">
                    <Icons.CardIcon />
                    <span>Credit Card</span>
                </div></Radio>
                <Radio value="female" classNames={{ base: "gap-2" }}><div className="flex justify-center items-center text-base text-payment-info gap-1"><Icons.PaypalIcon /><span>Paypal</span></div></Radio>
            </RadioGroup>
        </div>

    )
}

export default PaymnetMethodCheck;