"use client";

import { notFound, usePathname } from "next/navigation";
import { VENDOR_AUTH_FORM_STEP } from "@/constants/vendor_constant";
import { removeLocale } from "@/utils/helper/app_helper";

const StepUpPage = () => {
    const pathname = usePathname();
    const normalizedPath = removeLocale(pathname);

    const step = VENDOR_AUTH_FORM_STEP.find(
        item => item.href === normalizedPath
    );

    if (!step) {
        notFound();
    }

    const StepComponent = step.Component;

    return <StepComponent />;
};

export default StepUpPage;
