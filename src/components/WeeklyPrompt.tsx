
import { Calendar, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";

// Mock data for group members
const groupMembers = [
  { id: 1, name: "Emma", hasSeen: true },
  { id: 2, name: "James", hasSeen: true },
  { id: 3, name: "Sofia", hasSeen: false },
  { id: 4, name: "Lucas", hasSeen: false },
];

const getTimeBasedGradient = () => {
  const hour = new Date().getHours();
  
  // Dawn (5-8)
  if (hour >= 5 && hour < 8) {
    return "from-[#fdfcfb] to-[#e6b980]";
  }
  // Morning (8-12)
  if (hour >= 8 && hour < 12) {
    return "from-[#accbee] to-[#e7f0fd]";
  }
  // Afternoon (12-16)
  if (hour >= 12 && hour < 16) {
    return "from-[#c1c161] to-[#d4d4b1]";
  }
  // Evening (16-20)
  if (hour >= 16 && hour < 20) {
    return "from-[#243949] to-[#517fa4]";
  }
  // Night (20-5)
  return "from-[#0f2027] to-[#203a43] text-white";
};

export const WeeklyPrompt = () => {
  const [gradient, setGradient] = useState(getTimeBasedGradient());
  
  useEffect(() => {
    // Update gradient every minute
    const interval = setInterval(() => {
      setGradient(getTimeBasedGradient());
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const isNightTime = new Date().getHours() >= 20 || new Date().getHours() < 5;

  return (
    <Card 
      className={`
        w-full max-w-3xl mx-auto 
        animate-fade-up transform hover:scale-[1.02] 
        transition-all duration-700 
        bg-gradient-to-b ${gradient}
        shadow-xl 
        motion-safe:hover:shadow-2xl
        motion-safe:animate-float
      `}
    >
      <CardHeader className={`
        flex flex-row items-center gap-4 
        border-b border-gallery-accent/20 pb-6
        transition-all duration-500
      `}>
        <div className={`
          p-2 rounded-full
          ${isNightTime ? 'bg-white/20' : 'bg-gallery-accent'}
          transform motion-safe:hover:rotate-12 transition-transform
        `}>
          <Calendar className={`h-6 w-6 ${isNightTime ? 'text-white' : 'text-white'}`} />
        </div>
        <h3 className={`
          font-serif text-2xl md:text-3xl 
          ${isNightTime ? 'text-white' : 'text-gallery-accent'}
        `}>
          This Week's Prompt
        </h3>
      </CardHeader>
      <CardContent className="prose prose-gray max-w-none p-8">
        <blockquote className={`
          text-xl md:text-2xl font-serif italic 
          border-l-4 border-gallery-accent pl-6 my-6
          ${isNightTime ? 'text-white/90' : 'text-gallery-accent'}
          transform transition-all duration-500
          motion-safe:hover:scale-105
        `}>
          "What moments of unexpected beauty have you encountered in your daily routine?"
        </blockquote>
        <p className={`
          mt-6 text-lg leading-relaxed
          ${isNightTime ? 'text-white/80' : 'text-gray-600'}
        `}>
          Share a photograph, sketch, or written reflection that captures a moment of
          serendipitous beauty in your everyday life. Consider the interplay of
          light, shadow, texture, or human connection.
        </p>
        <div className={`
          mt-6 text-sm
          ${isNightTime ? 'text-white/60' : 'text-gallery-warm'}
        `}>
          New prompt in: 5 days, 3 hours
        </div>
      </CardContent>
      <CardFooter className={`
        border-t border-gallery-accent/20 pt-4
        ${isNightTime ? 'text-white/80' : ''}
      `}>
        <div className="w-full">
          <p className={`
            text-sm mb-2 flex items-center gap-2
            ${isNightTime ? 'text-white/60' : 'text-gallery-warm'}
          `}>
            <Eye className="h-4 w-4" />
            Seen by
          </p>
          <div className="flex flex-wrap gap-2">
            {groupMembers.map((member) => (
              <div
                key={member.id}
                className={`
                  px-3 py-1 rounded-full text-sm
                  transition-all duration-300
                  ${member.hasSeen
                    ? isNightTime
                      ? 'bg-white/20 text-white'
                      : 'bg-gallery-accent/10 text-gallery-accent'
                    : isNightTime
                      ? 'bg-white/5 text-white/40'
                      : 'bg-gray-100 text-gray-400'
                  }
                `}
              >
                {member.name}
              </div>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
