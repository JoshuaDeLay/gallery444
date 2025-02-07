
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { GalleryTemplates } from "@/components/GalleryTemplates";
import { useState } from "react";

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("warm-embrace");

  return (
    <div className="min-h-screen bg-[#FAF3E0] relative overflow-hidden">
      {/* Magical realism background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating cats silhouettes */}
        <div className="absolute inset-0">
          <div className="absolute w-6 h-6 border-2 border-[#FFB5C5] rotate-[15deg] animate-float opacity-10" 
               style={{ left: '10%', top: '20%', animationDelay: '0.5s' }} />
          <div className="absolute w-4 h-4 border-2 border-[#98D8D8] rotate-[45deg] animate-float opacity-10" 
               style={{ left: '85%', top: '40%', animationDelay: '1.2s' }} />
          <div className="absolute w-5 h-5 border-2 border-[#FFB5C5] rotate-[30deg] animate-float opacity-10" 
               style={{ left: '25%', top: '60%', animationDelay: '0.8s' }} />
        </div>

        {/* Soft light rays */}
        <div className="absolute inset-0 bg-gradient-radial from-[#FFE4E1]/20 via-transparent to-transparent"
             style={{ transform: 'scale(2)', top: '-50%', left: '-50%', width: '200%', height: '200%' }} />
        
        {/* Warm wood texture overlay */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/ca402feb-bcce-4d90-84d4-0e49c3566fce.png')] opacity-5 mix-blend-overlay"
             style={{ backgroundSize: 'cover', filter: 'sepia(50%)' }} />
      </div>
      
      <Navigation />
      
      <div className="container mx-auto px-4 pt-16 pb-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-up">
            <h1 className="font-serif text-3xl text-[#8B4513] mb-3 drop-shadow-sm">
              Your Creative Sanctuary
            </h1>
            <p className="text-[#5E4B56] text-sm max-w-2xl mx-auto leading-relaxed">
              Like turning the pages of a cherished book, each template opens a door 
              to a new world of possibilities. Choose your perfect space for dreaming.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-[#FFF5EE]/40 p-6 rounded-2xl shadow-lg border border-[#FFE4E1]/30 animate-fade-up">
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
