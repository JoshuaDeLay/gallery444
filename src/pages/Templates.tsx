
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { GalleryTemplates } from "@/components/GalleryTemplates";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Create from "./Create";

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("minimal-essence");
  const location = useLocation();
  const isDesignRoute = location.pathname.includes("/templates/design");

  return (
    <div className="min-h-screen bg-[#E6D5A7] relative overflow-hidden">
      <Navigation />
      
      <Routes>
        <Route path="/design" element={<Create />} />
        <Route 
          path="/" 
          element={
            <div className="container mx-auto px-4 pt-16 pb-20 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 animate-fade-up">
                  <h1 className="font-serif text-3xl text-murakami-wood mb-3 drop-shadow-sm">
                    Choose Your Path
                  </h1>
                  <p className="text-murakami-shadow text-sm max-w-2xl mx-auto leading-relaxed">
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
          } 
        />
      </Routes>
      
      {!isDesignRoute && <BottomNav />}
    </div>
  );
};

export default Templates;
