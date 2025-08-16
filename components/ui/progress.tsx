"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"



function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { value: number }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative  w-full overflow-hidden rounded-full bg-primary/20 my-1",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-[#37ED58] h-full transition-all flex items-center justify-center text-xs font-semibold text-white"
        style={{
          width: `${value}`, 
        }}
      >
        <span className="z-10 text-green-900 font-bold">{value}%</span>
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  )
}

export { Progress }
