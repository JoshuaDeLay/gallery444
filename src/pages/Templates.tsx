
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { GalleryTemplates } from "@/components/GalleryTemplates";
import { useState } from "react";

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("cyber-dreams");

  return (
    <div className="min-h-screen bg-[#1A1F2C] relative overflow-hidden">
      {/* Animated nature background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated leaves */}
        <div className="absolute inset-0">
          <div className="absolute w-4 h-4 border-2 border-[#D4AF37] rotate-45 animate-fall opacity-20" style={{ left: '10%', animationDelay: '0.5s', animationDuration: '15s' }} />
          <div className="absolute w-3 h-3 border-2 border-[#8B4513] rotate-[30deg] animate-fall opacity-20" style={{ left: '25%', animationDelay: '1.2s', animationDuration: '12s' }} />
          <div className="absolute w-5 h-5 border-2 border-[#2F4F4F] rotate-[60deg] animate-fall opacity-20" style={{ left: '45%', animationDelay: '0.8s', animationDuration: '18s' }} />
          <div className="absolute w-4 h-4 border-2 border-[#D4AF37] rotate-[15deg] animate-fall opacity-20" style={{ left: '65%', animationDelay: '1.5s', animationDuration: '14s' }} />
          <div className="absolute w-3 h-3 border-2 border-[#8B4513] rotate-[75deg] animate-fall opacity-20" style={{ left: '85%', animationDelay: '0.3s', animationDuration: '16s' }} />
        </div>

        {/* Light rays */}
        <div className="absolute inset-0 bg-gradient-radial from-[#D4AF37]/5 via-transparent to-transparent opacity-30" 
             style={{ transform: 'scale(2)', top: '-50%', left: '-50%', width: '200%', height: '200%' }} />
        
        {/* Forest silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-[#0F1419] opacity-30"
             style={{ maskImage: 'linear-gradient(to top, black, transparent)', WebkitMaskImage: 'linear-gradient(to top, black, transparent)' }} />
      </div>
      
      <Navigation />
      
      <div className="container mx-auto px-4 pt-16 pb-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 animate-fade-up">
            <h1 className="font-serif text-2xl text-[#D4AF37] mb-2 drop-shadow-lg">
              Design Your Space
            </h1>
            <p className="text-[#A9A9A9] text-sm max-w-2xl mx-auto">
              Choose from our collection of immersive templates.
              Each one creates a unique digital sanctuary for your creative expression.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-[#0000001a] p-4 rounded-2xl shadow-2xl border border-[#ffffff1a] animate-fade-up">
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
