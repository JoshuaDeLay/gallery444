
import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
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
    <div className="grid grid-cols-4 gap-6 max-w-xl mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center group">
          <div className="w-20 h-20 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/40 shadow-sm flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-white/50">
            <span className="text-3xl font-light text-gallery.accent font-serif tracking-widest transition-all duration-300 group-hover:scale-110">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-gallery.accent/70 capitalize font-serif italic text-sm tracking-wide">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};
