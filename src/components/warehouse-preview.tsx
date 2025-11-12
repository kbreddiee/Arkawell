"use client"

import { Package, TrendingUp, AlertCircle, Users } from "lucide-react"

export default function WarehousePreview() {
  return (
    <div className="h-full w-full bg-white overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-3 md:p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center mr-2">
              <Package className="w-4 h-4 text-white" />
            </div>
            <span className="text-base md:text-lg font-bold text-gray-900">Warehouse Pro</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
              <Users className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-3 md:p-4 space-y-4">
        {/* Page Header */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Inventory Dashboard</h1>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                Product warehouse and stock management
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs">Sync</button>
              <button className="px-3 py-1.5 bg-green-500 text-white rounded-lg text-xs font-semibold">Add Product</button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">1,112</span>
            </div>
            <h3 className="text-xs md:text-sm font-medium text-gray-600">Total Products</h3>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">4</span>
            </div>
            <h3 className="text-xs md:text-sm font-medium text-gray-600">Total Bundles</h3>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">0</span>
            </div>
            <h3 className="text-xs md:text-sm font-medium text-gray-600">Transactions Today</h3>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">8</span>
            </div>
            <h3 className="text-xs md:text-sm font-medium text-gray-600">Low Stock Items</h3>
          </div>
        </div>

        {/* Products Table Preview */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-base md:text-lg font-bold text-gray-900">All Products</h2>
            <p className="text-xs text-gray-500 mt-1">Showing 15 of 1,112 products (Page 1 of 75)</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-[10px] font-medium text-gray-500 uppercase">Photo</th>
                  <th className="px-4 py-3 text-left text-[10px] font-medium text-gray-500 uppercase">Product</th>
                  <th className="px-4 py-3 text-left text-[10px] font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-4 py-3 text-left text-[10px] font-medium text-gray-500 uppercase">Stock</th>
                  <th className="px-4 py-3 text-left text-[10px] font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: "Lotus Ashtray", stock: 11, category: "Home", status: "ok" },
                  { name: "Bullet Stylus", stock: 45, category: "Office", status: "ok" },
                  { name: "Air Wonder Walls", stock: 7, category: "Decor", status: "ok" },
                  { name: "Earth Element", stock: 24, category: "Decor", status: "ok" },
                ].map((product, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-900 font-medium">{product.name}</td>
                    <td className="px-4 py-3 text-xs text-gray-600">{product.category}</td>
                    <td className="px-4 py-3 text-xs text-gray-900 font-semibold">{product.stock}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-medium">
                        {product.status.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            <button className="bg-gray-50 hover:bg-gray-100 rounded-xl p-3 text-center transition-all">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Package className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xs font-medium text-gray-900">Add Product</h4>
            </button>

            <button className="bg-gray-50 hover:bg-gray-100 rounded-xl p-3 text-center transition-all">
              <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xs font-medium text-gray-900">Analytics</h4>
            </button>

            <button className="bg-gray-50 hover:bg-gray-100 rounded-xl p-3 text-center transition-all">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <h4 className="text-xs font-medium text-gray-900">Transactions</h4>
            </button>

            <button className="bg-gray-50 hover:bg-gray-100 rounded-xl p-3 text-center transition-all">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xs font-medium text-gray-900">Low Stock</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

