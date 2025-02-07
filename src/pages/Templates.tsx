
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { GalleryTemplates } from "@/components/GalleryTemplates";
import { useState } from "react";

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("minimal-essence");

  return (
    <div className="min-h-screen bg-gradient-to-br from-murakami-cream to-white relative overflow-hidden">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-16 pb-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="font-serif text-3xl text-murakami-wood mb-3 drop-shadow-sm">
              Choose Your Path
            </h1>
            <p className="text-murakami-shadow text-sm max-w-2xl mx-auto leading-relaxed">
              Two paths diverge before you - one of serene minimalism, another of enchanting magic.
              Which story will you tell?
            </p>
          </div>

          <div className="animate-fade-up">
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
