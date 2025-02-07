
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
    <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-xl mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div 
          key={unit} 
          className="flex flex-col items-center group transition-all duration-300"
        >
          <div className="w-16 md:w-20 h-16 md:h-20 rounded-xl bg-murakami.cream border border-murakami.wood/10 shadow-sm 
            flex items-center justify-center mb-2 transition-all duration-300 
            hover:shadow-md hover:border-murakami.wood/20">
            <span className="text-2xl md:text-3xl font-light text-murakami.wood font-serif 
              tracking-widest transition-all duration-300 group-hover:scale-105">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-murakami.wood/70 capitalize font-serif italic text-sm tracking-wide">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};
