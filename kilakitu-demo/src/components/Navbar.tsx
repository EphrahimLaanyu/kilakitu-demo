"use client";

import { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add a subtle shadow when scrolling down to separate from content
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Ultra-thin, sophisticated Promo Bar */}
      <div className="bg-[#2A0C11] text-[#F5E6E8] text-center py-2 text-[9px] font-bold tracking-[0.2em] uppercase w-full relative z-[60]">
        Complimentary priority shipping on all commercial orders
      </div>

      <header 
        className={`w-full sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/70 backdrop-blur-xl border-b border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]" 
            : "bg-white border-b border-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* MOBILE: Hamburger */}
            <div className="flex-1 md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -ml-2 text-gray-900 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 stroke-[1.5]" />
                ) : (
                  <Menu className="w-5 h-5 stroke-[1.5]" />
                )}
              </button>
            </div>

            {/* LOGO: Sleek, high-contrast typography */}
            <div className="flex-1 md:flex-none flex justify-center md:justify-start z-50">
              <Link href="/" className="flex items-baseline">
                <span className="text-2xl font-extrabold text-gray-900 tracking-tighter">
                  kilakitu
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F2D] ml-0.5 mb-1"></span>
              </Link>
            </div>

            {/* DESKTOP: Centered Navigation */}
            <nav className="hidden md:flex flex-1 justify-center space-x-12">
              {['Tech Products', 'Market Place', 'China Market', 'Journal'].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  className="text-[10px] font-bold tracking-[0.15em] text-gray-500 uppercase hover:text-gray-900 transition-colors relative group py-2"
                >
                  {item}
                  {/* Chic underline hover effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#7A1F2D] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* UTILITIES: Icons with minimalist styling */}
            <div className="flex-1 flex items-center justify-end gap-5 sm:gap-6 z-50">
              <button className="text-gray-900 hover:text-gray-500 transition-colors hidden sm:block">
                <Search className="w-4 h-4 stroke-[1.5]" />
              </button>
              
              <button className="text-gray-900 hover:text-gray-500 transition-colors hidden sm:block">
                <User className="w-4 h-4 stroke-[1.5]" />
              </button>

              <button className="flex items-center gap-1.5 text-gray-900 hover:text-[#7A1F2D] transition-colors group relative">
                <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
                <span className="text-[10px] font-bold tracking-widest">(0)</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE: Full-screen Glassy Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{ paddingTop: '120px' }} // Accounts for header height
      >
        <div className="px-6 flex flex-col h-full">
          {/* Mobile Search */}
          <div className="flex items-center bg-gray-50 rounded-full px-5 py-4 border border-gray-100 mb-10">
            <Search className="w-4 h-4 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search kilakitu..."
              className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-400 text-gray-900"
            />
          </div>

          {/* Huge, Editorial Mobile Links */}
          <nav className="flex flex-col gap-6">
            {['Tech Products', 'Market Place', 'China Market', 'Journal'].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="text-3xl font-medium tracking-tight text-gray-900 flex items-center justify-between group"
              >
                {item}
                <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-[#7A1F2D] group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Mobile Footer Links */}
          <div className="mt-auto pb-12 flex flex-col gap-6 border-t border-gray-200/50 pt-8">
            <button className="flex items-center gap-3 text-xs font-bold tracking-[0.15em] text-gray-500 uppercase">
              <User className="w-4 h-4 stroke-[1.5]" />
              Sign In / Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}