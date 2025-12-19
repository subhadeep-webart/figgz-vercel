"use client"

import { Chip, cn } from "@heroui/react"

const CustomChip = ({ className, variant = "solid", children }) => {
    return (
        <Chip
            className={cn("!px-8 h-9 bg-transparent", className)}
        >
            {children}
        </Chip>
    )
}

export default CustomChip