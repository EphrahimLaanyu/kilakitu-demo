import { ChevronLeft, ChevronRight } from "lucide-react";
import ARViewer from "./ARViewer";

export default function Page1() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative bg-white border-b border-gray-200">
      {/* Navigation Arrows */}
      <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 hidden md:block">
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 hidden md:block">
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="flex flex-col md:flex-row items-center justify-between pl-0 md:pl-24 pr-0 md:pr-8 gap-8">
        {/* Text Content */}
        <div className="w-full md:w-1/2 relative">
          <div className="hidden md:block absolute -left-8 top-4 bottom-0 w-px bg-gray-300"></div>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6">
        Dell XPS 15yours
          </h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            <strong className="text-gray-800">Dell Optimizer for Precision</strong> is a built-in AI platform that learns how you work and continuously adapts to your style to create a smarter, more personalized, and more productive experience.
          </p>
          <div className="inline-block border border-gray-300 rounded px-6 py-2 shadow-sm mb-6 md:mb-0">
            <span className="text-2xl font-bold text-black">Ksh 85,000</span>
          </div>
        </div>

        {/* 3D AR Viewer Area */}
        <div className="w-full md:w-1/2 max-w-lg relative group">
          <ARViewer />
        </div>
      </div>
    </section>
  );
}