
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { DoorClosed } from "lucide-react";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 3,
    minutes: 0,
    seconds: 0
  });

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9b87f5] via-[#7E69AB] to-[#6E59A5] pb-20 relative overflow-hidden">
      {/* Ethereal light beams effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDg1ODQ5Mg&ixlib=rb-4.0.3&q=80&w=1080')] opacity-5 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/20 via-transparent to-[#6E59A5]/20" />
        <div className="absolute w-96 h-96 bg-[#D946EF]/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" />
      </div>
      
      <Navigation />
      <div className="container mx-auto px-4 min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center relative">
        <div className="max-w-2xl w-full text-center space-y-8 backdrop-blur-sm bg-white/5 p-12 rounded-2xl shadow-2xl border border-white/10 animate-fade-up">
          <div className="relative w-40 h-40 mx-auto transition-all duration-1000 group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D946EF]/20 to-[#F97316]/20 rounded-full group-hover:scale-110 transition-transform duration-700" />
            <DoorClosed className="w-full h-full text-white/90 group-hover:scale-105 transition-all duration-700" />
          </div>
          <h1 className="font-serif text-5xl text-white/90 drop-shadow-lg tracking-wide">
            The Grand Gallery
          </h1>
          <p className="text-white/80 text-xl leading-relaxed max-w-xl mx-auto">
            Behind these doors lie extraordinary creations waiting to be unveiled.
          </p>
          <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg flex items-center justify-center mb-2">
                  <span className="text-3xl font-bold text-white/90 font-mono">{value.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-white/70 capitalize">{unit}</span>
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
