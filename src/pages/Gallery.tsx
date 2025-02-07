
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { Warehouse, Upload } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Gallery = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 3,
    minutes: 0,
    seconds: 0
  });

  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload only image files.",
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setUploadedImages(prev => [...prev, e.target!.result as string]);
          toast({
            title: "Image uploaded",
            description: "Your image has been added to the gallery.",
          });
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gallery.soft via-murakami.cream to-murakami.teal/20 pb-20 relative overflow-hidden">
      {/* Painted door background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[url('/lovable-uploads/6bcbf11e-1c34-4689-9758-8efda97e5be3.png')] opacity-30 bg-cover bg-center blur-[2px] transform transition-transform duration-1000 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-br from-murakami.teal/10 via-transparent to-murakami.pink/10" />
        <div className="absolute w-96 h-96 bg-murakami.pink/5 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-murakami.teal/5 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" />
      </div>
      
      <Navigation />
      <div className="container mx-auto px-4 min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center relative">
        <div className="max-w-4xl w-full text-center space-y-8 backdrop-blur-sm bg-white/10 p-12 rounded-2xl shadow-lg border border-white/20 animate-fade-up">
          <div className="relative w-40 h-40 mx-auto transition-all duration-1000 group">
            <div className="absolute inset-0 bg-gradient-to-r from-murakami.teal/20 to-murakami.pink/20 rounded-full group-hover:scale-110 transition-transform duration-700" />
            <Warehouse className="w-full h-full text-gallery.accent/80 group-hover:scale-105 transition-all duration-700" />
          </div>
          <h1 className="font-serif text-5xl text-gallery.accent/90 drop-shadow-sm tracking-wider italic">
            The Grand Gallery
          </h1>
          <p className="font-serif text-gallery.accent/70 text-xl leading-relaxed max-w-xl mx-auto italic">
            Behind these doors lie extraordinary creations waiting to be unveiled.
          </p>
          
          {/* Upload Section */}
          <div className="mt-8">
            <label htmlFor="image-upload" className="cursor-pointer">
              <div className="flex flex-col items-center gap-4">
                <Button variant="outline" className="relative overflow-hidden group">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Images
                  <input
                    type="file"
                    id="image-upload"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                  />
                </Button>
              </div>
            </label>
          </div>

          {/* Image Gallery */}
          {uploadedImages.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {uploadedImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-4 gap-6 max-w-xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/30 shadow-sm flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-white/40">
                  <span className="text-3xl font-light text-gallery.accent font-serif tracking-widest transition-all duration-300 group-hover:scale-110">
                    {value.toString().padStart(2, '0')}
                  </span>
                </div>
                <span className="text-gallery.accent/60 capitalize font-serif italic text-sm tracking-wide">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Gallery;
