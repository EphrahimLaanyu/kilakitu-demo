import React from 'react';

export default function Page2() {
  const products = [
    {
      id: 1,
      category: "COMMERCIAL",
      name: "Dell Latitude 5420",
      price: "Ksh 42,700",
      rating: 0,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800&bg=white",
    },
    {
      id: 2,
      category: "ENTERPRISE",
      name: "HP EliteBook 840 G6",
      price: "Ksh 37,000",
      rating: 5,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800&bg=white",
    },
    {
      id: 3,
      category: "ULTRABOOK",
      name: "Lenovo ThinkPad X1 Carbon",
      price: "Ksh 43,000",
      rating: 0,
      image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=800&bg=white",
    },
    {
      id: 4,
      category: "BUSINESS",
      name: "Lenovo ThinkPad T460s",
      price: "Ksh 33,000",
      rating: 0,
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=800&bg=white",
    },
    // Duplicated to show the 8-item grid like the reference image
    {
      id: 5,
      category: "ACCESSORIES",
      name: "Dell Pro Wireless Mouse",
      price: "Ksh 2,500",
      rating: 0,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800&bg=white",
    },
    {
      id: 6,
      category: "AUDIO",
      name: "Sony WH-1000XM4",
      price: "Ksh 35,000",
      rating: 0,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800&bg=white",
    },
    {
      id: 7,
      category: "DISPLAYS",
      name: "LG 27\" 4K UHD Monitor",
      price: "Ksh 45,000",
      rating: 0,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800&bg=white",
    },
    {
      id: 8,
      category: "POWER",
      name: "Anker 65W GaN Charger",
      price: "Ksh 4,200",
      rating: 4,
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800&bg=white",
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Nav */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">New Arrivals</h2>
          <div className="flex justify-center items-center gap-8 text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
            <button className="text-gray-900 border-b border-gray-900 pb-1">Laptops</button>
            <button className="hover:text-gray-900 transition-colors pb-1">Desktops</button>
            <button className="hover:text-gray-900 transition-colors pb-1">Audio</button>
            <button className="hover:text-gray-900 transition-colors pb-1">Bags</button>
            <button className="hover:text-gray-900 transition-colors pb-1">Accessories</button>
          </div>
        </div>

        {/* Flat Minimalist Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 mb-20">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Image Container (Flat Gray Background) */}
              <div className="w-full aspect-square bg-[#F5F5F5] mb-4 flex items-center justify-center p-6 transition-colors duration-300 group-hover:bg-[#EBEBEB]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              
              {/* Product Details (Unboxed, direct text) */}
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                  {product.category}
                </span>
                <h3 className="text-[13px] text-gray-900 mb-1 leading-snug">
                  {product.name}
                </h3>
                <span className="text-[13px] text-gray-500 mb-1">
                  {product.price}
                </span>
                {product.rating > 0 && (
                  <div className="flex text-black text-[10px]">
                    {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bento Box Promo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Large Left Banner */}
          <div className="relative bg-[#EAECEE] h-[400px] md:h-full p-10 overflow-hidden flex flex-col items-start justify-start group cursor-pointer">
            <span className="text-[10px] tracking-widest text-gray-500 uppercase mb-2">Pro Performance</span>
            <h3 className="text-3xl font-medium text-gray-900 leading-tight mb-6 max-w-[250px]">
              Where Power Meets Design
            </h3>
            <button className="bg-white text-black px-6 py-2.5 text-xs font-semibold hover:bg-black hover:text-white transition-colors">
              Shop Now
            </button>
            <img 
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000" 
              className="absolute bottom-0 right-0 w-[80%] object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
              alt="MacBook"
            />
          </div>

          {/* Right Column Grid */}
          <div className="grid grid-rows-2 gap-4">
            
            {/* Top Right Banner */}
            <div className="relative bg-[#F3EBE6] h-[300px] md:h-auto p-10 overflow-hidden flex flex-col items-start justify-start group cursor-pointer">
              <span className="text-[10px] tracking-widest text-gray-500 uppercase mb-2">Workspace Setup</span>
              <h3 className="text-2xl font-medium text-gray-900 leading-tight mb-6 max-w-[200px]">
                Enchanting Styles for Every Creator
              </h3>
              <button className="bg-white text-black px-6 py-2.5 text-xs font-semibold hover:bg-black hover:text-white transition-colors z-10">
                Shop Now
              </button>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                className="absolute bottom-0 right-0 w-[60%] object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                alt="Setup"
              />
            </div>

            {/* Bottom Right Split */}
            <div className="grid grid-cols-2 gap-4 h-[300px] md:h-auto">
              {/* Bottom Right - Left Block */}
              <div className="relative bg-[#F0F2F5] p-6 overflow-hidden flex flex-col items-center text-center justify-start group cursor-pointer">
                <span className="text-[9px] tracking-widest text-gray-500 uppercase mb-1">Urban Strides</span>
                <h3 className="text-lg font-medium text-gray-900 leading-tight mb-4">
                  Chic Accessories for City Living
                </h3>
                <button className="bg-white text-black px-5 py-2 text-[10px] font-semibold hover:bg-black hover:text-white transition-colors z-10">
                  Shop Now
                </button>
                <img 
                  src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=400&bg=white" 
                  className="absolute bottom-[-10%] right-[-10%] w-[90%] mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                  alt="Mouse"
                />
              </div>

              {/* Bottom Right - Right Block (Sale) */}
              <div className="relative bg-[#5F7A8F] p-6 overflow-hidden flex flex-col items-center justify-center text-center group cursor-pointer text-white">
                <span className="text-[10px] tracking-widest uppercase mb-2 opacity-80">Trendsetting Gear</span>
                <div className="text-6xl font-light mb-4">50<span className="text-3xl">%</span></div>
                <button className="bg-white text-black px-5 py-2 text-[10px] font-semibold hover:bg-transparent hover:text-white hover:border-white border border-transparent transition-all z-10">
                  Shop Now
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}