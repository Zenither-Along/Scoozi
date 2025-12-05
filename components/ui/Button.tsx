"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out",
        "rounded-full overflow-hidden",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        // Hover lift effect
        "hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md",
        // Size variants
        {
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },
        // Color variants
        {
          "bg-mocha text-cream hover:bg-mocha-light": variant === "primary",
          "bg-sage text-white hover:bg-sage-dark": variant === "secondary",
          "border-2 border-mocha text-mocha bg-transparent hover:bg-mocha hover:text-cream":
            variant === "outline",
          "text-mocha bg-transparent hover:bg-sand": variant === "ghost",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
