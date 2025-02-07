
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
    <Card className={`
      relative w-full
      bg-murakami.cream/90 animate-fade-up
      shadow-[0_8px_30px_rgb(94,75,86,0.2)]
      border-none overflow-hidden
      before:absolute before:inset-0
      before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM1RTRCNTYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')]
      before:opacity-20 before:pointer-events-none
    `}>
      <CardHeader className="relative border-b border-murakami.shadow/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-murakami.shadow/5 backdrop-blur-md">
            <Calendar className="h-4 w-4 text-murakami.wood" />
          </div>
          <h3 className="font-serif text-xl text-murakami.wood font-medium italic
            [text-shadow:_1px_1px_2px_rgb(94_75_86_/_10%)]">
            Today's Contemplation
          </h3>
        </div>
      </CardHeader>
      
      <CardContent className="relative prose prose-gray max-w-none p-4">
        <blockquote className={`
          text-lg font-serif italic
          border-l-4 border-murakami.wood/20 pl-4 my-4
          text-murakami.wood font-medium
          transform transition-all duration-500
          motion-safe:hover:scale-105
          [text-shadow:_1px_1px_2px_rgb(94_75_86_/_10%)]
          [font-family:'Playfair_Display',_serif]
        `}>
          "What quiet wisdom lies hidden in the ordinary moments of your day?"
        </blockquote>
        <p className="mt-2 text-base leading-relaxed text-murakami.shadow/80
          [font-family:'Playfair_Display',_serif]">
          Take a moment to pause and observe the subtle poetry in your daily
          rituals. Perhaps it's the way sunlight filters through your window,
          or the familiar rhythm of your morning routine.
        </p>
        <div className="mt-2 text-xs text-murakami.shadow/60 font-serif italic">
          New prompt in: 5 days, 3 hours
        </div>
      </CardContent>
      
      <CardFooter className="relative border-t border-murakami.shadow/10 pt-3 pb-2">
        <div className="w-full">
          <p className="text-xs mb-1.5 flex items-center gap-1.5 text-murakami.shadow/70">
            <Eye className="h-3 w-3" />
            Contemplated by
          </p>
          <div className="flex flex-wrap gap-1.5">
            {groupMembers.map((member) => (
              <div
                key={member.id}
                className={`
                  px-2 py-0.5 rounded-full text-xs
                  transition-all duration-300
                  backdrop-blur-md font-serif
                  ${member.hasSeen
                    ? 'bg-murakami.wood/10 text-murakami.wood shadow-sm'
                    : 'bg-murakami.shadow/5 text-murakami.shadow/50'
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

