
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { GalleryTemplates } from "@/components/GalleryTemplates";
import { useState } from "react";

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("cyber-dreams");

  return (
    <div className="min-h-screen bg-[#1A1F2C] relative overflow-hidden">
      {/* Abstract geometric patterns with meditative colors */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute w-px h-20 bg-gradient-to-b from-transparent via-[#8B5CF6] to-transparent animate-fall" style={{ left: '10%', animationDelay: '0.5s' }} />
        <div className="absolute w-px h-32 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent animate-fall" style={{ left: '25%', animationDelay: '1.2s' }} />
        <div className="absolute w-px h-16 bg-gradient-to-b from-transparent via-[#2F4F4F] to-transparent animate-fall" style={{ left: '45%', animationDelay: '0.8s' }} />
        <div className="absolute w-px h-24 bg-gradient-to-b from-transparent via-[#8B4513] to-transparent animate-fall" style={{ left: '65%', animationDelay: '1.5s' }} />
        <div className="absolute w-px h-28 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent animate-fall" style={{ left: '85%', animationDelay: '0.3s' }} />
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

