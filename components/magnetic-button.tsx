"use client"

import type React from "react"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "ghost"
  size?: "default" | "lg"
  onClick?: () => void
}

// Flat button per DESIGN.md: 8px radius, 0.15s color/border hover only —
// no scale, bounce, or magnetic drift.
export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  size = "default",
  onClick,
}: MagneticButtonProps) {
  const variants = {
    primary: "bg-[#153B63] text-white border border-transparent hover:bg-[#123354]",
    secondary: "bg-transparent text-foreground border border-border hover:border-muted-foreground",
    ghost: "bg-transparent text-foreground border border-border hover:border-muted-foreground",
  }

  const sizes = {
    default: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  }

  return (
    <button
      onClick={onClick}
      className={`
        rounded-lg font-semibold
        transition-colors duration-150 ease-out
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </button>
  )
}
