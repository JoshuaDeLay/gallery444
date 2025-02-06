import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const WeeklyPrompt = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto animate-fade-up">
      <CardHeader className="flex flex-row items-center gap-4">
        <Calendar className="h-6 w-6 text-gallery-accent" />
        <h3 className="font-serif text-xl">This Week's Prompt</h3>
      </CardHeader>
      <CardContent className="prose prose-gray">
        <blockquote className="text-lg font-serif italic border-l-gallery-accent">
          "What moments of unexpected beauty have you encountered in your daily routine?"
        </blockquote>
        <p className="text-gray-600 mt-4">
          Share a photograph, sketch, or written reflection that captures a moment of
          serendipitous beauty in your everyday life. Consider the interplay of
          light, shadow, texture, or human connection.
        </p>
      </CardContent>
    </Card>
  );
};