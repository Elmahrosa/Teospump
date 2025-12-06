"use client"

import { AlertCircle } from "lucide-react"

export function PiApprovalBanner() {
  return (
    <div className="bg-gradient-to-r from-[#7B3FE4] to-[#5B2FA4] text-white py-3 px-4">
      <div className="container mx-auto flex items-center justify-center gap-3 text-center">
        <AlertCircle className="h-5 w-5 flex-shrink-0" />
        <p className="text-sm md:text-base font-semibold">Pi Core Team Approval - Awaiting Review</p>
      </div>
    </div>
  )
}
