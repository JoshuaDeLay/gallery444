
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { GalleryTemplates } from "@/components/GalleryTemplates";
import { useState } from "react";

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("minimal-white");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#243949] to-[#517fa4] pb-20 relative overflow-hidden">
      {/* Magical snow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-white/20 rounded-full blur-[1px] animate-float" style={{ left: '10%', top: '20%' }} />
        <div className="absolute w-1.5 h-1.5 bg-white/30 rounded-full blur-[1px] animate-float" style={{ left: '70%', top: '30%', animationDelay: '1s' }} />
        <div className="absolute w-1 h-1 bg-white/20 rounded-full blur-[1px] animate-float" style={{ left: '40%', top: '50%', animationDelay: '2s' }} />
      </div>
      
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="font-serif text-4xl text-white mb-4 drop-shadow-lg">
              Winter Gallery Templates
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Choose from our curated collection of winter-inspired templates. 
              Each design tells a unique story, waiting for your creative touch.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl shadow-2xl border border-white/10 animate-fade-up">
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
