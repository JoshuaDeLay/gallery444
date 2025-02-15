
import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

// Static data to replace Supabase data
const mockGroupMembers = [
  { user_id: '1', profiles: { full_name: 'Alex Chen' }, medium: 'painter' },
  { user_id: '2', profiles: { full_name: 'Maya Patel' }, medium: 'writer' },
  { user_id: '3', profiles: { full_name: 'Sam Kim' }, medium: 'photographer' }
];

export const WeeklyPrompt = () => {
  return (
    <Card className={`
      relative w-full
      bg-gradient-to-br from-[#F1F0FB] via-[#E5DEFF] to-[#FFDEE2]
      animate-fade-up
      shadow-[0_8px_30px_rgb(94,75,86,0.2)]
      border-none overflow-hidden
      before:absolute before:inset-0
      before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM1RTRCNTYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')]
      before:opacity-20 before:pointer-events-none
    `}>
      <CardHeader className="relative border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-white/10 backdrop-blur-md">
            <Calendar className="h-4 w-4 text-indigo-900" />
          </div>
          <h3 className="font-serif text-xl text-indigo-900 font-medium italic
            [text-shadow:_1px_1px_2px_rgb(94_75_86_/_10%)]">
            GALLERY PROMPT: NIGHT INTO DAY
          </h3>
        </div>
      </CardHeader>
      
      <CardContent className="relative prose prose-gray max-w-none p-4">
        <p className="mt-2 text-base leading-relaxed text-indigo-800/80
          [font-family:'Playfair_Display',_serif]">
          T.S. Eliot's Prelude No. 1 captures that fragile moment when night exhales into morning—restless thoughts flickering on the ceiling before light creeps through the shutters. Outside, the world stirs, indifferent. The street is awake, but it hardly understands.
        </p>
        <p className="mt-4 text-base leading-relaxed text-indigo-800/80
          [font-family:'Playfair_Display',_serif]">
          Every morning, we fold away dreams and step into the day—a quiet ritual of resilience and surrender. Where does your mind go in those liminal hours? What do you leave behind in the night, and what do you carry forward?
        </p>
        <p className="mt-4 text-sm text-indigo-800/60 italic">
          Express in any medium—words, paint, pixels, sound.
          There are no answers, only the act of seeing.
        </p>
      </CardContent>
      
      <CardFooter className="relative border-t border-white/10 pt-3 pb-2">
        <div className="w-full">
          <div className="flex flex-wrap gap-1.5">
            {mockGroupMembers.map((member) => (
              <div
                key={member.user_id}
                className="px-2 py-0.5 rounded-full text-xs
                  transition-all duration-300
                  backdrop-blur-md font-serif
                  bg-white/20 text-indigo-900 shadow-sm
                  hover:bg-white/30"
              >
                {member.profiles?.full_name || 'Anonymous'} • {member.medium}
              </div>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
