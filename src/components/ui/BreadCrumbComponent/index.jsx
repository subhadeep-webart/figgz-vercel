import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export default function BreadCrumbComponent() {
    return (
        <Breadcrumbs
            itemClasses={{
                separator: "px-1 text-product-text-info",
            }}
            separator="/"
        >
            <BreadcrumbItem className="text-product-text-info">Home</BreadcrumbItem>
            <BreadcrumbItem className="text-product-text-info">Music</BreadcrumbItem>
        </Breadcrumbs>
    );
}
