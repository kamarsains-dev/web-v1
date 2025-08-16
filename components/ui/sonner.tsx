"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          // ✅ Success - hijau dengan !important
          success: "!bg-[#E9FFDB] !text-black !border-[#44DA16] !border-2 !rounded-lg ",
          // ✅ Error - merah dengan !important
          error: "!bg-[#FFCDCD] !text-black !border-[#FF4C4C] !border-2 !rounded-lg",
          // ✅ Warning/Info - kuning dengan !important
          warning: "!bg-[#FFF0DB] !text-black !border-[#FF9C38] !border-2 !rounded-lg",
          info: "!bg-[#FFF0DB] !text-black !border-[#FF9C38] !border-2 !rounded-lg",
          // Default
          default: "bg-white text-gray-900 border-gray-200 dark:bg-gray-800 dark:text-white dark:dark:border-gray-700"
        }
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }