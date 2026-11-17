import { ArrowRight } from "lucide-react";
import ARViewer from "./ARViewer";

export default function Page1() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Editorial Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <span className="text-[10px] tracking-widest text-gray-400 uppercase mb-4">
              Featured Release
            </span>
            
            <h1 className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight mb-6">
              Dell XPS 15
            </h1>
            
            <p className="text-[14px] text-gray-500 mb-10 leading-relaxed max-w-md">
              <strong className="text-gray-900 font-medium">Dell Optimizer for Precision</strong> is a built-in AI platform that learns how you work and continuously adapts to your style to create a smarter, more personalized, and more productive experience.
            </p>

            <div className="flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Price</span>
                <span className="text-2xl font-medium text-gray-900">Ksh 85,000</span>
              </div>
              
              <button className="bg-black text-white px-8 py-3.5 text-xs font-semibold hover:bg-gray-800 transition-colors flex items-center gap-3">
                Shop Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* AR Viewer Container - Styled to match the flat gray bento aesthetic */}
          <div className="w-full md:w-1/2 bg-[#F5F5F5] p-2 sm:p-6 flex items-center justify-center group">
            <div className="w-full w-full relative">
              {/* Note: Ensure ARViewer component itself doesn't have conflicting rounded corners or heavy borders to match this flat design */}
              <ARViewer />
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}