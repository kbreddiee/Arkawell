"use client"

import { useState, useEffect } from "react"
import { 
  BarChart3, 
  CheckCircle, 
  PowerOff, 
  Clock, 
  AlertTriangle,
  CreditCard,
  Monitor,
  MapPin,
  Palette
} from "lucide-react"
import BusinessDirectoryPreview from "./business-directory-preview"

export default function DashboardPreview() {
  const [currentApp, setCurrentApp] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentApp((prev) => (prev + 1) % 2) // Rotate between 2 apps
    }, 6000) // Change every 6 seconds
    
    return () => clearInterval(interval)
  }, [])

  // Show Business Directory app
  if (currentApp === 1) {
    return <BusinessDirectoryPreview />
  }

  // Show Analytics Dashboard app (default)
  return (
    <div className="h-full w-full bg-black text-white overflow-auto">
      {/* Header */}
      <div className="bg-[#1a1a1a] border-b border-[#333333] p-3 md:p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-7 h-7 bg-[#ffd700] rounded-lg flex items-center justify-center mr-2">
              <span className="text-black text-sm font-bold">A</span>
            </div>
            <span className="text-base md:text-lg font-bold">Acme Corp</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#2a2a2a]">
              <AlertTriangle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-3 md:p-4 space-y-4">
        {/* Page Header */}
        <div className="bg-[#1a1a1a] border border-[#333333] rounded-2xl p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
              <p className="text-xs md:text-sm text-gray-400 mt-1">
                Overview of business performance and analytics
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-[#2a2a2a] rounded-lg text-xs flex items-center gap-1">
                <span>Refresh</span>
              </button>
              <button className="px-3 py-1.5 bg-[#ffd700] text-black rounded-lg text-xs font-semibold flex items-center gap-1">
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="bg-[#1a1a1a] border border-[#333333] rounded-2xl p-4">
            <h3 className="text-sm md:text-base font-semibold mb-3">Today</h3>
            <div className="space-y-2 text-xs md:text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Revenue:</span>
                <span className="text-[#00d4aa] font-semibold">$2,450</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Expenses:</span>
                <span className="text-[#ff4757] font-semibold">$1,830</span>
              </div>
              <div className="border-t border-[#333333] pt-2 flex justify-between">
                <span className="text-gray-400">Net:</span>
                <span className="text-[#a855f7] font-semibold">$620</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#333333] rounded-2xl p-4">
            <h3 className="text-sm md:text-base font-semibold mb-3">This Week</h3>
            <div className="space-y-2 text-xs md:text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Revenue:</span>
                <span className="text-[#00d4aa] font-semibold">$15,240</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Expenses:</span>
                <span className="text-[#ff4757] font-semibold">$8,950</span>
              </div>
              <div className="border-t border-[#333333] pt-2 flex justify-between">
                <span className="text-gray-400">Net:</span>
                <span className="text-[#a855f7] font-semibold">$6,290</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#333333] rounded-2xl p-4">
            <h3 className="text-sm md:text-base font-semibold mb-3">This Month</h3>
            <div className="space-y-2 text-xs md:text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Revenue:</span>
                <span className="text-[#00d4aa] font-semibold">$68,420</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Expenses:</span>
                <span className="text-[#ff4757] font-semibold">$42,180</span>
              </div>
              <div className="border-t border-[#333333] pt-2 flex justify-between">
                <span className="text-gray-400">Net:</span>
                <span className="text-[#a855f7] font-semibold">$26,240</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-[#1a1a1a] border border-[#333333] rounded-2xl p-4 hover:border-[#ffd700] transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-[#00d4aa] rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-black" />
              </div>
              <span className="text-2xl font-bold">24</span>
            </div>
            <h3 className="text-xs md:text-sm font-medium text-gray-400">Active Users</h3>
          </div>

          <div className="bg-[#1a1a1a] border border-[#333333] rounded-2xl p-4 hover:border-[#ffd700] transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-gray-600 rounded-xl flex items-center justify-center">
                <PowerOff className="w-5 h-5 text-black" />
              </div>
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xs md:text-sm font-medium text-gray-400">Inactive</h3>
          </div>

          <div className="bg-[#1a1a1a] border border-[#333333] rounded-2xl p-4 hover:border-[#ffd700] transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-[#ff6b35] rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-black" />
              </div>
              <span className="text-2xl font-bold">7</span>
            </div>
            <h3 className="text-xs md:text-sm font-medium text-gray-400">Pending Tasks</h3>
          </div>

          <div className="bg-[#1a1a1a] border border-[#333333] rounded-2xl p-4 hover:border-[#ffd700] transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-[#ff4757] rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xs md:text-sm font-medium text-gray-400">Alerts</h3>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-[#1a1a1a] border border-[#333333] rounded-2xl p-4">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-[#a855f7] rounded-lg flex items-center justify-center mr-3">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-base md:text-lg font-bold">Performance Overview</h2>
          </div>
          <div className="h-32 md:h-48 bg-[#0a0a0a] rounded-xl flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-600 mx-auto mb-2" />
              <p className="text-xs text-gray-500">Chart visualization</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#1a1a1a] border border-[#333333] rounded-2xl p-4">
          <h3 className="text-base md:text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[#2a2a2a] rounded-xl p-3 text-center hover:bg-[#333333] cursor-pointer transition-all">
              <div className="w-10 h-10 bg-[#ff6b35] rounded-xl flex items-center justify-center mx-auto mb-2">
                <CreditCard className="w-5 h-5 text-black" />
              </div>
              <h4 className="text-xs font-medium">Invoices</h4>
              <p className="text-[10px] text-gray-500 mt-1">5 pending</p>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-3 text-center hover:bg-[#333333] cursor-pointer transition-all">
              <div className="w-10 h-10 bg-[#a855f7] rounded-xl flex items-center justify-center mx-auto mb-2">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xs font-medium">Projects</h4>
              <p className="text-[10px] text-gray-500 mt-1">12 active</p>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-3 text-center hover:bg-[#333333] cursor-pointer transition-all">
              <div className="w-10 h-10 bg-[#00d4aa] rounded-xl flex items-center justify-center mx-auto mb-2">
                <MapPin className="w-5 h-5 text-black" />
              </div>
              <h4 className="text-xs font-medium">Reports</h4>
              <p className="text-[10px] text-gray-500 mt-1">View all</p>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-3 text-center hover:bg-[#333333] cursor-pointer transition-all">
              <div className="w-10 h-10 bg-[#ffd700] rounded-xl flex items-center justify-center mx-auto mb-2">
                <Palette className="w-5 h-5 text-black" />
              </div>
              <h4 className="text-xs font-medium">Settings</h4>
              <p className="text-[10px] text-gray-500 mt-1">Configure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

