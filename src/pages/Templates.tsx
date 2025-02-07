
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { GalleryTemplates } from "@/components/GalleryTemplates";
import { useState } from "react";

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("warm-embrace");

  return (
    <div className="h-screen bg-gradient-to-r from-[#ffc3a0] to-[#ffafbd] relative overflow-hidden">
      {/* Floating elements effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-white/20 rounded-full blur-[1px] animate-float" style={{ left: '10%', top: '20%' }} />
        <div className="absolute w-1.5 h-1.5 bg-white/30 rounded-full blur-[1px] animate-float" style={{ left: '70%', top: '30%', animationDelay: '1s' }} />
        <div className="absolute w-1 h-1 bg-white/20 rounded-full blur-[1px] animate-float" style={{ left: '40%', top: '50%', animationDelay: '2s' }} />
      </div>
      
      <Navigation />
      
      <div className="container mx-auto px-4 pt-16 pb-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 animate-fade-up">
            <h1 className="font-serif text-2xl text-white mb-2 drop-shadow-lg">
              Express Yourself
            </h1>
            <p className="text-white/80 text-sm max-w-2xl mx-auto">
              Choose from our collection of thoughtfully designed templates.
              Each one creates a unique space for your creative expression.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-white/5 p-4 rounded-2xl shadow-2xl border border-white/10 animate-fade-up">
            <GalleryTemplates
              selectedTemplate={selectedTemplate}
              onSelectTemplate={setSelectedTemplate}
            />
          </div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Templates;

