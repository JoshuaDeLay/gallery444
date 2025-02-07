
import { Calendar, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

const groupMembers = [
  { id: 1, name: "Emma", hasSeen: true },
  { id: 2, name: "James", hasSeen: true },
  { id: 3, name: "Sofia", hasSeen: false },
  { id: 4, name: "Lucas", hasSeen: false },
];

export const WeeklyPrompt = () => {
  return (
    <Card className="relative w-full bg-murakami.cream/95 animate-fade-up 
      shadow-[0_4px_20px_rgb(94,75,86,0.1)] border-none overflow-hidden 
      transition-all duration-300 hover:shadow-[0_4px_25px_rgb(94,75,86,0.15)]">
      <CardHeader className="relative border-b border-murakami.shadow/5 pb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-murakami.shadow/5">
            <Calendar className="h-4 w-4 text-murakami.wood" />
          </div>
          <h3 className="font-serif text-xl text-murakami.wood font-medium italic">
            Today's Contemplation
          </h3>
        </div>
      </CardHeader>
      
      <CardContent className="relative prose prose-gray max-w-none p-6">
        <blockquote className="text-lg font-serif italic border-l-4 border-murakami.wood/20 
          pl-4 my-4 text-murakami.wood font-medium transform transition-all duration-500 
          hover:border-l-murakami.wood/30 [font-family:'Playfair_Display',_serif]">
          "What quiet wisdom lies hidden in the ordinary moments of your day?"
        </blockquote>
        <p className="mt-4 text-base leading-relaxed text-murakami.shadow/80 
          [font-family:'Playfair_Display',_serif]">
          Take a moment to pause and observe the subtle poetry in your daily
          rituals. Perhaps it's the way sunlight filters through your window,
          or the familiar rhythm of your morning routine.
        </p>
        <div className="mt-4 text-xs text-murakami.shadow/60 font-serif italic">
          New prompt in: 5 days, 3 hours
        </div>
      </CardContent>
      
      <CardFooter className="relative border-t border-murakami.shadow/5 pt-4 pb-3">
        <div className="w-full">
          <p className="text-xs mb-2 flex items-center gap-1.5 text-murakami.shadow/70">
            <Eye className="h-3 w-3" />
            Contemplated by
          </p>
          <div className="flex flex-wrap gap-2">
            {groupMembers.map((member) => (
              <div
                key={member.id}
                className={`px-2.5 py-1 rounded-full text-xs transition-all duration-300 
                  font-serif ${member.hasSeen
                    ? 'bg-murakami.wood/5 text-murakami.wood hover:bg-murakami.wood/10'
                    : 'bg-murakami.shadow/5 text-murakami.shadow/50 hover:bg-murakami.shadow/10'
                  }`}
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
