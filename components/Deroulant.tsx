"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface CollapsibleSectionProps {
    title: string
    children: React.ReactNode
    defaultOpen?: boolean
    className?: string
    titleClassName?: string
    contentClassName?: string
}

export function Deroulant({
                                       title,
                                       children,
                                       defaultOpen = false,
                                       className,
                                       titleClassName,
                                       contentClassName,
                                   }: CollapsibleSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <div className={cn("border rounded-lg overflow-hidden", className)}>
            <div
                className={cn(
                    "flex items-center justify-between p-4 cursor-pointer bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-colors",
                    titleClassName,
                )}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="font-medium text-blue-800">{title}</h3>
                <ChevronDown
                    className={cn("h-5 w-5 text-blue-600 transition-transform duration-200", isOpen && "transform rotate-180")}
                />
            </div>
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0",
                )}
            >
                <div className={cn("p-4 bg-white", contentClassName)}>{children}</div>
            </div>
        </div>
    )
}
