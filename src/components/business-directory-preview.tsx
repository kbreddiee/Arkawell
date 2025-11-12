"use client"

import { Search, Menu, ChevronDown, Filter } from "lucide-react"

export default function BusinessDirectoryPreview() {
  return (
    <div className="h-full w-full bg-gray-100 overflow-hidden">
      {/* Top Header with Logo */}
      <div className="bg-white border-b border-gray-200 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 text-white rounded flex items-center justify-center font-bold text-sm">
              BD
            </div>
            <div>
              <div className="font-semibold text-xs text-gray-900">Business Directory</div>
              <div className="text-[10px] text-gray-500">CRM System</div>
            </div>
          </div>
          <Menu className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-3 md:p-4">
        {/* Stats Header */}
        <div className="bg-white rounded-lg shadow-sm border mb-4 p-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-base md:text-lg font-semibold text-gray-900">Leads Dashboard</h1>
              <div className="flex items-center gap-2 mt-1 text-xs">
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">21,967 Total</span>
                <span className="text-gray-600">Page 1 of 1,099</span>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs">Export</button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">147</div>
              <div className="text-[10px] text-gray-500">Hot Leads</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">523</div>
              <div className="text-[10px] text-gray-500">Contacted</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">89</div>
              <div className="text-[10px] text-gray-500">Converted</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">12</div>
              <div className="text-[10px] text-gray-500">Pending</div>
            </div>
          </div>
        </div>

        {/* Compact Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm border mb-3 p-2 sm:p-3">
          <div className="space-y-2">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full px-2 py-1.5 border border-gray-300 rounded text-xs"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <select className="px-2 py-1.5 border border-gray-300 rounded text-xs">
                <option>Category</option>
              </select>
              <select className="px-2 py-1.5 border border-gray-300 rounded text-xs">
                <option>Location</option>
              </select>
              <button className="bg-blue-600 text-white px-2 py-1.5 rounded text-xs font-medium col-span-2 sm:col-span-1">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Data Table - Responsive Cards on Mobile */}
        <div className="space-y-3">
          {/* Mobile: Card View */}
          <div className="sm:hidden space-y-2">
            {[
              { name: "Professional Caterers", rating: "4.9", category: "Catering", menu: ["✓", "✓"], sample: true, status: "Interested", quality: "Hot" },
              { name: "Biryani House", rating: "4.1", category: "Restaurant", menu: ["✗", "✗"], sample: false, status: "Not Called", quality: "Cold" },
              { name: "Coffee Street", rating: "4.8", category: "Cafe", menu: ["✗", "✗"], sample: false, status: "Switch Off", quality: "Warm" },
            ].map((biz, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start gap-2 flex-1">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-semibold text-[10px]">
                      {biz.name.substring(0, 2)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-xs flex items-center gap-1">
                        {biz.name}
                        <span className="text-yellow-400">★</span>
                        <span className="text-[10px] text-gray-600">{biz.rating}</span>
                      </div>
                      <div className="text-[10px] text-gray-500">{biz.category}</div>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-medium ${
                    biz.quality === 'Hot' ? 'bg-red-100 text-red-700' :
                    biz.quality === 'Warm' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {biz.quality}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div>
                    <span className="text-gray-500">Menu:</span> 🍗{biz.menu[0]} 🐟{biz.menu[1]}
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span> {biz.status}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Table View */}
          <div className="hidden sm:block bg-white rounded-lg shadow-sm border overflow-hidden">
            <table className="min-w-full text-[10px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 py-2 text-left text-gray-500 uppercase text-[9px]">Business</th>
                  <th className="px-2 py-2 text-left text-gray-500 uppercase text-[9px]">Menu</th>
                  <th className="px-2 py-2 text-left text-gray-500 uppercase text-[9px]">Status</th>
                  <th className="px-2 py-2 text-left text-gray-500 uppercase text-[9px]">Quality</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Professional Caterers", rating: "4.9", category: "Catering", menu: ["✓", "✓"], sample: true, status: "Interested", quality: "Hot" },
                  { name: "Biryani House", rating: "4.1", category: "Restaurant", menu: ["✗", "✗"], sample: false, status: "Not Called", quality: "Cold" },
                  { name: "Coffee Street", rating: "4.8", category: "Cafe", menu: ["✗", "✗"], sample: false, status: "Switch Off", quality: "Warm" },
                ].map((biz, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-2 py-2">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-semibold text-[9px]">
                          {biz.name.substring(0, 2)}
                        </div>
                        <div>
                          <div className="font-medium text-[10px] flex items-center gap-1">
                            {biz.name}
                            <span className="text-yellow-400">★</span>
                            <span className="text-[9px] text-gray-600">{biz.rating}</span>
                          </div>
                          <div className="text-[9px] text-gray-500">{biz.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="text-[9px]">🍗{biz.menu[0]} 🐟{biz.menu[1]}</div>
                    </td>
                    <td className="px-2 py-2">
                      <span className="text-[9px] text-gray-700">{biz.status}</span>
                    </td>
                    <td className="px-2 py-2">
                      <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-medium ${
                        biz.quality === 'Hot' ? 'bg-red-100 text-red-700' :
                        biz.quality === 'Warm' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {biz.quality}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-xs text-gray-600">
          <div>Showing 1 to 20 of 21,967 results</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">3</button>
          </div>
        </div>
      </div>
    </div>
  )
}

