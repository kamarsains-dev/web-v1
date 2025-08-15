"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { UseHaptic } from "@/lib/useHaptic"
import Sweep from "./sweep"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-white text-slate-500 border-slate-300 border-2 border-b-4 hover:bg-slate-100 hover:border-b-4 active:border-2 active:border-b-2  active:translate-y-[2px] transition-all duration-100",
        primary: "bg-slate-600 border-slate-800 text-white border-b-4 active:border-b-2 hover:bg-lightblue active:border-b-0  active:translate-y-[2px] transition-all duration-100",
        outline: "bg-white text-blue position-y-2 border-blue border-2 border-b-4 active:border-b-2 hover:bg-[#EDF7FF] hover:border-b-4 active:border-2 active:border-b-2  active:translate-y-[2px] transition-all duration",
        secondary: "bg-green text-white position-y-2 border-darkgreen border-b-4 hover:bg-lightgreen active:border-b-2 active:border-b-0  active:translate-y-[2px] transition-all duration-100",
        tertiary:"bg-[#DAF322] text-[#58690D] position-y-2 border-[#A5C41B] border-b-4 hover:bg-[#E3F93C] active:border-b-2 active:border-b-0  active:translate-y-[2px] transition-all duration-100",
        quaternary:"bg-[#30D2FF] text-[#095491] position-y-2 border-[#1E97D4] border-b-4 hover:bg-[#53DAFF] active:border-b-2 active:border-b-0  active:translate-y-[2px] transition-all duration-100",
        basic:" border border-2 hover:bg-gray-100 bg-background dark:bg-input/30 dark:border-input dark:hover:bg-input/50 transition-none",
        button:"bg-background",
        active:" border border-2 border-gray-700 bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50 transition-none",
        inactive:" bg-background hover:bg-accent grayscale-100 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 transition-none",
        material:"bg-white text-slate-500 position-y-2 border-slate-300 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 hover:border-b-4",
        quinary: "bg-[#375CE3] text-white position-y-2 border-[#213C9E] border-b-4 active:border-b-2 hover:bg-[#2B51DE] hover:border-b-4 active:border-b-0  active:translate-y-[2px] transition-all duration-100",
        quinaryBorder: "bg-white border-2 position-y-2 border-[#213C9E] border-b-4 active:border-b-2  hover:border-b-4 active:border-2 active:border-b-2  active:translate-y-[2px] transition-all duration",
        septenary: "bg-gradient-purple text-[#160B74] position-y-2 border-[#5503B9] border-b-4 active:border-b-2 hover:bg-[#2B51DE] hover:border-b-4 active:border-b-0  active:translate-y-[2px] transition-all duration-100",
        danger: "bg-white text-red-500 position-y-2 border-red-500 border-2 border-b-4 active:border-b-2 hover:bg-red-50 hover:border-b-4 active:border-2 active:border-b-2  active:translate-y-[2px] transition-all duration",

      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  sweep?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, sweep = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const vibrate = UseHaptic(25);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      vibrate()
      if (props.onClick) {
        props.onClick(event)
      }
    }

    return (
      <Comp
        className={cn("relative overflow-hidden", buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {sweep && <Sweep/>}
        {props.children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }