"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <div className="mt-18 md:mt-14">
        <div className="flex justify-between text-sm font-medium text-gray-800">
            <p>Target</p>
            <p>{value}</p>
        </div>
        <ProgressPrimitive.Root
        data-slot="progress"
        className={cn(
            "bg-primary/20 relative h-3 w-full overflow-hidden rounded-full",
            className
        )}
        {...props}
        >
        <ProgressPrimitive.Indicator
            data-slot="progress-indicator"
            className="bg-[#37ED58] h-full w-full flex-1 transition-all"
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
        </ProgressPrimitive.Root>    
    </div>
    
  )
}

export { Progress }
