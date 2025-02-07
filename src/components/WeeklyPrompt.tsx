
import { Calendar, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

// Mock data for group members
const groupMembers = [
  { id: 1, name: "Emma", hasSeen: true },
  { id: 2, name: "James", hasSeen: true },
  { id: 3, name: "Sofia", hasSeen: false },
  { id: 4, name: "Lucas", hasSeen: false },
];

export const WeeklyPrompt = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto animate-fade-up transform hover:scale-[1.02] transition-all duration-300 bg-gradient-to-b from-[#fdfcfb] to-[#e2d1c3] shadow-xl">
      <CardHeader className="flex flex-row items-center gap-4 border-b border-gallery-accent/20 pb-6">
        <div className="p-2 bg-gallery-accent rounded-full">
          <Calendar className="h-6 w-6 text-white" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-gallery-accent">This Week's Prompt</h3>
      </CardHeader>
      <CardContent className="prose prose-gray max-w-none p-8">
        <blockquote className="text-xl md:text-2xl font-serif italic border-l-4 border-gallery-accent pl-6 my-6 text-gallery-accent">
          "What moments of unexpected beauty have you encountered in your daily routine?"
        </blockquote>
        <p className="text-gray-600 mt-6 text-lg leading-relaxed">
          Share a photograph, sketch, or written reflection that captures a moment of
          serendipitous beauty in your everyday life. Consider the interplay of
          light, shadow, texture, or human connection.
        </p>
        <div className="mt-6 text-sm text-gallery-warm">
          New prompt in: 5 days, 3 hours
        </div>
      </CardContent>
      <CardFooter className="border-t border-gallery-accent/20 pt-4">
        <div className="w-full">
          <p className="text-sm text-gallery-warm mb-2 flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Seen by
          </p>
          <div className="flex flex-wrap gap-2">
            {groupMembers.map((member) => (
              <div
                key={member.id}
                className={`px-3 py-1 rounded-full text-sm ${
                  member.hasSeen
                    ? "bg-gallery-accent/10 text-gallery-accent"
                    : "bg-gray-100 text-gray-400"
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
