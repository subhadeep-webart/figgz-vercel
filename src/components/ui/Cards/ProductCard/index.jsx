"use client";

import Link from "next/link";
import { cn } from "@heroui/react";

const ProductCard = ({ className = "", children }) => {
  return (
    <Link
      href={"#"}
      className={cn(`inline-block max-w-52 w-full h-[400px]`, className)}
    >
      {children}
    </Link>
  );
};

export default ProductCard;
