"use client"

import { useState } from "react"
import { Icons } from "@/assets"
import { Button, cn } from "@heroui/react"

const QuantityIncDscButton = ({ className = "" }) => {
    const [count, setCount] = useState(1);

    const decrease = () => setCount(prev => (prev > 1 ? prev - 1 : 1));
    const increase = () => setCount(prev => prev + 1);

    return (
        <div className={cn("flex items-center justify-center gap-2 border border-image-wrapper rounded-full px-3 py-1 max-w-32 w-full min-h-10 h-10", className)}>
            <Button
                isIconOnly
                variant="light"
                radius="full"
                size="sm"
                onPress={decrease}
                className="min-w-0"
            >
                <Icons.Minus className="w-4 h-4" />
            </Button>
            <span className="w-6 text-center text-sm font-medium">{count}</span>
            <Button
                isIconOnly
                variant="light"
                radius="full"
                size="sm"
                onPress={increase}
                className="min-w-0"
            >
                <Icons.Plus />
            </Button>
        </div>
    )
}

export default QuantityIncDscButton