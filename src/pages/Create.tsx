import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImagePlus } from "lucide-react";
import { GalleryTemplates } from "@/components/GalleryTemplates";

const Create = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("minimal-white");

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="font-serif text-3xl md:text-4xl text-center mb-12">
          Create Your Gallery
        </h1>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl mb-6">Choose a Template</h2>
          <GalleryTemplates
            selectedTemplate={selectedTemplate}
            onSelectTemplate={setSelectedTemplate}
          />
          
          <Card className={cn(
            "p-8",
            selectedTemplate === "brutalist-concrete" && "bg-gallery-accent text-white",
            selectedTemplate === "classic-frame" && "bg-gallery-soft",
            selectedTemplate === "modern-gradient" && "bg-gradient-to-r from-gallery-soft to-white"
          )}>
            <div className="flex flex-col items-center justify-center min-h-[300px] border-2 border-dashed border-current rounded-lg">
              <ImagePlus className="h-12 w-12 text-current mb-4" />
              <Button variant={selectedTemplate === "brutalist-concrete" ? "outline" : "default"}>
                Upload Media
              </Button>
              <p className="text-sm text-current mt-2">
                Drag and drop or click to upload
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Create;