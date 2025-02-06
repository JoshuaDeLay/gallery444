import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const WeeklyPrompt = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto animate-fade-up transform hover:scale-[1.02] transition-all duration-300 bg-gradient-to-r from-gallery-soft to-white border-2">
      <CardHeader className="flex flex-row items-center gap-4 border-b border-gallery-accent/20 pb-6">
        <div className="p-2 bg-gallery-accent rounded-full">
          <Calendar className="h-6 w-6 text-white" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-gallery-accent">This Week's Prompt</h3>
      </CardHeader>
      <CardContent className="prose prose-gray max-w-none p-8">
        <blockquote className="text-xl md:text-2xl font-serif italic border-l-4 border-gallery-accent pl-6 my-6">
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
    </Card>
  );
};