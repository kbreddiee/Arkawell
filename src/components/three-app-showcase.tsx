"use client"

import DashboardPreview from "./dashboard-preview-standalone"
import BusinessDirectoryPreview from "./business-directory-preview"
import WarehousePreview from "./warehouse-preview"

interface ThreeAppShowcaseProps {
  activeApp: number
}

export default function ThreeAppShowcase({ activeApp }: ThreeAppShowcaseProps) {
  return (
    <div className="h-full w-full bg-white overflow-hidden">
      {activeApp === 0 && <DashboardPreview />}
      {activeApp === 1 && <BusinessDirectoryPreview />}
      {activeApp === 2 && <WarehousePreview />}
    </div>
  )
}

