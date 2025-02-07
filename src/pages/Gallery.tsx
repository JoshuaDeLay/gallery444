
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { DoorClosed } from "lucide-react";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#243949] to-[#517fa4] pb-20 relative overflow-hidden">
      {/* Magical snow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-white/20 rounded-full blur-[1px] animate-float" style={{ left: '20%', top: '30%' }} />
        <div className="absolute w-1.5 h-1.5 bg-white/30 rounded-full blur-[1px] animate-float" style={{ left: '60%', top: '40%', animationDelay: '1s' }} />
        <div className="absolute w-1 h-1 bg-white/20 rounded-full blur-[1px] animate-float" style={{ left: '80%', top: '20%', animationDelay: '2s' }} />
      </div>
      
      <Navigation />
      <div className="container mx-auto px-4 min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center relative">
        <div className="max-w-md w-full text-center space-y-8 backdrop-blur-sm bg-white/5 p-8 rounded-2xl shadow-2xl border border-white/10 animate-fade-up">
          <div className="relative w-32 h-32 mx-auto filter blur-[2px] transition-all duration-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-pulse rounded-full" />
            <DoorClosed className="w-full h-full text-white/50 animate-float" />
          </div>
          <h1 className="font-serif text-4xl text-white/90 drop-shadow-lg">
            Winter's Gallery
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            The gallery door remains closed until all weekly submissions are gathered.
            Return in 5 days and 3 hours to explore this week's collective creations.
          </p>
          <div className="inline-block px-6 py-3 rounded-full bg-white/10 text-white/90 backdrop-blur-sm border border-white/20 shadow-lg animate-float">
            Opening in: 5d 3h
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Gallery;
