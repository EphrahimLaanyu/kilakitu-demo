import { Search, ShoppingCart, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top White Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 gap-8">
          
          {/* Logo - Retained original colors but refined proportions */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center border border-red-200 group-hover:border-red-300 transition-colors">
              <ShoppingCart className="text-red-600 w-4 h-4 stroke-[2]" />
            </div>
            <span className="font-bold text-2xl text-red-600 tracking-tight">
              kilakitu
              <span className="text-[11px] text-yellow-500 font-bold tracking-widest ml-0.5">.co.ke</span>
            </span>
          </Link>

          {/* Search Bar - Flattened and sharpened for a premium feel */}
          <div className="flex-1 max-w-2xl flex items-center border border-gray-300 rounded-sm overflow-hidden focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900 transition-all">
            <button className="flex items-center px-4 py-3 bg-gray-50 text-[11px] font-bold tracking-widest text-gray-500 uppercase border-r border-gray-300 hover:bg-gray-100 transition-colors">
              Categories <ChevronDown className="ml-2 w-3 h-3" />
            </button>
            <div className="relative flex-1 bg-white">
              <input
                type="text"
                placeholder="Search Product..."
                className="w-full px-5 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent"
              />
            </div>
            <button className="px-6 py-3 bg-gray-50 hover:bg-gray-100 transition-colors border-l border-gray-300 flex items-center justify-center">
              <Search className="w-4 h-4 text-gray-600 stroke-[2]" />
            </button>
          </div>

          {/* Cart - Retained red accent but modernized the typography */}
          <div className="flex items-center flex-shrink-0">
            <button className="flex items-center gap-2.5 text-gray-900 hover:text-red-600 transition-colors group">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-red-700 stroke-[1.5]" />
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                  0
                </span>
              </div>
              <span className="text-xs font-bold tracking-widest uppercase">Cart</span>
            </button>
          </div>
          
        </div>
      </div>

      {/* Maroon Navigation Bar - Kept original color, upgraded typography */}
      <div className="bg-[#6B242C]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-10">
            <Link href="#" className="text-white/90 hover:text-white py-3.5 text-[10px] font-bold tracking-widest uppercase transition-colors border-b-2 border-transparent hover:border-white">
              Tech Products
            </Link>
            <Link href="#" className="text-white/70 hover:text-white py-3.5 text-[10px] font-bold tracking-widest uppercase transition-colors border-b-2 border-transparent hover:border-white">
              Market Place
            </Link>
            <Link href="#" className="text-white/70 hover:text-white py-3.5 text-[10px] font-bold tracking-widest uppercase transition-colors border-b-2 border-transparent hover:border-white">
              China Market
            </Link>
            <Link href="#" className="text-white/70 hover:text-white py-3.5 text-[10px] font-bold tracking-widest uppercase transition-colors border-b-2 border-transparent hover:border-white">
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}