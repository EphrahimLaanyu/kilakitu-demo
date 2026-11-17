import { Search, ShoppingCart, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center border-2 border-red-600">
              <ShoppingCart className="text-red-600 w-5 h-5" />
            </div>
            <span className="font-bold text-2xl text-red-600 tracking-tight">kilakitu<span className="text-xs text-yellow-500 font-normal">.co.ke</span></span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 flex items-center">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-sm text-gray-700 hover:bg-gray-100">
              Categories <ChevronDown className="ml-2 w-4 h-4" />
            </button>
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search Product"
                className="w-full px-4 py-2 border-y border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100">
              <Search className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Cart */}
          <div className="flex items-center">
            <button className="flex items-center gap-2 text-gray-700 hover:text-red-600 font-medium">
              <ShoppingCart className="w-6 h-6 text-red-800" />
              <span>Cart (0)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Maroon Navigation Bar */}
      <div className="bg-[#6B242C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <Link href="#" className="text-white px-3 py-3 text-sm font-medium hover:text-gray-200">Tech Products</Link>
            <Link href="#" className="text-white px-3 py-3 text-sm font-medium hover:text-gray-200">Market Place</Link>
            <Link href="#" className="text-white px-3 py-3 text-sm font-medium hover:text-gray-200">China Market</Link>
            <Link href="#" className="text-white px-3 py-3 text-sm font-medium hover:text-gray-200">Blog</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}