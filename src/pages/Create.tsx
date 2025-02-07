import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImagePlus } from "lucide-react";
import { GalleryTemplates } from "@/components/GalleryTemplates";
import { cn } from "@/lib/utils";
import { BottomNav } from "@/components/BottomNav";

const Create = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("minimal-white");

  return (
    <div className="min-h-screen bg-gradient-to-br from-murakami.cream to-white pb-20">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="font-serif text-3xl md:text-4xl text-center mb-4">
          Create Your Gallery
        </h1>
        <p className="text-center text-gallery-warm mb-12 max-w-2xl mx-auto">
          Choose a template that resonates with your story. Each design is inspired by literary works,
          creating a unique space for your visual narrative.
        </p>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl mb-6">Select Your Canvas</h2>
          <GalleryTemplates
            selectedTemplate={selectedTemplate}
            onSelectTemplate={setSelectedTemplate}
          />
          
          <Card className={cn(
            "p-8 transition-all duration-500",
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
      <BottomNav />
    </div>
  );
};

export default Create;
