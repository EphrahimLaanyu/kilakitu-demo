import { Star, ShoppingCart } from "lucide-react";

export default function Page2() {
  const products = [
    {
      id: 1,
      brand: "Dell",
      name: "Dell Latitude 5420",
      oldPrice: "44,000",
      newPrice: "42,700",
      discount: "2.95% Discount",
      rating: 4,
    },
    {
      id: 2,
      brand: "HP",
      name: "HP ELITEBOOK 840 G6 INTEL CORE I5",
      oldPrice: "40,000",
      newPrice: "37,000",
      discount: "7.5% Discount",
      rating: 5,
    },
    {
      id: 3,
      brand: "Lenovo",
      name: "LENOVO THINKPAD X1 CARBON",
      oldPrice: "45,000",
      newPrice: "43,000",
      discount: "4.44% Discount",
      rating: 4,
    },
    {
      id: 4,
      brand: "Lenovo",
      name: "LENOVO THINKPAD T460S",
      oldPrice: "33,000",
      newPrice: "33,000",
      discount: "0% Discount",
      rating: 4,
    }
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Laptops</h2>
          <button className="border border-yellow-500 text-yellow-600 px-6 py-2 rounded font-medium hover:bg-yellow-50 transition-colors">
            View More
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
              {/* Top labels */}
              <div className="flex justify-between text-xs text-gray-500 font-medium mb-4">
                <span>Laptops</span>
                <span className="text-red-600">New</span>
              </div>

              {/* Product Image Area */}
              <div className="aspect-[4/3] bg-gray-50 mb-6 flex items-center justify-center rounded overflow-hidden">
                <div className="w-3/4 h-3/4 bg-gray-200 rounded shadow-inner group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-xs text-gray-400">
                  Product Image
                </div>
              </div>

              {/* Product Details */}
              <div className="mt-auto">
                <span className="inline-block bg-[#6B242C] text-white text-[10px] font-bold px-2 py-1 rounded mb-3">
                  {product.discount}
                </span>
                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight h-10">
                  {product.name}
                </h3>
                <div className="flex flex-col mb-3">
                  <span className="text-sm text-gray-500 line-through font-medium">Ksh {product.oldPrice}</span>
                  <span className="text-lg font-black text-gray-900">Ksh {product.newPrice}</span>
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} 
                    />
                  ))}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-[#6B242C] hover:bg-[#8B2E38] text-white py-2 rounded flex items-center justify-center gap-2 transition-colors font-medium text-sm">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}