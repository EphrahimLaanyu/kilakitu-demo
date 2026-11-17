"use client";

import { useEffect } from "react";
import { Box } from "lucide-react";

// This declaration teaches TypeScript about the custom web component properties
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        "ios-src"?: string;
        alt?: string;
        ar?: boolean;
        "ar-modes"?: string;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "shadow-intensity"?: string;
      };
    }
  }
}

export default function ARViewer() {
  useEffect(() => {
    // Dynamically import the web component only on the client
    import("@google/model-viewer");
  }, []);

  return (
    <div className="w-full aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden relative shadow-lg border border-gray-200">
      <model-viewer
        src="/laptop.glb"
        alt="3D product model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        shadow-intensity="1"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Attribution for Creative Commons */}
        <div className="absolute top-2 left-2 text-[10px] text-gray-500 bg-white/70 px-2 py-1 rounded backdrop-blur-sm">
          3D Model via Polycam (CC-BY 4.0)
        </div>

        {/* Custom AR Button overlaying the viewer */}
        <button
          slot="ar-button"
          className="absolute bottom-6 right-6 bg-white text-gray-900 px-5 py-3 rounded-full shadow-lg border border-gray-100 font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <Box className="w-5 h-5 text-[#7A1F2D]" />
          View in your space.
        </button>
      </model-viewer>
    </div>
  );
}