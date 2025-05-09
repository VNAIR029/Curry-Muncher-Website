import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
}

const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2 hover:scale-105 active:scale-95"
export const buttonVariants = {
  default: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
  outline:
    "border border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500",
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, variant = "default", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(base, buttonVariants[variant], className)}
      {...props}
    />
  )
})

Button.displayName = "Button"