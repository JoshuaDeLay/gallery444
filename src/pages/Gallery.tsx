
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { DoorClosed } from "lucide-react";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] pb-20">
      <Navigation />
      <div className="container mx-auto px-4 min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="relative w-32 h-32 mx-auto filter blur-[2px] animate-pulse">
            <DoorClosed className="w-full h-full text-white/50" />
          </div>
          <h1 className="font-serif text-3xl text-white/90">
            Winter's Gallery
          </h1>
          <p className="text-white/70">
            The gallery door remains closed until all weekly submissions are gathered.
            Return in 5 days and 3 hours to explore this week's collective creations.
          </p>
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 backdrop-blur-sm">
            Opening in: 5d 3h
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Gallery;

