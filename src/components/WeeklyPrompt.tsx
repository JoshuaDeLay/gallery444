
import { Calendar, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";

const groupMembers = [
  { id: 1, name: "Emma", hasSeen: true },
  { id: 2, name: "James", hasSeen: true },
  { id: 3, name: "Sofia", hasSeen: false },
  { id: 4, name: "Lucas", hasSeen: false },
];

export const WeeklyPrompt = () => {
  return (
    <Card className={`
      relative w-full max-w-3xl mx-auto
      bg-murakami.cream/90 animate-fade-up
      shadow-[0_8px_30px_rgb(94,75,86,0.2)]
      border-none overflow-hidden
      before:absolute before:inset-0
      before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM1RTRCNTYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')]
      before:opacity-20 before:pointer-events-none
    `}>
      <CardHeader className="relative border-b border-murakami.shadow/10 pb-6">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-murakami.shadow/5 backdrop-blur-md">
            <Calendar className="h-6 w-6 text-murakami.wood" />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-murakami.wood font-medium italic
            [text-shadow:_1px_1px_2px_rgb(94_75_86_/_10%)]">
            Today's Contemplation
          </h3>
        </div>
      </CardHeader>
      
      <CardContent className="relative prose prose-gray max-w-none p-8">
        <blockquote className={`
          text-xl md:text-2xl font-serif italic
          border-l-4 border-murakami.wood/20 pl-6 my-6
          text-murakami.wood font-medium
          transform transition-all duration-500
          motion-safe:hover:scale-105
          [text-shadow:_1px_1px_2px_rgb(94_75_86_/_10%)]
          [font-family:'Playfair_Display',_serif]
        `}>
          "What quiet wisdom lies hidden in the ordinary moments of your day?"
        </blockquote>
        <p className="mt-6 text-lg leading-relaxed text-murakami.shadow/80
          [font-family:'Playfair_Display',_serif]">
          Take a moment to pause and observe the subtle poetry in your daily
          rituals. Perhaps it's the way sunlight filters through your window,
          or the familiar rhythm of your morning routine. Share your reflection
          through words, sketches, or photographs.
        </p>
        <div className="mt-6 text-sm text-murakami.shadow/60 font-serif italic">
          New prompt in: 5 days, 3 hours
        </div>
      </CardContent>
      
      <CardFooter className="relative border-t border-murakami.shadow/10 pt-4">
        <div className="w-full">
          <p className="text-sm mb-2 flex items-center gap-2 text-murakami.shadow/70">
            <Eye className="h-4 w-4" />
            Contemplated by
          </p>
          <div className="flex flex-wrap gap-2">
            {groupMembers.map((member) => (
              <div
                key={member.id}
                className={`
                  px-3 py-1 rounded-full text-sm
                  transition-all duration-300
                  backdrop-blur-md font-serif
                  ${member.hasSeen
                    ? 'bg-murakami.wood/10 text-murakami.wood shadow-lg'
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
