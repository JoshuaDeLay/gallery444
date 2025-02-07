
import { Calendar, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";

const groupMembers = [
  { id: 1, name: "Emma", hasSeen: true },
  { id: 2, name: "James", hasSeen: true },
  { id: 3, name: "Sofia", hasSeen: false },
  { id: 4, name: "Lucas", hasSeen: false },
];

const getWinterTimeGradient = () => {
  const hour = new Date().getHours();
  
  // Winter Dawn (7-9)
  if (hour >= 7 && hour < 9) {
    return "from-[#e6e9f0] to-[#eef1f5]";
  }
  // Winter Morning (9-12)
  if (hour >= 9 && hour < 12) {
    return "from-[#accbee] to-[#e7f0fd]";
  }
  // Winter Afternoon (12-16)
  if (hour >= 12 && hour < 16) {
    return "from-[#d7d2cc] to-[#304352]";
  }
  // Winter Evening (16-19)
  if (hour >= 16 && hour < 19) {
    return "from-[#243949] to-[#517fa4]";
  }
  // Winter Night (19-7)
  return "from-[#0f2027] to-[#203a43]";
};

export const WeeklyPrompt = () => {
  const [gradient, setGradient] = useState(getWinterTimeGradient());
  const [snowflakePosition, setSnowflakePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGradient(getWinterTimeGradient());
    }, 60000);
    
    // Magical realism: subtle snowflake movement
    const snowflakeInterval = setInterval(() => {
      setSnowflakePosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }, 3000);
    
    return () => {
      clearInterval(interval);
      clearInterval(snowflakeInterval);
    };
  }, []);

  const isNightTime = new Date().getHours() >= 19 || new Date().getHours() < 7;

  return (
    <Card 
      className={`
        relative w-full max-w-3xl mx-auto 
        animate-fade-up transform hover:scale-[1.02] 
        transition-all duration-700 
        bg-gradient-to-b ${gradient}
        shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        before:absolute before:inset-0 
        before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] 
        before:opacity-20 before:pointer-events-none
        motion-safe:hover:shadow-2xl
        motion-safe:animate-float
        overflow-hidden
      `}
    >
      {/* Magical snowflake */}
      <div 
        className="absolute w-2 h-2 bg-white/20 rounded-full blur-[1px] transition-all duration-3000"
        style={{ 
          left: `${snowflakePosition.x}%`, 
          top: `${snowflakePosition.y}%`,
          transform: 'scale(0.8)',
          opacity: '0.6'
        }}
      />
      
      <CardHeader className={`
        relative flex flex-row items-center gap-4 
        border-b border-white/10 pb-6
        transition-all duration-500
        backdrop-blur-sm
      `}>
        <div className={`
          p-2 rounded-full
          ${isNightTime ? 'bg-white/10' : 'bg-white/20'}
          transform motion-safe:hover:rotate-12 transition-transform
          backdrop-blur-md
        `}>
          <Calendar className="h-6 w-6 text-white" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-white font-medium">
          Winter's Reflection
        </h3>
      </CardHeader>
      
      <CardContent className="relative prose prose-gray max-w-none p-8 backdrop-blur-sm">
        <blockquote className={`
          text-xl md:text-2xl font-serif italic 
          border-l-4 border-white/20 pl-6 my-6
          text-white font-medium
          transform transition-all duration-500
          motion-safe:hover:scale-105
          drop-shadow-lg
        `}>
          "What moments of unexpected beauty have you encountered in your daily routine?"
        </blockquote>
        <p className="mt-6 text-lg leading-relaxed text-white/90">
          Share a photograph, sketch, or written reflection that captures a moment of
          crystalline beauty in your winter journey. Consider the interplay of
          frost, shadow, and the quiet magic of snow-laden moments.
        </p>
        <div className="mt-6 text-sm text-white/70">
          New prompt in: 5 days, 3 hours
        </div>
      </CardContent>
      
      <CardFooter className="relative border-t border-white/10 pt-4 backdrop-blur-sm">
        <div className="w-full">
          <p className="text-sm mb-2 flex items-center gap-2 text-white/70">
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
                  backdrop-blur-md
                  ${member.hasSeen
                    ? 'bg-white/10 text-white shadow-lg'
                    : 'bg-white/5 text-white/50'
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
