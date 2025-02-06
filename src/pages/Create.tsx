import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImagePlus } from "lucide-react";

const Create = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="font-serif text-3xl md:text-4xl text-center mb-12">
          Create Your Gallery
        </h1>
        <Card className="max-w-2xl mx-auto p-8">
          <div className="flex flex-col items-center justify-center min-h-[300px] border-2 border-dashed border-gray-200 rounded-lg">
            <ImagePlus className="h-12 w-12 text-gray-400 mb-4" />
            <Button>Upload Media</Button>
            <p className="text-sm text-gray-500 mt-2">
              Drag and drop or click to upload
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Create;